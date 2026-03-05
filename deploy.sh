#!/bin/bash
# GitHub Pages 部署脚本

echo "🚀 开始部署百万AI助手网站到GitHub Pages"

# 检查是否在Git仓库中
if [ ! -d ".git" ]; then
    echo "❌ 当前目录不是Git仓库"
    echo "请先初始化Git仓库:"
    echo "  git init"
    echo "  git add ."
    echo "  git commit -m 'Initial commit'"
    exit 1
fi

# 检查是否有远程仓库
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
if [ -z "$REMOTE_URL" ]; then
    echo "❌ 未设置远程仓库"
    echo "请先添加远程仓库:"
    echo "  git remote add origin https://github.com/你的用户名/仓库名.git"
    exit 1
fi

echo "✅ 远程仓库: $REMOTE_URL"

# 推送到GitHub
echo "📤 推送到GitHub..."
git add .
git commit -m "更新网站: $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo ""
echo "🎉 部署完成!"
echo ""
echo "🌐 网站将在几分钟后可通过以下地址访问:"
echo "   https://你的用户名.github.io/仓库名"
echo ""
echo "📋 如果使用自定义域名，请确保:"
echo "   1. 在GitHub仓库设置中启用GitHub Pages"
echo "   2. 选择main分支作为源"
echo "   3. 设置自定义域名（如果需要）"
echo ""
echo "🔧 故障排除:"
echo "   - 检查GitHub仓库的Settings > Pages"
echo "   - 确保index.html在根目录"
echo "   - 检查CNAME文件（如果使用自定义域名）"