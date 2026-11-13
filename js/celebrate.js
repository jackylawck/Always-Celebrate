/**
 * =========================================================================
 * @file js/celebrate.js
 * @description 黃河路 × 外灘 // 時代精神・常慶功終端 (THE GOLDEN ERA PROTOCOL)
 * @author 羅子淇 Jacky Law <https://jackylawck.github.io/jackylawck/>
 * @license MIT
 * 
 * Architecture Highlights:
 * 1. Zero-Parentheses Command Getters via Object.defineProperty (non-enumerable)
 * 2. Bundler-Safe Native Console Binding (console.log.bind)
 * 3. Deterministic DOM <style> Lifecycle, Forced Reflow & Zero-Leak Cleanup
 * 4. Idempotent Symbol Guard & Null-Prototype Token Maps
 * =========================================================================
 */
(function (global) {
    'use strict';

    // 1. 冪等性守衛：透過全局 Symbol 防止腳本重複執行，且不污染 window 屬性
    var INIT_GUARD = Symbol.for('AlwaysCelebrate.GoldenEraTerminal.v3');
    if (global[INIT_GUARD]) return;
    global[INIT_GUARD] = true;

    // 2. 保護原生列印函式：防止生產環境打包工具 (Terser/ESBuild) 誤刪日誌
    var nativeLog = global.console && typeof global.console.log === 'function'
        ? global.console.log.bind(global.console)
        : function () {};

    var FONT = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

    // 3. 無原型字典 (Object.create(null))：杜絕原型鏈污染與查找開銷
    var C = Object.assign(Object.create(null), {
        noir: '#08080c',
        gold: '#FFB800',
        goldHover: '#FFA000',
        neonRose: '#FF2A5F',
        jadeGreen: '#00F5A0',
        subText: '#CBD5E1',
        borderMuted: '#242436'
    });

    var S = Object.assign(Object.create(null), {
        banner: [
            'background: ' + C.noir + ';',
            'color: ' + C.gold + ';',
            'font-family: ' + FONT + ';',
            'font-size: 13px;',
            'font-weight: 900;',
            'padding: 8px 12px;',
            'border-left: 5px solid ' + C.gold + ';',
            'border-top: 1px solid ' + C.borderMuted + ';',
            'border-right: 1px solid ' + C.borderMuted + ';',
            'display: block;',
            'letter-spacing: 1px;'
        ].join(''),

        tagline: [
            'background: ' + C.noir + ';',
            'color: ' + C.neonRose + ';',
            'font-family: ' + FONT + ';',
            'font-size: 11px;',
            'font-weight: bold;',
            'padding: 6px 12px;',
            'border-left: 5px solid ' + C.neonRose + ';',
            'border-bottom: 1px solid ' + C.borderMuted + ';',
            'border-right: 1px solid ' + C.borderMuted + ';',
            'display: block;'
        ].join(''),

        archetypeDock: [
            'background: #160d03;',
            'color: ' + C.gold + ';',
            'font-family: ' + FONT + ';',
            'font-size: 11px;',
            'font-weight: bold;',
            'padding: 6px 10px;',
            'border: 1px solid ' + C.gold + ';',
            'border-radius: 3px;'
        ].join(''),

        archetypeFeast: [
            'background: #170308;',
            'color: ' + C.neonRose + ';',
            'font-family: ' + FONT + ';',
            'font-size: 11px;',
            'font-weight: bold;',
            'padding: 6px 10px;',
            'border: 1px solid ' + C.neonRose + ';',
            'border-radius: 3px;'
        ].join(''),

        scriptPanel: [
            'background: ' + C.noir + ';',
            'color: #F8FAFC;',
            'font-family: ' + FONT + ';',
            'font-size: 11px;',
            'line-height: 1.7;',
            'padding: 10px 14px;',
            'border-left: 5px solid ' + C.jadeGreen + ';',
            'border-right: 1px solid ' + C.borderMuted + ';',
            'border-top: 1px solid ' + C.borderMuted + ';',
            'border-bottom: 1px solid ' + C.borderMuted + ';',
            'display: block;',
            'white-space: pre;'
        ].join(''),

        cliBar: [
            'background: ' + C.noir + ';',
            'color: ' + C.jadeGreen + ';',
            'font-family: ' + FONT + ';',
            'font-size: 11px;',
            'font-weight: bold;',
            'padding: 6px 12px;',
            'border: 1px solid ' + C.borderMuted + ';',
            'border-left: 5px solid ' + C.jadeGreen + ';',
            'display: block;'
        ].join(''),

        key: 'background: ' + C.gold + '; color: #000; font-weight: 900; font-family: ' + FONT + '; padding: 2px 7px; border-radius: 2px;',
        desc: 'background: ' + C.noir + '; color: ' + C.subText + '; font-family: ' + FONT + '; padding: 2px 6px;'
    });

    // 4. 動畫狀態機與記憶體零洩漏管理器
    var fxState = {
        styleEl: null,
        cleanupTimer: null,
        lastCmdTime: 0
    };

    var STYLE_ID = 'ac-golden-era-cinematic-fx';
    var ROOT_CLASS = 'ac-golden-era-active';

    function teardownCinematicFx(silent) {
        if (fxState.cleanupTimer !== null) {
            global.clearTimeout(fxState.cleanupTimer);
            fxState.cleanupTimer = null;
        }
        var doc = global.document && global.document.documentElement;
        if (doc) {
            doc.classList.remove(ROOT_CLASS);
        }
        if (fxState.styleEl && fxState.styleEl.parentNode) {
            fxState.styleEl.parentNode.removeChild(fxState.styleEl);
        }
        fxState.styleEl = null;

        if (!silent) {
            nativeLog('%c[ 🌸 萬家燈火 // 黃河路霓虹歸位・記憶體與 DOM 節點已安全釋放 ]', 'background:#000; color:' + C.gold + '; font-weight:bold; padding:4px 8px; font-family:' + FONT);
        }
    }

    function triggerCinematicGaze() {
        if (global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            nativeLog('%c[ SYSTEM NOTICE ] 系統開啟減少動態效果，已抑制光影濾鏡。', 'color:' + C.gold + ';');
            return;
        }

        var doc = global.document && global.document.documentElement;
        var head = global.document && global.document.head;
        if (!doc || !head) return;

        // 防連擊清理：若特效正在運行，先徹底銷毀舊計時器與舊樣式節點
        teardownCinematicFx(true);

        // 動態注入獨立 Keyframes 樣式表（結束後自動移除，不殘留內聯樣式）
        var styleEl = global.document.createElement('style');
        styleEl.id = STYLE_ID;
        styleEl.textContent = [
            '@keyframes acGoldenEraPulse {',
            '  0%   { box-shadow: inset 0 0 0px transparent; filter: contrast(1) saturate(1) sepia(0); }',
            '  25%  { box-shadow: inset 0 0 95px ' + C.gold + ', inset 0 0 150px ' + C.neonRose + '; filter: contrast(1.18) saturate(1.28) sepia(0.22); }',
            '  65%  { box-shadow: inset 0 0 65px ' + C.jadeGreen + ', inset 0 0 110px ' + C.gold + '; filter: contrast(1.12) saturate(1.18) sepia(0.12); }',
            '  100% { box-shadow: inset 0 0 0px transparent; filter: contrast(1) saturate(1) sepia(0); }',
            '}',
            'html.' + ROOT_CLASS + ' {',
            '  animation: acGoldenEraPulse 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;',
            '}'
        ].join('\n');

        head.appendChild(styleEl);
        fxState.styleEl = styleEl;

        // 強制瀏覽器同步重繪 (Force Reflow)，確保連續觸發時動畫從第 0 幀重新播放
        void doc.offsetWidth;
        doc.classList.add(ROOT_CLASS);

        fxState.cleanupTimer = global.setTimeout(function () {
            teardownCinematicFx(false);
        }, 1600);
    }

    // 頁面卸載時確保零殘留
    if (typeof global.addEventListener === 'function') {
        global.addEventListener('pagehide', function () {
            teardownCinematicFx(true);
        }, { once: true });
    }

    function renderConsoleHeader() {
        nativeLog('%c[ HUANGHE ROAD × THE BUND // 時代精神・常慶功終端 (THE GOLDEN ERA PROTOCOL) ]', S.banner);
        nativeLog('%c「經常慶功，就能成功。」• 我是我自己的碼頭，前行何須借東風。', S.tagline);
        nativeLog('');

        nativeLog(
            '%c汪小姐【碼頭自立信條】: 走出27號，我是我自己的碼頭%c   %c魏總【八十八道霸王別姬】: 大張旗鼓，未贏先賀，經常慶功就能成功%c',
            S.archetypeDock, '',
            S.archetypeFeast, ''
        );
        nativeLog('');

        var manifest = [
            '┌────────────────────────────────────────────────────────────────────────┐',
            '│ 【雙重激勵哲學與常慶功心法 / Core Mindsets】                          │',
            '├────────────────────────────────────────────────────────────────────────┤',
            '│ • 碼頭法則 (The Dock)     : 走出27號，憑熱血與韌勁，做自己真正的主角。 │',
            '│ • 預祝膽魄 (The Pre-Toast): 勝利未至，排場先起；信念篤定，前程自會如期綻放。   │',
            '│ • 逆境轉化 (Crisis Flip)  : 諸暨風雨不是末路，而是個人傳奇最盛大的剪綵開場。 │',
            '└────────────────────────────────────────────────────────────────────────┘'
        ].join('\n');

        nativeLog('%c' + manifest, S.scriptPanel);
        nativeLog('');
        nativeLog('%c💡 免括號極速指令: 直接輸入 help、dock、toast、neon 或 GOLDEN_ERA 按 Enter 即可觸發！', S.cliBar);
    }

    // 5. 核心指令實作（回傳純淨狀態字串，確保 Console 顯示優雅）
    var api = Object.freeze({
        help: function () {
            nativeLog('%c[ CELEBRATE SUITE // 免括號極速賦能指令集 (大小寫皆可) ]', S.banner);
            nativeLog('%cDOCK%c / %cdock%c             - 汪小姐「碼頭法則」：走出27號，做自己的靠山', S.key, S.desc, S.key, S.desc);
            nativeLog('%cTOAST%c / %ctoast%c           - 魏總「八十八道霸王別姬」：未贏先慶祝，燃點心頭之火', S.key, S.desc, S.key, S.desc);
            nativeLog('%cREFRAME%c / %creframe%c       - 逆境破局心法：將當前挫折重塑為傳奇起點', S.key, S.desc, S.key, S.desc);
            nativeLog('%cNEON%c / %cneon%c             - 投射 90 年代黃河路琥珀霓虹光影（自動釋放 DOM）', S.key, S.desc, S.key, S.desc);
            nativeLog('%cMATRIX%c / %cmatrix%c         - 查看成功三階路徑（敢想、踏實、豪邁）', S.key, S.desc, S.key, S.desc);
            nativeLog('%cGOLDEN_ERA%c / %cgolden_era%c - 終極排場：黃河路霓虹光影 × 八十八道霸王別姬全屏慶功！', S.key, S.desc, S.key, S.desc);
            return '直接輸入上方任一英文單字（無需括號）按 Enter 即可執行；亦支援 celebrate.dock() 傳統呼叫。';
        },

        dock: function () {
            nativeLog('%c[ ⚓ THE DOCK PROTOCOL // 走出27號・我是我自己的碼頭 ]', 'background:' + C.gold + '; color:#000; font-weight:900; font-size:12px; padding:3px 8px; font-family:' + FONT);
            nativeLog('');
            nativeLog('%c「頭銜是27號借你的，招牌是自己打下來的！\n脫下高跟鞋，踩進工廠泥水裡摸爬滾打，吃得起苦、吞得下委屈。\n我汪明珠不需要誰作靠山——我自己就是我自己的碼頭！」', 'color:' + C.gold + '; font-size:12px; line-height:1.9; font-weight:bold;');
            nativeLog('');
            nativeLog('%c[EN] "Prestigious titles are merely borrowed shine; your own harbor is built with grit and bare hands. Step out of comfort, fear no storm—you are your own sovereign anchor."', 'color:' + C.subText + '; font-style:italic;');
            return '底氣在胸，腳下有路。做自己的靠山。';
        },

        toast: function () {
            nativeLog('%c[ 🥂 WEI\'S AUDACIOUS TOAST // 八十八道霸王別姬・未贏先賀 ]', 'background:' + C.neonRose + '; color:#FFF; font-weight:900; font-size:12px; padding:3px 8px; font-family:' + FONT);
            nativeLog('');
            nativeLog('%c「八十八道霸王別姬擺開！大張旗鼓、未贏先賀，不是狂妄，是對勝利有絕對篤定的信念！\n只要心頭火不滅，就算騎著舊單車冒雨送貨，也是整條黃河路上最有派頭的老闆！\n記住：經常慶功，就能成功！」', 'color:' + C.neonRose + '; font-size:12px; line-height:1.9; font-weight:bold;');
            nativeLog('');
            nativeLog('%c[EN] "Eighty-eight grand dishes laid out! Pre-celebrate with unyielding audacity! When the fire in your belly burns bright, modest beginnings are just prelude. Celebrate every step—for celebration summons victory!"', 'color:' + C.subText + '; font-style:italic;');

            if (typeof global.fireConfetti === 'function') {
                global.fireConfetti();
            }

            return '八十八道霸王別姬開席，信心滿載！經常慶功，就能成功！🎉';
        },

        reframe: function () {
            var matrix = [
                '┌───────────────────────┬───────────────────────┬────────────────────────┐',
                '│ 眼前困境 (Obstacle)   │ 心理重塑 (Mental Flip)│ 預祝成果 (Celebration) │',
                '├───────────────────────┼───────────────────────┼────────────────────────┤',
                '│ 跌入低谷、走出27號    │ 撕去光環、自立自強起步│ 贏回尊嚴，做自己的碼頭 │',
                '│ 資源短缺、白手空拳起家│ 毫無包袱、放手一搏良機│ 親手打造屬於自己的招牌 │',
                '│ 諸暨風雨、訂單橫生波折│ 淬鍊筋骨的傳奇伏筆    │ 迎來翻倍突破的盛大勝券 │',
                '└───────────────────────┴───────────────────────┴────────────────────────┘'
            ].join('\n');

            nativeLog('%c[ 🧱 CRISIS REFRAME MATRIX // 逆境轉化矩陣 ]', S.banner);
            nativeLog('%c' + matrix, S.scriptPanel);
            return '「把絆腳的石塊，鋪成金碧輝煌的紅毯。」';
        },

        matrix: function () {
            nativeLog('%c[ 📈 THE PATH TO TRIUMPH // 邁向成功的三階火箭 ]', S.banner);
            nativeLog('1. 敢想敢祝 (Anticipation)  : 用已完成式宣告目標，驅散焦慮，啟動勝利潛意識。');
            nativeLog('2. 踏實扎根 (Action Ground)  : 像汪小姐在工廠點數零件般專注執著，鍛造不可取代的真本領。');
            nativeLog('3. 豪邁慶祝 (Celebration)    : 像魏總擺席般為每個微小前進喝采——經常慶功，就能成功！');
            return '「經常慶功，就能成功。」';
        },

        neon: function () {
            triggerCinematicGaze();
            return '黃河路琥珀霓虹光影已投射（1.6秒後自動清理樣式節點）。';
        },

        goldenEra: function () {
            triggerCinematicGaze();
            api.dock();
            api.toast();
            return '🌟 時代精神全開：我是我自己的碼頭 × 經常慶功，就能成功！';
        }
    });

    // 6. 註冊傳統命名空間（不可枚舉，確保 celebrate.dock() 呼叫乾淨無副作用）
    Object.defineProperty(global, 'celebrate', {
        value: api,
        writable: false,
        enumerable: false,
        configurable: false
    });

    // 7. 註冊免括號全域 Getter 指令（含 150ms 防誤觸節流與原生屬性衝突檢查）
    function registerZeroParenCommand(names, handler) {
        names.forEach(function (name) {
            if (Object.prototype.hasOwnProperty.call(global, name)) return;
            Object.defineProperty(global, name, {
                enumerable: false,
                configurable: true,
                get: function () {
                    var now = Date.now();
                    if (now - fxState.lastCmdTime < 150) {
                        return '⏳ 指令冷卻中...';
                    }
                    fxState.lastCmdTime = now;
                    return handler();
                }
            });
        });
    }

    registerZeroParenCommand(['HELP', 'help', 'CELEBRATE'], api.help);
    registerZeroParenCommand(['DOCK', 'dock'], api.dock);
    registerZeroParenCommand(['TOAST', 'toast'], api.toast);
    registerZeroParenCommand(['REFRAME', 'reframe'], api.reframe);
    registerZeroParenCommand(['MATRIX', 'matrix'], api.matrix);
    registerZeroParenCommand(['NEON', 'neon'], api.neon);
    registerZeroParenCommand(['GOLDEN_ERA', 'golden_era'], api.goldenEra);

    // 8. 啟動控制台歡迎面板
    if (global.document && (global.document.readyState === 'complete' || global.document.readyState === 'interactive')) {
        global.setTimeout(renderConsoleHeader, 350);
    } else if (typeof global.addEventListener === 'function') {
        global.addEventListener('DOMContentLoaded', function () {
            global.setTimeout(renderConsoleHeader, 350);
        }, { once: true });
    }
})(window);
