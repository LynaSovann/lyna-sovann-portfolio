#!/bin/bash 

# Check if a commit message was provided as an argument
if [ -z "$1" ]; then
  echo "Error: Please provide a commit message."
  echo "Usage: $0 <commit-message>"
  exit 1
fi

# Assign the first argument as the commit message
COMMIT_MESSAGE="$1"

# Execute Git commands
git add .
git commit -m "$COMMIT_MESSAGE"
git push origin main