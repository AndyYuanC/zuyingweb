# 祖影 Zuying — 官网 (marketing site)

纯静态网站，无任何框架、无构建步骤：`index.html` + `styles.css` + `app.js` + `assets/`。

## 本地预览

直接双击 `index.html` 用浏览器打开即可；或者：

```
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 内容

- **首屏**：品牌、一句话介绍、App Store / Google Play 下载按钮（上架前显示「即将上架」，上架后把两个 `.store-badge` 的 `href` 换成商店链接）。
- **功能**：六张功能卡片。
- **试一试**：迷你家族树模拟器 — 点人看称谓、添孩子/伴侣、右上角换四种风格（晨白/夜潮/暖橘/雅纸，颜色与 App 完全一致）。
- **联系**：邮箱按钮（现在指向 w727020361@gmail.com，换成 support 邮箱时改 `index.html` 里的 `mailto:` 链接和显示文字）。

## 语言

跟随浏览器语言，右上角可手动切换，选择存在 localStorage。
支持与 App 相同的六种语言：简体中文 / 繁體中文 / English / Español / Français / हिन्दी。
所有文案在 `app.js` 顶部的 `I18N` 表里；模拟器的称谓在 `KIN` 表里。

## 部署（推荐 GitHub Pages，免费）

1. 推到 GitHub 仓库。
2. 仓库 Settings → Pages → Source 选 `main` 分支根目录。
3. 几分钟后网站上线于 `https://<用户名>.github.io/<仓库名>/`。
现在的地址：<https://andyyuanc.github.io/zuyingweb/>

也可以直接拖进 Vercel / Netlify / Cloudflare Pages，零配置。

### 绑定 zuyingapp.com（域名在 AWS Route 53）

**顺序不能反。** 仓库根目录的 `CNAME` 文件会让 GitHub Pages 把 github.io
地址 301 跳到自定义域名；如果那时 DNS 还没指回来，两个地址就都打不开了。
所以先配 DNS，确认生效，最后才加 CNAME 文件。

1. Route 53 → Hosted zones → `zuyingapp.com` → Create record，
   给**根域名**（Record name 留空）加一条 A 记录，Value 填四行：

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   不能用 Route 53 的 Alias —— 那只能指向 AWS 自己的资源。

2. 再建一条：Record name `www`，类型 CNAME，值 `andyyuanc.github.io`。

3. 等生效，用这个确认（要看到上面四个 IP）：

   ```
   dig zuyingapp.com +short
   ```

4. 仓库根目录建 `CNAME` 文件，内容就一行 `zuyingapp.com`，推上去。

5. GitHub 仓库 → Settings → Pages → Custom domain 填 `zuyingapp.com` → Save。

6. 证书签好后（几分钟到几小时），勾上 **Enforce HTTPS**。

全程 $0；域名本身的续费在 AWS 那边。

## 品牌资产

`assets/` 里的图标和加载页来自 App 仓库（`echo/app` 的 AppIcon 与
`assets/brand/loading.png`），改品牌图时两边一起换。
