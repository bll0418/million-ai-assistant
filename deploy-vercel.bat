@echo off
echo 🚀 开始Vercel部署...

REM 检查是否安装了Vercel CLI
where vercel >nul 2>nul
if errorlevel 1 (
    echo ⚠️ Vercel CLI未安装，请先安装: npm i -g vercel
    echo 或者使用Web界面部署: https://vercel.com
    pause
    exit /b 1
)

REM 检查当前目录
if not exist index.html (
    echo ❌ 错误: index.html不存在，请确保在网站根目录
    pause
    exit /b 1
)

echo 📁 项目结构检查...
dir

echo 🔧 配置Vercel部署...
vercel --prod --confirm

if %errorlevel% equ 0 (
    echo ✅ Vercel部署成功!
    echo 🌐 网站地址: https://million-ai-assistant.vercel.app
    echo 📊 部署状态: 生产环境已上线
) else (
    echo ❌ Vercel部署失败，请检查错误信息
    echo 💡 备选方案: 使用Web界面部署 https://vercel.com
)

pause