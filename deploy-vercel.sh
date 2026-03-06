#!/bin/bash

# Vercel 部署脚本
# 使用方法: ./deploy-vercel.sh

echo "🚀 开始Vercel部署..."

# 检查是否安装了Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "⚠️ Vercel CLI未安装，请先安装: npm i -g vercel"
    echo "或者使用Web界面部署: https://vercel.com"
    exit 1
fi

# 检查当前目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误: index.html不存在，请确保在网站根目录"
    exit 1
fi

echo "📁 项目结构检查..."
ls -la

echo "🔧 配置Vercel部署..."
vercel --prod --confirm

if [ $? -eq 0 ]; then
    echo "✅ Vercel部署成功!"
    echo "🌐 网站地址: https://million-ai-assistant.vercel.app"
    echo "📊 部署状态: 生产环境已上线"
else
    echo "❌ Vercel部署失败，请检查错误信息"
    echo "💡 备选方案: 使用Web界面部署 https://vercel.com"
fi