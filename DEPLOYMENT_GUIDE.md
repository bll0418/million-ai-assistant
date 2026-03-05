# GitHub Pages 部署指南

## 🚀 快速部署

### 前提条件
1. GitHub账号
2. 本地Git已安装
3. 命令行访问权限

### 部署步骤

#### 1. 创建GitHub仓库
访问：https://github.com/new
- 仓库名：`million-ai-assistant`
- 描述：`百万AI助手网站 - 学习sanwan.ai成果展示`
- 公开仓库
- **不要**初始化README、.gitignore、license

#### 2. 设置远程仓库并推送
```bash
# 在website目录中执行
git remote add origin https://github.com/你的用户名/million-ai-assistant.git
git branch -M main
git push -u origin main
```

#### 3. 启用GitHub Pages
1. 访问仓库：`https://github.com/你的用户名/million-ai-assistant/settings/pages`
2. 分支：选择 `main`
3. 文件夹：选择 `/` (根目录)
4. 点击保存

#### 4. 等待部署
- 等待1-2分钟
- 访问：`https://你的用户名.github.io/million-ai-assistant`

## 📁 文件说明

### 核心文件
- `index.html` - 网站首页
- `style.css` - 样式文件
- `script.js` - 交互脚本
- `logs/2026-03-05.html` - Day 1学习日志

### 部署文件
- `deploy.sh` - 一键部署脚本
- `init-github.sh` - 初始化脚本
- `CNAME` - 自定义域名配置
- `package.json` - 项目配置

### 辅助文件
- `preview.html` - 部署预览页面
- `README.md` - 项目说明
- `.gitignore` - Git忽略配置

## 🌐 网站功能

### 页面结构
1. **首页** - 项目介绍和统计数据
2. **学习日志** - Day 1详细学习记录
3. **技能展示** - 已开发的AI技能
4. **项目进展** - 开发时间线
5. **关于** - 技术栈和未来计划

### 技术特性
- ✅ 完全响应式设计
- ✅ 平滑动画效果
- ✅ 移动端适配
- ✅ 现代UI设计
- ✅ 快速加载

## 🔧 自定义配置

### 修改网站信息
编辑 `index.html` 中的：
- 网站标题
- 统计数据
- 技能描述
- 联系信息

### 修改样式
编辑 `style.css` 中的CSS变量：
```css
:root {
    --primary-color: #4a6fa5;    /* 主色调 */
    --secondary-color: #166088;  /* 副色调 */
    --accent-color: #ff6b6b;     /* 强调色 */
}
```

### 添加新日志
1. 在 `logs/` 目录创建新的HTML文件
2. 参考 `2026-03-05.html` 的结构
3. 在首页添加链接

## 📊 部署状态检查

### 成功标志
1. GitHub仓库显示绿色勾号 ✅
2. Settings > Pages显示部署成功
3. 可以访问网站URL

### 常见问题

#### 1. 404错误
- 检查分支设置是否正确
- 确认index.html在根目录
- 等待更长时间（最多10分钟）

#### 2. 样式丢失
- 检查CSS文件路径
- 确认文件已提交到Git
- 清除浏览器缓存

#### 3. 自定义域名不工作
- 检查CNAME文件内容
- 在GitHub Pages设置中添加域名
- 配置DNS解析

## 🚀 一键部署脚本

### 使用方法
```bash
# 给予执行权限
chmod +x deploy.sh

# 运行部署
./deploy.sh
```

### 脚本功能
1. 检查Git仓库状态
2. 添加所有更改
3. 提交并推送到GitHub
4. 显示部署状态

## 🔄 更新网站

### 常规更新
```bash
# 修改文件后
git add .
git commit -m "更新描述"
git push origin main
```

### 使用部署脚本
```bash
./deploy.sh
```

## 📞 技术支持

### 问题反馈
1. 检查GitHub Actions日志
2. 查看浏览器控制台错误
3. 验证文件完整性

### 资源链接
- GitHub Pages文档：https://docs.github.com/pages
- 自定义域名：https://docs.github.com/pages/configuring-a-custom-domain
- 故障排除：https://docs.github.com/pages/troubleshooting

---

**部署完成时间**：2026-03-06 00:52  
**版本**：v1.0.0  
**状态**：✅ 本地仓库已初始化，等待推送到GitHub