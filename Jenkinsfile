pipeline {
    agent any
    
    environment {
        GIT_CREDENTIALS_ID = 'github-credentials' // Configure in Jenkins
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_REPO = 'lynakiddy/portfolio'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials' 
        ARGOCD_SERVER = 'argocd.lynasovann.site' // Replace with your ArgoCD server
        ARGOCD_CREDENTIALS_ID = 'argocd-credentials' // Configure in Jenkins
        APP_NAME = 'my-portfolio'
        ARGOCD_NAMESPACE = 'argocd'
        GIT_COMMIT_SHORT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
        BUILD_TAG = "${BUILD_NUMBER}-${GIT_COMMIT_SHORT}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    env.BUILD_TAG = "${BUILD_NUMBER}-${env.GIT_COMMIT_SHORT}"
                }
            }
        }
        
        stage('Test') {
            steps {
                echo "Running tests..."
                // Add your test commands here
                sh '''
                    # Example test commands for Node.js/Next.js
                    # npm ci
                    # npm run test
                    # npm run lint
                '''
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image with tag: ${BUILD_TAG}"
                    dockerImage = docker.build("${DOCKER_REPO}:${BUILD_TAG}")
                    
                    // Also tag as latest
                    sh "docker tag ${DOCKER_REPO}:${BUILD_TAG} ${DOCKER_REPO}:latest"
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', 
                                                    usernameVariable: 'DOCKER_USERNAME', 
                                                    passwordVariable: 'DOCKER_TOKEN')]) {
                        sh '''
                            # Login with explicit registry
                            echo "$DOCKER_TOKEN" | docker login docker.io -u "$DOCKER_USERNAME" --password-stdin
                            
                            # Verify login worked
                            docker info | grep -i username || echo "Login verification failed"
                            
                            # Tag images properly
                            docker tag lynakiddy/portfolio:${BUILD_TAG} docker.io/lynakiddy/portfolio:${BUILD_TAG}
                            docker tag lynakiddy/portfolio:latest docker.io/lynakiddy/portfolio:latest
                            
                            # Push with explicit registry
                            docker push docker.io/lynakiddy/portfolio:${BUILD_TAG}
                            docker push docker.io/lynakiddy/portfolio:latest
                            
                            # Logout
                            docker logout docker.io
                        '''
                    }
                }
            }
        }
        
        // stage('Update Application Manifest') {
        //     steps {
        //         script {
        //             withCredentials([usernamePassword(credentialsId: "${GIT_CREDENTIALS_ID}", 
        //                                             usernameVariable: 'GIT_USERNAME', 
        //                                             passwordVariable: 'GIT_TOKEN')]) {
        //                 sh '''
        //                     # Clean up any existing directory
        //                     rm -rf app-repo
                            
        //                     # Configure git
        //                     git config --global user.name "Jenkins CI"
        //                     git config --global user.email "jenkins@lynasovann.site"
                            
        //                     # Clone the application repository
        //                     git clone https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/LynaSovann/portfolio-app.git app-repo
        //                     cd app-repo
                            
        //                     # Check which files exist and update accordingly
        //                     if [ -f "values.yaml" ]; then
        //                         echo "Updating values.yaml..."
        //                         sed -i "s|tag: .*|tag: \\"${BUILD_TAG}\\"|g" values.yaml
        //                         git add values.yaml
        //                         FILE_UPDATED="values.yaml"
        //                     elif [ -f "application.yaml" ]; then
        //                         echo "Updating application.yaml..."
        //                         sed -i "s|tag: .*|tag: \\"${BUILD_TAG}\\"|g" application.yaml
        //                         git add application.yaml
        //                         FILE_UPDATED="application.yaml"
        //                     else
        //                         echo "❌ Neither values.yaml nor application.yaml found"
        //                         ls -la
        //                         exit 1
        //                     fi
                            
        //                     # Show the change
        //                     echo "=== Updated ${FILE_UPDATED} ==="
        //                     grep -A 2 -B 2 "tag:" ${FILE_UPDATED}
                            
        //                     # Commit and push
        //                     if ! git diff --quiet ${FILE_UPDATED}; then
        //                         git commit -m "Update image tag to ${BUILD_TAG} - Build #${BUILD_NUMBER}"
        //                         git push origin main
        //                         echo "✅ Successfully updated ${FILE_UPDATED} with tag: ${BUILD_TAG}"
        //                     else
        //                         echo "⚠️ No changes detected in ${FILE_UPDATED}"
        //                     fi
        //                 '''
        //             }
        //         }
        //     }
        // }

        stage('Update Application Manifest') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${GIT_CREDENTIALS_ID}", 
                                                    usernameVariable: 'GIT_USERNAME', 
                                                    passwordVariable: 'GIT_TOKEN')]) {
                        sh '''
                            # Clean up any existing directory
                            rm -rf app-repo
                            
                            # Configure git
                            git config --global user.name "Jenkins CI"
                            git config --global user.email "jenkins@lynasovann.site"
                            
                            # Clone the application repository
                            git clone https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/LynaSovann/portfolio-app.git app-repo
                            cd app-repo
                            
                            echo "📁 Repository contents:"
                            ls -la
                            
                            # Check if k8s directory and deployment.yaml exist
                            if [ ! -d "k8s" ]; then
                                echo "❌ Error: k8s directory not found"
                                echo "Available directories:"
                                ls -la
                                exit 1
                            fi
                            
                            if [ ! -f "k8s/deployment.yaml" ]; then
                                echo "❌ Error: k8s/deployment.yaml not found"
                                echo "Files in k8s directory:"
                                ls -la k8s/
                                exit 1
                            fi
                            
                            echo "🎯 Found k8s/deployment.yaml - updating Kubernetes deployment"
                            
                            # Show current image tag
                            echo "=== Current image in k8s/deployment.yaml ==="
                            grep -A 2 -B 2 "image: lynakiddy/portfolio" k8s/deployment.yaml
                            
                            # Update the image tag in deployment.yaml
                            echo "🔄 Updating image from lynakiddy/portfolio:latest to lynakiddy/portfolio:${BUILD_TAG}"
                            
                            # Update the specific image line
                            sed -i "s|image: lynakiddy/portfolio:.*|image: lynakiddy/portfolio:${BUILD_TAG}|g" k8s/deployment.yaml
                            
                            # Verify the change was made
                            echo "=== Updated image in k8s/deployment.yaml ==="
                            grep -A 2 -B 2 "image: lynakiddy/portfolio" k8s/deployment.yaml
                            
                            # Check if there are any changes to commit
                            if git diff --quiet k8s/deployment.yaml; then
                                echo "⚠️  No changes detected in k8s/deployment.yaml"
                                echo "Current tag might already be ${BUILD_TAG}"
                                echo "Current deployment.yaml content:"
                                cat k8s/deployment.yaml
                                exit 0
                            fi
                            
                            # Show the git diff
                            echo "=== Git diff ==="
                            git diff k8s/deployment.yaml
                            
                            # Commit and push changes
                            git add k8s/deployment.yaml
                            git commit -m "🚀 Update deployment image to lynakiddy/portfolio:${BUILD_TAG} - Build #${BUILD_NUMBER}"
                            git push origin main
                            
                            echo "✅ Successfully updated k8s/deployment.yaml with image: lynakiddy/portfolio:${BUILD_TAG}"
                        '''
                    }
                }
            }
        }

        
        stage('Trigger ArgoCD Sync') {
            steps {
                script {
                    echo "Waiting for Git changes to propagate..."
                    sleep(10) // Wait for git changes to be detected
                    
                    withCredentials([usernamePassword(credentialsId: "${ARGOCD_CREDENTIALS_ID}", 
                                                    usernameVariable: 'ARGOCD_USERNAME', 
                                                    passwordVariable: 'ARGOCD_PASSWORD')]) {
                        sh '''
                            # Get ArgoCD auth token
                            ARGOCD_TOKEN=$(curl -k -X POST https://${ARGOCD_SERVER}/api/v1/session \\
                                -H "Content-Type: application/json" \\
                                -d "{\\"username\\": \\"${ARGOCD_USERNAME}\\", \\"password\\": \\"${ARGOCD_PASSWORD}\\"}" \\
                                | jq -r '.token')
                            
                            echo "ArgoCD Token obtained successfully"
                            
                            # Trigger sync to pick up the new changes
                            curl -k -X POST https://${ARGOCD_SERVER}/api/v1/applications/${APP_NAME}/sync \\
                                -H "Authorization: Bearer ${ARGOCD_TOKEN}" \\
                                -H "Content-Type: application/json" \\
                                -d '{"prune": false, "dryRun": false, "strategy": {"hook": {}}}'
                            
                            echo "ArgoCD sync triggered successfully"
                        '''
                    }
                }
            }
        }

    }
    
    post {
        always {
            script {
                // Clean up local Docker images
                sh """
                    docker rmi ${DOCKER_REPO}:${BUILD_TAG} || true
                    docker rmi ${DOCKER_REPO}:latest || true
                """
            }
        }
        
        success {
            echo "✅ Pipeline completed successfully!"
            echo "🐳 Docker image: ${DOCKER_REPO}:${BUILD_TAG}"
            echo "🚀 Application deployed to ArgoCD"
        }
        
        failure {
            echo "❌ Pipeline failed!"
            // You can add notifications here (email, Slack, etc.)
        }
    }
}