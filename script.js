const CONFIG = {

    /* ---------- Basics ---------- */
herName: "cutiieepatotieee bebii girl",
fromName: "bebii boy",            // <-- change this! It appears at the end of the letter
pageTitle: "For you my cutie princess💜",          // text shown on the browser tab

    /* ---------- Hero (the first screen after opening) ---------- */
hero: {
    kicker: "💜",
    greeting: "Hi, my",
    subtitle: "I made you a tiny, dreamy corner. No reason, no occasion. Just because you’re you, and I love you. 💜"
},

  /* ---------- Love letter ---------- */
letter: {
    greeting: "My cutiieepatotiee bebii girl,",
    paragraphs: [
        "I don’t have a special reason for this. No birthday, no monthsary, no big announcement. I just wanted to make something that says you matter to me every single day, not only on the days with a date on them.",
        "You make ordinary moments feel soft and bright, like the sky right before the stars come out. Your laugh, your silly side, and the way you care about people. I notice all of it, and I’m grateful for all of it.",
        "We haven’t met in person yet, but you already feel like someone I’ve known forever. I’m really looking forward to the day we finally do.",
        "On the days when things feel heavy, I hope you remember that someone is always on your side. Someone who’s proud of you, who’s cheering for you, and who thinks you are the cutest, the sweetest, and the most special.",
        "So here’s a little corner of the internet that’s only yours. Take your time, tap around, and keep an eye out for hidden hearts. 💜"
    ],
    signoff: "Always your,",
    typingSpeed: 22
},

notes: {
    title: "Little letters",
    subtitle: "Tap any one 💌",
    items: [
    {
        emoji: "💌",
        label: "A little hello",
        title: "Surprise!",
        text: [
            "Haaiiiiuuuuu! This is a surprise with no special reason, no special day, nothing. I just felt like making you smile.",
            "I hope it worked, even a tiny bit. 💜"
        ]
    },
    {
        emoji: "🌸",
        label: "Things I like about you",
        title: "A few of my favorite things",
        text: [
            "I like how you make even a normal day feel lighter just by being in it.",
            "I like your kindness, your cuteness, and the way you’re so wonderfully you.",
            "There are way more, but I’m saving them for later. 😌"
        ]
    },
    {
        emoji: "🌙",
        label: "Goodnight, cutie",
        title: "For your bedtime",
        text: [
            "If you’re reading this at night, hi! I hope today was kind to you.",
            "Hug your pillow tight, and sleep well. Dream of something sweet, and also about me. 🌙🤭"
        ]
    },
    {
        emoji: "☀️",
        label: "Good morning",
        title: "Rise and shine",
        text: [
            "Good morning, cutiepie! I hope you wake up to something good today.",
            "Drink some water, eat something yummy, and remember that somebody is smiling because of you. (it's me🤭) ☀️"
        ]
    },
    {
        emoji: "✨",
        label: "A tiny wish",
        title: "My wish for you",
        text: [
            "I wish you lots of laughter, good food, and the sweetest little surprises.",
            "I wish your dreams come true, one by one. And I’ll be cheering for you the whole way. ✨"
        ]
    },
    {
        emoji: "💞",
        label: "Someday",
        title: "Someday…",
        text: [
            "Someday I’ll finally see you in person, and I already know my heart will be doing somersaults.",
            "Until then, let’s keep making memories in every way we can. I can’t wait for that day. 💜"
        ]
    }
    ]
},

    /* ---------- Hidden hearts ---------- */
hiddenMessages: [
    { where: "hero",     top: "16%", left: "86%", title: "Found one! ✨", message: "Roses are red, violets are blue, I can’t finish this poem because I’m busy thinking about you." },
    { where: "hero",     top: "88%", left: "9%",  title: "Fun fact 🌸",   message: "I smile at my phone whenever your name shows up. Every single time." },
    { where: "letter",   top: "7%",  left: "7%",  title: "A reminder 🌙", message: "You’re allowed to rest. You’re allowed to be soft. I’ll still think you’re amazing." },
    { where: "letter",   top: "55%", left: "93%", title: "Sunset delivery 🌅", message: "If I could, I’d wrap up every sunset and send it to you. For now, here’s a purple one." },
    { where: "notes",  top: "5%",  left: "92%", title: "Just so you know 💖", message: "You are loved, you are enough, and you are so, so cute." },
    { where: "notes",  top: "60%", left: "4%",  title: "Secret power 🦋", message: "You make hard days feel lighter just by being you." },
    { where: "surprise", top: "22%", left: "84%", title: "Last one! 🤗", message: "Come here for a virtual hug. Hold it as long as you need." }
],

  /* ---------- When ALL hidden hearts are found ---------- */
finalMessage: {
    title: "You found them all! 🎉",
    message: "Every hidden heart was a little piece of how I feel about you. Thank you for being exactly you. I’m so lucky to have you."
},

  /* ---------- The "Press me" button (shows one at a time, then repeats) ---------- */
surprises: [
    "You’re my favorite notification. 🤭💜",
    "Imagine a big warm hug right now. Squeeze… 🤗",
    "Today’s forecast: 100% chance of you being adorable. ☁️✨",
    "Plot twist: you’re the main character and the best part. 🌸",
    "Okay, last one for real: you’re stuck with me. 😌💗"
]
};

(function () {
    "use strict";

  /* ---------- 1. Helpers ---------- */
const $ = (selector, parent = document) => parent.querySelector(selector);
const rand = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // localStorage can be blocked in some browsers, so we wrap it safely
const store = {
    get(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
        catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    },
    remove(key) {
      try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
    }
};

  /* ---------- 2. Fill in the text from config.js ---------- */
document.title = CONFIG.pageTitle;
$("#gate-name").textContent = CONFIG.herName;
$("#hero-kicker").textContent = CONFIG.hero.kicker;
$("#hero-hi").textContent = CONFIG.hero.greeting;
$("#hero-name").textContent = CONFIG.herName;
$("#hero-sub").textContent = CONFIG.hero.subtitle;
$("#letter-greeting").textContent = CONFIG.letter.greeting;

  /* ---------- 3. Tiny pictures of hearts/sparkles ---------- */
const spriteCache = {};
function getSprite(ch, color) {
    const key = ch + color;
    if (spriteCache[key]) return spriteCache[key];
    const size = 48;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const x = c.getContext("2d");
    x.font = "36px serif";
    x.textAlign = "center";
    x.textBaseline = "middle";
    x.fillStyle = color;
    x.fillText(ch, size / 2, size / 2 + 2);
    spriteCache[key] = c;
    return c;
}

    /* ---------- 4. Background sky: twinkling stars + floating hearts ---------- */
(function () {
    const canvas = $("#sky");
    const ctx = canvas.getContext("2d");
    const stars = [], hearts = [];
    let w = 0, h = 0, lastFrame = 0, lastHeart = 0;

function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
        canvas.width = w;    
        canvas.height = h;
    stars.length = 0;
        const count = Math.min(60, Math.round((w * h) / 9000));
    for (let i = 0; i < count; i++) {
        stars.push({ x: rand(0, w), y: rand(0, h), r: rand(1, 2.2), ph: rand(0, 6.28), sp: rand(0.0008, 0.002) });
    }
    draw(0);
    }

    function draw(t) {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#fff";
        for (const s of stars) {
        ctx.globalAlpha = 0.3 + 0.7 * Math.abs(Math.sin(t * s.sp + s.ph));
        ctx.fillRect(s.x, s.y, s.r, s.r);
    }
        const heart = getSprite("♥", "#ffaadc");
        for (let i = hearts.length - 1; i >= 0; i--) {
        const p = hearts[i];
        p.y -= p.vy;
        p.ph += 0.03;
        if (p.y < -30) { hearts.splice(i, 1); continue; }
        ctx.globalAlpha = p.a;
        ctx.drawImage(heart, p.x + Math.sin(p.ph) * p.sway - p.s / 2, p.y - p.s / 2, p.s, p.s);
    }
        ctx.globalAlpha = 1;
    }

function frame(t) {
    requestAnimationFrame(frame);
    if (t - lastFrame < 33) return;
        lastFrame = t;
    if (t - lastHeart > 1400 && hearts.length < 8) {
        lastHeart = t;
        hearts.push({ x: rand(0, w), y: h + 20, s: rand(14, 28), vy: rand(0.5, 1.1), sway: rand(6, 20), ph: rand(0, 6), a: rand(0.2, 0.45) });
    }
    draw(t);
    }

    window.addEventListener("resize", resize);
    resize();
    if (!reduced) requestAnimationFrame(frame);
})();

  /* ---------- 4b. Sparkles + confetti (drawn on the top canvas) ---------- */
    const FX = (function () {
    const canvas = $("#fx");
    const ctx = canvas.getContext("2d");
    const items = [];
    const MAX_ITEMS = 140;
    let w = 0, h = 0, running = false;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function add(piece) {
        if (items.length >= MAX_ITEMS) return;
        items.push(piece);
        if (!running) { running = true; requestAnimationFrame(loop); }
    }

    function loop() {
        ctx.clearRect(0, 0, w, h);
        for (let i = items.length - 1; i >= 0; i--) {
        const p = items[i];
        p.life++;
        p.vx *= p.drag;
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        const alpha = 1 - p.life / p.max;
        if (alpha <= 0 || p.y > h + 60) { items.splice(i, 1); continue; }

        ctx.globalAlpha = Math.min(1, alpha * 1.6);
        if (p.sprite) {
            if (p.vr) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.drawImage(p.sprite, -p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        } else {
            ctx.drawImage(p.sprite, p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        }
        } else {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.col;
            ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
            ctx.restore();
        }
    }
    ctx.globalAlpha = 1;
    if (items.length) requestAnimationFrame(loop);
    else { running = false; ctx.clearRect(0, 0, w, h); }
    }

    // A small burst of sparkles/hearts at a point (used when tapping)
    function burst(x, y, count) {
        if (reduced) return;
        for (let i = 0; i < count; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(1.5, 4.5);
        add({
          x: x, y: y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 1.2,
            g: 0.06, drag: 0.985, rot: 0, vr: 0, life: 0, max: rand(30, 55),
            size: rand(14, 24),
            sprite: getSprite(pick(["♥", "✦", "✧", "♡"]), pick(["#ff8ccf", "#ffffff", "#d9c2ff", "#ffd9f1"]))
        });
        }
    }

    // Big celebration
    function confetti(count) {
        if (reduced) return;
        const colors = ["#ff8ccf", "#b98cff", "#ffd9f1", "#e9ddff", "#ff5fb3", "#ffffff"];
        const glyphs = ["💜", "💗", "✨", "🌸", "💖"];
        for (let i = 0; i < count; i++) {
        const useGlyph = Math.random() < 0.35;
        add({
          x: w / 2 + rand(-w * 0.25, w * 0.25), y: h * 0.45,
            vx: rand(-7, 7), vy: rand(-14, -5),
            g: 0.3, drag: 0.99, rot: rand(0, 6.28), vr: rand(-0.2, 0.2),
            life: 0, max: rand(90, 150), size: useGlyph ? rand(20, 30) : rand(8, 14),
            sprite: useGlyph ? getSprite(pick(glyphs), "#fff") : null, col: pick(colors)
        });
      }
    }

    window.addEventListener("resize", resize);
    resize();

    // Tiny sparkle burst wherever she taps
    window.addEventListener("pointerdown", function (e) { burst(e.clientX, e.clientY, 5); }, { passive: true });

    return { burst: burst, confetti: confetti };
  })();

  /* ---------- 5. Welcome screen ---------- */
  const gate = $("#gate");
  const site = $("#site");

  $("#open-btn").addEventListener("click", function () {
    FX.burst(window.innerWidth / 2, window.innerHeight / 2, 14);
    gate.classList.add("is-leaving");
    setTimeout(function () {
      gate.hidden = true;
      site.hidden = false;
      document.body.classList.remove("is-locked");
      window.scrollTo(0, 0);
    }, reduced ? 0 : 400);
  });

  /* ---------- 6. Love letter ---------- */
  const envelope = $("#envelope");
  const letterReveal = $("#letter-reveal");
  const letterText = $("#letter-text");
  const letterSign = $("#letter-sign");
  const skipButton = $("#skip-typing");
  let letterOpened = false, skipTyping = false;

  async function typeLetter() {
    const speed = CONFIG.letter.typingSpeed || 28;
    for (const text of CONFIG.letter.paragraphs) {
      const p = document.createElement("p");
      letterText.appendChild(p);
      if (reduced) { p.textContent = text; continue; }
      for (let i = 1; i <= text.length; i++) {
        if (skipTyping) { p.textContent = text; break; }
        p.textContent = text.slice(0, i);
        await wait(speed);
      }
    }
    skipButton.hidden = true;
    letterSign.textContent = CONFIG.letter.signoff + " " + CONFIG.fromName;
    letterSign.hidden = false;
    FX.burst(window.innerWidth / 2, window.innerHeight * 0.6, 10);
  }

  envelope.addEventListener("click", async function () {
    if (letterOpened) return;
    letterOpened = true;
    envelope.setAttribute("aria-expanded", "true");
    FX.burst(envelope.getBoundingClientRect().left + envelope.offsetWidth / 2,
             envelope.getBoundingClientRect().top + envelope.offsetHeight / 2, 10);
    await wait(reduced ? 0 : 300);
    letterReveal.classList.add("is-open");
    await wait(reduced ? 0 : 450);
    typeLetter();
  });

  skipButton.addEventListener("click", function () { skipTyping = true; });

  /* ---------- 7. little letters + letter viewer ---------- */
  const notes = CONFIG.notes.items;
  $("#notes-title").textContent = CONFIG.notes.title;
  $("#notes-sub").textContent = CONFIG.notes.subtitle;

  const notesGrid = $("#notes-grid");
  const cards = [];

  notes.forEach(function (note, index) {
    const wrap = document.createElement("div");
    wrap.className = "note-wrap reveal";
    wrap.style.setProperty("--i", String(index % 2));

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "note-card";
    btn.setAttribute("aria-label", "Open letter: " + note.label);

    const seal = document.createElement("span");
    seal.className = "note-card__seal";
    seal.setAttribute("aria-hidden", "true");
    seal.textContent = note.emoji || "💌";

    const label = document.createElement("span");
    label.className = "note-card__label";
    label.textContent = note.label;

    btn.append(seal, label);
    wrap.appendChild(btn);
    notesGrid.appendChild(wrap);
    cards.push({ btn: btn, seal: seal });

    btn.addEventListener("click", function () { Viewer.open(index, btn); });
  });

  const Viewer = (function () {
    const box = $("#note-viewer");
    const paper = $("#nv-paper");
    const closeBtn = $("#nv-close");
    const total = notes.length;
    let current = 0, opener = null, touchStartX = 0;

    function show(index) {
      current = (index + total) % total;
      const note = notes[current];
      $("#nv-emoji").textContent = note.emoji || "💌";
      $("#nv-title").textContent = note.title;
      const text = $("#nv-text");
      text.textContent = "";
      note.text.forEach(function (line) {
        const p = document.createElement("p");
        p.textContent = line;
        text.appendChild(p);
      });
      $("#nv-sign").textContent = CONFIG.letter.signoff + " " + CONFIG.fromName;
      paper.scrollTop = 0;
      // replay the little pop animation
      paper.style.animation = "none";
      void paper.offsetWidth;
      paper.style.animation = "";
      // the card turns into a 💖 once it has been read
      cards[current].seal.textContent = "💖";
      cards[current].btn.classList.add("is-read");
    }

    function open(index, openerEl) {
      opener = openerEl;
      show(index);
      box.hidden = false;
      document.body.classList.add("is-locked");
      closeBtn.focus();
    }

    function close() {
      box.hidden = true;
      document.body.classList.remove("is-locked");
      if (opener) opener.focus();
    }

    function isOpen() { return !box.hidden; }

    $("#nv-prev").addEventListener("click", function () { show(current - 1); });
    $("#nv-next").addEventListener("click", function () { show(current + 1); });
    closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });

    // swipe left/right on phones
    box.addEventListener("touchstart", function (e) { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 70) show(current + (dx < 0 ? 1 : -1));
    }, { passive: true });

    document.addEventListener("keydown", function (e) {
      if (!isOpen()) return;
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });

    return { open: open, close: close, isOpen: isOpen };
  })();

  /* ---------- 8. Hidden hearts + popup ---------- */
  const Popup = (function () {
    const modal = $("#modal");
    const closeBtn = $("#modal-close");
    let opener = null, afterClose = null;

    function open(title, text, emoji, onClose) {
      opener = document.activeElement;
      afterClose = onClose || null;
      $("#modal-title").textContent = title;
      $("#modal-text").textContent = text;
      $("#modal-emoji").textContent = emoji || "💗";
      modal.hidden = false;
      document.body.classList.add("is-locked");
      closeBtn.focus();
    }

    function close() {
      if (modal.hidden) return;
      modal.hidden = true;
      if (!Viewer.isOpen()) document.body.classList.remove("is-locked");
      if (opener && opener.focus) opener.focus();
      if (afterClose) { const fn = afterClose; afterClose = null; fn(); }
    }

    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });

    return { open: open, close: close, isOpen: function () { return !modal.hidden; } };
  })();

  // Escape key closes whatever is open
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (Popup.isOpen()) Popup.close();
    else if (Viewer.isOpen()) Viewer.close();
  });

  const HUNT_KEY = "giftWebsiteFoundHearts";
  const messages = CONFIG.hiddenMessages;
  let found = store.get(HUNT_KEY, []);
  const counter = $("#found-counter");

  function updateCounter(animate) {
    counter.textContent = "💗 " + found.length + "/" + messages.length;
    counter.setAttribute("aria-label", found.length + " of " + messages.length + " hidden hearts found");
    if (animate) {
      counter.classList.remove("is-pop");
      void counter.offsetWidth;
      counter.classList.add("is-pop");
    }
  }

  messages.forEach(function (item, index) {
    const section = document.getElementById(item.where);
    if (!section) return;

    const heart = document.createElement("button");
    heart.type = "button";
    heart.className = "secret";
    heart.style.top = item.top;
    heart.style.left = item.left;
    heart.style.animationDelay = (index * 0.4) + "s";

    function markFound() {
      heart.classList.add("is-found");
      heart.textContent = "💖";
      heart.setAttribute("aria-label", "Hidden heart (already found)");
    }

    if (found.indexOf(index) !== -1) markFound();
    else { heart.textContent = "✨"; heart.setAttribute("aria-label", "A hidden sparkle. Tap to see what it is"); }

    heart.addEventListener("click", function () {
      const isNew = found.indexOf(index) === -1;
      if (isNew) {
        found.push(index);
        store.set(HUNT_KEY, found);
        markFound();
        updateCounter(true);
      }
      const rect = heart.getBoundingClientRect();
      FX.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);

      const allDone = isNew && found.length === messages.length;
      Popup.open(item.title, item.message, "💗", allDone ? celebrate : null);
    });

    section.appendChild(heart);
  });

  function celebrate() {
    FX.confetti(80);
    setTimeout(function () {
      Popup.open(CONFIG.finalMessage.title, CONFIG.finalMessage.message, "🎉");
      FX.confetti(60);
    }, 900);
  }

  updateCounter(false);

  $("#reset-hunt").addEventListener("click", function () {
    store.remove(HUNT_KEY);
    window.location.reload();
  });

  /* ---------- 9. Surprise button + scroll reveal ---------- */
  const surpriseBtn = $("#surprise-btn");
  const surpriseMsg = $("#surprise-msg");
  let surpriseIndex = 0;

  surpriseBtn.addEventListener("click", function () {
    surpriseMsg.textContent = CONFIG.surprises[surpriseIndex % CONFIG.surprises.length];
    surpriseIndex++;
    surpriseMsg.classList.remove("is-new");
    void surpriseMsg.offsetWidth;
    surpriseMsg.classList.add("is-new");
    FX.confetti(45);
  });

  // Elements with class "reveal" fade in when you scroll to them
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealItems.forEach(function (el) { observer.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
