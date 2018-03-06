#!/bin/bash
echo "Deploying To Heroku"
echo "Creating Temp Branch"
git checkout -b temp
echo "Switching to deployment .gitignore"
mv .gitignore.deploy .gitignore
echo "Commiting deployment .gitignore"
git add .
git commit -m "preparing .gitignore for deployment"
echo "Building Files"
lein cljsbuild once
git add .
echo "Committing built files"
git commit -m "commit data to deploy"
echo "Pushing to heroku"
git push heroku temp:master
echo "Returning to master branch"
git checkout master
echo "Deleting temp branch"
git branch -D temp
