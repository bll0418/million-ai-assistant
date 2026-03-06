#!/usr/bin/env python3
"""
验证GitHub Pages网站状态
"""

import requests
import time
import sys

def check_website():
    url = "https://bll0418.github.io/million-ai-assistant/"
    
    print(f"🔍 检查网站: {url}")
    print(f"⏰ 时间: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    
    try:
        # 设置超时和用户代理
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        print("📡 发送请求...")
        start_time = time.time()
        response = requests.get(url, headers=headers, timeout=30)
        end_time = time.time()
        
        print(f"✅ 请求成功!")
        print(f"   状态码: {response.status_code}")
        print(f"   响应时间: {end_time - start_time:.2f}秒")
        print(f"   内容长度: {len(response.text)} 字符")
        
        # 检查标题
        if '<title>' in response.text:
            title_start = response.text.find('<title>') + 7
            title_end = response.text.find('</title>', title_start)
            title = response.text[title_start:title_end].strip()
            print(f"   标题: {title}")
        
        # 检查关键内容
        if '百万' in response.text or 'Million' in response.text:
            print("   内容验证: ✅ 包含关键内容")
        else:
            print("   内容验证: ⚠️ 未找到关键内容")
            
        return True
        
    except requests.exceptions.Timeout:
        print("❌ 请求超时 (30秒)")
        return False
    except requests.exceptions.ConnectionError as e:
        print(f"❌ 连接错误: {e}")
        return False
    except Exception as e:
        print(f"❌ 其他错误: {e}")
        return False

def check_github_status():
    """检查GitHub仓库状态"""
    print("\n🔧 检查GitHub仓库状态...")
    
    # 检查Actions状态
    try:
        import subprocess
        result = subprocess.run(
            ['curl', '-s', '-H', 'Accept: application/vnd.github.v3+json', 
             'https://api.github.com/repos/bll0418/million-ai-assistant/actions/runs'],
            capture_output=True, text=True, timeout=10
        )
        
        if result.returncode == 0:
            import json
            data = json.loads(result.stdout)
            latest = data['workflow_runs'][0]
            print(f"   Actions状态: {latest['status']}")
            print(f"   结论: {latest['conclusion']}")
            print(f"   时间: {latest['updated_at']}")
        else:
            print("   ⚠️ 无法获取Actions状态")
            
    except Exception as e:
        print(f"   ⚠️ GitHub状态检查失败: {e}")

if __name__ == "__main__":
    print("=" * 50)
    print("GitHub Pages 网站状态检查")
    print("=" * 50)
    
    success = check_website()
    check_github_status()
    
    print("\n" + "=" * 50)
    if success:
        print("✅ 网站可访问 - GitHub Pages部署成功!")
    else:
        print("⚠️ 网站访问有问题 - 需要进一步排查")
    print("=" * 50)