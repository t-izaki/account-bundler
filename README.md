# account-bundler
企業の従業者のアカウント管理システム

![dashboard](https://raw.githubusercontent.com/t-izaki/account-bundler/readme_images/readme_images/1_dashboard.png)


## 使い方
1. dockerコンテナを起動する
    ```
    docker-compose build
    docker-compose run web yarn install
    docker-compose up
    ```
1. `http://localhost:3000/signIn`にアクセス


## 利用している技術
- Ruby / Rails
- React / Redux
- MySQL


## 機能
- 社内で利用しているシステムを一元管理できる
- 各システムに付与されているアカウントを一元管理できる
- 入社や部署異動時に、必要なアカウントの作成を申請できる
- 退職や部署異動時に、不要なアカウントの削除を申請できる
- 自分に対する申請一覧を確認し、承認 or 却下ができる
- 過去のアカウント作成、削除の証跡が確認できる

| アカウントの申請 | 申請の承認 | 証跡の確認 |
| - | - | - |
|![images](https://raw.githubusercontent.com/t-izaki/account-bundler/readme_images/readme_images/2_system_user.png)|![images](https://raw.githubusercontent.com/t-izaki/account-bundler/readme_images/readme_images/3_task_complete.png)|![images](https://raw.githubusercontent.com/t-izaki/account-bundler/readme_images/readme_images/4_history.png) |

## ToDo
- ログインできる管理者の管理機能
- アカウントだけでなくアクセス権も管理できる
- 例外処理、セキュリティ
- テスト
