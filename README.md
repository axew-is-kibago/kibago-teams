開発環境準備
codespaceの場合  
<img src="imgs/codespaces.png" width="500">    

[create codespace on main]をクリックで終了


httpsの場合  
```
git clone https://github.com/axew-is-kibago/kibago-teams.git
```
sshの場合  
```
git clone git@github.com:axew-is-kibago/kibago-teams.git
```
cloneしたら，vscodeを開きターミナルで以下のコマンドを実行
```
yarn
```
yarn dev で開発サーバーを起動
```
yarn dev
```




DBとの接続
api/local.settings.json
```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "MYSQL_HOST":"",
    "MYSQL_USER":"",
    "MYSQL_PASSWORD":"",
    "MYSQL_DB":""
  }
}

```
