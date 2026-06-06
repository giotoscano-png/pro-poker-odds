import React, { useState } from 'react';
import { Spade, BadgeInfo } from 'lucide-react';
import PokerCalculator from './pages/PokerCalculator.jsx';
import BlackjackTrainer from './pages/BlackjackTrainer.jsx';

export default function App() {
  const [page, setPage] = useState('poker');

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <Spade size={18} />
          </div>
          <div>
            <h1>PRO Poker Odds</h1>
            <p>Texas Hold'em odds calculator</p>
          </div>
        </div>

        <nav className="topnav">
          <button className={page === 'poker' ? 'nav-active' : ''} onClick={() => setPage('poker')}>
            Poker
          </button>
          <button className={page === 'blackjack' ? 'nav-active' : ''} onClick={() => setPage('blackjack')}>
            Blackjack
          </button>
        </nav>
      </header>

      <main>
        {page === 'poker' ? <PokerCalculator /> : <BlackjackTrainer />}
      </main>

      <footer className="footer-note">
        <BadgeInfo size={14} />
        <span>Solo uso educativo. Nessun gioco con denaro reale. Nessuna garanzia di vincita.</span>
      </footer>
    </div>
  );
}
