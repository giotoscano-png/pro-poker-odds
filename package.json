import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../../i18n.jsx';

const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUIT_SYMBOLS = ['♠', '♥', '♦', '♣'];

export default function CardDisplay({ card, onRemove, size = 'md', placeholder }) {
  const { t } = useLanguage();
  const sizeClass = size === 'lg' ? 'playing-card lg' : size === 'sm' ? 'playing-card sm' : 'playing-card';
  const suitClass = card ? ['black-suit', 'red-suit', 'blue-suit', 'green-suit'][card.suit] : '';
  const rankLabel = card ? RANKS[card.rank] : '?';
  const suitLabel = card ? SUIT_SYMBOLS[card.suit] : '';

  if (!card) {
    return (
      <div className={`${sizeClass} placeholder-card poker-card`}>
        <span>{placeholder || '?'}</span>
      </div>
    );
  }

  return (
    <motion.button
      type="button"
      initial={{ scale: 0, rotateY: 180 }}
      animate={{ scale: 1, rotateY: 0 }}
      exit={{ scale: 0, rotateY: 180 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${sizeClass} real-card poker-card`}
      onClick={onRemove}
      title={t('removeCard')}
    >
      <CornerIndex rank={rankLabel} suit={suitLabel} suitClass={suitClass} />
      <div className="poker-card-center">
        <CardCenter rank={rankLabel} suit={suitLabel} suitClass={suitClass} />
      </div>
      <div className="corner-index bottom-right">
        <span className={`corner-rank ${suitClass}`}>{rankLabel}</span>
        <span className={`corner-suit ${suitClass}`}>{suitLabel}</span>
      </div>
      {onRemove && (
        <span className="remove-card">
          <X size={12} />
        </span>
      )}
    </motion.button>
  );
}

function CornerIndex({ rank, suit, suitClass }) {
  return (
    <div className="corner-index top-left">
      <span className={`corner-rank ${suitClass}`}>{rank}</span>
      <span className={`corner-suit ${suitClass}`}>{suit}</span>
    </div>
  );
}

function CardCenter({ rank, suit, suitClass }) {
  if (rank === 'A') {
    return (
      <div className="ace-center">
        <span className={`ace-suit ${suitClass}`}>{suit}</span>
      </div>
    );
  }

  if (['J', 'Q', 'K'].includes(rank)) {
    const label = rank === 'J' ? 'JACK' : rank === 'Q' ? 'QUEEN' : 'KING';
    return (
      <div className={`face-illustration ${suitClass}`}>
        <div className="face-crown">{rank === 'J' ? '♞' : rank === 'Q' ? '◆' : '♛'}</div>
        <div className="face-letter">{rank}</div>
        <div className="face-label">{label}</div>
        <span className="face-suit-premium">{suit}</span>
      </div>
    );
  }

  const pipCount = Number(rank);
  const pattern = getPipPattern(pipCount);

  return (
    <div className="pip-layout">
      {pattern.map((row, idx) => (
        <div key={idx} className={`pip-row cols-${row}`}>
          {Array.from({ length: row }).map((_, i) => (
            <span key={i} className={`pip ${suitClass}`}>{suit}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function getPipPattern(value) {
  const patterns = {
    2: [1, 1],
    3: [1, 1, 1],
    4: [2, 2],
    5: [2, 1, 2],
    6: [2, 2, 2],
    7: [2, 2, 1, 2],
    8: [2, 2, 2, 2],
    9: [2, 2, 1, 2, 2],
    10: [2, 2, 2, 2, 2],
  };
  return patterns[value] || [1];
}
