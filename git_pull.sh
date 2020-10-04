#!/bin/bash
cd /var/www/spudWeb/
ls
git reset --hard HEAD 2>&1
git pull 2>&1
