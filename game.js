(() => {
  'use strict';

  /* =========================================================
     1. 三章语言学旅程数据（大白话提示 + 括号内学术名词）
     ========================================================= */
  const CHAPTERS = [
    /* ---------- Ch 1: 文具店 · Pragmatics ---------- */
    {
      id: 1,
      branch: 'Pragmatics',
      wipeText: 'Stop 1: Ink & Paper Stationery ✏️',
      feedName: 'INK & PAPER · WINDOW POSTER',
      brand: 'Ink & Paper',
      product: 'dotted study notebook',
      sponsor: 'STATIONERY · PRAGMATICS',
      trick: 'Sneaky Loophole Words (Pragmatic Hedging)',
      bubbleStart: '100% better grades?! Tap 2 words that give the seller an excuse!',
      ad: [
        { text: 'Get ' },
        { text: 'up to', flag: true, subNote: 'can mean 0%!', line: '“Up to 100%” legally includes 0%!' },
        { text: ' 100% ' },
        { text: 'better', decoy: true, decoyLine: '“Better” is a normal word—find the seller’s escape excuse!' },
        { text: ' grades! ' },
        { text: 'Virtually', flag: true, subNote: 'no promise!', line: '“Virtually” sounds easy, but promises nothing!' },
        { text: ' effortless ' },
        { text: 'notes', decoy: true, decoyLine: '“Notes” is just the item—look for escape-hatch words!' },
        { text: '.' }
      ],
      spotPrompt: 'Tap 2 “escape-hatch” words that let the seller dodge a real promise (avoid normal words!).',
      spotPromptZh: '點擊廣告中 2 個幫商家「留後路／推卸責任」的詞語（避開普通詞彙！）。',
      spotLesson: 'You found the loopholes! “Up to” and “virtually” make you expect 100% while hiding a 0% escape excuse (Pragmatic Hedging).',
      file: [
        { label: 'Real item: 120 dotted pages & color tabs', status: 'yes' },
        { label: 'Grade test proof: 0 studies done', status: 'none', claim: true }
      ],
      fileQuestion: '0 grade tests! What trick is this ad playing?',
      fileQuestionZh: '成績測試數據為 0！這則廣告使用了什麼語言套路？',
      options: [
        { label: '🕵️ Sneaky Loophole Words (Pragmatic Hedging)', correct: true },
        { label: '📊 Proven Lab Results (Scientific Fact)', correct: false },
        { label: '🔊 Catchy Sound Effects (Phonetics)', correct: false }
      ],
      hint: 'Does the ad actually guarantee 100%, or leave an excuse?',
      fileRileyLine: 'Aha! Big hint, zero promise.',
      fileLesson: 'Nailed it! These words plant a big idea in your head without making a real promise (Implicature & Pragmatic Hedging).',
      facts: 'Real facts: 120 dotted pages ✓ · color tabs ✓',
      strips: [
        { key: 'good', text: 'Organize revision with 120 dotted pages and color tabs.', correct: true,
          checks: { fact: true, action: true } },
        { key: 'trick', text: 'Up to 100% higher grades with virtually zero work!',
          mood: 'concerned', line: 'Still using sneaky loopholes!',
          note: 'Remove “up to” and “virtually”.',
          checks: { fact: false, action: true } },
        { key: 'dry', text: 'A5 notebook with 120 dotted pages.',
          mood: 'considering', line: 'True, but how does it help me study?',
          note: 'Tell students how to use it.',
          checks: { fact: true, action: false } }
      ],
      beforeWhy: 'Uses “up to” & “virtually” as sneaky loopholes (Pragmatic Hedging).',
      afterWhy: 'Highlights real notebook features students can actually use.',
      banned: ['up to', 'virtually', '100%', 'guaranteed', 'effortless']
    },

    /* ---------- Ch 2: 汉堡店 · Phonetics ---------- */
    {
      id: 2,
      branch: 'Phonetics',
      wipeText: 'Next Stop: Sizzle Diner 🍔',
      feedName: 'SIZZLE DINER · MENU BOARD',
      brand: 'Sizzle Diner',
      product: 'fried potato bites',
      sponsor: 'DINER · PHONETICS',
      trick: 'Mouth-Watering Sound Effects (Sound Symbolism & Alliteration)',
      bubbleStart: 'Hear those crunchy sounds? Tap 3 words that make you hungry!',
      hasPhoneticTools: true,
      spokenAd: 'Crispy, Crunchy, Sizzling Pure Perfection — served hot.',
      strippedText: 'KITCHEN RECEIPT: Deep-fried potato patty + oil + salt. Served hot.',
      ad: [
        { text: 'Crispy, Crunchy', flag: true, subNote: '/k/ crunch sound!', line: 'Sharp /k/ sounds mimic biting fried food!' },
        { text: ', ' },
        { text: 'Sizzling', flag: true, subNote: '/s/ frying sound!', line: 'Hissing /s/ & /z/ mimic hot oil in a pan!' },
        { text: ' ' },
        { text: 'Pure Perfection', flag: true, subNote: '/p/ punchy beat!', line: 'Punchy /p/ sounds distract you from the ingredients!' },
        { text: ' — served ' },
        { text: 'hot', decoy: true, decoyLine: '“Hot” is just temperature—find the flashy sound effects!' },
        { text: '.' }
      ],
      spotPrompt: 'Test the sound buttons, then tap 3 words using flashy sounds to make you hungry.',
      spotPromptZh: '先試按上方音效按鈕，再點擊廣告中 3 個用擬聲詞讓你流口水的詞語。',
      spotLesson: 'Nice ears! Sharp /k/, /p/, and hissing /s/ sounds mimic crunchy, sizzling food so you forget to check the ingredients (Sound Symbolism).',
      file: [
        { label: 'Actual food: potato, flour, oil, salt (480 kcal)', status: 'yes' },
        { label: 'Nutrition info in headline: None', status: 'none', claim: true }
      ],
      fileQuestion: 'Zero nutrition info! Why repeat /k/, /s/, and /p/ sounds?',
      fileQuestionZh: '完全沒有營養資訊！為什麼要重複 /k/、/s/ 和 /p/ 的發音？',
      options: [
        { label: '🔊 Mouth-Watering Sound Effects (Sound Symbolism & Alliteration)', correct: true },
        { label: '🥗 Proof That It’s Healthy (Nutritional Fact)', correct: false },
        { label: '⏰ Fake Countdown Pressure (Imperatives)', correct: false }
      ],
      hint: 'Listen to how the letters sound vs. what is actually inside.',
      fileRileyLine: 'My ears got hungry before I checked the food!',
      fileLesson: 'Spot on! Repeating punchy sounds triggers cravings without giving real food facts (Alliteration & Sound Symbolism).',
      facts: 'Real facts: seasoned fried potato bites ✓ · served hot ✓ · 480 kcal ✓',
      strips: [
        { key: 'good', text: 'Hot seasoned potato bites — freshly fried, 480 kcal.', correct: true,
          checks: { fact: true, action: true } },
        { key: 'trick', text: 'Popping, Peppy, Sizzling Crunch Explosion!',
          mood: 'concerned', line: 'Still zero idea what food this is!',
          note: 'Still pure sound hype, no real food.',
          checks: { fact: false, action: true } },
        { key: 'dry', text: 'Potato, oil, salt, 480 kcal.',
          mood: 'considering', line: 'Honest, but reads like a lab label!',
          note: 'Make it sound like real food.',
          checks: { fact: true, action: false } }
      ],
      beforeWhy: 'Uses /k/, /p/, /s/ sound effects to hide plain ingredients (Phonetics).',
      afterWhy: 'Names the actual food clearly and honestly.',
      banned: ['crispy', 'crunchy', 'sizzling', 'perfection', 'popping']
    },

    /* ---------- Ch 3: 球鞋店 · Syntax ---------- */
    {
      id: 3,
      branch: 'Syntax',
      wipeText: 'Final Stop: Neon Kicks 👟',
      feedName: 'NEON KICKS · FLASH SALE',
      brand: 'Neon Kicks',
      product: 'foam running shoes',
      sponsor: 'SNEAKERS · SYNTAX',
      trick: 'Hiding Who Did It + Bossy Commands (Agentless Passive & Imperatives)',
      bubbleStart: 'Timer’s ticking! Tap 1 word hiding WHO proved it + 2 bossy orders!',
      hasTimer: true,
      ad: [
        { text: 'PROVEN', flag: true, subNote: 'by whom?!', line: 'Who proved it?! It hides the source!' },
        { text: ' to boost speed! ' },
        { text: 'ACT NOW', flag: true, subNote: 'bossy order!', line: 'A bossy command rushing you so you don’t think!' },
        { text: ' — ' },
        { text: 'DON’T miss out', flag: true, subNote: 'panic order!', line: 'Another bossy order trying to make you panic!' },
        { text: '! ' },
        { text: 'Sizes 5–12', decoy: true, decoyLine: 'Sizes 5–12 is a real fact—find the pushy grammar!' },
        { text: '.' }
      ],
      spotPrompt: 'Stop the fake timer! Tap 1 word hiding WHO proved it + 2 bossy commands.',
      spotPromptZh: '凍結假倒數！點擊 1 個隱藏「由誰證明」的詞，以及 2 個催促你下單的命令詞。',
      spotLesson: 'Timer frozen! “PROVEN” hides who tested it (Agentless Passive), while “ACT NOW” bosses you around so you don’t think (Imperatives).',
      file: [
        { label: 'Real spec: 240g foam sole · regular price all month', status: 'yes' },
        { label: '“PROVEN” claim: Tested by 2 store staff only', status: 'false', claim: true }
      ],
      fileQuestion: 'Only 2 store staff tested it! Why write “PROVEN” without saying who?',
      fileQuestionZh: '只有 2 名店員測試過！為什麼只寫「PROVEN」卻不寫是由誰證明的？',
      options: [
        { label: '🙈 Hiding Who Did It + Bossy Orders (Agentless Passive & Imperatives)', correct: true },
        { label: '🔊 Fun Rhyming Words (Phonetic Rhyme)', correct: false },
        { label: '🎁 Free Gift Promise (Pragmatic Hedging)', correct: false }
      ],
      hint: 'Ask yourself: Proven BY WHOM?',
      fileRileyLine: 'Proven by… two store staff?! Good catch!',
      fileLesson: 'Exactly! Dropping “by whom” makes a weak test look like a big fact (Agentless Passive), and commands rush you (Imperatives).',
      facts: 'Real facts: 240g lightweight foam ✓ · sizes 5–12 ✓ · available all month ✓',
      strips: [
        { key: 'good', text: 'Run lighter in 240g foam runners. Sizes 5–12 in store.', correct: true,
          checks: { fact: true, action: true } },
        { key: 'trick', text: 'TESTED to win races! GRAB YOURS before midnight!',
          mood: 'concerned', line: 'Tested by who? Why the panic?',
          note: 'Still hides who tested it + fake rush.',
          checks: { fact: false, action: true } },
        { key: 'dry', text: '240g shoe. Sizes 5–12.',
          mood: 'considering', line: 'True, but tell runners why that helps.',
          note: 'Connect the 240g weight to running.',
          checks: { fact: true, action: false } }
      ],
      beforeWhy: 'Hides weak proof (“PROVEN”) + forces panic with bossy orders (Syntax).',
      afterWhy: 'Gives real shoe weight without fake countdowns.',
      banned: ['proven', 'tested', 'act now', 'hurry', 'miss out', 'midnight']
    }
  ];

  const STATUS = {
    yes:   { mark: '✓', text: 'Verified' },
    none:  { mark: '—', text: 'No proof' },
    false: { mark: '✗', text: 'False' }
  };

  const MOODS = {
    neutral:     { browL: 'M70 102 L92 100', browR: 'M108 100 L130 102', mouth: 'M88 140 Q100 148 112 140' },
    happy:       { browL: 'M70 98 L92 95',   browR: 'M108 95 L130 98',   mouth: 'M84 136 Q100 156 116 136' },
    concerned:   { browL: 'M70 104 L92 96',  browR: 'M108 96 L130 104',  mouth: 'M88 146 Q100 136 112 146' },
    considering: { browL: 'M70 96 L92 98',   browR: 'M108 102 L130 102', mouth: 'M90 143 L112 139' }
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const el = {
    reset: $('#reset-btn'),
    scoreBadge: $('#score-badge'),
    scoreVal: $('#score-val'),
    trustBadge: $('#trust-badge'),
    trustVal: $('#trust-val'),
    wall: $('#wall'),
    sceneProps: $('#scene-props'),
    fxLayer: $('#fx-layer'),
    streetWipe: $('#street-wipe'),
    wipeLabel: $('#wipe-label'),
    screen: $('#screen'),
    feedName: $('#feed-name'),
    timerBadge: $('#timer-badge'),
    sponsor: $('#sponsor'),
    stamp: $('#stamp'),
    cluePill: $('#clue-pill'),
    adText: $('#ad-text'),
    soundwave: $('#soundwave'),
    chTools: $('#ch-tools'),
    brand: $('#brand'),
    bubble: $('#bubble'),
    mouth: $('#mouth'),
    browL: $('#brow-l'),
    browR: $('#brow-r'),
    stepTag: $('#step-tag'),
    instruction: $('#instruction'),
    spotLesson: $('#spot-lesson'),
    openFile: $('#open-file-btn'),
    fileList: $('#file-list'),
    answerRow: $('#answer-row'),
    fileLesson: $('#file-lesson'),
    toHeadline: $('#to-headline-btn'),
    strips: $('#strips'),
    facts: $('#facts'),
    publish: $('#publish-btn'),
    note: $('#note'),
    beforeText: $('#before-text'),
    beforeWhy: $('#before-why'),
    afterText: $('#after-text'),
    afterWhy: $('#after-why'),
    write: $('#write-btn'),
    ownFacts: $('#own-facts'),
    ownForm: $('#own-form'),
    ownInput: $('#own-input'),
    ownNote: $('#own-note'),
    summary: $('#summary'),
    finalRank: $('#final-rank'),
    again: $('#again-btn'),
    live: $('#live')
  };

  const jumpPills = $$('[data-jump]');
  const nextButtons = $$('.next-btn');

  const state = {
    index: 0,
    act: 1,
    spottedSet: new Set(),
    stripped: false,
    answered: false,
    selected: null,
    tried: new Set(),
    mistakes: 0,
    score: 0,
    trust: 100,
    results: [],
    timerId: null,
    timeLeft: 15
  };

  const current = () => CHAPTERS[state.index];
  const originalText = () => current().ad.map((p) => p.text).join('');
  const totalTargets = () => current().ad.filter((p) => p.flag).length;
  const correctStrip = () => current().strips.find((s) => s.correct);
  const findStrip = (key) => current().strips.find((s) => s.key === key);

  /* =========================================================
     Web Audio 音效 + 游戏化动画（飘字 / 彩带 / 积分）
     ========================================================= */
  let audioCtx = null;
  function playTone(freq, duration, type = 'sine', vol = 0.14) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(vol, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (_) {}
  }

  const sfx = {
    spot: () => {
      playTone(540, 0.1, 'triangle', 0.15);
      setTimeout(() => playTone(720, 0.14, 'triangle', 0.15), 70);
    },
    tick: () => playTone(880, 0.04, 'sine', 0.04),
    defuse: () => {
      playTone(440, 0.1, 'triangle', 0.14);
      setTimeout(() => playTone(660, 0.16, 'triangle', 0.15), 80);
    },
    error: () => {
      playTone(160, 0.18, 'sawtooth', 0.14);
      setTimeout(() => playTone(125, 0.22, 'sawtooth', 0.14), 100);
    },
    publish: () => {
      playTone(523, 0.12, 'triangle', 0.14);
      setTimeout(() => playTone(659, 0.12, 'triangle', 0.14), 90);
      setTimeout(() => playTone(784, 0.14, 'triangle', 0.16), 180);
      setTimeout(() => playTone(1046, 0.28, 'triangle', 0.18), 270);
    }
  };

  function spawnFloat(text, bg = 'var(--lime)') {
    const badge = document.createElement('div');
    badge.className = 'float-badge';
    badge.textContent = text;
    badge.style.background = bg;
    el.fxLayer.appendChild(badge);
    setTimeout(() => badge.remove(), 980);
  }

  function burstConfetti() {
    const colors = ['#c8e85a', '#f3d27a', '#8fd3f0', '#e8907e', '#b9acdf'];
    for (let i = 0; i < 24; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = (35 + Math.random() * 30) + '%';
      piece.style.top = '45%';
      piece.style.background = colors[i % colors.length];
      piece.style.setProperty('--dx', ((Math.random() - 0.5) * 340) + 'px');
      piece.style.setProperty('--dy', ((Math.random() - 0.7) * 260) + 'px');
      el.fxLayer.appendChild(piece);
      setTimeout(() => piece.remove(), 1150);
    }
  }

  function addScore(pts) {
    state.score = Math.max(0, state.score + pts);
    el.scoreVal.textContent = state.score;
    pop(el.scoreBadge);
  }

  function pop(node) {
    node.classList.remove('pop');
    void node.offsetWidth;
    node.classList.add('pop');
  }

  function shakeScreen() {
    el.screen.classList.remove('shake');
    void el.screen.offsetWidth;
    el.screen.classList.add('shake');
  }

  function slamStamp() {
    el.stamp.classList.remove('slam');
    void el.stamp.offsetWidth;
    el.stamp.classList.add('slam');
  }

  function changeTrust(delta) {
    state.trust = Math.max(0, Math.min(100, state.trust + delta));
    el.trustVal.textContent = state.trust;
    el.trustBadge.classList.toggle('low', state.trust <= 60);
    if (delta !== 0) pop(el.trustBadge);
  }

  function setMood(name) {
    const m = MOODS[name] || MOODS.neutral;
    el.browL.setAttribute('d', m.browL);
    el.browR.setAttribute('d', m.browR);
    el.mouth.setAttribute('d', m.mouth);
  }

  function say(text) {
    el.bubble.textContent = text;
    el.bubble.hidden = false;
    pop(el.bubble);
  }

  function hush() { el.bubble.hidden = true; }

  function setStamp(label, kind) {
    el.stamp.textContent = label;
    el.stamp.dataset.kind = kind;
  }

  function showText(text, label, kind) {
    el.adText.replaceChildren(document.createTextNode(text));
    setStamp(label, kind);
    pop(el.adText);
  }

  function stopTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    el.soundwave.hidden = true;
  }

  /* =========================================================
     三章墙面专属 SVG 场景道具
     ========================================================= */
  function renderSceneProps(chId) {
    if (chId === 1) {
      el.sceneProps.innerHTML = `
        <svg viewBox="0 0 800 340" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <g class="prop-float" transform="translate(26, 32)">
            <rect x="0" y="0" width="54" height="68" rx="6" fill="#f3d27a" stroke="#1d1f45" stroke-width="3"/>
            <line x1="12" y1="18" x2="42" y2="18" stroke="#1d1f45" stroke-width="3"/>
            <line x1="12" y1="32" x2="42" y2="32" stroke="#1d1f45" stroke-width="3"/>
            <line x1="12" y1="46" x2="32" y2="46" stroke="#1d1f45" stroke-width="3"/>
          </g>
          <g class="prop-float" style="animation-delay:.8s" transform="translate(722, 220)">
            <polygon points="0,45 14,0 28,45" fill="#e8907e" stroke="#1d1f45" stroke-width="3"/>
            <rect x="0" y="45" width="28" height="32" fill="#c8e85a" stroke="#1d1f45" stroke-width="3"/>
          </g>
        </svg>`;
    } else if (chId === 2) {
      el.sceneProps.innerHTML = `
        <svg viewBox="0 0 800 340" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(705, 200)">
            <path class="steam-line" d="M22,8 Q14,-10 22,-22" fill="none" stroke="#e8907e" stroke-width="4" stroke-linecap="round"/>
            <path class="steam-line" style="animation-delay:.6s" d="M46,8 Q54,-10 46,-22" fill="none" stroke="#e8907e" stroke-width="4" stroke-linecap="round"/>
            <path d="M8,36 Q35,8 62,36 Z" fill="#f3d27a" stroke="#1d1f45" stroke-width="3"/>
            <rect x="6" y="36" width="58" height="9" rx="4" fill="#c8e85a" stroke="#1d1f45" stroke-width="2.5"/>
            <rect x="8" y="45" width="54" height="11" rx="4" fill="#7a3b2e" stroke="#1d1f45" stroke-width="2.5"/>
            <rect x="8" y="56" width="54" height="11" rx="5" fill="#f3d27a" stroke="#1d1f45" stroke-width="3"/>
          </g>
        </svg>`;
    } else {
      el.sceneProps.innerHTML = `
        <svg viewBox="0 0 800 340" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <g class="prop-float" transform="translate(690, 215)">
            <path d="M8,42 L32,18 L60,34 L86,34 Q94,34 94,48 L8,48 Z" fill="#c8e85a" stroke="#fffaf0" stroke-width="3"/>
            <line x1="8" y1="48" x2="94" y2="48" stroke="#e8907e" stroke-width="4"/>
          </g>
        </svg>`;
    }
  }

  function updateJourneyBar() {
    jumpPills.forEach((pill, i) => {
      pill.classList.toggle('active', i === state.index && state.act !== 6);
      pill.classList.toggle('done', Boolean(state.results[i]) && i !== state.index);
    });
  }

function goTo(act, focus = true) {
    state.act = act;
    $$('.act').forEach((section) => {
      section.hidden = Number(section.dataset.act) !== act;
    });

    const c = current();
    const meta = {
      1: {
        tag: 'STEP 1 · SPOT THE TRICK (' + c.branch + ')',
        text: c.spotPrompt,
        zh: c.spotPromptZh
      },
      2: {
        tag: 'STEP 2 · NAME THE TRICK',
        text: c.fileQuestion,
        zh: c.fileQuestionZh
      },
      3: {
        tag: 'STEP 3 · FIX THE AD',
        text: 'Pick an honest rewrite to publish.',
        zh: '選擇一句誠實、有事實根據的改寫廣告並發布。'
      },
      4: {
        tag: 'AD FIXED!',
        text: 'Published! Compare before & after.',
        zh: '發布成功！對比修改前後的廣告差異。'
      },
      5: {
        tag: 'STEP 4 · YOUR TURN',
        text: 'Write your own honest headline (watch the screen!).',
        zh: '根據真實資料，自己寫一句誠實的廣告標語（留意上方螢幕即時預覽！）。'
      },
      6: {
        tag: 'REPORT',
        text: 'Journey complete! Your detective summary.',
        zh: '旅程完成！查看你的廣告偵探總結報告。'
      }
    }[act];

    el.stepTag.textContent = meta.tag;

    const zhSpan = document.createElement('span');
    zhSpan.className = 'instruction-zh';
    zhSpan.textContent = meta.zh;
    el.instruction.replaceChildren(document.createTextNode(meta.text), zhSpan);

    el.reset.hidden = act === 6;
    if (act !== 1) {
      stopTimer();
      stopSpeech();
      el.chTools.hidden = true;
      el.cluePill.textContent = '';
    }
    updateJourneyBar();
    if (focus) el.instruction.focus();
  }

  /* =========================================================
     载入章节（含街道转场动画）
     ========================================================= */
  function loadChapter(withWipe = false) {
    stopTimer();
    stopSpeech();

    const applyChapter = () => {
      const c = current();
      const isLast = state.index === CHAPTERS.length - 1;

      document.body.dataset.chapter = String(c.id);
      el.wall.classList.remove('stripped');
      el.screen.classList.remove('stripped');

      state.spottedSet.clear();
      state.stripped = false;
      state.answered = false;
      state.selected = null;
      state.tried.clear();
      state.mistakes = 0;

      el.feedName.textContent = c.feedName;
      el.sponsor.textContent = c.sponsor;
      el.brand.textContent = c.brand + ' · ' + c.product;
      el.timerBadge.hidden = !c.hasTimer;
      el.timerBadge.classList.remove('frozen');

      el.spotLesson.hidden = true;
      el.openFile.disabled = true;
      el.fileLesson.hidden = true;
      el.toHeadline.hidden = true;
      nextButtons.forEach((b) => { b.textContent = isLast ? 'See report ➔' : 'Next shop ➔'; });

      renderSceneProps(c.id);
      renderAd();
      renderChapterTools();
      setMood('neutral');
      say(c.bubbleStart);
      goTo(1, false);

      if (c.hasTimer) startCh3Timer();
    };

    if (withWipe) {
      el.wipeLabel.textContent = current().wipeText;
      el.streetWipe.hidden = false;
      setTimeout(() => {
        el.streetWipe.hidden = true;
        applyChapter();
      }, 650);
    } else {
      applyChapter();
    }
  }

  /* =========================================================
     第 1 步：Spot the Trick
     ========================================================= */
  function updateCluePill() {
    el.cluePill.textContent = 'Traps found: ' + state.spottedSet.size + ' / ' + totalTargets();
  }

  function renderAd() {
    el.adText.replaceChildren();
    current().ad.forEach((part, idx) => {
      if (part.flag || part.decoy) {
        const wrap = document.createElement('span');
        wrap.className = 'phrase-wrap';

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'phrase';
        btn.textContent = part.text;
        btn.dataset.idx = String(idx);

        wrap.appendChild(btn);

        if (state.spottedSet.has(idx)) {
          btn.classList.add('spotted');
          if (part.subNote) {
            const tag = document.createElement('span');
            tag.className = 'mini-tag';
            tag.textContent = '↳ ' + part.subNote;
            wrap.appendChild(tag);
          }
        }

        btn.addEventListener('click', () => handlePhraseClick(part, idx, btn, wrap));
        el.adText.appendChild(wrap);
      } else {
        el.adText.appendChild(document.createTextNode(part.text));
      }
    });
    setStamp('WHAT IT SAYS', 'says');
    updateCluePill();
  }

  function handlePhraseClick(part, idx, btn, wrap) {
    if (state.act !== 1) return;
    const c = current();

    if (part.decoy) {
      sfx.error();
      shakeScreen();
      changeTrust(-10);
      spawnFloat('-10% TRUST · DECOY!', 'var(--red)');
      btn.classList.add('decoy-wrong');
      setMood('concerned');
      say(part.decoyLine);
      return;
    }

    if (!state.spottedSet.has(idx)) {
      state.spottedSet.add(idx);
      sfx.spot();
      addScore(100);
      spawnFloat('+100 ⭐ TRAP BUSTED!', 'var(--lime)');

      if (part.subNote && !$('.mini-tag', wrap)) {
        const tag = document.createElement('span');
        tag.className = 'mini-tag';
        tag.textContent = '↳ ' + part.subNote;
        wrap.appendChild(tag);
      }
    }

    if (c.id === 2) {
      el.soundwave.hidden = false;
      setTimeout(() => { if (state.act === 1) el.soundwave.hidden = true; }, 1300);
    }

    btn.classList.add('spotted');
    setMood('considering');
    say(part.line);
    updateCluePill();

    if (state.spottedSet.size === totalTargets()) {
      if (c.hasTimer) {
        stopTimer();
        sfx.defuse();
        spawnFloat('❄️ TIMER FROZEN!', 'var(--blue)');
        el.timerBadge.textContent = '❄️ FROZEN';
        el.timerBadge.classList.add('frozen');
      }
      const strong = document.createElement('strong');
      strong.textContent = c.branch + ': ';
      el.spotLesson.replaceChildren(strong, document.createTextNode(c.spotLesson));
      el.spotLesson.hidden = false;
      el.openFile.disabled = false;
      setMood('happy');
    }
  }

  function renderChapterTools() {
    const c = current();
    el.chTools.replaceChildren();
    if (!c.hasPhoneticTools) {
      el.chTools.hidden = true;
      return;
    }
    el.chTools.hidden = false;

    const hearBtn = document.createElement('button');
    hearBtn.type = 'button';
    hearBtn.className = 'tool-btn';
    hearBtn.textContent = '🔊 Hear Sound';
    hearBtn.addEventListener('click', () => {
      if (state.stripped) toggleStripSound(stripBtn);
      el.soundwave.hidden = false;
      $$('.phrase', el.adText).forEach((p) => {
        if (c.ad[Number(p.dataset.idx)].flag) {
          p.classList.add('glow');
          setTimeout(() => p.classList.remove('glow'), 1400);
        }
      });
      if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const voices = window.speechSynthesis.getVoices();
      const enVoices = voices.filter((v) => /^en[-_]/i.test(v.lang));
      const preferred = [
        'Microsoft Aria Online', 'Microsoft Jenny Online', 'Microsoft Guy Online',
        'Google US English', 'Google UK English Female',
        'Samantha', 'Ava', 'Allison', 'Alex', 'Daniel', 'Karen'
      ];
      const novelty = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Fred|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox/i;
      let bestVoice = null;
      for (const name of preferred) {
        bestVoice = enVoices.find((v) => v.name.includes(name));
        if (bestVoice) break;
      }
      if (!bestVoice) {
        bestVoice = enVoices.find((v) => /Natural|Enhanced|Premium/i.test(v.name))
          || enVoices.find((v) => !novelty.test(v.name))
          || enVoices[0];
      }

      const cleanText = String(c.spokenAd || '').replace(/—/g, ', ');
      const u = new SpeechSynthesisUtterance(cleanText);
      if (bestVoice) {
        u.voice = bestVoice;
        u.lang = bestVoice.lang;
      } else {
        u.lang = 'en-US';
      }
      u.rate = 0.92;
      u.pitch = 1.02;
      u.onend = () => { el.soundwave.hidden = true; };
      window.speechSynthesis.speak(u);
    } else {
      setTimeout(() => { el.soundwave.hidden = true; }, 1400);
    }
      say('Hear those sharp /k/, /s/, /p/ sounds?');
    });

    const stripBtn = document.createElement('button');
    stripBtn.type = 'button';
    stripBtn.className = 'tool-btn';
    stripBtn.textContent = '🔇 Strip Sound Filter';
    stripBtn.addEventListener('click', () => toggleStripSound(stripBtn));

    el.chTools.append(hearBtn, stripBtn);
  }

  function toggleStripSound(btn) {
    const c = current();
    state.stripped = !state.stripped;
    btn.classList.toggle('active', state.stripped);
    el.wall.classList.toggle('stripped', state.stripped);
    el.screen.classList.toggle('stripped', state.stripped);
    el.soundwave.hidden = true;

    if (state.stripped) {
      sfx.defuse();
      spawnFloat('FILTER STRIPPED!', 'var(--blue)');
      btn.textContent = '↩ Restore Ad';
      showText(c.strippedText, 'FILTER OFF', 'stripped');
      slamStamp();
      setMood('concerned');
      say('Without fancy sounds, it’s just fried potato & oil!');
    } else {
      btn.textContent = '🔇 Strip Sound Filter';
      renderAd();
      setMood('neutral');
      say('Tap 3 words that make your mouth water!');
    }
  }

  function startCh3Timer() {
    stopTimer();
    state.timeLeft = 15;
    el.timerBadge.hidden = false;
    el.timerBadge.classList.remove('frozen');
    el.timerBadge.textContent = '⏱️ 15s';

    state.timerId = setInterval(() => {
      if (state.act !== 1) { stopTimer(); return; }
      state.timeLeft -= 1;
      el.timerBadge.textContent = '⏱️ ' + state.timeLeft + 's';
      if (state.timeLeft <= 5 && state.timeLeft > 0) sfx.tick();
      if (state.timeLeft <= 0) {
        sfx.error();
        shakeScreen();
        changeTrust(-10);
        spawnFloat('FAKE TIMER RESET!', 'var(--red)');
        say('Fake timer restarted! Don’t fall for it!');
        state.timeLeft = 15;
        el.timerBadge.textContent = '⏱️ 15s';
      }
    }, 1000);
  }

  /* =========================================================
     第 2 步：Name the Trick
     ========================================================= */
  function openFile() {
    el.wall.classList.remove('stripped');
    el.screen.classList.remove('stripped');
    showText(originalText(), 'CASE FILE', 'says');
    renderFile();
    renderMatchButtons();
    setMood('considering');
    say('Check the facts & name the trick!');
    goTo(2);
  }

  function renderFile() {
    el.fileList.replaceChildren();
    current().file.forEach((row) => {
      const li = document.createElement('li');
      const mark = document.createElement('span');
      mark.className = 'mark';
      mark.textContent = STATUS[row.status].mark;
      mark.dataset.status = row.status;
      const label = document.createElement('span');
      label.textContent = row.label;
      if (row.claim) li.classList.add('claim');
      li.append(mark, label);
      el.fileList.appendChild(li);
    });
  }

  function renderMatchButtons() {
    el.answerRow.replaceChildren();
    current().options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn answer';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => handleMatchAnswer(opt, btn));
      el.answerRow.appendChild(btn);
    });
  }

  function handleMatchAnswer(opt, btn) {
    if (state.act !== 2 || state.answered) return;
    const c = current();

    if (opt.correct) {
      state.answered = true;
      sfx.defuse();
      addScore(150);
      spawnFloat('+150 ⭐ TRICK NAMED!', 'var(--lime)');
      btn.classList.add('right');
      $$('.answer', el.answerRow).forEach((b) => { b.disabled = true; });
      el.fileLesson.textContent = c.fileLesson;
      el.fileLesson.hidden = false;
      el.toHeadline.hidden = false;
      setMood('happy');
      say(c.fileRileyLine);
      el.toHeadline.focus();
    } else {
      sfx.error();
      shakeScreen();
      changeTrust(-15);
      spawnFloat('-15% TRUST', 'var(--red)');
      btn.classList.add('wrong');
      btn.disabled = true;
      setMood('concerned');
      say(c.hint);
    }
  }

  /* =========================================================
     第 3 步：Fix the Ad（带逐项扫描动效）
     ========================================================= */
  function toHeadline() {
    state.selected = null;
    state.tried.clear();
    renderStrips();
    renderChecks(null);
    el.facts.textContent = current().facts;
    el.publish.disabled = true;
    el.note.hidden = true;
    showText(originalText(), 'FIX MODE', 'says');
    setMood('neutral');
    hush();
    goTo(3);
  }

  function renderStrips() {
    el.strips.replaceChildren();
    current().strips.forEach((strip) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'strip';
      btn.dataset.key = strip.key;
      btn.textContent = strip.text;
      btn.addEventListener('click', () => selectStrip(strip.key));
      el.strips.appendChild(btn);
    });
  }

  function updateStripStates() {
    $$('.strip', el.strips).forEach((btn) => {
      const key = btn.dataset.key;
      btn.classList.toggle('selected', key === state.selected);
      btn.classList.toggle('tried', state.tried.has(key));
    });
  }

  function renderChecks(key, animate = false) {
    const items = $$('#checks li');
    items.forEach((li, i) => {
      const mark = $('.check-mark', li);
      li.classList.remove('pass', 'fail');
      if (!key) { mark.textContent = '?'; return; }
      const ok = findStrip(key).checks[li.dataset.check];
      const apply = () => {
        li.classList.add(ok ? 'pass' : 'fail');
        mark.textContent = ok ? '✓' : '✗';
        if (animate && ok) playTone(520 + i * 160, 0.1, 'triangle', 0.12);
      };
      if (animate) {
        mark.textContent = '…';
        setTimeout(apply, i * 240);
      } else {
        apply();
      }
    });
  }

  function selectStrip(key) {
    if (state.act !== 3) return;
    state.selected = key;
    updateStripStates();
    renderChecks(null);
    showText(findStrip(key).text, 'PREVIEW', 'preview');
    el.publish.disabled = false;
    el.note.hidden = true;
    setMood('neutral');
    hush();
  }

  function publish() {
    if (state.act !== 3 || !state.selected) return;
    const strip = findStrip(state.selected);
    el.publish.disabled = true;
    renderChecks(state.selected, true);

    setTimeout(() => {
      if (strip.correct) {
        showPublished();
        return;
      }

      state.mistakes += 1;
      state.tried.add(state.selected);
      sfx.error();
      shakeScreen();
      changeTrust(-15);
      spawnFloat('REJECTED · -15%', 'var(--red)');
      updateStripStates();
      setStamp('REJECTED', 'rejected');
      slamStamp();
      setMood(strip.mood);
      say(strip.line);
      el.note.textContent = strip.note;
      el.note.hidden = false;
    }, 520);
  }

  /* =========================================================
     第 4 步：Before / After（带彩带庆祝）
     ========================================================= */
  function showPublished() {
    const c = current();
    const good = correctStrip();
    state.results[state.index] = { brand: c.brand, branch: c.branch, mistakes: state.mistakes };

    sfx.publish();
    addScore(200);
    changeTrust(10);
    spawnFloat('+200 ⭐ AD PUBLISHED!', 'var(--lime)');
    burstConfetti();

    showText(good.text, 'PUBLISHED', 'published');
    slamStamp();
    setMood('happy');
    say('Honest, clear, and zero tricks!');

    el.beforeText.textContent = originalText();
    el.beforeWhy.textContent = c.beforeWhy;
    el.afterText.textContent = good.text;
    el.afterWhy.textContent = c.afterWhy;

    goTo(4);
  }

  /* =========================================================
     第 5 步：Your Turn（实时同步屏幕看板）
     ========================================================= */
  function startWriting() {
    el.ownFacts.textContent = 'Use only ➔ ' + current().facts.replace(/^[^:]+:\s*/, '');
    el.ownInput.value = '';
    el.ownNote.hidden = true;
    hush();
    setMood('neutral');
    goTo(5, false);
    el.ownInput.focus();
  }

  function findBanned(text) {
    return current().banned.find((word) => {
      const safe = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp('\\b' + safe, 'i').test(text);
    });
  }

  function checkOwn(event) {
    event.preventDefault();
    const text = el.ownInput.value.trim();

    if (!text) {
      el.ownNote.textContent = 'Write an honest headline first!';
      el.ownNote.hidden = false;
      return;
    }

    const bad = findBanned(text);
    if (bad) {
      sfx.error();
      shakeScreen();
      spawnFloat('TRICK DETECTED!', 'var(--red)');
      el.ownNote.textContent = 'Remove sneaky word “' + bad + '”!';
      el.ownNote.hidden = false;
      setMood('concerned');
      say('Sounds like the old trick ad!');
      return;
    }

    sfx.publish();
    addScore(150);
    spawnFloat('+150 ⭐ ORIGINAL AD!', 'var(--lav)');
    burstConfetti();
    showText(text, 'YOUR AD', 'own');
    slamStamp();
    setMood('happy');
    say('I’d trust that!');
    el.ownNote.textContent = 'Locked on screen! Ready for next shop.';
    el.ownNote.hidden = false;
  }

  /* =========================================================
     下一章 / 成绩单
     ========================================================= */
  function nextCase() {
    if (state.index < CHAPTERS.length - 1) {
      state.index += 1;
      loadChapter(true);
    } else {
      showReport();
    }
  }

  function showReport() {
    stopTimer();
    stopSpeech();
    el.summary.replaceChildren();
    CHAPTERS.forEach((c, i) => {
      const r = state.results[i];
      const li = document.createElement('li');
      const res = r
        ? (r.mistakes === 0 ? 'Fixed on first try ✓' : 'Fixed after ' + r.mistakes + ' retry(s)')
        : 'Skipped';
      li.textContent = 'Ch' + c.id + ' [' + c.branch + '] ' + c.brand + ' — ' + res;
      el.summary.appendChild(li);
    });

    const rank = state.trust >= 85 ? '🏆 Chief Ad Detective' : state.trust >= 60 ? '🔍 Sharp Investigator' : '📝 Junior Fact-Checker';
    el.finalRank.textContent = rank + ' · Score: ' + state.score + ' ⭐ · Trust: ' + state.trust + '%';

    el.feedName.textContent = 'AD DETECTIVE JOURNEY';
    el.sponsor.textContent = 'ALL 3 SHOPS';
    el.brand.textContent = 'Pragmatics · Phonetics · Syntax';
    el.timerBadge.hidden = true;
    burstConfetti();
    showText('All 3 shops investigated!', 'CASE CLOSED', 'published');
    slamStamp();
    setMood('happy');
    say('Thanks for saving my wallet!');
    goTo(6);
  }

  function playAgain() {
    state.index = 0;
    state.results = [];
    state.score = 0;
    state.trust = 100;
    addScore(0);
    changeTrust(0);
    loadChapter(false);
  }

  /* =========================================================
     绑定事件
     ========================================================= */
  jumpPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      state.index = Number(pill.dataset.jump);
      loadChapter(true);
    });
  });

  el.ownInput.addEventListener('input', () => {
    if (state.act !== 5) return;
    const val = el.ownInput.value.trim();
    el.adText.textContent = val || correctStrip().text;
    setStamp(val ? 'LIVE PREVIEW' : 'PUBLISHED', val ? 'preview' : 'published');
  });

  el.openFile.addEventListener('click', openFile);
  el.toHeadline.addEventListener('click', toHeadline);
  el.publish.addEventListener('click', publish);
  el.write.addEventListener('click', startWriting);
  el.ownForm.addEventListener('submit', checkOwn);
  nextButtons.forEach((b) => b.addEventListener('click', nextCase));
  el.again.addEventListener('click', playAgain);
  el.reset.addEventListener('click', () => loadChapter(false));

  loadChapter(false);
// 封面開始邏輯（點擊按鈕或封面任意位置皆可進入）
  const coverScreen = document.getElementById('cover-screen');
  if (coverScreen) {
    coverScreen.style.cursor = 'pointer';
    coverScreen.addEventListener('click', () => {
      if (typeof sfx !== 'undefined' && sfx.publish) sfx.publish();
      coverScreen.classList.add('is-hidden');
      setTimeout(() => {
        coverScreen.hidden = true;
      }, 600);
    });
  }

/* =========================================================
     輕快偵探風背景音樂合成器（Web Audio API 零外部檔案）
     ========================================================= */
  const bgm = {
    playing: false,
    muted: false,
    step: 0,
    timer: null,
    // 三章專屬旋律（Hz）：Ch1 輕快偵探、Ch2 活潑餐厅、Ch3 緊張球鞋店
    tracks: {
      1: [330, 0, 392, 440, 494, 0, 440, 392, 330, 0, 294, 330, 392, 0, 247, 0],
      2: [392, 440, 494, 0, 523, 494, 440, 392, 349, 392, 440, 0, 392, 0, 330, 0],
      3: [220, 220, 262, 220, 294, 220, 262, 247, 220, 220, 330, 294, 262, 247, 196, 0]
    },
    start() {
      if (this.playing || this.muted) return;
      this.playing = true;
      this.timer = setInterval(() => {
        if (this.muted || state.act === 6) return;
        const notes = this.tracks[current().id] || this.tracks[1];
        const freq = notes[this.step % notes.length];
        if (freq > 0) {
          // 柔和三角波主旋律（音量極低，不蓋過音效與人聲）
          playTone(freq, 0.16, 'triangle', 0.032);
        }
        // 每 4 拍加一聲輕微的偵探低音節拍
        if (this.step % 4 === 0) {
          playTone(110, 0.12, 'sine', 0.045);
        }
        this.step += 1;
      }, 240);
    },
    toggle() {
      this.muted = !this.muted;
      const btn = document.getElementById('bgm-btn');
      if (btn) btn.textContent = this.muted ? '🔇 BGM: OFF' : '🎵 BGM: ON';
      if (!this.muted && !this.playing) this.start();
    }
  };

  // 點擊封面或網頁任意處時自動啟動背景音樂（符合瀏覽器音訊安全規範）
  document.addEventListener('pointerdown', () => bgm.start(), { once: true });
  const bgmBtn = document.getElementById('bgm-btn');
  if (bgmBtn) {
    bgmBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      bgm.toggle();
    });
  }
})();