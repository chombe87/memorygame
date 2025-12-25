const leagues = {
  epl: {
    name: "Premier League",
    logo: "assets/leagues/epl.svg",
    tagLeft: "Klub",
    tagRight: "Stadion",
    pairs: [
      { club: "Arsenal", crest: "assets/crests/arsenal.svg", stadium: "Emirates Stadium", stadiumImage: "assets/stadiums/arsenal.jpg" },
      { club: "Aston Villa", crest: "assets/crests/aston-villa.svg", stadium: "Villa Park", stadiumImage: "assets/stadiums/aston-villa.jpg" },
      { club: "Bournemouth", crest: "assets/crests/bournemouth.svg", stadium: "Dean Court", stadiumImage: "assets/stadiums/bournemouth.jpg" },
      { club: "Brentford", crest: "assets/crests/brentford.svg", stadium: "Brentford Community Stadium", stadiumImage: "assets/stadiums/brentford.jpg" },
      { club: "Brighton & Hove Albion", crest: "assets/crests/brighton.svg", stadium: "Amex Stadium", stadiumImage: "assets/stadiums/brighton.jpg" },
      { club: "Burnley", crest: "assets/crests/burnley.svg", stadium: "Turf Moor", stadiumImage: "assets/stadiums/burnley.jpg" },
      { club: "Chelsea", crest: "assets/crests/chelsea.svg", stadium: "Stamford Bridge", stadiumImage: "assets/stadiums/chelsea.jpg" },
      { club: "Crystal Palace", crest: "assets/crests/crystal-palace.svg", stadium: "Selhurst Park", stadiumImage: "assets/stadiums/crystal-palace.jpg" },
      { club: "Everton", crest: "assets/crests/everton.svg", stadium: "Goodison Park", stadiumImage: "assets/stadiums/everton.jpg" },
      { club: "Fulham", crest: "assets/crests/fulham.svg", stadium: "Craven Cottage", stadiumImage: "assets/stadiums/fulham.jpg" },
      { club: "Leeds United", crest: "assets/crests/leeds-united.svg", stadium: "Elland Road", stadiumImage: "assets/stadiums/leeds-united.jpg" },
      { club: "Liverpool", crest: "assets/crests/liverpool.svg", stadium: "Anfield", stadiumImage: "assets/stadiums/liverpool.jpg" },
      { club: "Manchester City", crest: "assets/crests/manchester-city.svg", stadium: "City of Manchester Stadium", stadiumImage: "assets/stadiums/manchester-city.jpg" },
      { club: "Manchester United", crest: "assets/crests/manchester-united.svg", stadium: "Old Trafford", stadiumImage: "assets/stadiums/manchester-united.jpg" },
      { club: "Newcastle United", crest: "assets/crests/newcastle-united.svg", stadium: "St James' Park", stadiumImage: "assets/stadiums/newcastle-united.jpg" },
      { club: "Nottingham Forest", crest: "assets/crests/nottingham-forest.svg", stadium: "City Ground", stadiumImage: "assets/stadiums/nottingham-forest.jpg" },
      { club: "Sunderland", crest: "assets/crests/sunderland.svg", stadium: "Stadium of Light", stadiumImage: "assets/stadiums/sunderland.jpg" },
      { club: "Tottenham Hotspur", crest: "assets/crests/tottenham-hotspur.svg", stadium: "Tottenham Hotspur Stadium", stadiumImage: "assets/stadiums/tottenham-hotspur.jpg" },
      { club: "West Ham United", crest: "assets/crests/west-ham-united.svg", stadium: "London Stadium", stadiumImage: "assets/stadiums/west-ham-united.jpg" },
      { club: "Wolverhampton Wanderers", crest: "assets/crests/wolverhampton-wanderers.svg", stadium: "Molineux Stadium", stadiumImage: "assets/stadiums/wolverhampton-wanderers.jpg" }
    ]
  },
  laliga: {
    name: "La Liga",
    logo: "assets/leagues/laliga.png",
    tagLeft: "Klub",
    tagRight: "Stadion",
    pairs: [
      { club: "Alaves", crest: "assets/crests/alaves.png", stadium: "Mendizorroza", stadiumImage: "assets/stadiums/alaves.jpg" },
      { club: "Athletic Club", crest: "assets/crests/athletic-club.png", stadium: "San Mames", stadiumImage: "assets/stadiums/athletic-club.jpg" },
      { club: "Atletico Madrid", crest: "assets/crests/atletico-madrid.png", stadium: "Metropolitano", stadiumImage: "assets/stadiums/atletico-madrid.jpg" },
      { club: "Barcelona", crest: "assets/crests/barcelona.png", stadium: "Camp Nou", stadiumImage: "assets/stadiums/barcelona.jpg" },
      { club: "Celta Vigo", crest: "assets/crests/celta-vigo.svg", stadium: "Balaidos", stadiumImage: "assets/stadiums/celta-vigo.jpg" },
      { club: "Espanyol", crest: "assets/crests/espanyol.svg", stadium: "RCDE Stadium", stadiumImage: "assets/stadiums/espanyol.jpg" },
      { club: "Getafe", crest: "assets/crests/getafe.jpg", stadium: "Coliseum Alfonso Perez", stadiumImage: "assets/stadiums/getafe.jpg" },
      { club: "Girona", crest: "assets/crests/girona.svg", stadium: "Montilivi", stadiumImage: "assets/stadiums/girona.jpg" },
      { club: "Las Palmas", crest: "assets/crests/las-palmas.svg", stadium: "Estadio de Gran Canaria", stadiumImage: "assets/stadiums/las-palmas.jpg" },
      { club: "Leganes", crest: "assets/crests/leganes.png", stadium: "Butarque", stadiumImage: "assets/stadiums/leganes.jpg" },
      { club: "Mallorca", crest: "assets/crests/mallorca.svg", stadium: "Estadi de Son Moix", stadiumImage: "assets/stadiums/mallorca.jpg" },
      { club: "Osasuna", crest: "assets/crests/osasuna.jpg", stadium: "El Sadar", stadiumImage: "assets/stadiums/osasuna.jpg" },
      { club: "Rayo Vallecano", crest: "assets/crests/rayo-vallecano.svg", stadium: "Campo de Futbol de Vallecas", stadiumImage: "assets/stadiums/rayo-vallecano.jpg" },
      { club: "Real Betis", crest: "assets/crests/real-betis.svg", stadium: "Benito Villamarin", stadiumImage: "assets/stadiums/real-betis.jpg" },
      { club: "Real Madrid", crest: "assets/crests/real-madrid.png", stadium: "Santiago Bernabeu", stadiumImage: "assets/stadiums/real-madrid.jpg" },
      { club: "Real Oviedo", crest: "assets/crests/real-oviedo.jpg", stadium: "Carlos Tartiere", stadiumImage: "assets/stadiums/real-oviedo.jpg" },
      { club: "Real Sociedad", crest: "assets/crests/real-sociedad.svg", stadium: "Anoeta", stadiumImage: "assets/stadiums/real-sociedad.png" },
      { club: "Sevilla", crest: "assets/crests/sevilla.jpg", stadium: "Ramon Sanchez Pizjuan", stadiumImage: "assets/stadiums/sevilla.jpg" },
      { club: "Valencia", crest: "assets/crests/valencia.png", stadium: "Mestalla", stadiumImage: "assets/stadiums/valencia.JPG" },
      { club: "Villarreal", crest: "assets/crests/villarreal.svg", stadium: "Estadio de la Ceramica", stadiumImage: "assets/stadiums/villarreal.jpg" }
    ]
  },
  seriea: {
    name: "Serie A",
    logo: "assets/leagues/seriea.png",
    tagLeft: "Klub",
    tagRight: "Stadion",
    conflicts: [
      ["Inter", "Milan"],
      ["Lazio", "Roma"]
    ],
    pairs: [
      { club: "Atalanta", crest: "assets/crests/atalanta.png", stadium: "Stadio Atleti Azzurri d'Italia", stadiumImage: "assets/stadiums/atalanta.jpg" },
      { club: "Bologna", crest: "assets/crests/bologna.png", stadium: "Stadio Renato Dall'Ara", stadiumImage: "assets/stadiums/bologna.jpg" },
      { club: "Cagliari", crest: "assets/crests/cagliari.png", stadium: "Sardegna Arena", stadiumImage: "assets/stadiums/cagliari.jpeg" },
      { club: "Como", crest: "assets/crests/como.png", stadium: "Stadio Giuseppe Sinigaglia", stadiumImage: "assets/stadiums/como.jpg" },
      { club: "Empoli", crest: "assets/crests/empoli.png", stadium: "Stadio Carlo Castellani", stadiumImage: "assets/stadiums/empoli.jpg" },
      { club: "Fiorentina", crest: "assets/crests/fiorentina.png", stadium: "Stadio Artemio Franchi", stadiumImage: "assets/stadiums/fiorentina.jpg" },
      { club: "Genoa", crest: "assets/crests/genoa.png", stadium: "Stadio Luigi Ferraris", stadiumImage: "assets/stadiums/genoa.jpg" },
      { club: "Inter", crest: "assets/crests/inter.png", stadium: "San Siro", stadiumImage: "assets/stadiums/inter.jpg" },
      { club: "Juventus", crest: "assets/crests/juventus.png", stadium: "Juventus Stadium", stadiumImage: "assets/stadiums/juventus.jpg" },
      { club: "Lazio", crest: "assets/crests/lazio.png", stadium: "Stadio Olimpico", stadiumImage: "assets/stadiums/lazio.jpg" },
      { club: "Lecce", crest: "assets/crests/lecce.png", stadium: "Stadio Via del Mare", stadiumImage: "assets/stadiums/lecce.jpg" },
      { club: "Milan", crest: "assets/crests/milan.png", stadium: "San Siro", stadiumImage: "assets/stadiums/milan.jpg" },
      { club: "Monza", crest: "assets/crests/monza.png", stadium: "Stadio Brianteo", stadiumImage: "assets/stadiums/monza.jpg" },
      { club: "Napoli", crest: "assets/crests/napoli.jpg", stadium: "Stadio Diego Armando Maradona", stadiumImage: "assets/stadiums/napoli.jpg" },
      { club: "Parma", crest: "assets/crests/parma.png", stadium: "Stadio Ennio Tardini", stadiumImage: "assets/stadiums/parma.jpg" },
      { club: "Roma", crest: "assets/crests/roma.png", stadium: "Stadio Olimpico", stadiumImage: "assets/stadiums/roma.jpg" },
      { club: "Torino", crest: "assets/crests/torino.png", stadium: "Stadio Olimpico Grande Torino", stadiumImage: "assets/stadiums/torino.jpg" },
      { club: "Udinese", crest: "assets/crests/udinese.png", stadium: "Stadio Friuli", stadiumImage: "assets/stadiums/udinese.jpg" },
      { club: "Venezia", crest: "assets/crests/venezia.png", stadium: "Stadio Pier Luigi Penzo", stadiumImage: "assets/stadiums/venezia.jpg" },
      { club: "Verona", crest: "assets/crests/verona.png", stadium: "Stadio Marc'Antonio Bentegodi", stadiumImage: "assets/stadiums/verona.jpg" }
    ]
  },
  bundesliga: {
    name: "Bundesliga",
    logo: "assets/leagues/bundesliga.png",
    tagLeft: "Klub",
    tagRight: "Stadion",
    pairs: [
      { club: "FC Augsburg", stadium: "Augsburg Arena" },
      { club: "Union Berlin", stadium: "Stadion An der Alten Forsterei" },
      { club: "Werder Bremen", stadium: "Weserstadion" },
      { club: "Borussia Dortmund", stadium: "Westfalenstadion" },
      { club: "Eintracht Frankfurt", stadium: "Waldstadion" },
      { club: "SC Freiburg", stadium: "Freiburg Stadion" },
      { club: "Hamburger SV", stadium: "Volksparkstadion" },
      { club: "1. FC Heidenheim", stadium: "Albstadion" },
      { club: "TSG Hoffenheim", stadium: "Rhein-Neckar-Arena" },
      { club: "1. FC Koln", stadium: "Mungersdorfer Stadion" },
      { club: "RB Leipzig", stadium: "Zentralstadion" },
      { club: "Bayer Leverkusen", stadium: "BayArena" },
      { club: "Mainz 05", stadium: "Bruchwegstadion" },
      { club: "Borussia Monchengladbach", stadium: "Borussia-Park" },
      { club: "Bayern Munich", stadium: "Munich Football Arena" },
      { club: "FC St. Pauli", stadium: "Millerntor-Stadion" },
      { club: "VfB Stuttgart", stadium: "Neckarstadion" },
      { club: "VfL Wolfsburg", stadium: "Wolfsburg Arena" }
    ]
  },
  ligue1: {
    name: "Ligue 1",
    logo: "assets/leagues/ligue1.png",
    tagLeft: "Klub",
    tagRight: "Stadion",
    pairs: [
      { club: "Paris Saint-Germain", crest: "assets/crests/psg.png", stadium: "Parc des Princes", stadiumImage: "assets/stadiums/psg.jpg" },
      { club: "AS Monaco", crest: "assets/crests/monaco.jpg", stadium: "Stade Louis-II", stadiumImage: "assets/stadiums/monaco.jpg" },
      { club: "Olympique Marseille", crest: "assets/crests/marseille.png", stadium: "Stade Velodrome", stadiumImage: "assets/stadiums/marseille.png" },
      { club: "Olympique Lyonnais", crest: "assets/crests/lyon.jpg", stadium: "Parc Olympique Lyonnais", stadiumImage: "assets/stadiums/lyon.jpg" },
      { club: "Lille OSC", crest: "assets/crests/lille.png", stadium: "Stade Pierre-Mauroy", stadiumImage: "assets/stadiums/lille.jpg" },
      { club: "RC Lens", crest: "assets/crests/lens.png", stadium: "Stade Bollaert-Delelis", stadiumImage: "assets/stadiums/lens.JPG" },
      { club: "Stade Rennais", crest: "assets/crests/rennes.png", stadium: "Roazhon Park", stadiumImage: "assets/stadiums/rennes.jpg" },
      { club: "OGC Nice", crest: "assets/crests/nice.png", stadium: "Stade de Nice", stadiumImage: "assets/stadiums/nice.jpg" },
      { club: "FC Nantes", crest: "assets/crests/nantes.png", stadium: "Stade de la Beaujoire", stadiumImage: "assets/stadiums/nantes.jpg" },
      { club: "Stade de Reims", crest: "assets/crests/reims.png", stadium: "Stade Auguste-Delaune", stadiumImage: "assets/stadiums/reims.jpg" },
      { club: "Montpellier HSC", crest: "assets/crests/montpellier.png", stadium: "Stade de la Mosson", stadiumImage: "assets/stadiums/montpellier.jpg" },
      { club: "Toulouse FC", crest: "assets/crests/toulouse.png", stadium: "Stadium de Toulouse", stadiumImage: "assets/stadiums/toulouse.jpg" },
      { club: "RC Strasbourg Alsace", crest: "assets/crests/strasbourg.png", stadium: "Stade de la Meinau", stadiumImage: "assets/stadiums/strasbourg.jpg" },
      { club: "Le Havre AC", crest: "assets/crests/lehavre.png", stadium: "Stade Oceane", stadiumImage: "assets/stadiums/lehavre.jpg" },
      { club: "AJ Auxerre", crest: "assets/crests/auxerre.jpg", stadium: "Stade de l'Abbe-Deschamps", stadiumImage: "assets/stadiums/auxerre.jpg" },
      { club: "Angers SCO", crest: "assets/crests/angers.png", stadium: "Stade Raymond Kopa", stadiumImage: "" },
      { club: "AS Saint-Etienne", crest: "assets/crests/saint-etienne.jpg", stadium: "Stade Geoffroy-Guichard", stadiumImage: "assets/stadiums/saint-etienne.jpg" },
      { club: "Stade Brestois 29", crest: "assets/crests/brest.png", stadium: "Stade Francis-Le Ble", stadiumImage: "assets/stadiums/brest.JPG" }
    ]
  }
};

const boardEl = document.querySelector("[data-board]");
const movesEl = document.querySelector("[data-moves]");
const matchesEl = document.querySelector("[data-matches]");
const timerEl = document.querySelector("[data-timer]");
const scoreEl = document.querySelector("[data-score]");
const totalScoreEl = document.querySelector("[data-total-score]");
const volumeSlider = document.querySelector("[data-volume]");
const muteBtn = document.querySelector("[data-mute]");
const jumpLevelSelect = document.querySelector("[data-level-jump]");
const jumpLevelBtn = document.querySelector("[data-level-jump-btn]");
const summaryEl = document.querySelector("[data-summary]");
const summaryRowsEl = document.querySelector("[data-summary-rows]");
const summaryTotalEl = document.querySelector("[data-summary-total]");
const levelEl = document.querySelector("[data-level]");
const leagueButtons = document.querySelectorAll("[data-league]");
const resetButtons = document.querySelectorAll("[data-restart]");
const reshuffleButtons = document.querySelectorAll("[data-restart-secondary], [data-shuffle]");
const simulateWinBtn = document.querySelector("[data-simulate-win]");
const victoryEl = document.querySelector("[data-victory]");
const victoryTitleEl = document.querySelector("[data-victory-title]");
const victoryCopyEl = document.querySelector("[data-victory-copy]");
const nextLevelBtn = document.querySelector("[data-next-level]");
const closePopupBtn = document.querySelector("[data-close-popup]");

const BASE_SCORE = 10000;
let audioCtx = null;

const levels = [
  { cols: 2, rows: 2 },
  { cols: 3, rows: 2 },
  { cols: 4, rows: 3 },
  { cols: 4, rows: 4 },
  { cols: 5, rows: 4 },
  { cols: 6, rows: 5 },
  //{ cols: 6, rows: 6 }
];

let activePairs = [];
let activeLeague = "epl";
let currentLevelIndex = 0;
let totalScore = 0;
let levelCompleteScore = 0;
let masterVolume = 0.9;
let muted = false;
const levelHistory = [];
let state = {
  deck: [],
  first: null,
  second: null,
  lock: false,
  moves: 0,
  matches: 0,
  time: 0,
  timerId: null,
  started: false,
  score: 0
};

function updateAudioUi() {
  if (muteBtn) {
    muteBtn.textContent = muted ? "🔇" : "🔊";
  }
  if (volumeSlider) {
    const val = Math.round(masterVolume * 100);
    volumeSlider.value = String(val);
  }
  if (jumpLevelSelect) {
    jumpLevelSelect.value = String(currentLevelIndex + 1);
  }
}

function populateLevelSelect() {
  if (!jumpLevelSelect) return;
  jumpLevelSelect.innerHTML = "";
  levels.forEach((lvl, idx) => {
    const opt = document.createElement("option");
    opt.value = String(idx + 1);
    opt.textContent = `${idx + 1} (${lvl.cols}x${lvl.rows})`;
    jumpLevelSelect.appendChild(opt);
  });
  jumpLevelSelect.value = String(currentLevelIndex + 1);
}

function resumeAudioContext() {
  const ctx = ensureAudioCtx();
  if (ctx && ctx.state === "suspended") {
    ctx.resume();
  }
}

function buildDeck() {
  const league = leagues[activeLeague] || {};
  const tagLeft = league.tagLeft ?? "Klub";
  const tagRight = league.tagRight ?? "Stadion";

  return activePairs.flatMap((pair, index) => {
    const pairId = String(index);
    return [
      { pairId, kind: "club", label: pair.club, crest: pair.crest, tag: tagLeft },
      { pairId, kind: "stadium", label: pair.stadium, stadiumImage: pair.stadiumImage, tag: tagRight }
    ];
  });
}

function shuffleInPlace(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function formatTimeMs(totalMs) {
  const safeMs = Math.max(0, Math.floor(totalMs));
  const minutes = Math.floor(safeMs / 60000);
  const seconds = Math.floor((safeMs % 60000) / 1000);
  const ms = safeMs % 1000;
  return `${minutes}:${String(seconds).padStart(2, "0")}.${String(ms).padStart(3, "0")}`;
}

function ensureAudioCtx() {
  if (!audioCtx) {
    const Ctor = window.AudioContext || window.webkitAudioContext;
    audioCtx = Ctor ? new Ctor() : null;
  }
  return audioCtx;
}

function getMasterVolume() {
  return muted ? 0 : masterVolume;
}

function playTone(freq, duration = 0.14, type = "sine", volume = 0.12, delay = 0) {
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  const master = getMasterVolume();
  if (master <= 0) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const now = ctx.currentTime + delay;
  gain.gain.setValueAtTime(volume * master, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.05);
}

function playHitSound() {
  playTone(880, 0.12, "triangle", 0.16, 0);
playTone(1320, 0.08, "sine", 0.12, 0.02);
}

function playMissSound() {
  playTone(320, 0.16, "sine", 0.08, 0);
  playTone(240, 0.2, "triangle", 0.07, 0.02);
}

function playCrowdCheer(duration = 1.8, peak = 0.18) {
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  const master = getMasterVolume();
  if (master <= 0) return;
  const sampleCount = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < sampleCount; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.6;
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.value = 700;
  bandpass.Q.value = 0.9;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 2000;

  const gain = ctx.createGain();
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(peak * master, now + 0.2);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.04, peak * 0.28) * master, now + duration);

  source.connect(bandpass).connect(lowpass).connect(gain).connect(ctx.destination);
  source.start(now);
  source.stop(now + duration + 0.1);

  // Add low rumble for stadium feel
  playTone(180, duration * 0.35, "sine", 0.05 * master, 0);
}

function playVictorySound(isFinal = false) {
  const duration = isFinal ? 3.8 : 1.8;
  const peak = isFinal ? 0.24 : 0.18;
  playCrowdCheer(duration, peak);
}

function stopTimer() {
  if (state.timerId) {
    cancelAnimationFrame(state.timerId);
    state.timerId = null;
  }
  state.started = false;
}

function resetState() {
  stopTimer();
  state = {
    deck: [],
    first: null,
    second: null,
    lock: false,
    moves: 0,
    matches: 0,
    timeMs: 0,
    startTimestamp: null,
    timerId: null,
    started: false,
    score: 0
  };
  updateHud();
}

function updateHud() {
  movesEl.textContent = state.moves;
  matchesEl.textContent = `${state.matches} / ${activePairs.length}`;
  timerEl.textContent = formatTimeMs(state.timeMs);
  levelEl.textContent = `${currentLevelIndex + 1} / ${levels.length}`;
  state.score = computeScore();
  scoreEl.textContent = state.score;
  totalScoreEl.textContent = totalScore;
}

function createCardElement(card) {
  const button = document.createElement("button");
  button.className = "card";
  button.dataset.pairId = card.pairId;
  button.dataset.kind = card.kind;
  button.setAttribute("aria-label", `${card.tag || card.kind}: ${card.label}`);
  const frontLogo = leagues[activeLeague]?.logo || "";
  const crestMarkup = card.crest ? `<img class="media" src="${card.crest}" alt="${card.label}">` : "";
  const stadiumMarkup = card.stadiumImage ? `<img class="stadium" src="${card.stadiumImage}" alt="${card.label}">` : "";
  const bodyMarkup = card.kind === "club" ? `${crestMarkup}<span class="label">${card.label}</span>` : `${stadiumMarkup}<span class="label">${card.label}</span>`;

  button.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">${frontLogo ? `<img class="league-badge" src="${frontLogo}" alt="Logo">` : "Memory"}</div>
      <div class="card-face card-back">
        ${bodyMarkup}
      </div>
    </div>
  `;

  button.addEventListener("click", () => handleFlip(button));
  return button;
}

function revealVictory() {
  const timeText = formatTimeMs(state.timeMs);
  const leagueName = leagues[activeLeague]?.name ?? "Liga";
  const level = levels[currentLevelIndex];
  const isLastLevel = currentLevelIndex === levels.length - 1;
  if (closePopupBtn) closePopupBtn.hidden = !isLastLevel;
  levelCompleteScore = state.score;
  levelHistory[currentLevelIndex] = {
    level: currentLevelIndex + 1,
    layout: `${level.cols}x${level.rows}`,
    moves: state.moves,
    time: formatTimeMs(state.timeMs),
    score: state.score
  };
  victoryTitleEl.textContent = "Sve je povezano!";
  const projectedTotal = totalScore + state.score;
  
  victoryCopyEl.hidden = false;
  victoryCopyEl.innerHTML = `
    <table class="victory-info">
      <tbody>
      <tr><th>Liga</th><td>${leagueName}</td></tr>
      <tr><th>Nivo</th><td>${currentLevelIndex + 1} / ${levels.length}</td></tr>
      <tr><th>Parova</th><td>${activePairs.length}</td></tr>
      <tr><th>Poteza</th><td>${state.moves}</td></tr>
      <tr><th>Vreme</th><td>${timeText}</td></tr>
        <tr><th>Poeni</th><td>${state.score}</td></tr>
        <tr><th>Ukupno</th><td>${projectedTotal}</td></tr>
      </tbody>
    </table>
  `;
  
  nextLevelBtn.hidden = isLastLevel;

  if (isLastLevel && summaryEl && summaryRowsEl && summaryTotalEl) {
    summaryRowsEl.innerHTML = "";
    let total = 0;
    levelHistory.forEach((item) => {
      total += item.score || 0;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.level}</td>
        <td>${item.layout}</td>
        <td>${item.moves}</td>
        <td>${item.time}</td>
        <td>${item.score}</td>
      `;
      summaryRowsEl.appendChild(row);
    });
    summaryTotalEl.textContent = total;
    summaryEl.hidden = false;
    nextLevelBtn.hidden = true;
  }

  updateHud();
  victoryEl.hidden = false;
}

function checkForWin() {
  if (state.matches === activePairs.length) {
    stopTimer();
    const isLastLevel = currentLevelIndex === levels.length - 1;
    setTimeout(() => {
      playVictorySound(isLastLevel);
      revealVictory();
    }, 2000);
  }
}

function resetPicks() {
  state.first = null;
  state.second = null;
  state.lock = false;
}

function handleMatchSuccess() {
  state.first.classList.add("matched");
  state.second.classList.add("matched");
  state.first.classList.add("hit");
  state.second.classList.add("hit");
  playHitSound();
  setTimeout(() => {
    state.first?.classList.remove("hit");
    state.second?.classList.remove("hit");
  }, 700);
  state.matches += 1;
  updateHud();
  resetPicks();
  checkForWin();
}

function handleMatchFail() {
  state.first.classList.add("miss");
  state.second.classList.add("miss");
  playMissSound();
  setTimeout(() => {
    state.first.classList.remove("flipped");
    state.second.classList.remove("flipped");
    state.first.classList.remove("miss");
    state.second.classList.remove("miss");
    resetPicks();
  }, 800);
}

function computeScore() {
  const idealMoves = Math.max(1, activePairs.length);
  const movePenalty = Math.max(0, state.moves - idealMoves);
  const timePenalty = state.timeMs * 0.08; // 60s -> ~4800 poena penala
  const movePenaltyScore = movePenalty * 350;
  const progressBonus = state.matches * 60;
  const raw = BASE_SCORE - timePenalty - movePenaltyScore + progressBonus;
  return Math.max(0, Math.round(raw));
}

function pickActivePairs() {
  const league = leagues[activeLeague];
  const level = levels[currentLevelIndex];
  if (!league || !level) return [];
  const neededPairs = Math.min((level.cols * level.rows) / 2, league.pairs.length);
  const conflicts = league.conflicts || [];
  const deck = shuffleInPlace([...league.pairs]);
  const selected = [];
  const chosenClubs = new Set();

  for (const pair of deck) {
    if (selected.length >= neededPairs) break;
    const conflictGroup = conflicts.find((group) => group.includes(pair.club));
    const conflictHit = conflictGroup?.some((club) => chosenClubs.has(club));
    if (conflictHit) continue;
    selected.push(pair);
    chosenClubs.add(pair.club);
  }

  // Fallback: if somehow not enough picked (shouldn't happen), fill remaining ignoring conflicts.
  if (selected.length < neededPairs) {
    for (const pair of deck) {
      if (selected.length >= neededPairs) break;
      if (chosenClubs.has(pair.club)) continue;
      selected.push(pair);
      chosenClubs.add(pair.club);
    }
  }

  return selected.slice(0, neededPairs);
}

function handleFlip(cardEl) {
  if (state.lock) return;
  if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;

  if (!state.started) {
    state.started = true;
    state.startTimestamp = performance.now();
    const tick = () => {
      if (!state.started) return;
      state.timeMs = performance.now() - state.startTimestamp;
      timerEl.textContent = formatTimeMs(state.timeMs);
      state.timerId = requestAnimationFrame(tick);
    };
    state.timerId = requestAnimationFrame(tick);
  }

  cardEl.classList.add("flipped");

  if (!state.first) {
    state.first = cardEl;
    return;
  }

  state.second = cardEl;
  state.lock = true;
  state.moves += 1;
  updateHud();

  const isMatch = state.first.dataset.pairId === state.second.dataset.pairId;
  if (isMatch) {
    handleMatchSuccess();
  } else {
    handleMatchFail();
  }
}

function buildBoard() {
  boardEl.innerHTML = "";
  state.deck = shuffleInPlace(buildDeck());
  state.deck.forEach((card) => {
    const cardEl = createCardElement(card);
    boardEl.appendChild(cardEl);
  });
}

function setLeague(leagueKey) {
  if (!leagues[leagueKey]) return;
  activeLeague = leagueKey;
  currentLevelIndex = 0;
  totalScore = 0;
  levelCompleteScore = 0;
  leagueButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.league === leagueKey);
  });
  startGame({ resetHistory: true });
}

function startGame(options = {}) {
  const { resetHistory = false } = options;
  if (resetHistory) {
    levelHistory.length = 0;
  }
  if (closePopupBtn) closePopupBtn.hidden = true;
  levelCompleteScore = 0;
  resetState();
  victoryEl.hidden = true;
  if (summaryEl) summaryEl.hidden = true;
  populateLevelSelect();
  activePairs = pickActivePairs();
  const level = levels[currentLevelIndex];
  if (level) {
    boardEl.style.setProperty("--cols", level.cols);
    boardEl.dataset.cols = String(level.cols);
    boardEl.dataset.rows = String(level.rows);
  }
  updateHud();
  buildBoard();
  updateAudioUi();
}

resetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLevelIndex = 0;
    totalScore = 0;
    levelCompleteScore = 0;
    startGame({ resetHistory: true });
  });
});

reshuffleButtons.forEach((button) => {
  button.addEventListener("click", () => startGame());
});

volumeSlider?.addEventListener("input", (e) => {
  resumeAudioContext();
  const val = Number(e.target.value);
  masterVolume = Math.min(1, Math.max(0, val / 100));
  if (masterVolume > 0 && muted) {
    muted = false;
  }
  updateAudioUi();
});

muteBtn?.addEventListener("click", () => {
  resumeAudioContext();
  muted = !muted;
  updateAudioUi();
});

leagueButtons.forEach((button) => {
  button.addEventListener("click", () => setLeague(button.dataset.league));
});

simulateWinBtn?.addEventListener("click", () => {
  // Test helper: popuni istoriju, prebaci na poslednji nivo i ostavi jedan par neotkriven.
  const lastIndex = levels.length - 1;
  levelHistory.length = 0;
  totalScore = 0;

  for (let i = 0; i < lastIndex; i += 1) {
    const score = Math.floor(1500 + Math.random() * 1000);
    const moves = Math.floor(10 + Math.random() * 15);
    const timeSec = Math.floor(30 + Math.random() * 90);
    levelHistory[i] = {
      level: i + 1,
      layout: `${levels[i].cols}x${levels[i].rows}`,
      moves,
      time: formatTimeMs(timeSec * 1000),
      score
    };
    totalScore += score;
  }

  currentLevelIndex = lastIndex;
  levelCompleteScore = 0;
  resetState();
  victoryEl.hidden = true;
  if (summaryEl) summaryEl.hidden = true;
  activePairs = pickActivePairs();
  const level = levels[currentLevelIndex];
  if (level) {
    boardEl.style.setProperty("--cols", level.cols);
  }
  buildBoard();

  const cards = Array.from(boardEl.querySelectorAll(".card"));
  const pairGroups = cards.reduce((acc, card) => {
    const pid = card.dataset.pairId;
    (acc[pid] = acc[pid] || []).push(card);
    return acc;
  }, {});
  const pairIds = Object.keys(pairGroups);
  const leaveUnmatched = pairIds[pairIds.length - 1];
  let matched = 0;
  pairIds.forEach((pid) => {
    if (pid === leaveUnmatched) return;
    pairGroups[pid].forEach((card) => card.classList.add("matched", "flipped"));
    matched += 1;
  });
  state.matches = matched;
  state.moves = 0;
  state.timeMs = 0;
  updateHud();
});

jumpLevelBtn?.addEventListener("click", () => {
  const target = parseInt(jumpLevelSelect?.value || "1", 10) || 1;
  const targetIndex = Math.min(levels.length - 1, Math.max(0, target - 1));
  currentLevelIndex = targetIndex;
  totalScore = 0;
  levelCompleteScore = 0;
  levelHistory.length = 0;
  resetState();
  victoryEl.hidden = true;
  if (summaryEl) summaryEl.hidden = true;
  activePairs = pickActivePairs();
  const level = levels[currentLevelIndex];
  if (level) {
    boardEl.style.setProperty("--cols", level.cols);
    boardEl.dataset.cols = String(level.cols);
    boardEl.dataset.rows = String(level.rows);
  }
  buildBoard();

  const cards = Array.from(boardEl.querySelectorAll(".card"));
  const pairGroups = cards.reduce((acc, card) => {
    const pid = card.dataset.pairId;
    (acc[pid] = acc[pid] || []).push(card);
    return acc;
  }, {});
  const pairIds = Object.keys(pairGroups);
  const leaveUnmatched = pairIds[pairIds.length - 1];
  let matched = 0;
  pairIds.forEach((pid) => {
    if (pid === leaveUnmatched) return;
    pairGroups[pid].forEach((card) => card.classList.add("matched", "flipped"));
    matched += 1;
  });
  state.matches = matched;
  state.moves = 0;
  state.timeMs = 0;
  updateHud();
  updateAudioUi();
});

nextLevelBtn?.addEventListener("click", () => {
  totalScore += levelCompleteScore;
  levelCompleteScore = 0;
  currentLevelIndex = Math.min(levels.length - 1, currentLevelIndex + 1);
  startGame();
  victoryEl.hidden = true;
});

closePopupBtn?.addEventListener("click", () => {
  victoryEl.hidden = true;
});

updateAudioUi();
startGame({ resetHistory: true });
