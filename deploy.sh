#!/bin/bash
echo "Deploying To Heroku"
echo "Creating Temp Branch"
git checkout -b temp
echo "Switching to deployment .gitignore"
mv .gitignore.deploy .gitignore
git add .
git commit -m "preparing .gitignore for deployment"
#lein cl


