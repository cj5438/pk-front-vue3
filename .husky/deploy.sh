#!/bin/sh
# 构建
npm run build

# 上传部署
rsync -avz --delete -e "ssh -p 22" ./dist/ root@ubuntu:/home/website/pk-front-vue3