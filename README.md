# 祖影 Echo — 官网 (marketing site)

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
4. 有自己的域名后，在 Pages 设置里填 Custom domain 即可。

也可以直接拖进 Vercel / Netlify / Cloudflare Pages，零配置。

## 品牌资产

`assets/` 里的图标和加载页来自 App 仓库（`echo/app` 的 AppIcon 与
`assets/brand/loading.png`），改品牌图时两边一起换。
