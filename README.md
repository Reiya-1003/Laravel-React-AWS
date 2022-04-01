# ページ概要



リンク先：https://portforio-reru.vercel.app/

# 使用言語
* React.js  17.0.2
* Python  3.9
* Django  3.1.2
* django rest_framework
* cors 
* sqlite3

# アーキテクチャ
　　
  

  
# デプロイ
* フロントエンド　→ Vercel
* バックエンド　→ pythonanywhere
* cors → heroku (axiosでfetchする際にリクエストエラーが起きるため必要)




# 機能面
## Sassによるページデザイン


・主にアニメーションをつけるのに役立つ。



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
