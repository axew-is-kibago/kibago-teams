import * as fs from 'fs';
import * as mysql from 'mysql2/promise';

interface MegaInfo {
    name: string;
}
async function registerThread(MegaInfo: MegaInfo): Promise<void> {
    try {
      const config = {
        host: process.env["MYSQL_HOST"],
        user: process.env["MYSQL_USER"],
        password: process.env["MYSQL_PASSWORD"],
        database: process.env["MYSQL_DB"],
        port: 3306,
        ssl: { ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem") }
      };

      const conn = await mysql.createConnection(config);
      const [rows] = await conn.execute(
        'INSERT INTO Users (name) VALUES (?)',
        [ MegaInfo.name]
      );
      conn.end();

      console.log('テーブルにデータを登録しました。');
      console.log(rows);
    } catch (error) {
      console.log('データベースへの登録中にエラーが発生しました:', error.message);
      throw error; 
    }
  }

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
  
try {
    const name: string = req.body.name;

    const megaInfo: MegaInfo = {  name};
    await registerThread(megaInfo);
        console.log('入力が完了しました。');
        context.res = {
        status: 200,
        body: "ok"
        };
    } catch (error) {
      console.log('エラーが発生しました:', error.message);
      context.res = {
        status: 500,
        body: "Internal Server Error"
      };
    }
};
