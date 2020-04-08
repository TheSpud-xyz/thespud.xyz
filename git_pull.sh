#!/bin/bash
cd /var/www/html/
git reset --hard HEAD 2>&1
git pull 2>&1
git status 2>&1
