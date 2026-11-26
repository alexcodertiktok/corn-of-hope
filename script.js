/* ===== ذرة أمل : ملف الجافاسكريبت ===== */
(function () {
'use strict';

/* ---------- الترجمة ---------- */
const EN = {
 "ذرة أمل | ازاي تاكل فشار بس": "Corn of Hope | How to eat popcorn, only",
 "لوجو ذرة أمل": "Corn of Hope logo",
 "ذرة أمل": "Corn of Hope",
 "الرئيسية": "Home",
 "الدليل": "The Guide",
 "أنواع الآكلين": "Eater Types",
 "🎮 اللعبة": "🎮 Game",
 "ازاي تاكل": "How to eat",
 "فشار وبس؟": "popcorn and nothing else?",
 "الدليل الأكاديمي الوحيد (وللأسف في ناس عملته) لأكل الفشار من غير أي حاجة تشتتك: لا فيلم، لا شغل، لا مسؤوليات.": "The only academic guide (sadly, someone actually made it) to eating popcorn with zero distractions: no movie, no work, no responsibilities.",
 "🍿 العب «ارمي في بُقه»": "🍿 Play \"Feed His Mouth\"",
 "ابدأ الدراسة": "Start studying",
 "علبة فشار": "A bucket of popcorn",
 "المنهج العلمي في ٦ خطوات": "The scientific method in 6 steps",
 "أي تخطّي لخطوة هيخليك تاكل فشار زي الهواة.": "Skip any step and you'll eat popcorn like an amateur.",
 "الخطوة ١": "Step 1",
 "هات العلبة": "Get the bucket",
 "اختار أكبر علبة في المحل. لو تقدر تشيلها بإيد واحدة تبقى صغيرة، رجّعها وانت مكسوف.": "Pick the biggest bucket in the shop. If you can carry it with one hand, it's too small. Return it in shame.",
 "الخطوة ٢": "Step 2",
 "اتخذ وضعية الخبير": "Assume the expert position",
 "افرد ضهرك على الكنبة بزاوية لا تسمح لك إنك تقوم تاني. القيام عدو الفشار.": "Lean back on the couch at an angle that makes getting up impossible. Standing is the enemy of popcorn.",
 "الخطوة ٣": "Step 3",
 "الغَرفة العلمية": "The scientific scoop",
 "دخّل إيدك كلها وطلّع كمية أكبر من بُقك بثلاث مرات. الواقع على هدومك ده رصيد احتياطي.": "Dig your whole hand in and grab three times more than your mouth can hold. Whatever lands on your shirt is your emergency stock.",
 "الخطوة ٤": "Step 4",
 "افتح بُقك": "Open your mouth",
 "افتحه كأن دكتور الأسنان بيقولك «كمان شوية». الفشار بيحب المساحات الواسعة.": "Open it like the dentist is saying \"a bit wider\". Popcorn loves open spaces.",
 "الخطوة ٥": "Step 5",
 "خلّصه قبل الفيلم": "Finish before the movie",
 "القاعدة الذهبية: العلبة لازم تفضى قبل ما اسم الفيلم يظهر. وبعدها اقعد اتفرج وانت ندمان.": "The golden rule: the bucket must be empty before the movie title appears. Then sit and watch, full of regret.",
 "الخطوة ٦": "Step 6",
 "معركة القشرة": "The battle of the hull",
 "هتلزق قشرة في سنانك وتعيش معاها أسبوع. سمّيها، اتصاحبوا، وماتحاولش تنكر وجودها.": "A hull will get stuck in your teeth and live with you for a week. Name it, befriend it, and don't try to deny it exists.",
 "انت أنهي نوع؟": "Which type are you?",
 "دراسة أجريناها على نفسنا واحنا قاعدين.": "A study we ran on ourselves while sitting down.",
 "النوع الأول": "Type 1",
 "النينجا": "The Ninja",
 "بياكل من علبتك والنور مطفي ومن غير صوت. لما تبص عليه تلاقيه بيتأمل في السقف ببراءة.": "Eats from your bucket in the dark without a sound. When you look, they're innocently studying the ceiling.",
 "النوع الثاني": "Type 2",
 "المكنسة الكهربائية": "The Vacuum Cleaner",
 "مابيمضغش. بيشفط. العلبة العائلي بتختفي في إعلان واحد.": "Doesn't chew. Just inhales. A family bucket vanishes during one advert.",
 "النوع الثالث": "Type 3",
 "القنّاص الفاشل": "The Failed Sniper",
 "بيرمي الفشاية في الهوا عشان يلقطها ببُقه. النتيجة: عينه، ودنه، والأرض. عمرها ما بُقه.": "Tosses a piece in the air to catch it by mouth. Results: eye, ear, floor. Never the mouth.",
 "النوع الرابع": "Type 4",
 "الفيلسوف": "The Philosopher",
 "بيمسك فشاية واحدة ويسأل: هي اللي فرقعت ولا إحنا اللي مافرقعناش؟ محدش بيعزمه تاني.": "Holds one piece and asks: did it pop, or is it we who never popped? Nobody invites them again.",
 "مولّد الأعذار": "Excuse generator",
 "لما حد يقولك «انت خلّصت العلبة لوحدك؟»": "For when someone asks: \"You finished the whole bucket alone?\"",
 "دوس على الزرار وخد عذرك.": "Press the button and get your excuse.",
 "هات عذر": "Give me an excuse",
 "أسئلة محدش سألها": "Questions nobody asked",
 "بس إحنا جاوبنا برضه.": "We answered them anyway.",
 "ينفع أتغدى فشار؟": "Can I have popcorn for lunch?",
 "طبعًا. وتفطر وتتعشى كمان، بس إحنا موقع ساخر مش دكتور تغذية، فماتاخدش بكلامنا.": "Of course. Breakfast and dinner too. But we're a satire site, not a nutritionist, so don't take our word for it.",
 "أعمل إيه في الحبّاية اللي مافرقعتش؟": "What do I do with the kernel that didn't pop?",
 "دي حبّاية عندها شخصية. احترم قرارها، وماتحاولش تكسرها بسنانك عشان سنانك هي اللي هتتكسر.": "That kernel has character. Respect its decision and don't try to crack it with your teeth, because your teeth will crack first.",
 "حد طلب مني «حبّة واحدة بس»، أعمل إيه؟": "Someone asked me for \"just one piece\". What now?",
 "إديله حبّة واحدة بالظبط، واختار اللي مافرقعتش.": "Give them exactly one piece, and pick one that didn't pop.",
 "هل في طريقة آكل بيها من غير ما أوقّع؟": "Can I eat without dropping any?",
 "العلماء لسه بيدوّروا. آخر محاولة انتهت بالباحث وهو بيلم فشار من تحت الكنبة.": "Scientists are still working on it. The last attempt ended with the researcher collecting popcorn from under the couch.",
 "ذرة أمل — موقع ساخر. مفيش أي فشاية اتأذت أثناء عمله (أكلناهم بس).": "Corn of Hope: a satire site. No popcorn was harmed in the making of it (we just ate it).",
 "لعبة ارمي في بُقه | ذرة أمل": "Feed His Mouth game | Corn of Hope",
 "ارمي الفشار في بُقه!": "Throw popcorn into his mouth!",
 "مستوى الصعوبة": "Difficulty level",
 "Easy": "Easy",
 "Medium": "Medium",
 "Hard": "Hard",
 "دخلت": "Scored",
 "0": "0",
 "فاضل فشار": "Popcorn left",
 "الوقت": "Time",
 "أحسن نقط": "Best points",
 "ساحة اللعبة": "Game area",
 "جاهز؟": "Ready?",
 "ابدأ اللعب": "Start game",
 "اسحب بالماوس أو بصباعك": "Drag with your mouse or finger",
 "لتحت": "down",
 "(عكس اتجاه الرمية) وسيب. كل ما تسحب أكتر الرمية تبقى أقوى.": "(opposite to your throw) and let go. The further you drag, the stronger the throw.",
 "بالكيبورد: الأسهم للتوجيه والقوة، والمسافة للرمي.": "Keyboard: arrow keys to aim and set power, Space to throw.",
 "الفشاية لازم تدخل البُق وهو مفتوح وهي نازلة أو في أعلى نقطة. خد بالك من الهوا!": "The popcorn must enter the mouth while it's open, on the way down or at the top of the arc. Mind the wind!"
};
let lang = 'ar';
try { if (localStorage.getItem('popcorn-lang') === 'en') lang = 'en'; } catch (e) { /* مش مشكلة */ }
const T = (ar, en) => lang === 'en' ? en : ar;
const refreshers = [];   // دوال بتعيد كتابة النصوص المتغيرة

// بنحفظ النص العربي الأصلي عشان نقدر نرجعله
const nodes = [], labels = [];
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode, raw = node.nodeValue, key = raw.trim().replace(/\s+/g, ' ');
  if (EN[key] && !node.parentElement.closest('script, style')) nodes.push({ node, raw, en: raw.match(/^\s*/)[0] + EN[key] + raw.match(/\s*$/)[0] });
}
document.querySelectorAll('[aria-label]').forEach(el => labels.push({ el, ar: el.getAttribute('aria-label') }));

const langBtn = document.createElement('button');
langBtn.type = 'button';
langBtn.className = 'lang';
document.querySelector('.links').appendChild(langBtn);

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = T('rtl', 'ltr');
  nodes.forEach(n => { n.node.nodeValue = T(n.raw, n.en); });
  labels.forEach(l => l.el.setAttribute('aria-label', T(l.ar, EN[l.ar] || l.ar)));
  langBtn.textContent = T('English', 'عربي');
  langBtn.lang = T('en', 'ar');
  refreshers.forEach(f => f());
}
langBtn.addEventListener('click', () => {
  lang = T('en', 'ar');
  try { localStorage.setItem('popcorn-lang', lang); } catch (e) { /* مش مشكلة */ }
  applyLang();
});

/* ---------- الرسومات ---------- */
const INK = '#2b1608';
// فشاية واحدة
const pop = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="#c98a1c" stroke-width="2">
<circle cx="-9" cy="2" r="11" fill="#fff3c4"/><circle cx="9" cy="3" r="11" fill="#ffe9a3"/>
<circle cx="0" cy="-8" r="12" fill="#fffbe8"/><circle cx="1" cy="7" r="9" fill="#fff3c4"/>
<circle cx="0" cy="1" r="4" fill="#f0a528" stroke="none"/></g>`;
const bucket = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
${[[-38,-34],[-14,-42],[12,-40],[36,-33],[-26,-55],[2,-60],[27,-52]].map(p => pop(p[0], p[1], 1.2)).join('')}
<path d="M-55-28H55L40 58H-40Z" fill="#fff" stroke="${INK}" stroke-width="4"/>
<path d="M-36-26H-14L-10 56H-27ZM14-26H36L27 56H10Z" fill="#d9231f"/></g>`;
// وش كارتوني: eyes / mouth
const face = (x, y, mouth, extra = '') => `<g transform="translate(${x} ${y})" stroke="${INK}" stroke-width="4" stroke-linecap="round">
<circle r="56" fill="#ffc994"/><circle cx="-19" cy="-14" r="6" fill="${INK}"/><circle cx="19" cy="-14" r="6" fill="${INK}"/>
${mouth}${extra}</g>`;
const OPEN = `<ellipse cy="23" rx="24" ry="20" fill="#6b1010"/><ellipse cy="34" rx="13" ry="6" fill="#ff6f7d" stroke="none"/>`;
const SMILE = `<path d="M-22 18Q0 42 22 18" fill="none"/>`;

const ART = {
  bucket: () => bucket(150, 115, 1.15),
  sofa: () => `<rect x="45" y="55" width="210" height="90" rx="24" fill="#d9231f" stroke="${INK}" stroke-width="4"/>
    <rect x="25" y="110" width="250" height="55" rx="20" fill="#b51a17" stroke="${INK}" stroke-width="4"/>
    <g transform="translate(112 80) scale(.65)">${face(0,0,SMILE)}</g>${bucket(200,105,.55)}`,
  hand: () => `${bucket(150,125,.95)}<g stroke="${INK}" stroke-width="4" fill="#ffc994">
    <path d="M300 8L205 15Q168 17 160 52Q166 66 176 48L180 72Q192 82 196 55L204 76Q217 80 218 54L228 66Q240 66 238 48L300 58Z"/></g>${pop(120,25)}${pop(75,70,.8)}`,
  mouth: () => `${face(150,100,`<ellipse cy="20" rx="34" ry="30" fill="#6b1010"/><ellipse cy="38" rx="19" ry="8" fill="#ff6f7d" stroke="none"/>`)}${pop(150,20,1.2)}${pop(60,60)}${pop(240,45)}`,
  movie: () => `<rect x="40" y="18" width="220" height="115" rx="10" fill="#26304f" stroke="${INK}" stroke-width="5"/>
    <path d="M128 48L188 76L128 104Z" fill="#fff"/>${bucket(80,148,.6)}${bucket(220,148,.6)}`,
  kernel: () => `${face(150,100,`<path d="M-30 14H30Q22 48 0 48T-30 14Z" fill="#fff"/><path d="M-10 15V44M10 15V44" fill="none"/>`,
    `<path d="M-6 17l12 2-5 11z" fill="#e8920c" stroke-width="2"/>`)}<path d="M240 40L172 112" stroke="${INK}" stroke-width="4" fill="none"/>
    <text x="252" y="38" font-size="34">!</text>`,
  ninja: () => `<rect width="300" height="180" fill="#26304f"/>${face(150,90,'',`<path d="M-55-34Q0-75 55-34L55-27H-55ZM-54 4H54Q45 56 0 56T-54 4Z" fill="#111"/>`)}${bucket(255,140,.5)}${pop(80,125)}`,
  vacuum: () => `${face(100,95,`<circle cy="24" r="17" fill="#6b1010"/>`)}${pop(145,115,1)}${pop(178,105,.9)}${pop(205,120,.8)}${bucket(250,130,.55)}
    <path d="M135 100Q180 75 230 95M135 138Q185 158 225 142" stroke="#fff" stroke-width="5" fill="none"/>`,
  thrower: () => `${face(105,112,OPEN)}${pop(132,88,1.1)}${pop(190,35)}${pop(240,150)}${pop(40,155,.8)}
    <path d="M250 140Q220 -20 140 75" stroke="${INK}" stroke-width="3" stroke-dasharray="7 8" fill="none"/>`,
  thinker: () => `${face(110,100,`<path d="M-16 27H16" fill="none"/>`,`<circle cx="-19" cy="-14" r="15" fill="none"/><circle cx="19" cy="-14" r="15" fill="none"/><path d="M-4-14H4" />`)}
    <circle cx="182" cy="86" r="6" fill="#fff"/><circle cx="198" cy="72" r="10" fill="#fff"/><ellipse cx="238" cy="45" rx="45" ry="34" fill="#fff"/>${pop(238,45,1.3)}`
};

document.querySelectorAll('[data-art]').forEach(el => {
  el.innerHTML = `<svg viewBox="0 0 300 180" aria-hidden="true">${ART[el.dataset.art]()}</svg>`;
});

/* ---------- الصفحة الرئيسية ---------- */
const excuseBtn = document.getElementById('excuseBtn');
if (excuseBtn) {
  const excuses = [
    'أنا ماأكلتوش، هو اللي دخل بُقي دفاعًا عن نفسه.',
    'كنت بتأكد إنه مش مسموم، وللأمان اتأكدت من كل حباية.',
    'العلبة كانت فاضية من الأول، إحنا بس اللي كنا متخيلينها مليانة.',
    'ده مش أكل، ده تمرين لعضلات الفك.',
    'الفشار ٩٠٪ هوا، يعني أنا يا دوب كنت بتنفس.',
    'القطة هي السبب. أيوه، حتى لو معندناش قطة.',
    'ماحبيتش أسيبه يبرد ويحس إنه مرفوض.',
    'الفشار كان بيبصلي بصة مستفزة.',
    'أنا باكل نيابةً عنك عشان متتعبش.',
    'سمعت إن الفشار بيزعل لو اتساب لوحده.',
    'دي كانت عينة بحثية، والبحث احتاج العلبة كلها.',
    'إيدي بتشتغل لوحدها، أنا ماليش سلطة عليها.',
    'الجاذبية هي اللي وقعته في بُقي.',
    'كنت بفضّيلك العلبة عشان تعرف تحط فيها حاجتك.',
    'أنا ماخلصتوش، لسه فيه الحبّايات اللي مافرقعتش.',
    'الفيلم كان حزين وأنا باكل لما أتأثر.',
    'الفيلم كان ضحك وأنا باكل لما أنبسط.',
    'الإعلانات طويلة، كنت هعمل إيه يعني؟',
    'حلمت إني باكل فشار، وصحيت لقيت العلبة فاضية.',
    'العلبة دي مقاسها صغير، شكلها بس اللي كبير.',
    'كنت بحميك من السعرات، دي تضحية.',
    'الفشار انتهت صلاحيته بعد خمس دقايق في قاموسي.',
    'أنا بس دوقته، حوالي ميتين مرة.',
    'المروحة طيّرته ناحيتي.',
    'فيه حرامي دخل وأكله، وساب القشر في سناني عشان يلبسني التهمة.'
  ];
  const excusesEn = [
  "I didn't eat it. It entered my mouth in self-defence.",
  "I was making sure it wasn't poisoned, and to be safe I checked every single piece.",
  "The bucket was empty from the start. We only imagined it was full.",
  "That wasn't eating. It was a jaw workout.",
  "Popcorn is 90% air, so I was barely breathing.",
  "The cat did it. Yes, even though we don't have a cat.",
  "I didn't want it to get cold and feel rejected.",
  "The popcorn was giving me a provocative look.",
  "I ate it on your behalf so you would not get tired.",
  "I heard popcorn gets upset when left alone.",
  "It was a research sample, and the research needed the whole bucket.",
  "My hand works on its own. I have no authority over it.",
  "Gravity dropped it into my mouth.",
  "I emptied the bucket so you could keep your things in it.",
  "I did not finish it. The unpopped kernels are still there.",
  "The movie was sad and I eat when I am moved.",
  "The movie was funny and I eat when I am happy.",
  "The adverts were long. What was I supposed to do?",
  "I dreamt I was eating popcorn and woke up to an empty bucket.",
  "That bucket is a small size. It only looks big.",
  "I was protecting you from the calories. It was a sacrifice.",
  "In my book popcorn expires after five minutes.",
  "I only tasted it. About two hundred times.",
  "The fan blew it my way.",
  "A thief ate it and left the hulls in my teeth to frame me."
];
  let last = -1;
  const showExcuse = () => {
    document.getElementById('excuseText').textContent = last < 0
      ? T('دوس على الزرار وخد عذرك.', 'Press the button and get your excuse.')
      : T(excuses[last], excusesEn[last]);
  };
  refreshers.push(showExcuse);
  // كل الأعذار بتطلع بترتيب عشوائي، ومفيش عذر بيتكرر غير لما كلهم يخلصوا
  let deck = [];
  excuseBtn.addEventListener('click', () => {
    if (!deck.length) {
      deck = excuses.map((_, i) => i);
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      // أول عذر في اللفة الجديدة مايبقاش آخر عذر ظهر
      if (deck[deck.length - 1] === last) deck.reverse();
    }
    last = deck.pop();
    showExcuse();
  });
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!calm) setInterval(() => {
    if (document.hidden) return;
    const el = document.createElement('div');
    const size = 22 + Math.random() * 28;
    el.className = 'falling';
    el.innerHTML = `<svg viewBox="-24 -24 48 48" width="${size}" height="${size}">${pop(0,0)}</svg>`;
    el.style.left = Math.random() * 95 + 'vw';
    el.style.animationDuration = 4 + Math.random() * 4 + 's';
    el.addEventListener('animationend', () => el.remove());
    document.body.appendChild(el);
  }, 700);
}

/* ---------- اللعبة ---------- */
const canvas = document.getElementById('game');
if (!canvas) { applyLang(); return; }
const ctx = canvas.getContext('2d');
const $ = id => document.getElementById(id);

const W = 600, H = 700, G = 900;
const LAUNCH = { x: 300, y: 570 };
const POWER = 9, MAX_PULL = 130;

// إعدادات الصعوبة — غيّر الأرقام دي لو عايز تسهّل أو تصعّب
const LEVELS = {
  easy:   { ammo: 15, goal: 5, time: 60, mouth: 42, speed: 55,  bob: 0,  open: 3.0, shut: 0.6, wind: 0,   guide: 0.65, fly: false },
  medium: { ammo: 14, goal: 6, time: 50, mouth: 32, speed: 105, bob: 25, open: 2.0, shut: 0.9, wind: 90,  guide: 0.35, fly: false },
  hard:   { ammo: 12, goal: 6, time: 45, mouth: 25, speed: 160, bob: 55, open: 1.4, shut: 1.0, wind: 170, guide: 0.18, fly: true }
};

let level = 'easy', cfg = LEVELS[level];
let state = 'menu';            // menu | play | over
let head, shots, bits, texts, score, points, streak, ammo, time, wind, fly, drag = null;
let aim = { x: 0, y: 105 };    // للكيبورد
let keyAiming = false, cooldown = 0;

const store = {
  get(k) { try { return +localStorage.getItem(k) || 0; } catch (e) { return 0; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* مش مشكلة */ } }
};

function reset() {
  cfg = LEVELS[level];
  head = { x: 300, y: 230, dir: Math.random() < .5 ? -1 : 1, t: 0, open: true, timer: cfg.open, chew: 0, turn: 2 };
  shots = []; bits = []; texts = [];
  score = 0; points = 0; streak = 0; ammo = cfg.ammo; time = cfg.time; cooldown = 0;
  drag = null; keyAiming = false; aim = { x: 0, y: 105 };
  fly = { x: 80, y: 370, t: 0 };
  newWind(); hud();
}
function newWind() { wind = cfg.wind ? (Math.random() * 2 - 1) * cfg.wind : 0; }
function hud() {
  $('score').textContent = score + '/' + cfg.goal;
  $('ammo').textContent = ammo;
  $('time').textContent = Math.ceil(time);
  $('best').textContent = store.get('popcorn-best-' + level);
}
function overlayText() {
  if (state === 'menu') {
    const names = {
      easy: T('سهل (بس مش أوي)', 'Easy (but not that easy)'),
      medium: T('متوسط: بيقفل بُقه وفيه هوا', 'Medium: he shuts his mouth and it\'s windy'),
      hard: T('صعب: سريع وهوا شديد ودبانة', 'Hard: fast, strong wind and a fly')
    };
    $('ovTitle').textContent = T('جاهز؟', 'Ready?');
    $('ovText').textContent = T(`${names[level]} — دخّل ${cfg.goal} فشايات من ${cfg.ammo} في ${cfg.time} ثانية.`,
      `${names[level]}. Land ${cfg.goal} of ${cfg.ammo} pieces in ${cfg.time} seconds.`);
    $('startBtn').textContent = T('ابدأ اللعب', 'Start game');
  } else if (state === 'over') {
    $('ovTitle').textContent = score >= cfg.goal
      ? T('كسبت يا معلّم! 🏆', 'You win, champ! 🏆')
      : T('خسرت.. وهو لسه جعان 😢', 'You lost, and he\'s still hungry 😢');
    $('ovText').textContent = T(`دخّلت ${score} من المطلوب ${cfg.goal} — مجموع نقطك ${points}.`,
      `You landed ${score} of the ${cfg.goal} needed. Points: ${points}.`);
    $('startBtn').textContent = T('العب تاني', 'Play again');
  }
}
function menu() {
  state = 'menu'; reset(); overlayText();
  $('overlay').hidden = false;
}
function start() {
  reset(); state = 'play';
  $('overlay').hidden = true;
  canvas.focus({ preventScroll: true });
  canvas.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function finish() {
  state = 'over';
  const key = 'popcorn-best-' + level;
  if (points > store.get(key)) store.set(key, points);
  overlayText();
  $('overlay').hidden = false;
  hud();
}
refreshers.push(() => { texts = []; overlayText(); });

function velocity(pull) {
  return { vx: -pull.x * POWER, vy: -pull.y * POWER };
}
function clampPull(x, y) {
  const len = Math.hypot(x, y);
  const k = len > MAX_PULL ? MAX_PULL / len : 1;
  return { x: x * k, y: y * k };
}
function shoot(pull) {
  if (state !== 'play' || ammo <= 0 || cooldown > 0 || pull.y < 15) return;
  shots.push({ x: LAUNCH.x, y: LAUNCH.y, ...velocity(pull), r: 0 });
  ammo--; cooldown = .35; hud();
}
function say(msg, x, y, color) { texts.push({ msg, x: Math.max(110, Math.min(490, x)), y, color, life: 1.1 }); }
function crumbs(x, y) {
  for (let i = 0; i < 7; i++) bits.push({ x, y, vx: Math.random() * 240 - 120, vy: -Math.random() * 220, life: .7 });
}
const mouthPos = () => ({ x: head.x, y: head.y + 38 });

function update(dt) {
  time -= dt; cooldown -= dt;
  head.t += dt;
  // حركة الراس
  head.x += head.dir * cfg.speed * dt;
  if (head.x < 100) { head.x = 100; head.dir = 1; }
  if (head.x > 500) { head.x = 500; head.dir = -1; }
  if (level === 'hard' && (head.turn -= dt) <= 0) { head.dir *= -1; head.turn = 1.2 + Math.random() * 2.3; }
  head.y = 230 + Math.sin(head.t * 2.1) * cfg.bob;
  // فتح وقفل البُق
  head.chew = Math.max(0, head.chew - dt);
  head.timer -= dt;
  if (head.timer <= 0) {
    head.open = !head.open;
    head.timer = head.open ? cfg.open : cfg.shut;
  }
  fly.t += dt;
  fly.x = 300 + Math.sin(fly.t * 1.3) * 220;
  fly.y = 385 + Math.sin(fly.t * 3.1) * 40;

  for (const s of shots) {
    // خطوات صغيرة عشان الفشاية ماتعديش من البُق
    for (let i = 0; i < 4 && !s.done; i++) {
      const h = dt / 4;
      s.vx += wind * h; s.vy += G * h;
      s.x += s.vx * h; s.y += s.vy * h; s.r += h * 8;
      const m = mouthPos();
      const inMouth = ((s.x - m.x) / cfg.mouth) ** 2 + ((s.y - m.y) / (cfg.mouth * .85)) ** 2 <= 1;
      if (inMouth && s.vy > -120) {
        s.done = true;
        if (head.open && head.chew <= 0) {
          score++; streak++;
          const gain = 10 * Math.min(streak, 5);
          points += gain; head.chew = .45;
          say(streak > 1 ? `${T('ممم!', 'Yum!')} ×${streak}  +${gain}` : `${T('ممم!', 'Yum!')} +${gain}`, m.x, m.y - 100, '#1d7a22');
        } else {
          streak = 0; crumbs(s.x, s.y);
          say(T('بُقه مقفول!', 'Mouth closed!'), m.x, m.y - 100, '#b51a17');
        }
      } else if (cfg.fly && Math.hypot(s.x - fly.x, s.y - fly.y) < 30) {
        s.done = true; streak = 0; crumbs(s.x, s.y);
        say(T('الدبانة خطفتها!', 'The fly got it!'), fly.x, fly.y - 30, '#b51a17');
      } else if (s.y > H + 20 || s.x < -40 || s.x > W + 40) {
        s.done = true; streak = 0;
        const msgs = T(['يا نهار أبيض!', 'في عينه!', 'الأرض شبعت', 'ركّز شوية'],
          ['Oh no!', 'Missed him!', 'The floor is full', 'Focus!']);
        say(msgs[Math.floor(Math.random() * msgs.length)], s.x, Math.min(650, Math.max(80, s.y - 30)), '#b51a17');
      }
    }
    if (s.done) { newWind(); hud(); }
  }
  shots = shots.filter(s => !s.done);

  $('time').textContent = Math.max(0, Math.ceil(time));
  if (score >= cfg.goal || time <= 0 || (ammo <= 0 && shots.length === 0)) finish();
}

function effects(dt) {
  for (const b of bits) { b.vy += G * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt; }
  for (const t of texts) { t.y -= 35 * dt; t.life -= dt; }
  bits = bits.filter(b => b.life > 0);
  texts = texts.filter(t => t.life > 0);
}

/* ---------- الرسم على الكانفاس ---------- */
function oval(x, y, rx, ry, fill, stroke = true) {
  ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = fill; ctx.fill();
  if (stroke) ctx.stroke();
}
function kernel(x, y, s = 1, rot = 0) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
  ctx.strokeStyle = '#a86f10'; ctx.lineWidth = 2;
  oval(-7, 2, 9, 9, '#fff3c4'); oval(7, 3, 9, 9, '#ffe9a3');
  oval(0, -6, 10, 10, '#fffbe8'); oval(0, 3, 4, 4, '#f0a528', false);
  ctx.restore();
}
function draw() {
  // الخلفية
  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#74c2e4'); sky.addColorStop(1, '#d9f2fb');
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  [[90, 90], [430, 60], [520, 390], [60, 450]].forEach(c => {
    oval(c[0], c[1], 48, 18, '#ffffffb0', false); oval(c[0] + 18, c[1] - 12, 25, 20, '#ffffffb0', false);
  });
  ctx.fillStyle = '#8d5524'; ctx.fillRect(0, 640, W, 60);

  // الشخص
  const { x, y } = head;
  ctx.strokeStyle = '#2b1608'; ctx.lineWidth = 5; ctx.lineCap = 'round';
  ctx.fillStyle = '#d9231f';
  ctx.beginPath(); ctx.ellipse(x, y + 135, 85, 55, 0, Math.PI, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
  oval(x - 88, y, 17, 23, '#ffc994'); oval(x + 88, y, 17, 23, '#ffc994');
  oval(x, y, 88, 98, '#ffc994');
  ctx.beginPath(); ctx.ellipse(x, y - 40, 87, 62, 0, Math.PI * 1.02, Math.PI * 1.98);
  ctx.quadraticCurveTo(x, y - 55, x - 87, y - 44); ctx.fillStyle = '#4a2a12'; ctx.fill(); ctx.stroke();
  // العين بتبص على الفشاية
  const look = shots[shots.length - 1] || LAUNCH;
  const a = Math.atan2(look.y - y, look.x - x);
  [-30, 30].forEach(dx => {
    oval(x + dx, y - 25, 17, head.chew > 0 ? 5 : 19, '#fff');
    if (head.chew <= 0) oval(x + dx + Math.cos(a) * 7, y - 25 + Math.sin(a) * 8, 7, 7, '#2b1608', false);
  });
  oval(x, y - 2, 10, 8, '#f2a974');
  const m = mouthPos();
  const closing = head.open && head.timer < .35;   // تحذير قبل ما يقفل
  if (head.open && head.chew <= 0) {
    oval(m.x, m.y, cfg.mouth, cfg.mouth * .85 * (closing ? .65 : 1), '#6b1010');
    oval(m.x, m.y + cfg.mouth * (closing ? .25 : .45), cfg.mouth * .55, cfg.mouth * .22, '#ff6f7d', false);
  } else {
    ctx.beginPath(); ctx.moveTo(m.x - cfg.mouth, m.y);
    ctx.quadraticCurveTo(m.x, m.y + (head.chew > 0 ? 24 : -6), m.x + cfg.mouth, m.y); ctx.stroke();
  }

  if (cfg.fly) {
    ctx.lineWidth = 2;
    const flap = Math.sin(fly.t * 45) * 5;
    oval(fly.x - 11, fly.y - 11 + flap, 11, 7, '#ffffffcc');
    oval(fly.x + 11, fly.y - 11 + flap, 11, 7, '#ffffffcc');
    oval(fly.x, fly.y, 14, 11, '#222');
    oval(fly.x - 5, fly.y - 3, 4, 4, '#e33', false); oval(fly.x + 5, fly.y - 3, 4, 4, '#e33', false);
  }

  // خط التوجيه
  const pull = drag || (keyAiming ? aim : null);
  if (pull && pull.y >= 15 && state === 'play') {
    const v = velocity(pull);
    for (let t = .05; t <= cfg.guide; t += .05) {
      oval(LAUNCH.x + v.vx * t + wind * t * t / 2, LAUNCH.y + v.vy * t + G * t * t / 2, 5, 5, '#d9231f', false);
    }
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(LAUNCH.x, LAUNCH.y); ctx.lineTo(LAUNCH.x + pull.x, LAUNCH.y + pull.y); ctx.stroke();
  }

  // العلبة
  ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(245, 598); ctx.lineTo(355, 598); ctx.lineTo(338, 685); ctx.lineTo(262, 685); ctx.closePath();
  ctx.fillStyle = '#fff'; ctx.fill();
  ctx.fillStyle = '#d9231f';
  [[263, 283, 288, 275], [312, 337, 325, 306]].forEach(p => {
    ctx.beginPath(); ctx.moveTo(p[0], 598); ctx.lineTo(p[1], 598); ctx.lineTo(p[2], 685); ctx.lineTo(p[3], 685); ctx.fill();
  });
  ctx.stroke();
  [260, 285, 312, 340, 300].forEach((px, i) => kernel(px, i === 4 ? 587 : 598, 1.1, i));
  if (ammo > 0 && cooldown <= 0) {
    const p = pull || { x: 0, y: 0 };
    kernel(LAUNCH.x + p.x, LAUNCH.y + p.y, 1.3);
  }

  shots.forEach(s => kernel(s.x, s.y, 1.1, s.r));
  bits.forEach(b => kernel(b.x, b.y, .45));

  ctx.textAlign = 'center'; ctx.direction = T('rtl', 'ltr');
  ctx.font = '800 30px Cairo, Tahoma, sans-serif';
  texts.forEach(t => {
    ctx.globalAlpha = Math.min(1, t.life * 2);
    ctx.lineWidth = 6; ctx.strokeStyle = '#fff'; ctx.strokeText(t.msg, t.x, t.y);
    ctx.fillStyle = t.color; ctx.fillText(t.msg, t.x, t.y);
  });
  ctx.globalAlpha = 1;

  if (cfg.wind) {
    const strength = Math.round(Math.abs(wind) / 10);
    ctx.font = '800 22px Cairo, Tahoma, sans-serif'; ctx.fillStyle = '#2b1608';
    ctx.fillText(`${T('الهوا', 'Wind')} ${wind > 0 ? '➡' : '⬅'} ${strength}`, 300, 35);
  }
}

/* ---------- التحكم ---------- */
function point(e) {
  const r = canvas.getBoundingClientRect();
  return { x: (e.clientX - r.left) * W / r.width, y: (e.clientY - r.top) * H / r.height };
}
let origin = null;
canvas.addEventListener('pointerdown', e => {
  if (state !== 'play') return;
  origin = point(e); drag = { x: 0, y: 0 }; keyAiming = false;
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', e => {
  if (!drag) return;
  const p = point(e);
  drag = clampPull(p.x - origin.x, p.y - origin.y);
});
canvas.addEventListener('pointerup', () => { if (drag) shoot(drag); drag = null; });
canvas.addEventListener('pointercancel', () => { drag = null; });

document.addEventListener('keydown', e => {
  if (state !== 'play') return;
  const step = { ArrowLeft: [3, 0], ArrowRight: [-3, 0], ArrowUp: [0, 3], ArrowDown: [0, -3] }[e.key];
  if (step) {
    e.preventDefault(); keyAiming = true;
    aim = clampPull(aim.x + step[0], Math.max(15, aim.y + step[1]));
  } else if (e.code === 'Space') {
    e.preventDefault(); keyAiming = true; shoot(aim);
  }
});

document.querySelectorAll('.level').forEach(btn => btn.addEventListener('click', () => {
  level = btn.dataset.level;
  document.querySelectorAll('.level').forEach(b => b.setAttribute('aria-pressed', b === btn));
  menu();
}));
$('startBtn').addEventListener('click', start);

let prev = performance.now();
function loop(now) {
  const dt = Math.min(.033, (now - prev) / 1000);
  prev = now;
  if (state === 'play') update(dt);
  effects(dt); draw();
  requestAnimationFrame(loop);
}
menu();
applyLang();
requestAnimationFrame(loop);
})();
