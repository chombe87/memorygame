const leagues = {
  epl: {
    name: "Premier League",
    logo: "assets/leagues/epl.png",
    pairs: [
      {
        club: "Arsenal",
        crest: "assets/crests/arsenal.svg",
        stadium: "Emirates Stadium",
        stadiumImage: "assets/stadiums/arsenal.jpg"
      },
      {
        club: "Aston Villa",
        crest: "assets/crests/aston-villa.svg",
        stadium: "Villa Park",
        stadiumImage: "assets/stadiums/aston-villa.jpg"
      },
      {
        club: "Bournemouth",
        crest: "assets/crests/bournemouth.svg",
        stadium: "Vitality Stadium",
        stadiumImage: "assets/stadiums/bournemouth.jpg"
      },
      {
        club: "Brentford",
        crest: "assets/crests/brentford.svg",
        stadium: "Gtech Community Stadium",
        stadiumImage: "assets/stadiums/brentford.jpg"
      },
      {
        club: "Brighton & Hove Albion",
        crest: "assets/crests/brighton.svg",
        stadium: "Amex Stadium",
        stadiumImage: "assets/stadiums/brighton.jpg"
      },
      {
        club: "Burnley",
        crest: "assets/crests/burnley.svg",
        stadium: "Turf Moor",
        stadiumImage: "assets/stadiums/burnley.jpg"
      },
      {
        club: "Chelsea",
        crest: "assets/crests/chelsea.svg",
        stadium: "Stamford Bridge",
        stadiumImage: "assets/stadiums/chelsea.jpg"
      },
      {
        club: "Crystal Palace",
        crest: "assets/crests/crystal-palace.svg",
        stadium: "Selhurst Park",
        stadiumImage: "assets/stadiums/crystal-palace.jpg"
      },
      {
        club: "Everton",
        crest: "assets/crests/everton.svg",
        stadium: "Goodison Park",
        stadiumImage: "assets/stadiums/everton.jpg"
      },
      {
        club: "Fulham",
        crest: "assets/crests/fulham.svg",
        stadium: "Craven Cottage",
        stadiumImage: "assets/stadiums/fulham.jpg"
      },
      {
        club: "Leeds United",
        crest: "assets/crests/leeds-united.svg",
        stadium: "Elland Road",
        stadiumImage: "assets/stadiums/leeds-united.jpg"
      },
      {
        club: "Liverpool",
        crest: "assets/crests/liverpool.svg",
        stadium: "Anfield",
        stadiumImage: "assets/stadiums/liverpool.jpg"
      },
      {
        club: "Manchester City",
        crest: "assets/crests/manchester-city.svg",
        stadium: "Etihad Stadium",
        stadiumImage: "assets/stadiums/manchester-city.jpg"
      },
      {
        club: "Manchester United",
        crest: "assets/crests/manchester-united.svg",
        stadium: "Old Trafford",
        stadiumImage: "assets/stadiums/manchester-united.jpg"
      },
      {
        club: "Newcastle United",
        crest: "assets/crests/newcastle-united.svg",
        stadium: "St James' Park",
        stadiumImage: "assets/stadiums/newcastle-united.jpg"
      },
      {
        club: "Nottingham Forest",
        crest: "assets/crests/nottingham-forest.svg",
        stadium: "City Ground",
        stadiumImage: "assets/stadiums/nottingham-forest.jpg"
      },
      {
        club: "Sunderland",
        crest: "assets/crests/sunderland.svg",
        stadium: "Stadium of Light",
        stadiumImage: "assets/stadiums/sunderland.jpg"
      },
      {
        club: "Tottenham Hotspur",
        crest: "assets/crests/tottenham-hotspur.svg",
        stadium: "Tottenham Hotspur Stadium",
        stadiumImage: "assets/stadiums/tottenham-hotspur.jpg"
      },
      {
        club: "West Ham United",
        crest: "assets/crests/west-ham-united.svg",
        stadium: "London Stadium",
        stadiumImage: "assets/stadiums/west-ham-united.jpg"
      },
      {
        club: "Wolverhampton Wanderers",
        crest: "assets/crests/wolverhampton-wanderers.svg",
        stadium: "Molineux Stadium",
        stadiumImage: "assets/stadiums/wolverhampton-wanderers.jpg"
      }
    ]
  },
  laliga: {
    name: "La Liga",
    logo: "assets/leagues/laliga.png",
    pairs: [
      { club: "Alavés", crest: "assets/crests/alaves.png", stadium: "Mendizorrotza", stadiumImage: "assets/stadiums/alaves.jpg" },
      { club: "Athletic Club", crest: "assets/crests/athletic-club.png", stadium: "San Mamés", stadiumImage: "assets/stadiums/athletic-club.jpg" },
      { club: "Atlético Madrid", crest: "assets/crests/atletico-madrid.png", stadium: "Cívitas Metropolitano", stadiumImage: "assets/stadiums/atletico-madrid.jpg" },
      { club: "Barcelona", crest: "assets/crests/barcelona.png", stadium: "Estadi Olímpic Lluís Companys", stadiumImage: "assets/stadiums/barcelona.jpg" },
      { club: "Celta Vigo", crest: "assets/crests/celta-vigo.svg", stadium: "Balaídos", stadiumImage: "assets/stadiums/celta-vigo.jpg" },
      { club: "Espanyol", crest: "assets/crests/espanyol.svg", stadium: "Stage Front Stadium", stadiumImage: "assets/stadiums/espanyol.jpg" },
      { club: "Getafe", crest: "assets/crests/getafe.jpg", stadium: "Coliseum Alfonso Pérez", stadiumImage: "assets/stadiums/getafe.jpg" },
      { club: "Girona", crest: "assets/crests/girona.svg", stadium: "Montilivi", stadiumImage: "assets/stadiums/girona.jpg" },
      { club: "Las Palmas", crest: "assets/crests/las-palmas.svg", stadium: "Estadio de Gran Canaria", stadiumImage: "assets/stadiums/las-palmas.jpg" },
      { club: "Leganés", crest: "assets/crests/leganes.png", stadium: "Butarque", stadiumImage: "assets/stadiums/leganes.jpg" },
      { club: "Mallorca", crest: "assets/crests/mallorca.svg", stadium: "Visit Mallorca Stadium", stadiumImage: "assets/stadiums/mallorca.jpg" },
      { club: "Osasuna", crest: "assets/crests/osasuna.jpg", stadium: "El Sadar", stadiumImage: "assets/stadiums/osasuna.jpg" },
      { club: "Rayo Vallecano", crest: "assets/crests/rayo-vallecano.svg", stadium: "Vallecas Stadium", stadiumImage: "assets/stadiums/rayo-vallecano.jpg" },
      { club: "Real Betis", crest: "assets/crests/real-betis.svg", stadium: "Benito Villamarín", stadiumImage: "assets/stadiums/real-betis.jpg" },
      { club: "Real Madrid", crest: "assets/crests/real-madrid.png", stadium: "Santiago Bernabéu", stadiumImage: "assets/stadiums/real-madrid.jpg" },
      { club: "Real Oviedo", crest: "assets/crests/real-oviedo.jpg", stadium: "Carlos Tartiere", stadiumImage: "assets/stadiums/real-oviedo.jpg" },
      { club: "Real Sociedad", crest: "assets/crests/real-sociedad.svg", stadium: "Reale Arena", stadiumImage: "assets/stadiums/real-sociedad.png" },
      { club: "Sevilla", crest: "assets/crests/sevilla.jpg", stadium: "Ramón Sánchez Pizjuán", stadiumImage: "assets/stadiums/sevilla.jpg" },
      { club: "Valencia", crest: "assets/crests/valencia.png", stadium: "Mestalla", stadiumImage: "assets/stadiums/valencia.JPG" },
      { club: "Villarreal", crest: "assets/crests/villarreal.svg", stadium: "Estadio de la Cerámica", stadiumImage: "assets/stadiums/villarreal.jpg" }
    ]
  }
};

const boardEl = document.querySelector("[data-board]");
const movesEl = document.querySelector("[data-moves]");
const matchesEl = document.querySelector("[data-matches]");
const timerEl = document.querySelector("[data-timer]");
const scoreEl = document.querySelector("[data-score]");
const totalScoreEl = document.querySelector("[data-total-score]");
const levelEl = document.querySelector("[data-level]");
const leagueButtons = document.querySelectorAll("[data-league]");
const resetButtons = document.querySelectorAll("[data-restart]");
const reshuffleButtons = document.querySelectorAll("[data-restart-secondary], [data-shuffle]");
const victoryEl = document.querySelector("[data-victory]");
const victoryTitleEl = document.querySelector("[data-victory-title]");
const victoryCopyEl = document.querySelector("[data-victory-copy]");
const nextLevelBtn = document.querySelector("[data-next-level]");

const levels = [
  { cols: 2, rows: 2 },
  { cols: 3, rows: 2 },
  { cols: 4, rows: 3 },
  { cols: 4, rows: 4 },
  { cols: 5, rows: 4 }
];
const PASS_SCORE = 1200;

let activePairs = [];
let activeLeague = "epl";
let currentLevelIndex = 0;
let totalScore = 0;
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

function buildDeck() {
  return activePairs.flatMap((pair, index) => {
    const pairId = String(index);
    return [
      { pairId, kind: "club", label: pair.club, crest: pair.crest },
      { pairId, kind: "stadium", label: pair.stadium, stadiumImage: pair.stadiumImage }
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

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
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
    time: 0,
    timerId: null,
    started: false,
    score: 0
  };
  updateHud();
}

function updateHud() {
  movesEl.textContent = state.moves;
  matchesEl.textContent = `${state.matches} / ${activePairs.length}`;
  timerEl.textContent = formatTime(state.time);
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
  button.setAttribute("aria-label", `${card.kind === "club" ? "Klub" : "Stadion"}: ${card.label}`);
  const frontLogo = leagues[activeLeague]?.logo || "";
  button.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">${frontLogo ? `<img class="league-badge" src="${frontLogo}" alt="Logo lige">` : "Memory"}</div>
      <div class="card-face card-back">
        <span class="tag ${card.kind === "club" ? "club-tag" : "stadium-tag"}">
          ${card.kind === "club" ? "Klub" : "Stadion"}
        </span>
        ${card.kind === "club" ? `<img class="media" src="${card.crest}" alt="Grb ${card.label}">` : `<img class="stadium" src="${card.stadiumImage}" alt="${card.label}">`}
        <span class="label">${card.label}</span>
      </div>
    </div>
  `;

  button.addEventListener("click", () => handleFlip(button));
  return button;
}

function revealVictory() {
  const timeText = formatTime(state.time);
  const leagueName = leagues[activeLeague]?.name ?? "Liga";
  const level = levels[currentLevelIndex];
  const passed = state.score >= PASS_SCORE;
  const isLastLevel = currentLevelIndex === levels.length - 1;
  totalScore += state.score;
  victoryTitleEl.textContent = "Sve je povezano!";
  victoryCopyEl.textContent = `Liga: ${leagueName}. Nivo ${currentLevelIndex + 1} (${level.cols}x${level.rows}). Spojio si ${activePairs.length} parova u ${state.moves} poteza za ${timeText}. Poeni: ${state.score}. Potrebno ${PASS_SCORE} za prolaz.`;
  nextLevelBtn.hidden = !(passed && !isLastLevel);
  updateHud();
  victoryEl.hidden = false;
}

function checkForWin() {
  if (state.matches === activePairs.length) {
    stopTimer();
    setTimeout(revealVictory, 2000);
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
  const moveComponent = Math.max(0, 900 - movePenalty * 60);

  const timeComponent = Math.max(0, 1100 - state.time * 8);

  const progressBonus = state.matches * 45;

  return Math.max(0, Math.round(moveComponent + timeComponent + progressBonus));
}

function pickActivePairs() {
  const league = leagues[activeLeague];
  const level = levels[currentLevelIndex];
  if (!league || !level) return [];
  const neededPairs = Math.min(level.cols * level.rows / 2, league.pairs.length);
  return shuffleInPlace([...league.pairs]).slice(0, neededPairs);
}

function handleFlip(cardEl) {
  if (state.lock) return;
  if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;

  if (!state.started) {
    state.started = true;
    state.timerId = setInterval(() => {
      state.time += 1;
      timerEl.textContent = formatTime(state.time);
    }, 1000);
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
  leagueButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.league === leagueKey);
  });
  startGame();
}

function startGame() {
  resetState();
  victoryEl.hidden = true;
  activePairs = pickActivePairs();
  const level = levels[currentLevelIndex];
  if (level) {
    boardEl.style.setProperty("--cols", level.cols);
  }
  updateHud();
  buildBoard();
}

resetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLevelIndex = 0;
    totalScore = 0;
    startGame();
  });
});

reshuffleButtons.forEach((button) => {
  button.addEventListener("click", () => startGame());
});

leagueButtons.forEach((button) => {
  button.addEventListener("click", () => setLeague(button.dataset.league));
});

nextLevelBtn?.addEventListener("click", () => {
  const passed = state.score >= PASS_SCORE;
  if (!passed) return;
  currentLevelIndex = Math.min(levels.length - 1, currentLevelIndex + 1);
  startGame();
  victoryEl.hidden = true;
});

startGame();
