# 常慶功 Always Celebrate 🎉
> **經常慶功，就會成功。** | **Celebrate today, succeed tomorrow.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Privacy First](https://img.shields.io/badge/Privacy-Zero--Knowledge-green.svg)](#-資安與隱私架構--security--privacy-architecture)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline--First-blue.svg)](#-pwa-離線與手機安裝--pwa--offline-first)
[![Security Standard](https://img.shields.io/badge/OWASP-600k%20PBKDF2%20%2B%20AES--GCM%20%2B%20HMAC-orange.svg)](#-資安與隱私架構--security--privacy-architecture)

[繁體中文](#-中文說明) | [English](#-english-description)

---

## 🇭🇰 中文說明

**常慶功 (Always Celebrate)** 是一款結合**極致零知識資安 (Zero-Knowledge Security)** 與**心理學「預祝法則」(Pre-Celebration Mindset)** 的企業級離線日記與願望艙 PWA 應用。

本專案旨在為現代人在 AI 時代提供一個 100% 安全、純本地端、零數據上雲的個人心靈避風港與願望管理工具。

### ✨ 核心亮點

* 🔒 **零知識資安架構 (Zero-Knowledge Architecture)**：採用 **AES-GCM 256-bit** 端到端本地加密，金鑰透過 **PBKDF2 (600,000 次疊代搭配 16-byte 隨機 Salt)** 衍生，並結合 **HMAC-SHA256 數位簽章** 確保備份防篡改。密碼與內容僅存於本機記憶體，零數據上雲。
* 🛡️ **防 AI 數據採集 (Anti-AI Scraping)**：配置極嚴格的 `Content Security Policy (connect-src 'none')`，徹底封殺所有網絡出站連線，確保個人願望與私密日記絕不被外部 LLM 爬蟲採集或訓練。
* 🎯 **預祝法則與心理賦能 (Pre-Celebration Engine)**：依據日本「前祝いの法則」心法，引導使用者運用「已完成的肯定句」撰寫目標，透過情緒轉化調降威脅感知（Threat Perception），驅動實質執行力。
* 🧱 **逆境轉化與未來信箱 (Crisis Flip & Time Capsule)**：提供「逆境轉化卡」（將障礙/牆重塑為機會/門）與「未來慶功信箱」，協助個人與團隊進行心理韌性覆盤。
* 📱 **PWA 離線秒開 (Offline-First Service Worker)**：完整註冊 `sw.js` 快取，無網路環境（飛機、地鐵）下 100% 可用。
* 💾 **企業級數據備援 (Encrypted Backup & Recovery)**：支援一鍵匯出與還原經 AES-GCM + HMAC 簽章加密的 `.alwayscelebrate` 備份檔，跨裝置遷移安全無憂。
* ⌛ **閒置自動鎖定與防暴力破解 (Enterprise DLP Guard)**：無操作 5 分鐘自動鎖定並清除記憶體金鑰；連續 5 次密碼錯誤自動觸發 30 秒速率限制（Rate Limiting）。

---

### 🚀 快速開始與使用指南

1. **開啟網頁 / PWA**：造訪 [https://jackylawck.github.io/Always-Celebrate/](https://jackylawck.github.io/Always-Celebrate/)。
2. **設置主密碼**：輸入你的專屬 Master Password 解鎖保險庫（請牢記，系統無法重置密碼）。
3. **選擇預祝模式**：
   * **✨ 30秒快祝**：以肯定句寫下願望（例：「太棒了！我順利完成了專案慶功！」）。
   * **🧱 逆境轉化**：寫下當前挑戰，並預祝這件事帶來的轉機與收穫。
   * **✉️ 未來信**：設定未來日期，撰寫給達成目標後自己的慶功信。
4. **存檔與慶功**：點擊 `✨ 加密預祝並慶功` (快捷鍵：`Ctrl + Enter`)，資料即刻完成本地加密持久化並觸發慶功特效。

---

## 🇬🇧 English Description

**Always Celebrate** is an enterprise-grade, zero-knowledge, offline-first Web Application combining **military-grade Web Crypto API encryption** with the **Pre-Celebration Mindset** (mental simulation for goal achievement).

Built for privacy-conscious users in the AI era, it serves as a pure local sanctuary where your personal goals, entries, and future aspirations remain completely isolated from cloud databases and AI scraping crawlers.

### ✨ Key Features

* 🔒 **Zero-Knowledge Architecture**: Powered by **AES-GCM 256-bit encryption** with **PBKDF2 key derivation (600,000 iterations with unique 16-byte random salt)** and **HMAC-SHA256 signature verification**. Keys exist exclusively in local RAM.
* 🛡️ **Anti-AI Scraping Shield**: Enforces a strict Content Security Policy (`connect-src 'none'`), blocking all outbound network requests. Guaranteed zero cloud leakage and zero LLM training data harvesting.
* 🎯 **Pre-Celebration Engine**: Harnesses cognitive mental simulation by encouraging users to frame future objectives as *already achieved facts*, reducing anxiety and fostering execution resilience.
* 🧱 **Crisis Flip & Time Capsule**: Structural workflows to reframe current obstacles into setup stories for future victory, alongside date-locked letters to your future self.
* 📱 **PWA Offline-First**: Integrated Service Worker (`sw.js`) guarantees 100% instant loading without internet connectivity (e.g., in flight or subway).
* 💾 **Encrypted Backup & Restore**: Port encrypted vault backups (`.alwayscelebrate` files) safely across devices with cryptographic tamper-proofing.
* ⌛ **Enterprise DLP Controls**: Auto-locks vault after 5 minutes of inactivity; features rate-limiting against brute-force password guessing.

---

### 🛡️ 資安與隱私架構 / Security & Privacy Architecture

```text
[ User Master Password ]
          │
          ▼  (PBKDF2: 600,000 Iterations / SHA-256 + 16-byte Random Salt)
[ 256-bit AES-GCM & HMAC Keys (RAM Only) ]
          │
          ├───► Encrypt & Sign (HMAC) ───► LocalStorage (AES Ciphertext Blob)
          │
          └───► Verify & Decrypt ───► Local UI Display

```
 * **Content Security Policy**: default-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'none'; frame-ancestors 'none';
 * **Storage Sovereignty**: Data is stored locally in localStorage as encrypted AES-GCM + HMAC blobs.
### 📱 PWA 離線與手機安裝 / PWA & Mobile Installation
 * **iOS (Safari)**: Tap Share button ➔ Select Add to Home Screen.
 * **Android (Chrome)**: Tap Menu (three dots) ➔ Select Install app or Add to Home Screen.
### 📄 授權條款 / License
This project is open-source software released under the MIT License. 100% free for non-commercial and educational use.
<!-- Code-Level Author & SEO Attribution -->
<!-- Designed and Developed by Jacky Law 羅子淇 (https://jackylawck.github.io/jackylawck/) -->