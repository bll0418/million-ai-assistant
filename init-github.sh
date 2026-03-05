#!/bin/bash
# GitHub仓库初始化脚本

echo "🔄 初始化GitHub仓库"

# 1. 初始化Git仓库
if [ ! -d ".git" ]; then
    echo "📁 初始化Git仓库..."
    git init
else
    echo "✅ Git仓库已初始化"
fi

# 2. 添加所有文件
echo "📄 添加文件到Git..."
git add .

# 3. 提交初始版本
echo "💾 提交初始版本..."
git commit -m "初始提交: 百万AI助手网站 v1.0.0"

echo ""
echo "🎯 下一步操作:"
echo ""
echo "1. 在GitHub上创建新仓库:"
echo "   https://github.com/new"
echo "   仓库名: million-ai-assistant"
echo "   描述: 百万AI助手网站 - 学习sanwan.ai成果展示"
echo "   公开仓库"
echo "   不要初始化README、.gitignore、license"
echo ""
echo "2. 添加远程仓库:"
echo "   git remote add origin https://github.com/你的用户名/million-ai-assistant.git"
echo ""
echo "3. 推送到GitHub:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. 启用GitHub Pages:"
echo "   访问: https://github.com/你的用户名/million-ai-assistant/settings/pages"
echo "   分支: main"
echo "   文件夹: / (根目录)"
echo "   保存"
echo ""
echo "5. 等待部署完成 (约1-2分钟)"
echo "   访问: https://你的用户名.github.io/million-ai-assistant"
echo ""
echo "📝 重要文件说明:"
echo "   - index.html: 网站首页"
echo "   - style.css: 样式文件"
echo "   - script.js: 交互脚本"
echo "   - logs/2026-03-05.html: Day 1学习日志"
echo "   - CNAME: 自定义域名配置"
echo "   - deploy.sh: 部署脚本"
echo ""
echo "🚀 快速部署命令:"
echo "   bash deploy.sh"