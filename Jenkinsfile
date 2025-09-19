pipeline {
    agent any
    
    environment {
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
                    docker.withRegistry("https://${DOCKER_REGISTRY}", "${DOCKER_CREDENTIALS_ID}") {
                        dockerImage.push("${BUILD_TAG}")
                        dockerImage.push("latest")
                    }
                    echo "Successfully pushed ${DOCKER_REPO}:${BUILD_TAG} to Docker Hub"
                }
            }
        }
        
        stage('Update ArgoCD Application') {
            steps {
                script {
                    // Method 1: Direct API call to ArgoCD (Recommended)
                    withCredentials([usernamePassword(credentialsId: "${ARGOCD_CREDENTIALS_ID}", 
                                                    usernameVariable: 'ARGOCD_USERNAME', 
                                                    passwordVariable: 'ARGOCD_PASSWORD')]) {
                        sh '''
                            # Get ArgoCD auth token
                            ARGOCD_TOKEN=$(curl -k -X POST https://${ARGOCD_SERVER}/api/v1/session \\
                                -H "Content-Type: application/json" \\
                                -d "{\\"username\\": \\"${ARGOCD_USERNAME}\\", \\"password\\": \\"${ARGOCD_PASSWORD}\\"}" \\
                                | jq -r '.token')
                            
                            # Update application image tag
                            curl -k -X PATCH https://${ARGOCD_SERVER}/api/v1/applications/${APP_NAME} \\
                                -H "Authorization: Bearer ${ARGOCD_TOKEN}" \\
                                -H "Content-Type: application/json" \\
                                -d "{
                                    \\"spec\\": {
                                        \\"source\\": {
                                            \\"helm\\": {
                                                \\"values\\": \\"domainName: \\\\\\"portfolio.lynasovann.site\\\\\\"\\\\nimage:\\\\n  repository: lynakiddy/portfolio\\\\n  tag: \\\\\\"${BUILD_TAG}\\\\\\"\\\\n  containerPort: 3000\\\\nservice:\\\\n  type: ClusterIP\\\\n  port: 3000\\\\n  targetPort: 3000\\"
                                            }
                                        }
                                    }
                                }"
                            
                            # Trigger sync
                            curl -k -X POST https://${ARGOCD_SERVER}/api/v1/applications/${APP_NAME}/sync \\
                                -H "Authorization: Bearer ${ARGOCD_TOKEN}" \\
                                -H "Content-Type: application/json" \\
                                -d '{"prune": false, "dryRun": false, "strategy": {"hook": {}}}'
                        '''
                    }
                }
            }
        }
        
        stage('Verify Deployment') {
            steps {
                script {
                    echo "Waiting for deployment to complete..."
                    sleep(30) // Wait for deployment
                    
                    withCredentials([usernamePassword(credentialsId: "${ARGOCD_CREDENTIALS_ID}", 
                                                    usernameVariable: 'ARGOCD_USERNAME', 
                                                    passwordVariable: 'ARGOCD_PASSWORD')]) {
                        sh '''
                            # Get ArgoCD auth token
                            ARGOCD_TOKEN=$(curl -k -X POST https://${ARGOCD_SERVER}/api/v1/session \\
                                -H "Content-Type: application/json" \\
                                -d "{\\"username\\": \\"${ARGOCD_USERNAME}\\", \\"password\\": \\"${ARGOCD_PASSWORD}\\"}" \\
                                | jq -r '.token')
                            
                            # Check application status
                            APP_STATUS=$(curl -k -X GET https://${ARGOCD_SERVER}/api/v1/applications/${APP_NAME} \\
                                -H "Authorization: Bearer ${ARGOCD_TOKEN}" \\
                                | jq -r '.status.health.status')
                            
                            echo "Application health status: ${APP_STATUS}"
                            
                            if [ "${APP_STATUS}" != "Healthy" ]; then
                                echo "Deployment verification failed!"
                                exit 1
                            else
                                echo "Deployment successful!"
                            fi
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