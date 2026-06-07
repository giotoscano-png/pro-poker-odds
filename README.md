import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../../i18n.jsx';

const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUIT_SYMBOLS = ['♠', '♥', '♦', '♣'];

export default function CardSelector({ open, onClose, onSelect, usedCards = [] }) {
  const [selectedSuit, setSelectedSuit] = useState(0);
  const { t } = useLanguage();
  const SUIT_LABELS = [t('spades'), t('hearts'), t('diamonds'), t('clubs')];

  if (!open) return null;

  const isUsed = (rank, suit) => usedCards.some(c => c.rank === rank && c.suit === suit);
  const suitClass = (suit) => ['black-suit', 'red-suit', 'blue-suit', 'green-suit'][suit];

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <motion.div
        className="modal-card"
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h3>{t('selectCard')}</h3>
          <button className="icon-button" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="suit-tabs">
          {[0, 1, 2, 3].map(suit => (
            <button
              key={suit}
              className={selectedSuit === suit ? 'suit-tab active' : 'suit-tab'}
              onClick={() => setSelectedSuit(suit)}
            >
              <span className={suitClass(suit)}>{SUIT_SYMBOLS[suit]}</span>
              <small>{SUIT_LABELS[suit]}</small>
            </button>
          ))}
        </div>

        <div className="selector-grid poker-grid">
          {RANKS.map((rankLabel, rankIdx) => {
            const used = isUsed(rankIdx, selectedSuit);
            const cls = suitClass(selectedSuit);
            const suit = SUIT_SYMBOLS[selectedSuit];
            return (
              <motion.button
                key={rankIdx}
                type="button"
                disabled={used}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: rankIdx * 0.015 }}
                className={used ? 'selector-card poker-selector-card disabled' : 'selector-card poker-selector-card'}
                onClick={() => {
                  onSelect({ rank: rankIdx, suit: selectedSuit });
                  onClose();
                }}
              >
                <div className="corner-index top-left compact">
                  <span className={`corner-rank ${cls}`}>{rankLabel}</span>
                  <span className={`corner-suit ${cls}`}>{suit}</span>
                </div>
                <div className="poker-card-center compact">
                  <MiniCardCenter rank={rankLabel} suit={suit} suitClass={cls} />
                </div>
                <div className="corner-index bottom-right compact">
                  <span className={`corner-rank ${cls}`}>{rankLabel}</span>
                  <span className={`corner-suit ${cls}`}>{suit}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

function MiniCardCenter({ rank, suit, suitClass }) {
  if (rank === 'A') return <span className={`ace-suit compact ${suitClass}`}>{suit}</span>;
  if (['J', 'Q', 'K'].includes(rank)) {
    return (
      <div className={`face-illustration mini ${suitClass}`}>
        <div className="face-crown">{rank === 'J' ? '♞' : rank === 'Q' ? '◆' : '♛'}</div>
        <div className="face-letter">{rank}</div>
      </div>
    );
  }
  return <span className={`mini-pip ${suitClass}`}>{suit}</span>;
}
