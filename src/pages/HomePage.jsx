import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spade, Calculator, MonitorDown, ArrowRight, BookOpen, Sparkles, Brain, GraduationCap, Activity } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const featuredHands = [
  { id: 'aa', badge: 'AA', titleKey: 'handAA', subKey: 'handAASub', noteKey: 'handAANote', streetKeys: ['handAAPre','handAAFlop','handAATurn','handAARiver'], hero: [{ rank:'A', suit:'♥', tone:'red' }, { rank:'A', suit:'♠', tone:'black' }], board: [{ rank:'K', suit:'♦', tone:'blue' }, { rank:'7', suit:'♣', tone:'green' }, { rank:'2', suit:'♥', tone:'red' }, { rank:'Q', suit:'♣', tone:'green' }, { rank:'9', suit:'♠', tone:'black' }], odds: [85.2,91.4,83.8,88.6] },
  { id: 'kqs', badge: 'KQs', titleKey: 'handKQ', subKey: 'handKQSub', noteKey: 'handKQNote', streetKeys: ['handKQPre','handKQFlop','handKQTurn','handKQRiver'], hero: [{ rank:'K', suit:'♣', tone:'green' }, { rank:'Q', suit:'♣', tone:'green' }], board: [{ rank:'J', suit:'♣', tone:'green' }, { rank:'8', suit:'♦', tone:'blue' }, { rank:'2', suit:'♣', tone:'green' }, { rank:'A', suit:'♠', tone:'black' }, { rank:'4', suit:'♥', tone:'red' }], odds: [48.6,72.3,79.8,82.1] },
  { id: 't9s', badge: 'T9s', titleKey: 'handT9', subKey: 'handT9Sub', noteKey: 'handT9Note', streetKeys: ['handT9Pre','handT9Flop','handT9Turn','handT9River'], hero: [{ rank:'10', suit:'♥', tone:'red' }, { rank:'9', suit:'♥', tone:'red' }], board: [{ rank:'J', suit:'♥', tone:'red' }, { rank:'8', suit:'♣', tone:'green' }, { rank:'2', suit:'♠', tone:'black' }, { rank:'Q', suit:'♦', tone:'blue' }, { rank:'A', suit:'♣', tone:'green' }], odds: [38.9,63.2,78.5,80.4] },
  { id: 'j10', badge: 'J10', titleKey: 'handJ10', subKey: 'handJ10Sub', noteKey: 'handJ10Note', streetKeys: ['handJ10Pre','handJ10Flop','handJ10Turn','handJ10River'], hero: [{ rank:'J', suit:'♠', tone:'black' }, { rank:'10', suit:'♦', tone:'blue' }], board: [{ rank:'Q', suit:'♥', tone:'red' }, { rank:'9', suit:'♣', tone:'green' }, { rank:'2', suit:'♦', tone:'blue' }, { rank:'K', suit:'♠', tone:'black' }, { rank:'4', suit:'♣', tone:'green' }], odds: [41.4,58.7,90.8,92.7] },
];

export default function HomePage({ setPage }) {
  const { t } = useLanguage();
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [streetIndex, setStreetIndex] = useState(0);
  const scenario = featuredHands[scenarioIndex];
  const streetLabels = [t('homePreflop'), t('homeFlop'), t('homeTurn'), t('homeRiver')];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStreetIndex((prev) => {
        if (prev < 3) return prev + 1;
        setScenarioIndex((current) => (current + 1) % featuredHands.length);
        return 0;
      });
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  const visibleBoard = useMemo(() => {
    if (streetIndex === 0) return [];
    if (streetIndex === 1) return scenario.board.slice(0, 3);
    if (streetIndex === 2) return scenario.board.slice(0, 4);
    return scenario.board.slice(0, 5);
  }, [scenario, streetIndex]);

  return (
    <section className="home-page">
      <div className="hero-section">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="hero-copy">
          <span className="eyebrow"><Sparkles size={14} /> {t('homeEyebrow')}</span>
          <h2>{t('homeTitle')}</h2>
          <p>{t('homeText')}</p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => setPage('tester')}>{t('homeAnalyze')} <ArrowRight size={18} /></button>
            <button className="secondary-action" onClick={() => setPage('poker')}>{t('homeCalculate')}</button>
            <button className="secondary-action support-secondary" onClick={() => setPage('support')}>{t('homeSupport')}</button>
          </div>
          <div className="trust-row"><span>✓ {t('homeTrust1')}</span><span>✓ {t('homeTrust2')}</span><span>✓ {t('homeTrust3')}</span></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} className="hero-panel hero-live-panel">
          <div className="glass-card big-metric pocket-aces-metric live-odds-card">
            <span><Activity size={14} /> {t('homeLiveLabel')} • {t(scenario.titleKey)}</span>
            <AnimatePresence mode="wait"><motion.strong key={`${scenario.id}-${streetIndex}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .24 }}>{scenario.odds[streetIndex].toFixed(1)}%</motion.strong></AnimatePresence>
            <small>{t(scenario.streetKeys[streetIndex])}</small>
          </div>
          <div className="hero-live-stage-row">{streetLabels.map((label, index) => <span key={label} className={index === streetIndex ? 'hero-stage-chip active' : 'hero-stage-chip'}>{label}</span>)}</div>
          <div className="hero-live-cards-block">
            <div className="hero-live-hand-block"><div className="hero-sub-label">{t('homeSpotlight')}</div><div className="hero-cards hero-live-hand-cards">{scenario.hero.map((card, idx) => <HeroLiveCard key={`${scenario.id}-hero-${idx}`} {...card} />)}</div></div>
            <div className="hero-live-board-block"><div className="hero-sub-label">{t('homeBoardLive')}</div><div className="hero-cards hero-live-board-cards">{Array.from({ length: 5 }).map((_, index) => { const card = visibleBoard[index]; return card ? <HeroLiveCard key={`${scenario.id}-board-${index}-${streetIndex}`} {...card} compact /> : <HeroLivePlaceholder key={`${scenario.id}-placeholder-${index}`} />; })}</div></div>
          </div>
          <div className="hero-note"><span className="hero-note-badge">{scenario.badge}</span><span><strong>{t(scenario.subKey)}:</strong> {t(scenario.noteKey)}</span></div>
        </motion.div>
      </div>

      <div className="feature-grid">
        <Feature icon={Brain} title={t('homeFeature1Title')} text={t('homeFeature1Text')} action={t('homeFeature1Action')} onClick={() => setPage('tester')} featured />
        <Feature icon={Spade} title={t('homeFeature2Title')} text={t('homeFeature2Text')} action={t('homeFeature2Action')} onClick={() => setPage('poker')} />
        <Feature icon={Calculator} title={t('homeFeature3Title')} text={t('homeFeature3Text')} action={t('homeFeature3Action')} onClick={() => setPage('potodds')} />
        <Feature icon={GraduationCap} title={t('homeFeature4Title')} text={t('homeFeature4Text')} action={t('homeFeature4Action')} onClick={() => setPage('strategy')} />
        <Feature icon={BookOpen} title={t('homeFeature5Title')} text={t('homeFeature5Text')} action={t('homeFeature5Action')} onClick={() => setPage('guides')} />
        <Feature icon={MonitorDown} title={t('homeFeature6Title')} text={t('homeFeature6Text')} action={t('homeFeature6Action')} onClick={() => setPage('desktop')} />
      </div>
      <div className="monetization-ready"><h3>{t('homeMonTitle')}</h3><p>{t('homeMonText')}</p></div>
    </section>
  );
}

function HeroLiveCard({ rank, suit, tone, compact = false }) { return (<motion.div layout className={`hero-ace-card hero-live-card ${compact ? 'compact' : ''} ${tone}`}><div className="hero-card-corner top"><span>{rank}</span><span>{suit}</span></div><div className="hero-card-center"><span>{suit}</span></div><div className="hero-card-corner bottom"><span>{rank}</span><span>{suit}</span></div></motion.div>); }
function HeroLivePlaceholder() { return <div className="hero-live-placeholder" aria-hidden="true">?</div>; }
function Feature({ icon: Icon, title, text, action, onClick, featured }) { return (<motion.article whileHover={{ y: -3 }} className={featured ? 'feature-card featured' : 'feature-card'}><div className="feature-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><button onClick={onClick}>{action} <ArrowRight size={14} /></button></motion.article>); }
