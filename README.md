# eat-after-test

## 實作題一 - 網頁切版設計

[Demo](https://dezchuang.github.io/eat-after-test/01_WebMockup/index.html)

* 利用簡單的media query判斷`300`、`800`三個區間的內文寬度。
* 利用Sass來開發css。
* 利用Gulp幫忙編譯Sass檔

---

## 實作題二 - CRUD功能設計

### Usage

STEP1. 將此專案git clone到本機電腦，並到此目錄底下：

```
git clone https://github.com/DezChuang/eat-after-test.git
cd 02_CRUD
```

STEP2. 執行以下指令安裝套件：

```
npm install
```

STEP3. 打開一個terminal視窗，啟動json-server模擬books API：

```
npm run server
```

STEP4. 打開另一個terminal視窗，執行以下指令將web應用執行：

```
npm start
```

STEP5. 到本機端的下網址即可測試：

```
http://localhost:8080/
```


### 實作功能

* 新增：可透過首頁的`Add a Book`按鈕，route至new頁面新增一本書的資料，json格式如下：

```
{
  "id": 101,
  "title": "Zero to One",
  "author": "Peter Thiel",
  "year_published": 2014,
  "rating": 4.03
}
```

其中id會從101開始，新增時會自己遞增生成。

* 查詢：可鍵入書的id，會在下方Search Result秀出每次歷史查詢的紀錄，並可透過連結到欲查看細節的書的資料。暫無處理刷新搜尋頁面、可搜尋關鍵字的功能、錯誤訊息、做成SPA的功能。

* 編輯/刪除：在書的詳細資料頁面裡，分別實作兩個按鈕可以編輯與刪除。其中編輯可以route至edit頁面，但目前尚有一些邏輯需要釐清。刪除功能完整，按下去即刪除此筆書目。

### 後記

* CRUD的邏輯跟之前做過的node.js蠻像的，但是在查詢與編輯的地方稍微遇到一些邏輯上的問題還需要一些時間實作，也才發現利用CRUD來練習能更加強Redux的flow的概念。

