#!/bin/bash

function buildGHPages {
  npm run build
}

set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
MINE="git@github.com:rwaldron/tc39-notes.git";
TC39="git@github.com:tc39/tc39-notes.git";
SHA=`git rev-parse --verify HEAD`

# Checkout "gh-pages"
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH

# Reset
git reset --hard

# Merge master for latest content
git merge $SOURCE_BRANCH

# Build it!
buildGHPages

# Commit the build
git add --all .
git commit -m "Build: ${SHA}"

# Push updates to:
# rwaldron/tc39-notes#gh-pages
git push $MINE $TARGET_BRANCH -f
# tc39/tc39-notes#gh-pages
git push $TC39 $TARGET_BRANCH -f


# When done, gtfo.
git checkout $SOURCE_BRANCH
