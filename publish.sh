#!/bin/bash

# Delete everything except "dist" folder, its contents, and the ".gitignore" file
shopt -s extglob
rm -rf !(dist|dist/*|.gitignore|publish.sh)
rm -rf .angular

# Move contents of "dist" folder outside and delete "dist" folder
mv dist/* .
rm -rf dist
rm -rf .angular

# Clean up empty directories (optional)
find . -type d -empty -delete

# Prompt the user for a commit message
read -rp "Enter commit message: " commit_message

# Push all remaining files to the Git repository
git add .
git commit -m "$commit_message"
git push