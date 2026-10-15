<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>若者向けアプリ くらわん（育成アプリ）</title>
  <style>
    /* スマホ向けレイアウト＆デザイン */
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      font-family: sans-serif;
      text-align: center;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    #game-container {
      width: 100%;
      height: 50vh;
      background-color: #e0f7fa;
    }

    #status-bar {
      padding: 15px;
      font-size: 1.2rem;
      background: #ffffff;
      border-bottom: 1px solid #ddd;
    }

    #controls {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      padding: 20px;
      background: #ffffff;
    }

    .btn-group {
      display: flex;
      justify-content: space-around;
      gap: 10px;
    }

    button {
      flex: 1;
      padding: 15px;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      background-color: #4CAF50;
      color: white;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: background 0.2s;
    }

    button:active {
      background-color: #45a049;
      transform: translateY(2px);
    }

    #btn-gacha-10 {
      background-color: #ff9800; /* 10連は目立つようにオレンジ色 */
    }
    #btn-gacha-10:active {
      background-color: #e68a00;
    }
  </style>

  <!-- Phaser.js（無料2Dゲームエンジン）を読み込み -->
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
</head>
<body>

  <!-- ゲーム画面（くらわんこのお部屋）が表示されるエリア -->
  <div id="game-container"></div>

  <!-- ステータス表示（所持コイン） -->
  <div id="status-bar">
    <span>所持コイン: <strong id="coin-count">300</strong> S</span>
  </div>

  <!-- アクションボタン群 -->
  <div id="controls">
    <div class="btn-group">
      <button id="btn-feed">ごはんをあげる</button>
      <button id="btn-camera">写真をとる</button>
    </div>
    <div class="btn-group">
      <button id="btn-gacha">単発ガチャ (30S)</button>
      <button id="btn-gacha-10">1日10連ガチャ!! (300S)</button>
    </div>
  </div>

  <!-- ゲームの動作やガチャのプログラムを読み込み -->
  <script type="module" src="app.js"></script>
</body>
</html>
