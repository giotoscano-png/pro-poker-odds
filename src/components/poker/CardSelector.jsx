import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUIT_SYMBOLS = ['♠', '♥', '♦', '♣'];
const SUIT_LABELS = ['Picche', 'Cuori', 'Quadri', 'Fiori'];

export default function CardSelector({ open, onClose, onSelect, usedCards = [] }) {
  const [selectedSuit, setSelectedSuit] = useState(0);

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
          <h3>Seleziona carta</h3>
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

        <div className="selector-grid">
          {RANKS.map((rankLabel, rankIdx) => {
            const used = isUsed(rankIdx, selectedSuit);
            return (
              <motion.button
                key={rankIdx}
                type="button"
                disabled={used}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: rankIdx * 0.015 }}
                className={used ? 'selector-card disabled' : 'selector-card'}
                onClick={() => {
                  onSelect({ rank: rankIdx, suit: selectedSuit });
                  onClose();
                }}
              >
                <span className={suitClass(selectedSuit)}>{rankLabel}</span>
                <span className={suitClass(selectedSuit)}>{SUIT_SYMBOLS[selectedSuit]}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
