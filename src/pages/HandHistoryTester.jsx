import React, { useMemo, useState } from 'react';
import { Upload, FileText, Brain, AlertTriangle, CheckCircle2, Copy, Trash2, XCircle, Search } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const MAX_HANDS_TO_ANALYZE = 150;
const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024;

const SAMPLE_HANDS = `#Game No : 141748680
***** Hand History for Game 141748680 *****
20/40 Blinds No Limit Holdem
Seat 6 is the button
Seat 1: Player1 ( 10.000 )
Seat 2: Player2 ( 10.000 )
Seat 6: Hero ( 10.000 )
Player1 posts small blind [20]
Player2 posts big blind [40]
** Dealing down cards **
Dealt to Hero [ Kd, Kh ]
Player1 raises [120]
Hero raises [320]
Player1 calls [200]
** Dealing flop ** [ Jd, 8d, Ad ]
Player1 bets [40]
Hero raises [320]
Player1 folds
** Summary **
Hero did not show his hand
Primo runout Hero collected [ 925 ]

#Game No : 141748705
***** Hand History for Game 141748705 *****
20/40 Blinds No Limit Holdem
Seat 6: Hero ( 10.555 )
Seat 9: Villain ( 9.970 )
** Dealing down cards **
Dealt to Hero [ Ac, 3h ]
Hero calls [40]
Villain raises [160]
Hero calls [120]
** Dealing flop ** [ 6s, 7c, Td ]
Hero checks
Villain checks
** Dealing turn ** [ 4c ]
Hero checks
Villain checks
** Dealing river ** [ 9s ]
Hero checks
Villain checks
** Summary **
Hero shows [ Ac, 3h ]
Hero collected [ 405 ]`;

const SUIT_SYMBOLS = {
  h: '♥',
  d: '♦',
  c: '♣',
  s: '♠',
  '♥': '♥',
  '♦': '♦',
  '♣': '♣',
  '♠': '♠',
};

const SUIT_CLASSES = {
  h: 'suit-heart',
  d: 'suit-diamond',
  c: 'suit-club',
  s: 'suit-spade',
  '♥': 'suit-heart',
  '♦': 'suit-diamond',
  '♣': 'suit-club',
  '♠': 'suit-spade',
};

export default function HandHistoryTester() {
  const { t } = useLanguage();
  const [rawText, setRawText] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');

  const analysis = useMemo(() => {
    try {
      return analyzeSession(rawText, t);
    } catch (error) {
      console.error('Hand history parser error:', error);
      return emptyAnalysis(t, true);
    }
  }, [rawText, t]);

  const loadSample = () => {
    setFileError('');
    setRawText(SAMPLE_HANDS);
    setFileName('sample-hands.txt');
  };

  const clearAll = () => {
    setFileError('');
    setRawText('');
    setFileName('');
  };

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileError('');

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileName(file.name);
      setRawText('');
      setFileError(t('fileTooLarge', { maxMb: 2 }));
      return;
    }

    setFileName(file.name);

    try {
      const text = await file.text();
      setRawText(text);
    } catch (error) {
      console.error('File read error:', error);
      setRawText('');
      setFileError(t('fileReadError'));
    }
  };

  return (
    <section className="page-card wide-page">
      <div className="section-header">
        <div>
          <span className="eyebrow"><Brain size={14} /> {t('testerEyebrow')}</span>
          <h2>{t('testerTitle')}</h2>
          <p>{t('testerText')}</p>
        </div>
      </div>

      <div className="tool-grid">
        <div className="panel form-panel">
          <label className="file-upload">
            <Upload size={18} />
            <span>{t('uploadHH')}</span>
            <input type="file" accept=".txt,.log,.text" onClick={(e) => { e.target.value = null; }} onChange={handleFile} />
          </label>

          {fileName && (
            <div className="loaded-file">
              <FileText size={16} />
              <span>{fileName}</span>
            </div>
          )}

          <div className="privacy-note">
            <AlertTriangle size={16} />
            <span>{t('testerPrivacyNote')}</span>
          </div>

          {fileError && (
            <div className="privacy-note error">
              <XCircle size={16} />
              <span>{fileError}</span>
            </div>
          )}

          <label>
            {t('pasteHH')}
            <textarea
              className="hh-textarea"
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder={t('pastePlaceholder')}
            />
          </label>

          <div className="hh-actions">
            {!fileName && (
              <button className="secondary-action" onClick={loadSample} type="button">
                <Copy size={16} /> {t('loadExample')}
              </button>
            )}
            <button className="secondary-action danger-soft" onClick={clearAll} type="button">
              <Trash2 size={16} /> {t('clear')}
            </button>
          </div>

          {rawText && (
            <div className="tester-file-note">
              <strong>{analysis.totalChunks}</strong>
              <span>
                {analysis.truncated
                  ? t('handsFoundSummaryTruncated', {
                      totalChunks: analysis.totalChunks,
                      totalHands: analysis.totalHands,
                      limit: MAX_HANDS_TO_ANALYZE,
                    })
                  : t('handsFoundSummary', {
                      totalChunks: analysis.totalChunks,
                      totalHands: analysis.totalHands,
                    })}
              </span>
            </div>
          )}
        </div>

        <div className="panel result-panel">
          <div className="verdict neutral">
            <Brain size={26} />
            <div>
              <span>{t('sessionReport')}</span>
              <strong>{analysis.status}</strong>
            </div>
          </div>

          <div className="metric-list">
            <Metric label={t('handsAnalyzed')} value={analysis.totalHands} />
            <Metric label={t('possibleMistakes')} value={analysis.mistakes} />
            <Metric label={t('reviewSpots')} value={analysis.review} />
            <Metric label={t('goodVariance')} value={analysis.good} />
          </div>

          <div className="session-summary">
            <Search size={18} />
            <p>{analysis.summary}</p>
          </div>

          <div className="hand-review-list">
            <h3>{t('handByHand')}</h3>
            {analysis.hands.length === 0 ? (
              <p className="muted-text">{t('noHH')}</p>
            ) : (
              analysis.hands.map((hand, index) => (
                <HandReview key={`${hand.id || 'hand'}-${index}`} hand={hand} index={index} />
              ))
            )}
          </div>

          <div className="explain-box">
            <AlertTriangle size={18} />
            <p>{t('testerDisclaimer')}</p>
          </div>
        </div>
      </div>

      <div className="pricing-preview">
        <h3>{t('futureModel')}</h3>
        <div className="price-cards clean-model two-cards">
          <div>
            <span>{t('futureOnlineTitle')}</span>
            <strong>{t('futureOnlineBadge')}</strong>
            <p>{t('futureOnlineText')}</p>
          </div>
          <div>
            <span>{t('futureDesktopTitle')}</span>
            <strong>{t('futureDesktopBadge')}</strong>
            <p>{t('futureDesktopText')}</p>
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
  const { t } = useLanguage();
  const Icon = hand.verdict === 'good' ? CheckCircle2 : hand.verdict === 'mistake' ? XCircle : AlertTriangle;

  return (
    <article className={`hand-card ${hand.verdict}`}>
      <div className="hand-card-head">
        <div>
          <span className="hand-number">{index + 1}</span>
          <h4>{hand.title}</h4>
        </div>
        <div className={`verdict-pill ${hand.verdict}`}>
          <Icon size={15} />
          {hand.verdictLabel}
        </div>
      </div>

      <div className="hand-meta">
        <span>{t('hero')}: <strong className="cards-inline">{renderCards(hand.heroCards)}</strong></span>
        <span>{t('board')}: <strong className="cards-inline">{renderCards(hand.board)}</strong></span>
        <span>{t('pot')}: <strong>{hand.pot || '—'}</strong></span>
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

function emptyAnalysis(t, parserError = false) {
  return {
    status: parserError ? t('verdictReview') : t('waitingStatus'),
    totalHands: 0,
    totalChunks: 0,
    truncated: false,
    mistakes: 0,
    review: 0,
    good: 0,
    summary: parserError
      ? 'Il file è stato letto, ma alcune righe hanno un formato non previsto. Il tester non va in crash: prova a incollare una singola mano o usa un file più pulito.'
      : t('startReviewSummary'),
    hands: []
  };
}

function analyzeSession(text, t) {
  if (!text || !text.trim()) return emptyAnalysis(t);

  const allChunks = splitHands(text);
  const chunks = allChunks.slice(0, MAX_HANDS_TO_ANALYZE);
  const hands = chunks.map((chunk) => parseHand(chunk, t)).filter(Boolean);

  const mistakes = hands.filter(h => h.verdict === 'mistake').length;
  const review = hands.filter(h => h.verdict === 'review').length;
  const good = hands.filter(h => h.verdict === 'good').length;

  return {
    status: t('readyStatus'),
    totalHands: hands.length,
    totalChunks: allChunks.length,
    truncated: allChunks.length > MAX_HANDS_TO_ANALYZE,
    mistakes,
    review,
    good,
    summary: buildSessionSummary(hands, mistakes, review, good, t),
    hands
  };
}

function splitHands(text) {
  const normalized = String(text || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const parts = normalized
    .split(/(?=^#Game No\s*:|^\*\*\*\*\* .*?Hand History for Game|^Software Mano #|^software di gioco Mano #|^Mano #\d+)/gim)
    .map(part => part.trim())
    .filter(part => part.length > 30);

  return parts.length ? parts : [normalized.trim()];
}

function parseHand(chunk, t) {
  if (!chunk || !chunk.trim()) return null;

  const lines = chunk.split('\n').map(l => l.trim()).filter(Boolean);
  const handId = getFirstMatch(chunk, [
    /#Game No\s*:\s*(\d+)/i,
    /Hand History for Game\s+(\d+)/i,
    /(?:Software Mano #|software di gioco Mano #|Mano #)(\d+)/i
  ]) || '';

  const heroName = getFirstMatch(chunk, [/Dealt to\s+(.+?)\s+\[/i]) || findLikelyHero(lines) || 'Hero';
  const rawHeroCards = cleanCards(getFirstMatch(chunk, [/Dealt to\s+.+?\s+\[([^\]]+)\]/i]) || '');
  const rawBoard = cleanCards(getFirstMatch(chunk, [/Board\s+\[([^\]]+)\]/i]) || getBoardFromStreets(chunk));

  const heroCards = prettyCards(rawHeroCards);
  const board = prettyCards(rawBoard);
  const pot = getPot(chunk, heroName);
  const heroActions = getHeroActions(lines, heroName);
  const heroText = heroActions.join(' ');

  const reasons = [];
  let score = 0;

  const cardsEval = evaluateStartingHand(rawHeroCards, t);
  const preflopLine = getPreflopHeroAction(lines, heroName);

  if (heroCards !== '—') {
    reasons.push({
      type: 'info',
      title: t('infoStartingCards'),
      text: `${heroCards}: ${cardsEval.description}`
    });
  }

  if (preflopLine?.action === 'calls' && ['weak', 'marginal'].includes(cardsEval.strength)) {
    score -= 3;
    reasons.push({ type: 'bad', title: t('passivePreflopTitle'), text: t('passivePreflopText') });
  } else if (preflopLine?.action === 'raises' && ['premium', 'strong', 'playable'].includes(cardsEval.strength)) {
    score += 2;
    reasons.push({ type: 'good', title: t('solidPreflopTitle'), text: t('solidPreflopText') });
  } else if (preflopLine?.action === 'folds' && ['weak', 'marginal'].includes(cardsEval.strength)) {
    score += 1;
    reasons.push({ type: 'good', title: t('foldPreflopTitle'), text: t('foldPreflopText') });
  }

  const hasFlushDraw = detectFlushDraw(rawHeroCards, chunk);
  if (hasFlushDraw && /calls/i.test(heroText)) {
    score += 1;
    reasons.push({ type: 'review', title: t('flushDrawCallTitle'), text: t('flushDrawCallText') });
  }

  const riverCall = heroActions.find(l => /calls/i.test(l) && isAfterAnyMarker(lines, l, ['*** RIVER ***', '** Dealing river **']));
  if (riverCall) {
    score += cardsEval.strength === 'weak' ? -3 : -1;
    reasons.push({
      type: cardsEval.strength === 'weak' ? 'bad' : 'review',
      title: cardsEval.strength === 'weak' ? t('riverCallBadTitle') : t('riverCallReviewTitle'),
      text: cardsEval.strength === 'weak' ? t('riverCallBadText') : t('riverCallReviewText')
    });
  }

  if (/folds/i.test(heroText) && hasFlushDraw && /RIVER|Dealing river/i.test(chunk)) {
    score += 2;
    reasons.push({ type: 'good', title: t('missedDrawFoldTitle'), text: t('missedDrawFoldText') });
  }

  if (/raises/i.test(chunk) && /calls/i.test(heroText)) {
    score -= 1;
    reasons.push({ type: 'review', title: t('callVsRaiseTitle'), text: t('callVsRaiseText') });
  }

  if (reasons.length === 0) {
    reasons.push({ type: 'review', title: t('insufficientInfoTitle'), text: t('insufficientInfoText') });
  }

  let verdict = 'review';
  let verdictLabel = t('verdictReview');

  if (score <= -3) {
    verdict = 'mistake';
    verdictLabel = t('verdictMistake');
  } else if (score >= 2) {
    verdict = 'good';
    verdictLabel = t('verdictGood');
  }

  return {
    id: handId,
    title: handId ? `Hand #${handId}` : t('handHistoryTitle'),
    heroCards,
    board,
    pot,
    verdict,
    verdictLabel,
    summary: makeHandSummary({ verdict, heroCards, heroActions }, t),
    reasons
  };
}

function getFirstMatch(text, regexes) {
  for (const regex of regexes) {
    const match = text.match(regex);
    if (match?.[1]) return match[1].trim();
  }
  return '';
}

function findLikelyHero(lines) {
  for (const line of lines) {
    const match = line.match(/^Dealt to\s+(.+?)\s+\[/i);
    if (match?.[1]) return match[1].trim();
  }
  return '';
}

function getHeroActions(lines, heroName) {
  if (!heroName) return [];
  const heroRegex = new RegExp(`^${escapeRegExp(heroName)}(?::|\\b)`, 'i');

  return lines.filter(line => {
    if (!heroRegex.test(line)) return false;
    return /\b(raises|calls|folds|checks|bets)\b/i.test(line);
  });
}

function getPreflopHeroAction(lines, heroName) {
  const start = lines.findIndex(l => /\*\*\* HOLE CARDS \*\*\*|\*\* Dealing down cards \*\*/i.test(l));
  const flop = lines.findIndex(l => /\*\*\* FLOP \*\*\*|\*\* Dealing flop \*\*/i.test(l));
  const end = flop === -1 ? lines.length : flop;
  const searchStart = start === -1 ? 0 : start + 1;
  const heroActions = getHeroActions(lines.slice(searchStart, end), heroName);

  const firstAction = heroActions[0];
  if (!firstAction) return null;

  const action = firstAction.match(/\b(raises|calls|folds|checks|bets)\b/i)?.[1]?.toLowerCase();
  return { action, line: firstAction };
}

function getPot(chunk, heroName) {
  const totalPot = getFirstMatch(chunk, [/Total pot\s+[€$£]?(\d+(?:[.,]\d+)?)/i]);
  const collectedByHero = heroName
    ? getFirstMatch(chunk, [new RegExp(`${escapeRegExp(heroName)}\\s+collected\\s*\\[\\s*(\\d+(?:[.,]\\d+)?)`, 'i')])
    : '';
  const collectedAny = getFirstMatch(chunk, [/collected\s*\[\s*(\d+(?:[.,]\d+)?)/i]);

  const value = totalPot || collectedByHero || collectedAny;
  return value ? `€${Number(String(value).replace(',', '.')).toFixed(2)}` : '—';
}

function getBoardFromStreets(chunk) {
  const flop = getFirstMatch(chunk, [
    /\*\*\* FLOP \*\*\* \[([^\]]+)\]/i,
    /\*\* Dealing flop \*\* \[([^\]]+)\]/i
  ]);

  const turn = getFirstMatch(chunk, [
    /\*\*\* TURN \*\*\* \[[^\]]+\]\s+\[([^\]]+)\]/i,
    /\*\* Dealing turn \*\* \[([^\]]+)\]/i
  ]);

  const river = getFirstMatch(chunk, [
    /\*\*\* RIVER \*\*\* \[[^\]]+\]\s+\[([^\]]+)\]/i,
    /\*\* Dealing river \*\* \[([^\]]+)\]/i
  ]);

  return cleanCards([flop, turn, river].filter(Boolean).join(' '));
}

function buildSessionSummary(hands, mistakes, review, good, t) {
  if (!hands.length) return t('noHandsRecognized');
  if (mistakes > 0) {
    return t('sessionSummaryMistakes', { hands: hands.length, mistakes, review, good });
  }
  if (review > 0) {
    return t('sessionSummaryReview', { hands: hands.length, mistakes, review, good });
  }
  return t('sessionSummaryGood', { hands: hands.length, mistakes, review, good });
}

function makeHandSummary({ verdict, heroCards, heroActions }, t) {
  const actionSummary = summarizeActions(heroActions, t);
  const cards = heroCards && heroCards !== '—' ? heroCards : t('handNotDetected');

  if (verdict === 'mistake') return t('summaryMistake', { heroCards: cards, actionSummary });
  if (verdict === 'good') return t('summaryGood', { heroCards: cards, actionSummary });
  return t('summaryReview', { heroCards: cards, actionSummary });
}

function summarizeActions(actions, t) {
  const text = actions.join(' ');
  const parts = [];

  if (/raises/i.test(text)) parts.push(t('actionRaise'));
  if (/bets/i.test(text)) parts.push(t('actionBet'));
  if (/calls/i.test(text)) parts.push(t('actionCall'));
  if (/checks/i.test(text)) parts.push(t('actionCheck'));
  if (/folds/i.test(text)) parts.push(t('actionFold'));

  return parts.length ? t('actionsDetected', { actions: parts.join(', ') }) : t('actionsNotDetected');
}

function evaluateStartingHand(cardsText, t) {
  const cards = cleanCards(cardsText).split(/\s+/).filter(Boolean);
  if (cards.length < 2) return { strength: 'unknown', description: t('handNotRecognized') };

  const ranks = cards.map(card => normalizeRank(card.slice(0, -1)));
  const suits = cards.map(card => card.slice(-1).toLowerCase());

  const suited = suits[0] === suits[1];
  const pair = ranks[0] === ranks[1];
  const high = Math.max(...ranks);
  const low = Math.min(...ranks);

  if (pair && high >= 10) return { strength: 'premium', description: t('premiumPair') };
  if ((ranks.includes(14) && ranks.includes(13)) || (ranks.includes(14) && ranks.includes(12))) return { strength: 'strong', description: t('strongBroadway') };
  if (pair && high >= 7) return { strength: 'strong', description: t('mediumStrongPair') };
  if (suited && high >= 12 && low >= 9) return { strength: 'playable', description: t('playableSuited') };
  if (high >= 13 && low >= 10) return { strength: 'playable', description: t('playableBroadway') };
  if (pair) return { strength: 'playable', description: t('playableLowPair') };
  if (suited && high >= 10 && high - low <= 4) return { strength: 'playable', description: t('playableConnector') };
  if (high <= 11 && low <= 8) return { strength: 'weak', description: t('weakMarginal') };

  return { strength: 'marginal', description: t('marginalHand') };
}

function normalizeRank(rank) {
  const r = String(rank || '').toUpperCase();

  if (r === 'A') return 14;
  if (r === 'K') return 13;
  if (r === 'Q') return 12;
  if (r === 'J') return 11;
  if (r === 'T') return 10;

  return Number(r) || 0;
}

function detectFlushDraw(heroCards, chunk) {
  const flop = cleanCards(getFirstMatch(chunk, [
    /\*\*\* FLOP \*\*\* \[([^\]]+)\]/i,
    /\*\* Dealing flop \*\* \[([^\]]+)\]/i
  ]));

  if (!heroCards || !flop) return false;

  const cards = cleanCards(`${heroCards} ${flop}`).split(/\s+/).filter(Boolean);
  const counts = {};

  for (const card of cards) {
    const suit = card.slice(-1).toLowerCase();
    counts[suit] = (counts[suit] || 0) + 1;
  }

  return Object.values(counts).some(count => count >= 4);
}

function isAfterAnyMarker(lines, targetLine, markers) {
  const markerIndex = lines.findIndex(line => markers.some(marker => line.includes(marker)));
  const targetIndex = lines.findIndex(line => line === targetLine);
  return markerIndex >= 0 && targetIndex > markerIndex;
}

function cleanCards(text) {
  return String(text || '')
    .replace(/[\[\],]/g, ' ')
    .replace(/\b10([hdcs♥♦♣♠])\b/gi, 'T$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function prettyCards(text) {
  const cards = cleanCards(text).split(/\s+/).filter(Boolean);
  if (!cards.length) return '—';

  return cards.map(card => {
    const match = card.match(/^([2-9TJQKA])([hdcs♥♦♣♠])$/i);
    if (!match) return card;

    const rank = match[1].toUpperCase() === 'T' ? '10' : match[1].toUpperCase();
    const suit = match[2].toLowerCase();
    return `${rank}${SUIT_SYMBOLS[suit] || match[2]}`;
  }).join(' ');
}

function renderCards(text) {
  const cards = cleanCards(text).split(/\s+/).filter(Boolean);
  if (!cards.length) return '—';

  return cards.map((card, index) => {
    const match = card.match(/^([2-9TJQKA]|10)([hdcs♥♦♣♠])$/i);

    if (!match) {
      return <span key={`${card}-${index}`} className="card-token">{card}</span>;
    }

    const rank = match[1].toUpperCase() === 'T' ? '10' : match[1].toUpperCase();
    const suit = match[2].toLowerCase();
    const symbol = SUIT_SYMBOLS[suit] || match[2];
    const suitClass = SUIT_CLASSES[suit] || '';

    return (
      <span key={`${card}-${index}`} className={`card-token ${suitClass}`}>
        {rank}{symbol}
      </span>
    );
  });
}

function escapeRegExp(string) {
  return String(string || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
