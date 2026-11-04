/**
 * =========================================================================
 * 🌟 黃河路 × 外灘 // 時代精神・常慶功終端 (THE GOLDEN ERA PROTOCOL)
 * 100% Client-Side Pure JS • Cinematic 90s Neon Visuals & Pre-Celebration
 * 
 * 致敬精神：
 * 汪小姐「我是我自己的碼頭」—— 走出27號，自尊自立，逆境破局
 * 魏總「大張旗鼓，未贏先賀」—— 八十八道霸王別姬，豪邁果敢，經常慶功就能成功
 * =========================================================================
 */
(function () {
    'use strict';

    var FONT = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

    // 90 年代經典霓虹光影：至真金、進賢洋紅、夜宴翡翠綠、午夜深黑
    var C = {
        noir: '#08080c',
        gold: '#FFB800',
        goldHover: '#FFA000',
        neonRose: '#FF2A5F',
        jadeGreen: '#00F5A0',
        subText: '#CBD5E1',
        borderMuted: '#242436'
    };

    var S = {
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
    };

    function renderConsoleHeader() {
        console.log('%c[ HUANGHE ROAD × THE BUND // 時代精神・常慶功終端 (THE GOLDEN ERA PROTOCOL) ]', S.banner);
        console.log('%c「經常慶功，就能成功。」• 我是我自己的碼頭，前行何須借東風。', S.tagline);
        console.log('');

        console.log(
            '%c汪小姐【碼頭自立信條】: 走出27號，我是我自己的碼頭%c   %c魏總【八十八道霸王別姬】: 大張旗鼓，未贏先賀，經常慶功就能成功%c',
            S.archetypeDock, '',
            S.archetypeFeast, ''
        );
        console.log('');

        var manifest = [
            '┌────────────────────────────────────────────────────────────────────────┐',
            '│ 【雙重激勵哲學與常慶功心法 / Core Mindsets】                          │',
            '├────────────────────────────────────────────────────────────────────────┤',
            '│ • 碼頭法則 (The Dock)     : 走出27號，憑熱血與韌勁，做自己真正的主角。 │',
            '│ • 預祝膽魄 (The Pre-Toast): 勝利未至，排場先起；信念篤定，前程自會如期綻放。   │',
            '│ • 逆境轉化 (Crisis Flip)  : 諸暨風雨不是末路，而是個人傳奇最盛大的剪綵開場。 │',
            '└────────────────────────────────────────────────────────────────────────┘'
        ].join('\n');

        console.log('%c' + manifest, S.scriptPanel);
        console.log('');
        console.log('%c💡 終端互動指令: 輸入 celebrate.help() 或 blossom.help() 開啟專屬賦能指南 / Type celebrate.help()', S.cliBar);
    }

    function triggerCinematicGaze() {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            console.log('%c[ SYSTEM NOTICE ] 系統開啟減少動態效果，已抑制光影濾鏡。', 'color:' + C.gold + ';');
            return;
        }

        var doc = document.documentElement;
        var prevTrans = doc.style.transition;
        var prevFilter = doc.style.filter;
        var prevShadow = doc.style.boxShadow;

        doc.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        doc.style.boxShadow = 'inset 0 0 90px ' + C.gold + ', inset 0 0 140px ' + C.neonRose;
        doc.style.filter = 'contrast(1.18) saturate(1.25) sepia(0.2)';

        setTimeout(function () {
            doc.style.boxShadow = 'inset 0 0 50px ' + C.jadeGreen;
        }, 600);

        setTimeout(function () {
            doc.style.boxShadow = prevShadow;
            doc.style.filter = prevFilter;
            doc.style.transition = prevTrans;
            console.log('%c[ 🌸 萬家燈火 // 黃河路霓虹歸位・照亮每位自主自立的奮鬥者 ]', 'background:#000; color:' + C.gold + '; font-weight:bold; padding:4px 8px; font-family:' + FONT);
        }, 1500);
    }

    var api = Object.freeze({
        help: function () {
            console.log('%c[ CELEBRATE SUITE // 經典賦能與預祝指令集 ]', S.banner);
            console.log('%ccelebrate.dock()%c       - 汪小姐「碼頭法則」：走出27號，做自己的靠山 / Declare Self-Reliance', S.key, S.desc);
            console.log('%ccelebrate.toast()%c      - 魏總「八十八道霸王別姬」：未贏先慶祝，燃點心頭之火 / Pre-celebrate Audaciously', S.key, S.desc);
            console.log('%ccelebrate.reframe()%c    - 逆境破局心法：將當前挫折重塑為傳奇起點 / Reframe Setbacks to Comebacks', S.key, S.desc);
            console.log('%ccelebrate.neon()%c       - 投射 90 年代黃河路琥珀霓虹光影 / Engage Cinematic 90s Neon Glow', S.key, S.desc);
            console.log('%ccelebrate.matrix()%c     - 查看成功三階路徑（敢想、踏實、豪邁） / View The Path to Triumph', S.key, S.desc);
            return '請在下方輸入上述任一指令，體驗心靈賦能。 / Type any command above to trigger.';
        },

        dock: function () {
            console.log('%c[ ⚓ THE DOCK PROTOCOL // 走出27號・我是我自己的碼頭 ]', 'background:' + C.gold + '; color:#000; font-weight:900; font-size:12px; padding:3px 8px; font-family:' + FONT);
            console.log('');
            console.log('%c「頭銜是27號借你的，招牌是自己打下來的！\n脫下高跟鞋，踩進工廠泥水裡摸爬滾打，吃得起苦、吞得下委屈。\n我汪明珠不需要誰作靠山——我自己就是我自己的碼頭！」', 'color:' + C.gold + '; font-size:12px; line-height:1.9; font-weight:bold;');
            console.log('');
            console.log('%c[EN] "Prestigious titles are merely borrowed shine; your own harbor is built with grit and bare hands. Step out of comfort, fear no storm—you are your own sovereign anchor."', 'color:' + C.subText + '; font-style:italic;');
            return '底氣在胸，腳下有路。做自己的靠山。';
        },

        toast: function () {
            console.log('%c[ 🥂 WEI\'S AUDACIOUS TOAST // 八十八道霸王別姬・未贏先賀 ]', 'background:' + C.neonRose + '; color:#FFF; font-weight:900; font-size:12px; padding:3px 8px; font-family:' + FONT);
            console.log('');
            console.log('%c「八十八道霸王別姬擺開！大張旗鼓、未贏先賀，不是狂妄，是對勝利有絕對篤定的信念！\n只要心頭火不滅，就算騎著舊單車冒雨送貨，也是整條黃河路上最有派頭的老闆！\n記住：經常慶功，就能成功！」', 'color:' + C.neonRose + '; font-size:12px; line-height:1.9; font-weight:bold;');
            console.log('');
            console.log('%c[EN] "Eighty-eight grand dishes laid out! Pre-celebrate with unyielding audacity! When the fire in your belly burns bright, modest beginnings are just prelude. Celebrate every step—for celebration summons victory!"', 'color:' + C.subText + '; font-style:italic;');

            if (typeof window.fireConfetti === 'function') {
                window.fireConfetti();
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

            console.log('%c[ 🧱 CRISIS REFRAME MATRIX // 逆境轉化矩陣 ]', S.banner);
            console.log('%c' + matrix, S.scriptPanel);
            return '「把絆腳的石塊，鋪成金碧輝煌的紅毯。」';
        },

        matrix: function () {
            console.log('%c[ 📈 THE PATH TO TRIUMPH // 邁向成功的三階火箭 ]', S.banner);
            console.log('1. 敢想敢祝 (Anticipation)  : 用已完成式宣告目標，驅散焦慮，啟動勝利潛意識。');
            console.log('2. 踏實扎根 (Action Ground)  : 像汪小姐在工廠點數零件般專注執著，鍛造不可取代的真本領。');
            console.log('3. 豪邁慶祝 (Celebration)    : 像魏總擺席般為每個微小前進喝采——經常慶功，就能成功！');
            return '「經常慶功，就能成功。」';
        },

        neon: function () {
            triggerCinematicGaze();
            return '黃河路琥珀霓虹光影已投射。祝你的每一步，都走得生機盎然！';
        }
    });

    // 同步暴露 celebrate 與 blossom，確保兩種指令呼叫均能運作
    window.celebrate = api;
    window.blossom = api;

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(renderConsoleHeader, 350);
    } else {
        window.addEventListener('DOMContentLoaded', function () {
            setTimeout(renderConsoleHeader, 350);
        });
    }
})();
