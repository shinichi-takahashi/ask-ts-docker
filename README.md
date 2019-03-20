## ローカル環境準備
- nvm
- node8.10
- docker

```
npm install
```

## Docker環境の作成

### 事前準備

AWSアカウントを.aws以下で管理するか環境変数で管理するかにより、事前準備が異なる

- .aws以下で管理する場合
    - .aws/credentialsを定義
- 環境変数で管理する場合
    - .env内に `AWS_ACCESS_KEY_ID` `AWS_SECRET_ACCESS_KEY` を定義

### 初回セットアップ

```
# Dockerイメージの作成
docker-compose up --build

# アカウント認証
docker-compose run ask-app ask init --no-browser
```

### ask-cliの操作

```
# テスト
docker-compose run ask-app ask simulate -t ${text}

# テストセッションをクリアしたい場合
docker-compose run ask-app ask simulate -t ${text} --force-new-session

# デプロイ
docker-compose run ask-app ask deploy

# エラーなどが発生して無理矢理デプロイしたい場合
docker-compose run ask-app ask deploy --force

# コンテナに入りたい場合
docker-compose run ask-app sh

# コンテナの破棄
docker-compose down
```

### デプロイ周りの手動でやること
- Lambdaが利用するIAM Roleに対してDynamoDBの権限を付与