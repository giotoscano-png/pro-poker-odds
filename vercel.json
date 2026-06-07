import React from 'react';
import { motion } from 'framer-motion';
import { Target, Info } from 'lucide-react';
import { useLanguage } from '../../i18n.jsx';

const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUIT_SYMBOLS = ['♠', '♥', '♦', '♣'];

export default function OutsAnalysis({ analysis }) {
  const { t } = useLanguage();
  if (!analysis) {
    return (
      <div className="empty-state">
        <Info size={18} />
        {t('outsAfterFlop')}
      </div>
    );
  }

  const { totalOuts, outs, drawDetails, stage, turnPct, riverPct } = analysis;

  return (
    <div className="outs-stack">
      {drawDetails.length > 0 && (
        <div>
          <p className="tiny-title">{t('ongoingDraws')}</p>
          <div className="badges">
            {drawDetails.map((draw, i) => (
              <motion.div
                key={draw.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className={`draw-badge ${draw.color}`}
              >
                <span>{draw.icon}</span>
                <span>{draw.name}</span>
                <strong>{draw.outs} outs</strong>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="outs-grid">
        <div className="outs-total">
          <div>
            <Target size={15} />
            <span>{t('totalOuts')}</span>
          </div>
          <strong>{totalOuts}</strong>
          <small>{t('cardsImprove')}</small>
        </div>

        <div className="outs-probs">
          {turnPct !== null && (
            <ProbabilityMini label={t('toTurn')} value={turnPct} />
          )}
          <ProbabilityMini label={stage === 'flop' ? t('turnRiver') : t('toRiver')} value={riverPct} />
        </div>
      </div>

      {outs.length > 0 && (
        <div>
          <p className="tiny-title">{t('improvingCards')}</p>
          <div className="outs-cards">
            {outs.map((card, i) => {
              const suitClass = ['black-suit', 'red-suit', 'blue-suit', 'green-suit'][card.suit];
              return (
                <motion.div
                  key={`${card.rank}-${card.suit}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.01 }}
                  className="mini-card"
                >
                  <span className={suitClass}>{RANKS[card.rank]}</span>
                  <span className={suitClass}>{SUIT_SYMBOLS[card.suit]}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {totalOuts === 0 && (
        <div className="empty-state compact">
          <Info size={16} />
          {t('noOuts')}
        </div>
      )}
    </div>
  );
}

function ProbabilityMini({ label, value }) {
  const pct = Math.min(parseFloat(value), 100);
  return (
    <div className="prob-mini">
      <div>
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="bar-track small">
        <motion.div className="bar-fill" animate={{ width: `${pct}%` }} transition={{ duration: 0.65 }} />
      </div>
    </div>
  );
}
