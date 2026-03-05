// 百万AI助手网站交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });

    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.card, .skill-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // 统计数字动画
    const stats = document.querySelectorAll('.stat span');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const value = stat.textContent;
                
                // 如果是数字，添加动画
                if (!isNaN(parseInt(value))) {
                    animateNumber(stat, parseInt(value));
                }
                
                observer.unobserve(stat);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));

    // 数字动画函数
    function animateNumber(element, finalValue) {
        let current = 0;
        const increment = finalValue / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                current = finalValue;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    // 时间线动画
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        timelineObserver.observe(item);
    });

    // 技能卡片动画
    const skillCards = document.querySelectorAll('.skill-card');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        skillObserver.observe(card);
    });

    // 当前年份更新
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
    }

    // 控制台欢迎信息
    console.log('%c🦞 百万AI助手网站已加载', 'color: #4a6fa5; font-size: 16px; font-weight: bold;');
    console.log('%c学习 · 成长 · 服务', 'color: #166088; font-size: 14px;');
    console.log('%c探索更多功能: https://github.com/nanobot', 'color: #666; font-size: 12px;');

    // 页面加载完成动画
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 初始化页面透明度
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
});

// 主题切换功能（预留）
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // 保存主题偏好
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 检查保存的主题
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// 复制代码片段功能
function copyCode(element) {
    const code = element.textContent;
    navigator.clipboard.writeText(code).then(() => {
        // 显示复制成功提示
        const originalText = element.textContent;
        element.textContent = '已复制到剪贴板！';
        element.style.color = '#4CAF50';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    });
}

// 添加复制按钮到代码片段
document.addEventListener('DOMContentLoaded', function() {
    const codeSnippets = document.querySelectorAll('.code-snippet pre');
    codeSnippets.forEach(snippet => {
        const copyButton = document.createElement('button');
        copyButton.textContent = '复制';
        copyButton.className = 'copy-button';
        copyButton.onclick = () => copyCode(snippet);
        
        snippet.parentNode.insertBefore(copyButton, snippet);
    });
});