import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Plus, Zap, Target, Info, Spade } from 'lucide-react';
import CardDisplay from '../components/poker/CardDisplay.jsx';
import CardSelector from '../components/poker/CardSelector.jsx';
import OddsDisplay from '../components/poker/OddsDisplay.jsx';
import OutsAnalysis from '../components/poker/OutsAnalysis.jsx';
import PlayerSelector from '../components/poker/PlayerSelector.jsx';
import { calculateOdds, analyzeOuts } from '../lib/pokerEngine.js';
import { useLanguage } from '../i18n.jsx';

export default function PokerCalculator() {
  const { t } = useLanguage();
  const [numPlayers, setNumPlayers] = useState(6);
  const [myHand, setMyHand] = useState([]);
  const [communityCards, setCommunityCards] = useState([]);
  const [odds, setOdds] = useState(null);
  const [outsAnalysis, setOutsAnalysis] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [selectorTarget, setSelectorTarget] = useState(null);
  const [activeTab, setActiveTab] = useState('odds');
  const calcTimeout = useRef(null);

  const allUsedCards = [...myHand, ...communityCards];

  const openSelector = (target) => {
    setSelectorTarget(target);
    setSelectorOpen(true);
  };

  const handleCardSelect = (card) => {
    if (selectorTarget === 'hand' && myHand.length < 2) {
      setMyHand(prev => [...prev, card]);
    }
    if (selectorTarget === 'community' && communityCards.length < 5) {
      setCommunityCards(prev => [...prev, card]);
    }
  };

  const resetAll = () => {
    setMyHand([]);
    setCommunityCards([]);
    setOdds(null);
    setOutsAnalysis(null);
    setActiveTab('odds');
  };

  const runCalculation = useCallback(() => {
    if (myHand.length !== 2) {
      setOdds(null);
      setOutsAnalysis(null);
      return;
    }

    setIsCalculating(true);

    if (calcTimeout.current) clearTimeout(calcTimeout.current);
    calcTimeout.current = setTimeout(() => {
      const result = calculateOdds(myHand, communityCards, numPlayers, 5000);
      setOdds(result);
      setOutsAnalysis(analyzeOuts(myHand, communityCards));
      setIsCalculating(false);
    }, 80);
  }, [myHand, communityCards, numPlayers]);

  useEffect(() => {
    runCalculation();
    return () => {
      if (calcTimeout.current) clearTimeout(calcTimeout.current);
    };
  }, [runCalculation]);

  const stage = communityCards.length === 0 ? t('preflopLabel')
    : communityCards.length <= 3 ? t('flopLabel')
    : communityCards.length === 4 ? t('turnLabel')
    : t('riverLabel');

  return (
    <section className="page-card">
      <div className="section-header">
        <div>
          <span className="eyebrow"><Spade size={14} /> {t('pokerEyebrow')}</span>
          <h2>{t('pokerTitle')}</h2>
          <p>{t('pokerText')}</p>
        </div>
        <button className="icon-button" onClick={resetAll} aria-label={t('resetLabel')}>
          <RotateCcw size={18} />
        </button>
      </div>

      <motion.div className="panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
        <PlayerSelector value={numPlayers} onChange={setNumPlayers} />
      </motion.div>

      <motion.div className="panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <div className="panel-title">
          <span className="dot dot-primary" />
          <span>{t('myCards')}</span>
        </div>

        <div className="card-row">
          {[0, 1].map(i => (
            myHand[i] ? (
              <CardDisplay key={i} card={myHand[i]} onRemove={() => setMyHand(prev => prev.filter((_, idx) => idx !== i))} size="lg" />
            ) : (
              <button key={i} className="empty-card large" onClick={() => openSelector('hand')}>
                <Plus size={22} />
              </button>
            )
          ))}
          {myHand.length < 2 && <span className="hint">{t('tapToAdd')}</span>}
        </div>
      </motion.div>

      <motion.div className="panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="panel-title">
          <span className="dot dot-accent" />
          <span>{t('communityCards')}</span>
        </div>

        <div className="card-row wrap">
          {communityCards.map((card, i) => (
            <CardDisplay key={`${card.rank}-${card.suit}-${i}`} card={card} onRemove={() => setCommunityCards(prev => prev.filter((_, idx) => idx !== i))} size="md" />
          ))}

          {communityCards.length < 5 && (
            <button className="empty-card medium" onClick={() => openSelector('community')}>
              <Plus size={18} />
            </button>
          )}
        </div>

        <div className="stage-row">
          {[t('preflopLabel'), t('flopLabel'), t('turnLabel'), t('riverLabel')].map(label => (
            <span key={label} className={label === stage ? 'stage active' : 'stage'}>
              {label}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div className="panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <div className="tabs">
          <button className={activeTab === 'odds' ? 'tab active' : 'tab'} onClick={() => setActiveTab('odds')}>
            <Zap size={15} /> {t('odds')} {isCalculating ? '...' : ''}
          </button>
          <button className={activeTab === 'outs' ? 'tab active' : 'tab'} onClick={() => setActiveTab('outs')}>
            <Target size={15} /> {t('outs')} {outsAnalysis ? `(${outsAnalysis.totalOuts})` : ''}
          </button>
        </div>

        {activeTab === 'odds' ? (
          myHand.length < 2 ? (
            <div className="empty-state">
              <Info size={18} />
              {t('insertCards')}
            </div>
          ) : (
            <OddsDisplay odds={odds} isCalculating={isCalculating} />
          )
        ) : (
          <OutsAnalysis analysis={myHand.length === 2 ? outsAnalysis : null} />
        )}
      </motion.div>

      <p className="microcopy">
        {t('microcopy', { iterations: odds?.iterations || 5000 })}
      </p>

      <CardSelector
        open={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        onSelect={handleCardSelect}
        usedCards={allUsedCards}
      />
    </section>
  );
}
