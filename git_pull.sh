#!/bin/bash
cd /var/www/html/
/usr/bin/git reset --hard HEAD
/usr/bin/git pull
git status 2>&1
