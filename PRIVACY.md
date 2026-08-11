# 隱私政策與數據主權宣告 | Privacy Policy & Data Sovereignty Notice

**最後更新日期 (Last Updated): 2026-08-11**  
**項目名稱 (Project): 常慶功 Always Celebrate**

---

## 🇭🇰 中文條款

### 1. 零數據留存與零知識架構 (Zero-Knowledge Architecture)
本應用程式（常慶功 Always Celebrate）為 **100% 離線優先 (Offline-First)** 之純前端 PWA 工具：
* **零伺服器存取**：我們不設任何後端伺服器或雲端資料庫，亦不收集任何個人可識別資訊 (PII)。
* **本地端加密**：所有願望與日記內容均採用 Web Crypto API (AES-GCM 256-bit + PBKDF2 60萬次疊代) 於使用者本機瀏覽器進行加密，密文僅留存於 LocalStorage。

### 2. 反 AI 數據採集與數據主權 (Anti-AI Scraping & Data Sovereignty)
* **無 AI 模型運行**：本應用程式內部未整合、調用或運行任何人工智慧 (AI) 或大語言模型 (LLM)。
* **防 AI 採集**：透過嚴格的內容安全策略 (Content Security Policy: `connect-src 'none'`)，封殺所有出站連線。我們明確禁止任何第三方 AI 爬蟲或自動化系統抓取本應用內容用於 AI 模型訓練。

### 3. GDPR 合規聲明
根據歐盟《一般資料保護規則》(GDPR)：
* **資料最小化 (Data Minimization)**：本工具不收集、不傳輸任何個資。
* **被遺忘權 (Right to be Forgotten)**：使用者只需清除瀏覽器 LocalStorage，即可完全銷毀所有本地加密資料。

---

## 🇬🇧 English Policy

### 1. Zero-Knowledge & Zero Data Retention
**Always Celebrate** operates strictly as a pure client-side, **100% Offline-First** Progressive Web App (PWA):
* **Zero Cloud Storage**: We run no backend servers or databases. No Personally Identifiable Information (PII) is ever collected or transmitted.
* **Client-Side Encryption**: All entries and wishes are encrypted locally in your browser using Web Crypto API (AES-GCM 256-bit with 600,000 PBKDF2 iterations). 

### 2. Anti-AI Scraping & Non-AI Statement
* **No AI Integration**: This application does not incorporate, call, or utilize any Artificial Intelligence (AI) or Large Language Model (LLM) services.
* **Data Sovereignty**: Enforced by a stringent Content Security Policy (`connect-src 'none'`), all network outbound connections are blocked. Scraping or harvesting user data for machine learning or LLM training is strictly prohibited.

### 3. GDPR Compliance
In alignment with GDPR principles:
* **Privacy by Design**: Zero data collection ensures full compliance with Data Minimization requirements.
* **Right to Erasure**: Users can permanently destroy all encrypted local data at any time by clearing their browser's LocalStorage.
