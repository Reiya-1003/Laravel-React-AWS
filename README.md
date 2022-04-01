# ページ概要

<img width="1435" alt="スクリーンショット 2022-04-01 14 57 07" src="https://user-images.githubusercontent.com/80142183/161203847-cf4e58b6-7a3c-4f1d-b00d-38e6b27f1472.png">



# 使用言語・ツール
* React.js  17.0.2
* PHP  8.0.2
* Laravel 9.0
* MySQL
* AWS EC2　（仮想環境構築・デプロイ）
* Docker (ローカル開発環境の構築)


# アーキテクチャ
　　<img width="851" alt="スクリーンショット 2022-04-01 15 22 50" src="https://user-images.githubusercontent.com/80142183/161206918-2a7ec4e7-ada1-4bf5-a59e-a974c1193f56.png">
  


# 機能面
## 基本的なCRUD処理
### Create（C）
<img width="602" alt="スクリーンショット 2022-04-01 15 42 15" src="https://user-images.githubusercontent.com/80142183/161209940-f86dd7a8-41dc-4479-8c5f-fd0f0b9f7b8e.png">
・「機能実装」の欄をCreate

### Read（R）
<img width="1033" alt="スクリーンショット 2022-04-01 15 42 45" src="https://user-images.githubusercontent.com/80142183/161210088-d5655beb-8101-48a8-9edd-a86af9956804.png">
・DBに保存された内容を一覧表示。（.map）

### Update（U）
<img width="916" alt="スクリーンショット 2022-04-01 15 43 16" src="https://user-images.githubusercontent.com/80142183/161210279-1f8d1ae0-0db4-499c-a596-6b894f52cd97.png">
・3項目を「動画編集に」更新処理できる

### Delete（D）
<img width="916" alt="スクリーンショット 2022-04-01 15 43 16" src="https://user-images.githubusercontent.com/80142183/161210279-1f8d1ae0-0db4-499c-a596-6b894f52cd97.png">
・3項目を「動画編集に」更新処理できる





## react-scrollを使用したスクロール機能


・ページをリッチにするための工夫
## django rest_frameworkによるバックエンド管理・REST APIサービスの利用（PRACTICE部分）



# 今後
デザイン・機能含めアップデートを予定。今後開発や経験が増えていくにつれ、当ページもアップデートしていく。











# 以下docker-laravel 🐳のデフォルト部分

<p align="center">
    <img src="https://user-images.githubusercontent.com/35098175/145682384-0f531ede-96e0-44c3-a35e-32494bd9af42.png" alt="docker-laravel">
</p>
<p align="center">
    <img src="https://github.com/ucan-lab/docker-laravel/actions/workflows/laravel-create-project.yml/badge.svg" alt="Test laravel-create-project.yml">
    <img src="https://github.com/ucan-lab/docker-laravel/actions/workflows/laravel-git-clone.yml/badge.svg" alt="Test laravel-git-clone.yml">
    <img src="https://img.shields.io/github/license/ucan-lab/docker-laravel" alt="License">
</p>

## Introduction

Build a simple laravel development environment with docker-compose. Compatible with Windows(WSL2), macOS(M1) and Linux.

## Usage

1. Click [Use this template](https://github.com/ucan-lab/docker-laravel/generate)
2. Git clone & change directory
3. Execute the following command

```bash
$ make create-project # Install the latest Laravel project
$ make install-recommend-packages # Optional
```

http://localhost

## Tips

- Read this [Makefile](https://github.com/ucan-lab/docker-laravel/blob/main/Makefile).
- Read this [Wiki](https://github.com/ucan-lab/docker-laravel/wiki).

## Container structures

```bash
├── app
├── web
└── db
```

### app container

- Base image
  - [php](https://hub.docker.com/_/php):8.1-fpm-bullseye
  - [composer](https://hub.docker.com/_/composer):2.1

### web container

- Base image
  - [nginx](https://hub.docker.com/_/nginx):1.20-alpine
  - [node](https://hub.docker.com/_/node):16-alpine

### db container

- Base image
  - [mysql/mysql-server](https://hub.docker.com/r/mysql/mysql-server):8.0
