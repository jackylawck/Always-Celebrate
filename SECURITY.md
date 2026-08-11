# 資安政策與密碼學規範 | Security Policy & Cryptographic Standards

---

## 🇭🇰 中文說明

### 1. 密碼學規格 (Cryptographic Specifications)
本項目對齊 **OWASP Top 10** 與 **ISO 27001 / ISO 27701** 資安控制指引：
* **對稱加密**：AES-GCM 256-bit (具備認證加密模式，防範密文篡改)。
* **金鑰衍生 (KDF)**：PBKDF2 使用 SHA-256 哈希演算法，疊代次數為 **600,000 次**（符合 OWASP 最新安全推薦）。
* **會話防護**：5 分鐘無操作自動清除記憶體金鑰並鎖定；連續 5 次密碼錯誤自動觸發速率限制 (Rate Limiting)。

### 2. 漏洞回報 (Vulnerability Reporting)
若您發現任何潛在的資安漏洞，歡迎透過 GitHub Issues 或私人管道聯絡創作者 **羅子淇 Jacky Law** (`https://jackylawck.github.io/jackylawck/`)。

---

## 🇬🇧 English Policy

### 1. Cryptographic Specifications
Aligned with **OWASP Standards** and **ISO 27001 / ISO 27701** guidelines:
* **Symmetric Encryption**: AES-GCM 256-bit with authenticated encryption.
* **Key Derivation Function (KDF)**: PBKDF2 with SHA-256, performing **600,000 iterations** per OWASP guidelines.
* **Session Security**: Auto-clears encryption keys from RAM after 5 minutes of inactivity; rate-limiting applies after 5 consecutive failed login attempts.

### 2. Reporting a Vulnerability
If you discover a security vulnerability, please submit an issue on GitHub or reach out directly to the maintainer **Jacky Law** (`https://jackylawck.github.io/jackylawck/`).
