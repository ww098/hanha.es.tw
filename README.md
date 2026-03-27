# 寒合國小網站上線方式

這個專案是純靜態網站，可以直接部署到免費靜態平台。

## 最簡單方案

### 方案 1：GitHub Pages

適合：
- 已經有 GitHub 帳號
- 想要免費、穩定、好維護

步驟：
1. 把 `hanha-es-tw-clone` 資料夾上傳到一個 GitHub repository。
2. Repository 名稱可自訂，例如 `hanha-school-site`。
3. 到 GitHub 頁面：
   - `Settings`
   - `Pages`
   - `Build and deployment`
   - `Source` 選 `Deploy from a branch`
4. Branch 選 `main`
5. Folder 選 `/ (root)`
6. 儲存後等待幾分鐘
7. GitHub 會提供網址，通常像：
   `https://你的帳號.github.io/hanha-school-site/`

### 方案 2：Netlify

適合：
- 想要拖拉上傳就完成
- 不想先學 Git

步驟：
1. 到 Netlify 註冊登入
2. 新增站點
3. 直接把 `hanha-es-tw-clone` 資料夾拖進去
4. 等待部署完成
5. Netlify 會直接給你網址

### 方案 3：Cloudflare Pages

適合：
- 未來想綁自己的網域
- 想要更快的全球 CDN

步驟：
1. 建立 GitHub repository
2. 到 Cloudflare Pages 建立新專案
3. 連接 GitHub repository
4. Build command 留空
5. Output directory 填 `/`
6. 部署完成後取得網址

## 專案結構

```text
hanha-es-tw-clone/
├── index.html
├── styles.css
└── assets/
```

## 本機預覽

直接雙擊 `index.html` 就可以開啟。

如果想用本機伺服器：

```bash
cd /Users/ww098/Downloads/hanha-es-tw-clone
python3 -m http.server 8000
```

再打開：

`http://localhost:8000`

## 之後如果要正式維護

建議下一步可以再補：
- 自訂網域
- 真正的內頁版本，不只連回 Google Sites
- 聯絡表單改成你自己的表單
- 公告更新流程
