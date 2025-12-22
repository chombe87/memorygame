const pairs = [
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
];

const boardEl = document.querySelector("[data-board]");
const movesEl = document.querySelector("[data-moves]");
const matchesEl = document.querySelector("[data-matches]");
const timerEl = document.querySelector("[data-timer]");
const restartButtons = document.querySelectorAll("[data-restart], [data-restart-secondary], [data-shuffle]");
const victoryEl = document.querySelector("[data-victory]");
const victoryTitleEl = document.querySelector("[data-victory-title]");
const victoryCopyEl = document.querySelector("[data-victory-copy]");

let state = {
  deck: [],
  first: null,
  second: null,
  lock: false,
  moves: 0,
  matches: 0,
  time: 0,
  timerId: null,
  started: false
};

function buildDeck() {
  return pairs.flatMap((pair, index) => {
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
    started: false
  };
  updateHud();
}

function updateHud() {
  movesEl.textContent = state.moves;
  matchesEl.textContent = `${state.matches} / ${pairs.length}`;
  timerEl.textContent = formatTime(state.time);
}

function createCardElement(card) {
  const button = document.createElement("button");
  button.className = "card";
  button.dataset.pairId = card.pairId;
  button.dataset.kind = card.kind;
  button.setAttribute("aria-label", `${card.kind === "club" ? "Klub" : "Stadion"}: ${card.label}`);
  button.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">Premier Match</div>
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
  victoryTitleEl.textContent = "Sve je povezano!";
  victoryCopyEl.textContent = `Spojio si ${pairs.length} parova u ${state.moves} poteza za ${timeText}.`;
  victoryEl.hidden = false;
}

function checkForWin() {
  if (state.matches === pairs.length) {
    stopTimer();
    revealVictory();
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
  state.matches += 1;
  updateHud();
  resetPicks();
  checkForWin();
}

function handleMatchFail() {
  setTimeout(() => {
    state.first.classList.remove("flipped");
    state.second.classList.remove("flipped");
    resetPicks();
  }, 800);
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

function startGame() {
  resetState();
  victoryEl.hidden = true;
  buildBoard();
}

restartButtons.forEach((button) => {
  button.addEventListener("click", startGame);
});

startGame();
