import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUIT_SYMBOLS = ['♠', '♥', '♦', '♣'];

export default function CardDisplay({ card, onRemove, size = 'md', placeholder }) {
  const sizeClass = size === 'lg' ? 'playing-card lg' : size === 'sm' ? 'playing-card sm' : 'playing-card';
  const suitColor = card ? ['black-suit', 'red-suit', 'blue-suit', 'green-suit'][card.suit] : '';

  if (!card) {
    return (
      <div className={`${sizeClass} placeholder-card`}>
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
      className={`${sizeClass} real-card`}
      onClick={onRemove}
      title="Rimuovi carta"
    >
      <span className={`rank ${suitColor}`}>{RANKS[card.rank]}</span>
      <span className={`suit ${suitColor}`}>{SUIT_SYMBOLS[card.suit]}</span>
      {onRemove && (
        <span className="remove-card">
          <X size={12} />
        </span>
      )}
    </motion.button>
  );
}
