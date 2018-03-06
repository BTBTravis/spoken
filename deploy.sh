#!/bin/bash
echo "Deploying To Heroku"
echo "Creating Temp Branch"
git checkout -b temp
echo "Switching to deployment .gitignore"
mv .gitignore.deploy .gitignore
git add .
git commit -m "preparing .gitignore for deployment"
echo "Building Files"
lein cljsbuild once
git add .
git commit -m "commit data to deploy"
git push heroku temp:master
git chekout master
git branch -d temp
