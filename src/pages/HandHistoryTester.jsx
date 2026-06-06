import React, { useMemo, useState } from 'react';
import { Upload, FileText, Brain, AlertTriangle, CheckCircle2, Copy, Trash2, XCircle, Search } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const SAMPLE_HANDS = `PokerStars Mano #1111111111: Hold'em No Limit (€0.01/€0.02 EUR) - 2026/06/06 21:15:22 CET
Table 'DemoTable' 6-max Seat #3 is the button
Seat 1: Hero (€2.00 in chips)
Seat 2: Player2 (€1.55 in chips)
Seat 3: Player3 (€2.40 in chips)
Hero: posts small blind €0.01
Player2: posts big blind €0.02
*** HOLE CARDS ***
Dealt to Hero [Ah Kh]
Player3: folds
Hero: raises €0.05 to €0.06
Player2: calls €0.04
*** FLOP *** [Qh 7h 2c]
Hero: bets €0.08
Player2: calls €0.08
*** TURN *** [Qh 7h 2c] [3d]
Hero: bets €0.18
Player2: raises €0.36 to €0.54
Hero: calls €0.36
*** RIVER *** [Qh 7h 2c 3d] [9s]
Hero: checks
Player2: bets €0.70
Hero: folds
Uncalled bet (€0.70) returned to Player2
Player2 collected €1.30 from pot
*** SUMMARY ***
Total pot €1.36 | Rake €0.06
Board [Qh 7h 2c 3d 9s]

PokerStars Mano #2222222222: Hold'em No Limit (€0.01/€0.02 EUR) - 2026/06/06 21:17:10 CET
Table 'DemoTable' 6-max Seat #5 is the button
Seat 1: Hero (€2.10 in chips)
Seat 2: Player2 (€1.80 in chips)
Seat 3: Player3 (€2.20 in chips)
Player2: posts small blind €0.01
Player3: posts big blind €0.02
*** HOLE CARDS ***
Dealt to Hero [Kc 7d]
Hero: calls €0.02
Player2: calls €0.01
Player3: checks
*** FLOP *** [Ks 9h 4c]
Hero: bets €0.08
Player2: folds
Player3: raises €0.22 to €0.30
Hero: calls €0.22
*** TURN *** [Ks 9h 4c] [2d]
Hero: checks
Player3: bets €0.45
Hero: calls €0.45
*** RIVER *** [Ks 9h 4c 2d] [Ad]
Hero: checks
Player3: bets €0.90
Hero: calls €0.90
Player3 shows [Ac Kd]
Hero mucks hand
Player3 collected €3.18 from pot
*** SUMMARY ***
Total pot €3.30 | Rake €0.12
Board [Ks 9h 4c 2d Ad]`;


const CARD_SUIT_SYMBOLS = {
  h: '♥',
  d: '♦',
  c: '♣',
  s: '♠',
  '♥': '♥',
  '♦': '♦',
  '♣': '♣',
  '♠': '♠',
};

const CARD_SUIT_CLASSES = {
  h: 'suit-heart',
  d: 'suit-diamond',
  c: 'suit-club',
  s: 'suit-spade',
  '♥': 'suit-heart',
  '♦': 'suit-diamond',
  '♣': 'suit-club',
  '♠': 'suit-spade',
};

function prettyCards(text) {
  if (!text || text === '—') return '—';

  return text
    .split(/\s+/)
    .filter(Boolean)
    .map(card => {
      const match = card.match(/^([2-9TJQKA]|10)([hdcs♥♦♣♠])$/i);
      if (!match) return card;

      const rank = match[1].toUpperCase();
      const suit = match[2].toLowerCase();
      return `${rank}${CARD_SUIT_SYMBOLS[suit] || match[2]}`;
    })
    .join(' ');
}

function renderPrettyCards(text) {
  if (!text || text === '—') return '—';

  return text.split(/\s+/).filter(Boolean).map((card, i) => {
    const match = card.match(/^([2-9TJQKA]|10)([hdcs♥♦♣♠])$/i);

    if (!match) {
      return (
        <span key={`${card}-${i}`} className="card-token">
          {card}
        </span>
      );
    }

    const rank = match[1].toUpperCase();
    const suit = match[2].toLowerCase();
    const symbol = CARD_SUIT_SYMBOLS[suit] || match[2];
    const suitClass = CARD_SUIT_CLASSES[suit] || '';

    return (
      <span key={`${card}-${i}`} className={`card-token ${suitClass}`}>
        {rank}{symbol}
      </span>
    );
  });
}


export default function HandHistoryTester() {
  const { t } = useLanguage();
  const [rawText, setRawText] = useState('');
  const [fileName, setFileName] = useState('');

  const analysis = useMemo(() => analyzeSession(rawText), [rawText]);

  const loadSample = () => {
    setRawText(SAMPLE_HANDS);
    setFileName('sample-hands.txt');
  };

  const clearAll = () => {
    setRawText('');
    setFileName('');
  };

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const text = await file.text();
    setRawText(text);
  };

  return (
    <section className="page-card wide-page">
      <div className="section-header">
        <div>
          <span className="eyebrow"><Brain size={14} /> Analisi mani giocate</span>
          <h2>Analizza le tue mani</h2>
          <p>
            Carica una hand history PokerStars/888 e ricevi una prima review mano per mano: dove potresti aver sbagliato,
            quali spot sono solo da rivedere e quali possono essere varianza o cooler.
          </p>
        </div>
      </div>

      <div className="tool-grid">
        <div className="panel form-panel">
          <label className="file-upload">
            <Upload size={18} />
            <span>Carica hand history .txt / .log</span>
            <input type="file" accept=".txt,.log" onChange={handleFile} />
          </label>

          {fileName && (
            <div className="loaded-file">
              <FileText size={16} />
              <span>{fileName}</span>
            </div>
          )}

          <label>
            Oppure incolla qui una o più mani
            <textarea
              className="hh-textarea"
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Incolla qui mani PokerStars / 888 in formato testo..."
            />
          </label>

          <div className="hh-actions">
            <button className="secondary-action" onClick={loadSample} type="button">
              <Copy size={16} /> Carica esempio
            </button>
            <button className="secondary-action danger-soft" onClick={clearAll} type="button">
              <Trash2 size={16} /> Pulisci
            </button>
          </div>
        </div>

        <div className="panel result-panel">
          <div className="verdict neutral">
            <Brain size={26} />
            <div>
              <span>Report sessione</span>
              <strong>{analysis.status}</strong>
            </div>
          </div>

          <div className="metric-list">
            <Metric label="Mani analizzate" value={analysis.totalHands} />
            <Metric label="Possibili errori" value={analysis.mistakes} />
            <Metric label="Spot da rivedere" value={analysis.review} />
            <Metric label="Spot corretti / varianza" value={analysis.good} />
          </div>

          <div className="session-summary">
            <Search size={18} />
            <p>{analysis.summary}</p>
          </div>

          <div className="hand-review-list">
            <h3>Review mano per mano</h3>
            {analysis.hands.length === 0 ? (
              <p className="muted-text">Carica una hand history per vedere la review.</p>
            ) : (
              analysis.hands.map((hand, index) => (
                <HandReview key={hand.id || index} hand={hand} index={index} />
              ))
            )}
          </div>

          <div className="explain-box">
            <AlertTriangle size={18} />
            <p>
              Questa è una review preliminare, non un solver. La futura versione PC dovrà calcolare equity, pot odds e range in modo più preciso, sempre post-sessione e senza assistenza live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="metric-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function HandReview({ hand, index }) {
  const Icon = hand.verdict === 'good' ? CheckCircle2 : hand.verdict === 'mistake' ? XCircle : AlertTriangle;

  return (
    <article className={`hand-card ${hand.verdict}`}>
      <div className="hand-card-head">
        <div>
          <span className="hand-number">Mano {index + 1}</span>
          <h4>{hand.title}</h4>
        </div>
        <div className={`verdict-pill ${hand.verdict}`}>
          <Icon size={15} />
          {hand.verdictLabel}
        </div>
      </div>

      <div className="hand-meta">
        <span>Hero: <strong className="cards-inline">{renderPrettyCards(hand.heroCards)}</strong></span>
        <span>Board: <strong className="cards-inline">{renderPrettyCards(hand.board)}</strong></span>
        <span>Pot: <strong>{hand.pot || '—'}</strong></span>
      </div>

      <p className="hand-summary">{hand.summary}</p>

      <div className="hand-reasons">
        {hand.reasons.map((reason, i) => (
          <div key={i} className={`reason ${reason.type}`}>
            <strong>{reason.title}</strong>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function analyzeSession(text) {
  if (!text.trim()) {
    return {
      status: 'In attesa',
      totalHands: 0,
      mistakes: 0,
      review: 0,
      good: 0,
      summary: 'Carica o incolla una hand history per iniziare.',
      hands: []
    };
  }

  const chunks = splitHands(text);
  const hands = chunks.map(parseHand).filter(Boolean);

  const mistakes = hands.filter(h => h.verdict === 'mistake').length;
  const review = hands.filter(h => h.verdict === 'review').length;
  const good = hands.filter(h => h.verdict === 'good').length;

  return {
    status: 'Review pronta',
    totalHands: hands.length,
    mistakes,
    review,
    good,
    summary: buildSessionSummary(hands, mistakes, review, good),
    hands
  };
}

function splitHands(text) {
  const normalized = text.replace(/\r\n/g, '\n');
  const parts = normalized.split(/(?=PokerStars Mano #|888poker Mano #|Mano #\d+)/g)
    .map(p => p.trim())
    .filter(Boolean);

  return parts.length ? parts : [normalized.trim()];
}

function parseHand(chunk) {
  const lines = chunk.split('\n').map(l => l.trim()).filter(Boolean);
  const handId = chunk.match(/(?:PokerStars Mano #|888poker Mano #|Mano #)(\d+)/i)?.[1] || '';
  const heroName = chunk.match(/Dealt to (.+?) \[/i)?.[1] || 'Hero';
  const rawHeroCards = chunk.match(/Dealt to .+?\s+\[([^\]]+)\]/i)?.[1] || '';
  const rawBoard = chunk.match(/Board \[([^\]]+)\]/i)?.[1] || getBoardFromStreets(chunk);
  const heroCards = prettyCards(rawHeroCards);
  const board = prettyCards(rawBoard);
  const pot = chunk.match(/Total pot\s+[€$£]?(\d+(?:[.,]\d+)?)/i)?.[1];
  const potText = pot ? `€${Number(pot.replace(',', '.')).toFixed(2)}` : '—';

  const heroRegex = new RegExp(`^${escapeRegExp(heroName)}:`, 'i');
  const heroActions = lines.filter(l => heroRegex.test(l));
  const heroText = heroActions.join(' ');

  const reasons = [];
  let score = 0;

  const preflopLine = getPreflopHeroAction(lines, heroName);
  const position = estimatePosition(lines, heroName);
  const cardsEval = evaluateStartingHand(rawHeroCards);

  if (heroCards) {
    reasons.push({
      type: 'info',
      title: 'Carte iniziali',
      text: `${heroCards}: ${cardsEval.description}`
    });
  }

  if (preflopLine?.action === 'calls' && cardsEval.strength === 'weak') {
    score -= 3;
    reasons.push({
      type: 'bad',
      title: 'Preflop troppo passivo',
      text: 'Hai fatto limp/call preflop con una mano debole o marginale. Questo è spesso un leak costoso: entri nel piatto senza iniziativa e rischi di giocare una mano difficile.'
    });
  } else if (preflopLine?.action === 'raises' && ['premium', 'strong', 'playable'].includes(cardsEval.strength)) {
    score += 2;
    reasons.push({
      type: 'good',
      title: 'Preflop ragionevole',
      text: 'La linea aggressiva preflop sembra coerente con la forza della mano. In generale, raise è meglio di limp passivo.'
    });
  } else if (preflopLine?.action === 'folds' && cardsEval.strength === 'weak') {
    score += 1;
    reasons.push({
      type: 'good',
      title: 'Fold preflop probabilmente corretto',
      text: 'Foldare una mano debole preflop è spesso la scelta migliore, soprattutto fuori posizione.'
    });
  }

  const hasFlushDraw = detectFlushDraw(rawHeroCards, chunk);
  if (hasFlushDraw && /calls/i.test(heroText)) {
    score += 1;
    reasons.push({
      type: 'review',
      title: 'Call con progetto',
      text: 'Sembra esserci un progetto colore. Il call può essere corretto solo se il prezzo è buono: nella prossima versione confronteremo automaticamente call, pot odds e outs.'
    });
  }

  if (/calls/i.test(heroText) && /RIVER/i.test(chunk)) {
    const riverCall = heroActions.find(l => /calls/i.test(l) && isAfterMarker(lines, l, '*** RIVER ***'));
    if (riverCall && cardsEval.strength === 'weak') {
      score -= 3;
      reasons.push({
        type: 'bad',
        title: 'Call al river da rivedere',
        text: 'Hai chiamato al river in uno spot potenzialmente marginale. I call al river sono tra gli errori più costosi perché non ci sono più carte da vedere: devi battere abbastanza spesso il range avversario.'
      });
    } else if (riverCall) {
      score -= 1;
      reasons.push({
        type: 'review',
        title: 'River call da verificare',
        text: 'È presente un call al river. Non è automaticamente sbagliato, ma va controllato: al river non ci sono più carte da vedere, quindi serve battere abbastanza spesso il range avversario.'
      });
    }
  }

  if (/folds/i.test(heroText) && hasFlushDraw && /RIVER/i.test(chunk)) {
    score += 2;
    reasons.push({
      type: 'good',
      title: 'Fold dopo progetto mancato',
      text: 'Se avevi un progetto e non si è chiuso, foldare può essere corretto. Questa è più una mano di varianza/progetto mancato che un errore evidente.'
    });
  }

  if (/raises/i.test(chunk) && /calls/i.test(heroText)) {
    score -= 1;
    reasons.push({
      type: 'review',
      title: 'Call contro raise',
      text: 'Quando subisci un raise, il call deve essere giustificato da equity, pot odds o valore implicito. Questo spot merita una review prioritaria.'
    });
  }

  if (reasons.length === 1) {
    reasons.push({
      type: 'review',
      title: 'Informazioni insufficienti',
      text: 'Il parser ha letto la mano ma servono più regole per dare un giudizio preciso. È comunque pronta per una review manuale.'
    });
  }

  let verdict = 'review';
  let verdictLabel = 'Da rivedere';
  if (score <= -3) {
    verdict = 'mistake';
    verdictLabel = 'Possibile errore';
  } else if (score >= 2) {
    verdict = 'good';
    verdictLabel = 'Corretto / varianza';
  }

  return {
    id: handId,
    title: handId ? `Mano #${handId}` : 'Hand history',
    heroCards,
    board,
    pot: potText,
    position,
    verdict,
    verdictLabel,
    summary: makeHandSummary({ verdict, heroCards, board, heroActions, cardsEval }),
    reasons
  };
}

function buildSessionSummary(hands, mistakes, review, good) {
  if (!hands.length) return 'Nessuna mano riconosciuta.';
  if (mistakes > 0) {
    return `Ho trovato ${hands.length} mano/e: ${mistakes} possibile/i errore/i, ${review} spot da rivedere e ${good} spot OK/varianza. Parti dalle mani segnate come “Possibile errore”.`;
  }
  if (review > 0) {
    return `Ho trovato ${hands.length} mano/e: nessun errore grave evidente, ma ${review} spot richiedono review.`;
  }
  return `Ho trovato ${hands.length} mano/e: al momento sembrano spot abbastanza standard o legati a varianza.`;
}

function makeHandSummary({ verdict, heroCards, board, heroActions, cardsEval }) {
  const actionSummary = summarizeActions(heroActions);

  if (verdict === 'mistake') {
    return `Con ${heroCards || 'mano non rilevata'}, la linea contiene almeno uno spot rischioso. ${actionSummary}`;
  }
  if (verdict === 'good') {
    return `Con ${heroCards || 'mano non rilevata'}, la linea sembra difendibile: non è automaticamente un errore se il risultato è stato negativo. ${actionSummary}`;
  }
  return `Con ${heroCards || 'mano non rilevata'}, la mano va rivista meglio. ${actionSummary}`;
}

function summarizeActions(actions) {
  const text = actions.join(' ');
  const parts = [];
  if (/raises/i.test(text)) parts.push('raise');
  if (/bets/i.test(text)) parts.push('bet');
  if (/calls/i.test(text)) parts.push('call');
  if (/checks/i.test(text)) parts.push('check');
  if (/folds/i.test(text)) parts.push('fold');
  return parts.length ? `Azioni Hero rilevate: ${parts.join(', ')}.` : 'Azioni Hero non chiaramente rilevate.';
}

function getPreflopHeroAction(lines, heroName) {
  const start = lines.findIndex(l => /\*\*\* HOLE CARDS \*\*\*/i.test(l));
  const flop = lines.findIndex(l => /\*\*\* FLOP \*\*\*/i.test(l));
  const end = flop === -1 ? lines.length : flop;
  const heroRegex = new RegExp(`^${escapeRegExp(heroName)}:`, 'i');

  for (let i = start + 1; i < end; i++) {
    if (heroRegex.test(lines[i])) {
      const action = lines[i].match(/:\s+(raises|calls|folds|checks|bets)/i)?.[1]?.toLowerCase();
      return { action, line: lines[i] };
    }
  }
  return null;
}

function estimatePosition(lines, heroName) {
  const heroSeatLine = lines.find(l => new RegExp(`:\\s+${escapeRegExp(heroName)}\\s+\\(`, 'i').test(l));
  return heroSeatLine || '';
}

function evaluateStartingHand(cardsText) {
  const cards = cardsText.split(/\s+/).filter(Boolean);
  if (cards.length < 2) return { strength: 'unknown', description: 'mano non riconosciuta' };

  const ranks = cards.map(c => normalizeRank(c.slice(0, -1)));
  const suits = cards.map(c => c.slice(-1).toLowerCase());
  const suited = suits[0] === suits[1];
  const pair = ranks[0] === ranks[1];

  const high = Math.max(...ranks);
  const low = Math.min(...ranks);

  if (pair && high >= 10) return { strength: 'premium', description: 'coppia alta/premium' };
  if ((ranks.includes(14) && ranks.includes(13)) || (ranks.includes(14) && ranks.includes(12))) return { strength: 'strong', description: 'broadway molto forte' };
  if (pair && high >= 7) return { strength: 'strong', description: 'coppia media/forte' };
  if (suited && high >= 12 && low >= 9) return { strength: 'playable', description: 'mano suited giocabile' };
  if (high >= 13 && low >= 10) return { strength: 'playable', description: 'broadway giocabile' };
  if (pair) return { strength: 'playable', description: 'coppia bassa: giocabile ma dipende molto da posizione e stack' };
  if (suited && high >= 10 && high - low <= 4) return { strength: 'playable', description: 'suited connector/gapper giocabile in alcuni spot' };
  if (high <= 11 && low <= 8) return { strength: 'weak', description: 'mano debole/marginale' };

  return { strength: 'marginal', description: 'mano marginale, molto dipendente da posizione e avversari' };
}

function normalizeRank(rank) {
  const r = rank.toUpperCase();
  if (r === 'A') return 14;
  if (r === 'K') return 13;
  if (r === 'Q') return 12;
  if (r === 'J') return 11;
  if (r === 'T') return 10;
  return Number(r) || 0;
}

function detectFlushDraw(heroCards, chunk) {
  const flop = chunk.match(/\*\*\* FLOP \*\*\* \[([^\]]+)\]/i)?.[1] || '';
  if (!heroCards || !flop) return false;
  const cards = `${heroCards} ${flop}`.split(/\s+/).filter(Boolean);
  const counts = {};
  for (const c of cards) {
    const suit = c.slice(-1).toLowerCase();
    counts[suit] = (counts[suit] || 0) + 1;
  }
  return Math.max(...Object.values(counts)) >= 4;
}

function getBoardFromStreets(chunk) {
  const river = chunk.match(/\*\*\* RIVER \*\*\* \[([^\]]+)\]\s+\[([^\]]+)\]/i);
  if (river) return `${river[1]} ${river[2]}`;
  const turn = chunk.match(/\*\*\* TURN \*\*\* \[([^\]]+)\]\s+\[([^\]]+)\]/i);
  if (turn) return `${turn[1]} ${turn[2]}`;
  const flop = chunk.match(/\*\*\* FLOP \*\*\* \[([^\]]+)\]/i);
  if (flop) return flop[1];
  return '';
}

function isAfterMarker(lines, targetLine, marker) {
  const markerIndex = lines.findIndex(l => l.includes(marker));
  const targetIndex = lines.findIndex(l => l === targetLine);
  return markerIndex >= 0 && targetIndex > markerIndex;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
