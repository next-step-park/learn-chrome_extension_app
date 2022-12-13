# 概要

皆さん Chrome 拡張機能って使ったことありますか？普段[React Developer Tool]といった拡張機能を使ったことがあるんですけど、とっさ「Chrome 拡張機能ってどうやって作るんだ？」と思い、簡単なアプリケーションを作ってみました。

# 「Chrome Extension Application Example」はどんなアプリケーション？

**簡単に言うと会議室を予約するアプリケーションですね。**このアプリケーションは Web Page から選択された会議室を Backend Server に HTTP Request を投げ、DB に会議室予約情報を更新させることが主な機能となります。

このアプリケーションは最小限のロジックで実装されているため、自分で hands-on やってみることで*Chrome 拡張機能アプリケーションの仕組み*について簡単に理解していただけると思います。

# Folder Structure

    .
    ├── README.md
    ├── backend         #Node.jsサーバー
    │   ├── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── psql.js
    ├── extension       #Chrome拡張機能アプリケーション
    │   ├── content.js
    │   ├── manifest.json
    │   ├── popup.html
    │   └── popup.js
    └── webpage         #会議室を選択できるWeb Page
        ├── index.html
        └── index.js

# DataBase DDL, DML

## DDL

    CREATE TABLE public.meeting_room (
        room_name character varying(20),
        booked boolean DEFAULT false
    );

## DML

    INSERT INTO meeting_room (room_name, booked) VALUES ('1F Conf','f');
    INSERT INTO meeting_room (room_name, booked) VALUES ('12F Conf','f');
    INSERT INTO meeting_room (room_name, booked) VALUES ('13F Conf','f');
    INSERT INTO meeting_room (room_name, booked) VALUES ('5F Conf','f');
    INSERT INTO meeting_room (room_name, booked) VALUES ('2F Conf','f');

## 参考資料

[はじめての Chrome 拡張 最小構成ハンズオン](https://qiita.com/punkshiraishi/items/5eca74202f6445025650)
