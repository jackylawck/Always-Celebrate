/**
 * =========================================================================
 * 🌸 黃河路 × 外灘 // 繁花自渡與預祝哲學終端 (THE BLOSSOMS PROTOCOL)
 * 100% Client-Side Pure JS • Cinematic 90s Neon Visuals & Positive Mindset
 * 
 * 致敬精神：
 * 汪小姐「我是我自己的碼頭」—— 自立、韌性與自我實現
 * 魏總「大張旗鼓，未贏先賀」—— 樂觀、敢搏、慶祝即信念
 * =========================================================================
 */
(function () {
    'use strict';

    // 經典等寬字型棧
    var FONT = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

    // 90s 黃河路王家衛色調系統：至真琥珀金、進賢霓虹洋紅、夜宴翡翠綠、午夜深黑
    var C = {
        noir: '#08080c',
        gold: '#FFB800',
        goldHover: '#FFA000',
        neonRose: '#FF2A5F',
        jadeGreen: '#00F5A0',
        subText: '#D1D5DB',
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
            'padding: 5px 12px;',
            'border-left: 5px solid ' + C.neonRose + ';',
            'border-bottom: 1px solid ' + C.borderMuted + ';',
            'border-right: 1px solid ' + C.borderMuted + ';',
            'display: block;'
        ].join(''),

        archetypeDock: [
            'background: #120a02;',
            'color: ' + C.gold + ';',
            'font-family: ' + FONT + ';',
            'font-size: 11px;',
            'font-weight: bold;',
            'padding: 6px 10px;',
            'border: 1px solid ' + C.gold + ';',
            'border-radius: 3px;'
        ].join(''),

        archetypeFeast: [
            'background: #140308;',
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

    function renderBlossomsHeader() {
        console.log('%c[ HUANGHE ROAD // 繁花自渡與預祝終端 (THE BLOSSOMS RESILIENCE ENGINE) ]', S.banner);
        console.log('%c「人生的碼頭從不在別人身上，排場與勇氣都在自己手中。」• RESILIENCE & PRE-CELEBRATION', S.tagline);
        console.log('');

        console.log(
            '%c汪小姐哲學 [THE DOCK PROTOCOL]: 我是我自己的碼頭%c   %c魏總膽識 [THE TOAST AMBITION]: 越慶祝越成功，排場行先%c',
            S.archetypeDock, '',
            S.archetypeFeast, ''
        );
        console.log('');

        var manifest = [
            '┌────────────────────────────────────────────────────────────────────────┐',
            '│ 【雙重激勵哲學與預祝心法 / Core Mindsets】                            │',
            '├────────────────────────────────────────────────────────────────────────┤',
            '│ • 碼頭法則 (Wang\'s Dock) : 撕去一切附屬標籤，以自尊與專業作本，自己成就自己。│',
            '│ • 慶功膽魄 (Wei\'s Toast) : 面對未知先擺出慶祝的豪氣，心態先行，勝利隨之而至。│',
            '│ • 轉化逆境 (Crisis Flip) : 狂風暴雨非障礙，而是個人品牌重生的盛大剪綵。    │',
            '└────────────────────────────────────────────────────────────────────────┘'
        ].join('\n');

        console.log('%c' + manifest, S.scriptPanel);
        console.log('');
        console.log('%c💡 終端互動指令: 請輸入 blossom.help() 開啟專屬心靈指南 / Type blossom.help() for suite.', S.cliBar);
    }

    // 螢幕電影感琥珀霓虹光影（自動適應減弱動態偏好）
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
            console.log('%c[ 🌸 霓虹歸位 // 萬家燈火照亮自立前路・祝你成功 ]', 'background:#000; color:' + C.gold + '; font-weight:bold; padding:4px 8px; font-family:' + FONT);
        }, 1500);
    }

    // 註冊 window.blossom 互動指令集
    window.blossom = Object.freeze({
        help: function () {
            console.log('%c[ BLOSSOMS SUITE // 心靈賦能指令目錄 ]', S.banner);
            console.log('%cblossom.dock()%c       - 汪小姐「碼頭法則」：激發自立信心與自我主權 / Declare Self-Reliance', S.key, S.desc);
            console.log('%cblossom.toast()%c      - 魏總「八十八道霸王別姬」：未贏先慶祝，燃點勇氣 / Pre-celebrate Extravagantly', S.key, S.desc);
            console.log('%cblossom.reframe()%c    - 逆境破局心法：將當前低谷重塑為故事開端 / Reframe Setbacks to Comebacks', S.key, S.desc);
            console.log('%cblossom.neon()%c       - 投射王家衛電影感黃河路琥珀霓虹氛圍 / Engage Cinematic 90s Neon Glow', S.key, S.desc);
            console.log('%cblossom.matrix()%c     - 查看成功三維度矩陣（心態、行動、慶祝） / View Self-Actualization Matrix', S.key, S.desc);
            return '請在下方輸入上述任意指令，體驗專屬預祝賦能。 / Type any command above to trigger.';
        },

        dock: function () {
            console.log('%c[ ⚓ THE DOCK PROTOCOL // 我是我自己的碼頭 ]', 'background:' + C.gold + '; color:#000; font-weight:900; font-size:12px; padding:3px 8px; font-family:' + FONT);
            console.log('');
            console.log('%c「心裡有底氣，腳下就有根。\n真正的碼頭不是別人施捨的平台或頭銜，而是你在泥濘裡打滾後，依舊能親手撐起的明珠招牌。」', 'color:' + C.gold + '; font-size:12px; line-height:1.8; font-weight:bold;');
            console.log('');
            console.log('%c[EN] "I am my own harbor. My worth is never granted by patrons, but built with my own hands and resilient resolve."', 'color:' + C.subText + '; font-style:italic;');
            return '目標已錨定。無畏風雨，自己做主。';
        },

        toast: function () {
            console.log('%c[ 🥂 WEI\'S AUDACIOUS TOAST // 八十八道霸王別姬・未贏先賀 ]', 'background:' + C.neonRose + '; color:#FFF; font-weight:900; font-size:12px; padding:3px 8px; font-family:' + FONT);
            console.log('');
            console.log('%c「大張旗鼓不是狂妄，而是對自己必定成功的絕對篤定！\n只要心頭火不滅，就算騎著破單車送貨，也是整個黃河路上最有派頭的人！」', 'color:' + C.neonRose + '; font-size:12px; line-height:1.8; font-weight:bold;');
            console.log('');
            console.log('%c[EN] "Pre-celebrate with sheer audacity! When your inner fire blazes, humble beginnings are merely the prelude to triumph."', 'color:' + C.subText + '; font-style:italic;');
            
            // 同時觸發主應用的撒花慶祝特效
            if (typeof window.fireConfetti === 'function') {
                window.fireConfetti();
            }

            return '香檳已開，信心滿格！今日預祝，明日必成！';
        },

        reframe: function () {
            var matrix = [
                '┌───────────────────────┬───────────────────────┬────────────────────────┐',
                '│ 眼前困境 (Obstacle)   │ 心理重塑 (Mental Flip)│ 預祝成果 (Celebration) │',
                '├───────────────────────┼───────────────────────┼────────────────────────┤',
                '│ 別人的輕視與冷嘲熱諷  │ 褪去光環、淬鍊實力之時│ 證明自己的獨立勝券     │',
                '│ 資源匱乏、白手起家    │ 毫無包袱、放手一搏之機│ 打造屬於自己的傳奇     │',
                '│ 挫折失敗、訂單落空    │ 避開致命暗礁的幸運伏筆│ 迎來規模更大的成功機遇 │',
                '└───────────────────────┴───────────────────────┴────────────────────────┘'
            ].join('\n');

            console.log('%c[ 🧱 CRISIS REFRAME MATRIX // 逆境轉化矩陣 ]', S.banner);
            console.log('%c' + matrix, S.scriptPanel);
            return '「把絆腳的石頭，鋪成通往羅馬的大道。」';
        },

        matrix: function () {
            console.log('%c[ 📈 THE PATH TO TRIUMPH // 邁向成功的三階火箭 ]', S.banner);
            console.log('1. 敢想敢祝 (Anticipation)  : 以完成式心態宣告目標，釋放多巴胺，調降威脅認知。');
            console.log('2. 踏實自立 (Action Ground)  : 像汪小姐在工廠點算零件般精準專注，鍛造硬核實力。');
            console.log('3. 豪邁慶祝 (Celebration)    : 像魏總擺席般為每一個小進步喝采，持之以恆，終成大局。');
            return '經常慶功，就會成功。';
        },

        neon: function () {
            triggerCinematicGaze();
            return '黃河路琥珀霓虹氛圍加載中... 感受九十年代的昂揚生命力！';
        }
    });

    // 啟動加載
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(renderBlossomsHeader, 350);
    } else {
        window.addEventListener('DOMContentLoaded', function () {
            setTimeout(renderBlossomsHeader, 350);
        });
    }
})();
