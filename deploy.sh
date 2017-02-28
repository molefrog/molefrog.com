#!/bin/bash

git branch -f master
git checkout master
git reset --hard origin/dev
npm run build
cp -r public/* .
git add -A .
git commit -a -m 'Deploy new website version.'
git push origin master --force
git checkout dev
