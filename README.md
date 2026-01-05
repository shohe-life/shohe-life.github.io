# しょへ - ソフトエンジニア 公式サイト

Flutter開発・便利ツール開発を提供するソフトエンジニアのポートフォリオサイトです。

## 🌐 サイト構成

- **index.html** - トップページ（サービス概要、実績ハイライト、FAQ）
- **services.html** - サービス詳細ページ
- **works.html** - 実績一覧ページ
- **about.html** - プロフィールページ
- **contact.html** - お問い合わせページ
- **privacy.html** - プライバシーポリシー

## 📁 ファイル構成

```
home/
├── index.html           # トップページ
├── services.html        # サービス詳細
├── works.html           # 実績一覧
├── about.html           # プロフィール
├── contact.html         # お問い合わせ
├── privacy.html         # プライバシーポリシー
├── styles.css           # 共通スタイルシート
├── script.js            # 共通JavaScript
├── sitemap.xml          # サイトマップ
├── robots.txt           # クローラー制御
├── assets/
│   ├── favicon.png      # ファビコン
│   └── ogp.png          # OGP画像
└── design/
    └── SNSアイコン透過.png  # プロフィール画像
```

## 🚀 GitHub Pagesで公開する手順

### 1. GitHubリポジトリの作成

1. GitHubにログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例：`home`）
4. 「Public」を選択
5. 「Create repository」をクリック

### 2. ファイルをリポジトリにプッシュ

ターミナルで以下のコマンドを実行：

```bash
cd /Users/shohei/Desktop/work/vsworkspace/HomePage/home

# Gitリポジトリを初期化（まだの場合）
git init

# ファイルをステージング
git add .

# コミット
git commit -m "Initial commit: ホームページ公開"

# リモートリポジトリを追加（yourusernameは自分のGitHubユーザー名に変更）
git remote add origin https://github.com/yourusername/home.git

# プッシュ
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesの設定

1. GitHubのリポジトリページにアクセス
2. 「Settings」タブをクリック
3. 左サイドバーの「Pages」をクリック
4. 「Source」セクションで以下を設定：
   - Branch: `main`
   - Folder: `/ (root)`
5. 「Save」をクリック

### 4. 公開URLの確認

数分後、GitHub Pagesの設定ページに以下のような公開URLが表示されます：

```
https://yourusername.github.io/home/
```

このURLでサイトが公開されます。

## ⚙️ 公開後の設定変更

### お問い合わせフォームについて

お問い合わせは、Googleフォーム（https://forms.gle/dMRcMFJDeiWTYu1V7）へのリンクに設定済みです。

フォームURLを変更する場合は、以下のファイルのリンクを更新してください：
- index.html（2箇所）
- services.html（1箇所）
- works.html（1箇所）
- about.html（1箇所）
- contact.html（1箇所）

### URLの変更

sitemap.xmlとOGPタグのURLを変更：

1. **sitemap.xml** - 全URL
   - `yourusername` を実際のGitHubユーザー名に変更

2. **全HTMLファイル** - OGPタグ
   - `https://yourusername.github.io/home/` を実際のURLに変更

検索して一括置換：

```bash
# yourusernameを実際のGitHubユーザー名に置換
find . -name "*.html" -type f -exec sed -i '' 's/yourusername/actual-username/g' {} +
sed -i '' 's/yourusername/actual-username/g' sitemap.xml
```


## 🎨 カスタマイズ

### カラースキームの変更

**styles.css** の `:root` セクションでカラー変数を変更：

```css
:root {
  --primary-color: #7ba4c7;  /* メインカラー */
  --primary-light: #a8c9e3;  /* 明るめ */
  --primary-dark: #4a7ba7;   /* 濃いめ */
  /* ... */
}
```

### 画像の変更

- **favicon**: `assets/favicon.png` を差し替え（推奨サイズ: 512x512px）
- **OGP画像**: `assets/ogp.png` を差し替え（推奨サイズ: 1200x630px）
- **プロフィール画像**: `design/SNSアイコン透過.png` を差し替え

## 📱 動作確認

### ローカルでの確認

ブラウザで直接HTMLファイルを開くか、簡易サーバーを起動：

```bash
# Pythonの簡易サーバー（Python 3）
python3 -m http.server 8000

# または Node.js の http-server
npx http-server -p 8000
```

ブラウザで `http://localhost:8000` にアクセス

### レスポンシブデザインの確認

- デスクトップ（1920px以上）
- タブレット（768px〜1024px）
- スマートフォン（375px〜414px）

ブラウザの開発者ツールでデバイスモードを使って確認してください。

## 🔍 SEO設定

### Google Search Consoleへの登録

1. https://search.google.com/search-console にアクセス
2. サイトのURLを登録
3. サイトマップを送信：`https://yourusername.github.io/home/sitemap.xml`

### メタ情報の最適化

各ページのtitleとdescriptionは適切に設定済みですが、必要に応じて調整してください。

## 📝 メンテナンス

### 実績の追加

**works.html** の実績カードを追加：

```html
<div class="card">
  <div class="card-icon">🎨</div>
  <h3>新しい実績タイトル</h3>
  <p>実績の説明</p>
  <a href="リンク先URL" target="_blank" rel="noopener noreferrer" class="btn btn-primary">詳細を見る</a>
</div>
```

### FAQの更新

**index.html** のFAQセクションで質問と回答を追加・編集できます。

## 🛠 技術スタック

- **HTML5** - セマンティックなマークアップ
- **CSS3** - カスタムプロパティ、Flexbox、Grid
- **Vanilla JavaScript** - フレームワーク不使用
- **レスポンシブデザイン** - モバイルファースト

## 📄 ライセンス

© 2025 しょへ. All rights reserved.

## 📞 問い合わせ

サイトに関するご質問は、サイト内のお問い合わせフォームからご連絡ください。
