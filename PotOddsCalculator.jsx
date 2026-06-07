import React, { useMemo, useState } from 'react';
import { ShieldCheck, HelpCircle, RotateCcw, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default function BlackjackTrainer() {
  const { t } = useLanguage();

  const [player1, setPlayer1] = useState('A');
  const [player2, setPlayer2] = useState('7');
  const [dealer, setDealer] = useState('9');
  const [activeSlot, setActiveSlot] = useState('player1');

  const hand = useMemo(() => evaluateBlackjackHand(player1, player2, dealer), [player1, player2, dealer]);
  const advice = useMemo(() => getBlackjackAdvice(hand), [hand]);

  const setRankForActiveSlot = (rank) => {
    if (activeSlot === 'player1') setPlayer1(rank);
    if (activeSlot === 'player2') setPlayer2(rank);
    if (activeSlot === 'dealer') setDealer(rank);

    if (activeSlot === 'player1') setActiveSlot('player2');
    else if (activeSlot === 'player2') setActiveSlot('dealer');
  };

  const reset = () => {
    setPlayer1('A');
    setPlayer2('7');
    setDealer('9');
    setActiveSlot('player1');
  };

  return (
    <section className="page-card">
      <div className="section-header">
        <div>
          <span className="eyebrow"><ShieldCheck size={14} /> {t('bjEyebrow')}</span>
          <h2>{t('bjTitle')}</h2>
          <p>{t('bjText')}</p>
        </div>
      </div>

      <div className="tool-grid">
        <div className="panel form-panel">
          <div className="panel-title">
            <span className="dot dot-primary"></span>
            {t('bjSelectCards')}
          </div>

          <div className="bj-block">
            <div className="bj-block-head">
              <strong>{t('bjPlayerHand')}</strong>
              <span className="hint">{t('bjClickEdit')}</span>
            </div>

            <div className="bj-selected-row">
              <CardSlot
                label={t('card1')}
                rank={player1}
                active={activeSlot === 'player1'}
                onClick={() => setActiveSlot('player1')}
              />
              <CardSlot
                label={t('card2')}
                rank={player2}
                active={activeSlot === 'player2'}
                onClick={() => setActiveSlot('player2')}
              />
            </div>
          </div>

          <div className="bj-block">
            <div className="bj-block-head">
              <strong>{t('bjDealerVisible')}</strong>
              <span className="hint">{t('bjOneCard')}</span>
            </div>

            <div className="bj-selected-row">
              <CardSlot
                label={t('dealer')}
                rank={dealer}
                active={activeSlot === 'dealer'}
                onClick={() => setActiveSlot('dealer')}
                dealer
              />
            </div>
          </div>

          <div className="bj-active-chip">
            <Sparkles size={14} />
            {t('bjActiveCard')}: {activeSlot === 'player1' ? t('player1') : activeSlot === 'player2' ? t('player2') : t('dealer')}
          </div>

          <div className="bj-rank-grid">
            {RANKS.map((rank, idx) => (
              <button key={rank} className="bj-rank-card universal" onClick={() => setRankForActiveSlot(rank)}>
                <span className="bj-rank-main">{rank}</span>
                <small className="bj-suit-strip" aria-hidden="true">
                  <span className="suit-spade">♠</span>
                  <span className="suit-heart">♥</span>
                  <span className="suit-diamond">♦</span>
                  <span className="suit-club">♣</span>
                </small>
              </button>
            ))}
          </div>

          <div className="bj-actions">
            <button className="secondary-action bj-reset" onClick={reset}>
              <RotateCcw size={15} />
              {t('resetLabel')}
            </button>
          </div>
        </div>

        <div className="panel result-panel">
          <div className={`verdict ${advice.tone}`}>
            <ShieldCheck size={26} />
            <div>
              <span>{t('suggestedMove')}</span>
              <strong>{translateBjAction(advice.action, t)}</strong>
            </div>
          </div>

          <div className="bj-summary-grid">
            <div className="bj-summary-card">
              <span>{t('total')}</span>
              <strong>{hand.total}</strong>
              <small>{hand.soft ? t('softHand') : t('hardHand')}</small>
            </div>
            <div className="bj-summary-card">
              <span>{t('structure')}</span>
              <strong>{hand.isPair ? t('pair') : t('notPair')}</strong>
              <small>{translatePairLabel(hand, t) || t('standardPlay')}</small>
            </div>
            <div className="bj-summary-card">
              <span>{t('dealer')}</span>
              <strong>{hand.dealerValueLabel}</strong>
              <small>{t('dealerCard')}</small>
            </div>
          </div>

          <div className="explain-box">
            <HelpCircle size={18} />
            <p>{t('bjGenericReason')}</p>
          </div>

          <div className="bj-notes">
            <div className="reason">
              <h4>{t('situationRead')}</h4>
              <p>{describeBlackjackHand(hand, t)}</p>
            </div>
            <div className="reason">
              <h4>{t('importantNote')}</h4>
              <p>{t('bjNote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function translateBjAction(action, t) {
  if (action === 'Hit') return t('hit');
  if (action === 'Stand') return t('stand');
  if (action === 'Split') return t('split');
  if (action === 'Double se consentito, altrimenti Hit') return t('doubleHit');
  if (action === 'Double se consentito, altrimenti Stand') return t('doubleStand');
  return action;
}

function CardSlot({ label, rank, active, onClick, dealer = false }) {
  const { t } = useLanguage();
  return (
    <button className={active ? 'playing-card lg real-card bj-slot active' : 'playing-card lg real-card bj-slot'} onClick={onClick}>
      <span className="bj-slot-label">{label}</span>
      <span className="bj-slot-rank universal-rank">{rank}</span>
      <span className="bj-slot-universal-icons" aria-hidden="true">
        <span className="suit-spade">♠</span>
        <span className="suit-heart">♥</span>
        <span className="suit-diamond">♦</span>
        <span className="suit-club">♣</span>
      </span>
      {dealer ? <small className="bj-dealer-tag">{t('bjDealerTag')}</small> : null}
    </button>
  );
}




function translatePairLabel(hand, t) {
  if (!hand.isPair) return '';
  if (hand.exactPair) return t('pairOf', { rank: hand.pairRank || '' });
  if (hand.tenValuePair) return t('twoTens');
  return t('sameValuePair');
}

function describeBlackjackHand(hand, t) {
  return hand.soft
    ? t('softDesc', { total: hand.total, dealer: hand.dealerValueLabel })
    : t('hardDesc', { total: hand.total, dealer: hand.dealerValueLabel });
}

function cardValue(rank) {
  if (rank === 'A') return 11;
  if (['10', 'J', 'Q', 'K'].includes(rank)) return 10;
  return Number(rank);
}

function evaluateBlackjackHand(player1, player2, dealer) {
  const ranks = [player1, player2];
  const values = ranks.map(cardValue);
  let total = values[0] + values[1];
  let acesAsEleven = ranks.filter(r => r === 'A').length;

  while (total > 21 && acesAsEleven > 0) {
    total -= 10;
    acesAsEleven -= 1;
  }

  const soft = acesAsEleven > 0;
  const dealerValue = dealer === 'A' ? 11 : cardValue(dealer);
  const pairValue = values[0] === values[1];
  const exactPair = player1 === player2;
  const tenValuePair = !exactPair && values[0] === 10 && values[1] === 10;

  let pairLabel = '';

  return {
    total,
    soft,
    dealerValue,
    dealerValueLabel: dealer,
    isPair: pairValue,
    exactPair,
    tenValuePair,
    pairRank: exactPair ? player1 : (tenValuePair ? '10' : null),
    pairLabel,
    description: `${soft ? 'Soft' : 'Hard'} ${total}${pairValue ? ` contro dealer ${dealer}` : ` contro dealer ${dealer}`}`,
  };
}

function getBlackjackAdvice(hand) {
  const { total, dealerValue: dealer, soft, isPair, pairRank, tenValuePair } = hand;

  if (isPair) {
    if (pairRank === 'A' || pairRank === '8') {
      return {
        action: 'Split',
        tone: 'good',
        reason: 'Asso-Asso e 8-8 sono split quasi sempre: separare la coppia migliora il potenziale rispetto a giocare un totale rigido.'
      };
    }
    if (pairRank === '10' || tenValuePair) {
      return {
        action: 'Stand',
        tone: 'good',
        reason: 'Con due carte da 10 hai 20: la basic strategy preferisce quasi sempre stand, non split.'
      };
    }
    if (pairRank === '9') {
      return {
        action: (dealer === 7 || dealer >= 10 || dealer === 11) ? 'Stand' : 'Split',
        tone: 'good',
        reason: (dealer === 7 || dealer >= 10 || dealer === 11)
          ? 'Con coppia di 9 contro 7, 10 o Asso, la linea standard è stand.'
          : 'Con coppia di 9 contro molte carte medie del dealer, lo split è la scelta standard.'
      };
    }
    if (pairRank === '7') {
      return {
        action: (dealer >= 2 && dealer <= 7) ? 'Split' : 'Hit',
        tone: 'review',
        reason: (dealer >= 2 && dealer <= 7)
          ? 'Coppia di 7: contro dealer 2-7 la basic strategy tende a splittare.'
          : 'Coppia di 7 contro carte forti del dealer: meglio hit che split.'
      };
    }
    if (pairRank === '6') {
      return {
        action: (dealer >= 2 && dealer <= 6) ? 'Split' : 'Hit',
        tone: 'review',
        reason: (dealer >= 2 && dealer <= 6)
          ? 'Coppia di 6 contro dealer debole: split standard.'
          : 'Coppia di 6 contro dealer forte: di solito si continua con hit.'
      };
    }
    if (pairRank === '5') {
      return {
        action: (dealer >= 2 && dealer <= 9) ? 'Double se consentito, altrimenti Hit' : 'Hit',
        tone: 'good',
        reason: 'Una coppia di 5 si gioca come hard 10: meglio double contro molte carte del dealer, non split.'
      };
    }
    if (pairRank === '4') {
      return {
        action: (dealer === 5 || dealer === 6) ? 'Split' : 'Hit',
        tone: 'review',
        reason: (dealer === 5 || dealer === 6)
          ? 'Coppia di 4: split solo contro dealer 5 o 6 nella basic strategy classica.'
          : 'Fuori da quei casi, meglio hit.'
      };
    }
    if (pairRank === '3' || pairRank === '2') {
      return {
        action: (dealer >= 2 && dealer <= 7) ? 'Split' : 'Hit',
        tone: 'review',
        reason: (dealer >= 2 && dealer <= 7)
          ? 'Con coppia bassa contro dealer 2-7, lo split è spesso corretto.'
          : 'Contro carte forti del dealer, la basic strategy tende a hit.'
      };
    }
  }

  if (soft) {
    if (total >= 19) {
      return {
        action: 'Stand',
        tone: 'good',
        reason: 'Soft 19 o più è già una mano forte: la scelta standard è stand.'
      };
    }
    if (total === 18) {
      if (dealer >= 3 && dealer <= 6) {
        return {
          action: 'Double se consentito, altrimenti Stand',
          tone: 'good',
          reason: 'Soft 18 contro dealer 3-6 è un classico spot di double.'
        };
      }
      if (dealer === 2 || dealer === 7 || dealer === 8) {
        return {
          action: 'Stand',
          tone: 'good',
          reason: 'Soft 18 contro 2, 7 o 8 si gioca in stand nella basic strategy.'
        };
      }
      return {
        action: 'Hit',
        tone: 'review',
        reason: 'Soft 18 contro 9, 10 o Asso spesso richiede hit per non restare troppo indietro.'
      };
    }
    if (total === 17) {
      return {
        action: (dealer >= 3 && dealer <= 6) ? 'Double se consentito, altrimenti Hit' : 'Hit',
        tone: 'review',
        reason: (dealer >= 3 && dealer <= 6)
          ? 'Soft 17 contro dealer 3-6 è uno spot tipico da double.'
          : 'Fuori da quel range, soft 17 si gioca normalmente hit.'
      };
    }
    if (total === 15 || total === 16) {
      return {
        action: (dealer >= 4 && dealer <= 6) ? 'Double se consentito, altrimenti Hit' : 'Hit',
        tone: 'review',
        reason: 'Soft 15-16 cerca valore con double contro dealer 4-6; altrimenti hit.'
      };
    }
    if (total === 13 || total === 14) {
      return {
        action: (dealer === 5 || dealer === 6) ? 'Double se consentito, altrimenti Hit' : 'Hit',
        tone: 'review',
        reason: 'Soft 13-14 double solo contro 5 o 6; negli altri casi si prosegue con hit.'
      };
    }
  }

  if (total >= 17) {
    return {
      action: 'Stand',
      tone: 'good',
      reason: 'Con hard 17 o più, la basic strategy preferisce stand.'
    };
  }
  if (total >= 13 && total <= 16) {
    return {
      action: (dealer >= 2 && dealer <= 6) ? 'Stand' : 'Hit',
      tone: (dealer >= 2 && dealer <= 6) ? 'good' : 'review',
      reason: (dealer >= 2 && dealer <= 6)
        ? 'Hard 13-16 contro dealer debole: stand standard.'
        : 'Hard 13-16 contro 7, 8, 9, 10 o Asso: la basic strategy tende a hit.'
    };
  }
  if (total === 12) {
    return {
      action: (dealer >= 4 && dealer <= 6) ? 'Stand' : 'Hit',
      tone: 'review',
      reason: (dealer >= 4 && dealer <= 6)
        ? 'Hard 12 contro 4-6 si ferma.'
        : 'Contro altre carte del dealer, hard 12 si gioca normalmente hit.'
    };
  }
  if (total === 11) {
    return {
      action: 'Double se consentito, altrimenti Hit',
      tone: 'good',
      reason: 'Hard 11 è uno degli spot migliori per raddoppiare.'
    };
  }
  if (total === 10) {
    return {
      action: (dealer <= 9) ? 'Double se consentito, altrimenti Hit' : 'Hit',
      tone: 'good',
      reason: (dealer <= 9)
        ? 'Hard 10 contro dealer 2-9: spesso double.'
        : 'Contro 10 o Asso del dealer, meglio hit.'
    };
  }
  if (total === 9) {
    return {
      action: (dealer >= 3 && dealer <= 6) ? 'Double se consentito, altrimenti Hit' : 'Hit',
      tone: 'review',
      reason: (dealer >= 3 && dealer <= 6)
        ? 'Hard 9 contro 3-6 è uno spot frequente di double.'
        : 'Fuori da quel range, la basic strategy gioca hit.'
    };
  }

  return {
    action: 'Hit',
    tone: 'review',
    reason: 'Con totale basso, la scelta standard è hit.'
  };
}
