// Card representation: { rank: 0-12, suit: 0-3 }
// Ranks: 2=0, 3=1, ..., A=12
// Suits: 0=♠, 1=♥, 2=♦, 3=♣

export const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const SUITS = ['♠', '♥', '♦', '♣'];
export const SUIT_NAMES = ['spades', 'hearts', 'diamonds', 'clubs'];

export function cardToString(card) {
  return `${RANKS[card.rank]}${SUITS[card.suit]}`;
}

export function getFullDeck() {
  const deck = [];
  for (let suit = 0; suit < 4; suit++) {
    for (let rank = 0; rank < 13; rank++) {
      deck.push({ rank, suit });
    }
  }
  return deck;
}

export function getRemainingDeck(usedCards) {
  const deck = getFullDeck();
  return deck.filter(c => !usedCards.some(u => u.rank === c.rank && u.suit === c.suit));
}

function evaluateHand(sevenCards) {
  const combos = getCombinations(sevenCards, 5);
  let bestScore = 0;
  for (const combo of combos) {
    const score = evaluate5Cards(combo);
    if (score > bestScore) bestScore = score;
  }
  return bestScore;
}

function getCombinations(arr, k) {
  const results = [];
  function combine(start, combo) {
    if (combo.length === k) {
      results.push([...combo]);
      return;
    }
    for (let i = start; i <= arr.length - (k - combo.length); i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  }
  combine(0, []);
  return results;
}

function evaluate5Cards(cards) {
  const ranks = cards.map(c => c.rank).sort((a, b) => a - b);
  const suits = cards.map(c => c.suit);
  const isFlush = suits.every(s => s === suits[0]);

  let isStraight = false;
  let straightHigh = 0;

  if (ranks[4] - ranks[0] === 4 && new Set(ranks).size === 5) {
    isStraight = true;
    straightHigh = ranks[4];
  }

  if (ranks[0] === 0 && ranks[1] === 1 && ranks[2] === 2 && ranks[3] === 3 && ranks[4] === 12) {
    isStraight = true;
    straightHigh = 3;
  }

  const rankCounts = {};
  for (const r of ranks) {
    rankCounts[r] = (rankCounts[r] || 0) + 1;
  }

  const counts = Object.values(rankCounts).sort((a, b) => b - a);
  const uniqueRanks = Object.keys(rankCounts).map(Number).sort((a, b) => {
    if (rankCounts[b] !== rankCounts[a]) return rankCounts[b] - rankCounts[a];
    return b - a;
  });

  if (isFlush && isStraight) return 9e10 + straightHigh;
  if (counts[0] === 4) return 8e10 + uniqueRanks[0] * 100 + uniqueRanks[1];
  if (counts[0] === 3 && counts[1] === 2) return 7e10 + uniqueRanks[0] * 100 + uniqueRanks[1];
  if (isFlush) return 6e10 + ranks[4] * 1e8 + ranks[3] * 1e6 + ranks[2] * 1e4 + ranks[1] * 100 + ranks[0];
  if (isStraight) return 5e10 + straightHigh;
  if (counts[0] === 3) return 4e10 + uniqueRanks[0] * 1e4 + uniqueRanks[1] * 100 + uniqueRanks[2];

  if (counts[0] === 2 && counts[1] === 2) {
    const pairs = uniqueRanks.filter(r => rankCounts[r] === 2).sort((a, b) => b - a);
    const kicker = uniqueRanks.find(r => rankCounts[r] === 1);
    return 3e10 + pairs[0] * 1e4 + pairs[1] * 100 + kicker;
  }

  if (counts[0] === 2) {
    return 2e10 + uniqueRanks[0] * 1e6 + uniqueRanks[1] * 1e4 + uniqueRanks[2] * 100 + uniqueRanks[3];
  }

  return 1e10 + ranks[4] * 1e8 + ranks[3] * 1e6 + ranks[2] * 1e4 + ranks[1] * 100 + ranks[0];
}

export function getHandName(score) {
  const type = Math.floor(score / 1e10);
  const names = {
    9: 'Scala Colore',
    8: 'Poker',
    7: 'Full House',
    6: 'Colore',
    5: 'Scala',
    4: 'Tris',
    3: 'Doppia Coppia',
    2: 'Coppia',
    1: 'Carta Alta'
  };
  return names[type] || 'Carta Alta';
}

export function calculateOdds(myHand, communityCards, totalPlayers, iterations = 5000) {
  const usedCards = [...myHand, ...communityCards];
  const remaining = getRemainingDeck(usedCards);

  let wins = 0;
  let ties = 0;
  let losses = 0;

  const communityNeeded = 5 - communityCards.length;
  const opponentCount = Math.max(1, totalPlayers - 1);

  for (let i = 0; i < iterations; i++) {
    const shuffled = shuffleArray([...remaining]);
    let idx = 0;

    const fullCommunity = [...communityCards];
    for (let j = 0; j < communityNeeded; j++) {
      fullCommunity.push(shuffled[idx++]);
    }

    const myScore = evaluateHand([...myHand, ...fullCommunity]);

    let iWin = true;
    let isTie = false;

    for (let opp = 0; opp < opponentCount; opp++) {
      const oppHand = [shuffled[idx++], shuffled[idx++]];
      const oppScore = evaluateHand([...oppHand, ...fullCommunity]);

      if (oppScore > myScore) {
        iWin = false;
        isTie = false;
        break;
      }
      if (oppScore === myScore) {
        isTie = true;
      }
    }

    if (!iWin && !isTie) losses++;
    else if (isTie) ties++;
    else wins++;
  }

  let currentHandName = '';
  if (communityCards.length >= 3) {
    const currentScore = evaluateHand([...myHand, ...communityCards]);
    currentHandName = getHandName(currentScore);
  }

  return {
    win: ((wins / iterations) * 100).toFixed(1),
    tie: ((ties / iterations) * 100).toFixed(1),
    lose: ((losses / iterations) * 100).toFixed(1),
    currentHandName,
    iterations
  };
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getHandType(holeCards, community) {
  const all = [...holeCards, ...community];
  if (all.length < 2) return 0;
  if (all.length < 5) return Math.floor(evaluatePartial(all) / 1e10);
  return Math.floor(evaluateHand(all) / 1e10);
}

function evaluatePartial(cards) {
  if (cards.length >= 5) return evaluateHand(cards);

  const rankCounts = {};
  for (const c of cards) {
    rankCounts[c.rank] = (rankCounts[c.rank] || 0) + 1;
  }

  const counts = Object.values(rankCounts).sort((a, b) => b - a);
  const ranks = cards.map(c => c.rank).sort((a, b) => a - b);

  if (counts[0] === 4) return 8e10;
  if (counts[0] === 3 && counts[1] === 2) return 7e10;
  if (counts[0] === 3) return 4e10;
  if (counts[0] === 2 && counts[1] === 2) return 3e10;
  if (counts[0] === 2) return 2e10;
  return 1e10 + ranks[ranks.length - 1] * 1e8;
}

export function analyzeOuts(myHand, communityCards) {
  if (myHand.length !== 2) return null;
  if (communityCards.length < 3 || communityCards.length > 4) return null;

  const usedCards = [...myHand, ...communityCards];
  const remaining = getRemainingDeck(usedCards);
  const currentType = getHandType(myHand, communityCards);
  const stage = communityCards.length === 3 ? 'flop' : 'turn';

  const outs = [];
  const drawDetails = [];

  for (const card of remaining) {
    const newCommunity = [...communityCards, card];
    const newType = getHandType(myHand, newCommunity);
    if (newType > currentType) outs.push(card);
  }

  const allCards = [...myHand, ...communityCards];
  const suits = allCards.map(c => c.suit);
  const ranks = allCards.map(c => c.rank);

  const suitCounts = [0, 1, 2, 3].map(s => ({ suit: s, count: suits.filter(x => x === s).length }));
  const flushDrawSuit = suitCounts.find(s => s.count === 4);
  if (flushDrawSuit) {
    const flushOuts = remaining.filter(c => c.suit === flushDrawSuit.suit).length;
    drawDetails.push({ name: 'Progetto Colore', outs: flushOuts, icon: '🎨', color: 'blue' });
  }

  const uniqueRanks = [...new Set(ranks)].sort((a, b) => a - b);
  const ranksWithHighAce = uniqueRanks.includes(12) ? [...uniqueRanks, 13] : uniqueRanks;

  let openEndedOuts = 0;
  let gutShotOuts = 0;

  for (let low = 0; low <= 9; low++) {
    const window = [low, low + 1, low + 2, low + 3, low + 4];
    const have = window.filter(r => ranksWithHighAce.includes(r % 13));
    const need = window.filter(r => !ranksWithHighAce.includes(r % 13));
    if (have.length === 4 && need.length === 1) {
      const neededRank = need[0] % 13;
      const outsCount = remaining.filter(c => c.rank === neededRank).length;
      if (neededRank === low || neededRank === low + 4) openEndedOuts += outsCount;
      else gutShotOuts += outsCount;
    }
  }

  if (openEndedOuts > 0) {
    drawDetails.push({ name: 'Scala Bilaterale', outs: openEndedOuts, icon: '↔️', color: 'yellow' });
  }

  if (gutShotOuts > 0) {
    drawDetails.push({ name: 'Scala Interna', outs: gutShotOuts, icon: '🎯', color: 'orange' });
  }

  const rankCounts = {};
  for (const r of ranks) rankCounts[r] = (rankCounts[r] || 0) + 1;

  const pairRanks = Object.entries(rankCounts).filter(([, c]) => c === 2).map(([r]) => Number(r));
  if (pairRanks.length > 0 && currentType < 4) {
    const tripsOuts = pairRanks.reduce((sum, r) => sum + remaining.filter(c => c.rank === r).length, 0);
    if (tripsOuts > 0) {
      drawDetails.push({ name: 'Coppia → Tris', outs: tripsOuts, icon: '3️⃣', color: 'purple' });
    }
  }

  const totalOuts = outs.length;
  const turnPct = stage === 'flop' ? (totalOuts / remaining.length) * 100 : null;
  const riverPct = stage === 'flop'
    ? (1 - ((remaining.length - totalOuts) / remaining.length) * ((remaining.length - 1 - totalOuts) / (remaining.length - 1))) * 100
    : (totalOuts / remaining.length) * 100;

  return {
    totalOuts,
    outs,
    drawDetails,
    stage,
    turnPct: turnPct !== null ? turnPct.toFixed(1) : null,
    riverPct: riverPct.toFixed(1)
  };
}
