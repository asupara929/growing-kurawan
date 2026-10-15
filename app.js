// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATuQVQRz07FaxLnM7kFv3LG7ZxlLWonNE",
  authDomain: "growing-kurawan.firebaseapp.com",
  projectId: "growing-kurawan",
  storageBucket: "growing-kurawan.firebasestorage.app",
  messagingSenderId: "132473860696",
  appId: "1:132473860696:web:9ceee9910bce1d3d27902d",
  measurementId: "G-ZNRTFNJVMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// --- Phaser.js 基本設定 ---
const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight * 0.6,
  parent: 'game-container',
  backgroundColor: '#e0f7fa',
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);
let pet;

function preload() {
  // 画像の読み込み（プレースホルダー画像を使用）
  this.load.image('kurawanko', 'https://via.placeholder.com/150/FFB6C1/000000?text=Kurawanko');
}

function create() {
  // キャラクター（くらわんこ）を表示
  pet = this.add.sprite(window.innerWidth / 2, window.innerHeight * 0.3, 'kurawanko');
}

// --- ボタン処理 ---
let coins = 100; // 初期コイン

document.getElementById('btn-feed').addEventListener('click', () => {
  alert('くらわんこにごはんをあげました！');
});

document.getElementById('btn-gacha').addEventListener('click', () => {
  if (coins >= 30) {
    coins -= 30; // 30S消費
    document.getElementById('coin-count').innerText = coins;
    alert('ガチャを引きました！クーポンを獲得！');[cite: 1]
  } else {
    alert('コインが足りません！');
  }
});

document.getElementById('btn-camera').addEventListener('click', () => {
  alert('カメラ機能を起動します');[cite: 1]
});