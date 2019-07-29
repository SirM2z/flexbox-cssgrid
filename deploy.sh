#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

git init
git config user.name sirm2z
git config user.email sirm2zisv@gmail.com
git add -A
git commit -m 'deploy: gh-pages'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:SirM2z/flexbox-cssgrid.git master:gh-pages

cd -
