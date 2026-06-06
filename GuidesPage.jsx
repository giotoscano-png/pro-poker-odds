import React from 'react';
import { motion } from 'framer-motion';
import { Spade, Calculator, Target, ShieldCheck, MonitorDown, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function HomePage({ setPage }) {
  const { t } = useLanguage();

  return (
    <section className="home-page">
      <div className="hero-section">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="hero-copy">
          <span className="eyebrow"><Sparkles size={14} /> {t('homeEyebrow')}</span>
          <h2>{t('homeTitle')}</h2>
          <p>{t('homeText')}</p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => setPage('poker')}>
              {t('homeOpenPoker')} <ArrowRight size={18} />
            </button>
            <button className="secondary-action" onClick={() => setPage('desktop')}>
              {t('homePcConcept')}
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} className="hero-panel">
          <div className="glass-card big-metric">
            <span>{t('homeMetric')}</span>
            <strong>68.4%</strong>
            <small>{t('homeMetricSmall')}</small>
          </div>
          <div className="hero-cards">
            <div className="demo-card red">A♥</div>
            <div className="demo-card black">K♠</div>
            <div className="demo-card green">Q♣</div>
          </div>
          <div className="hero-note">
            <Target size={16} />
            <span>{t('homeNote')}</span>
          </div>
        </motion.div>
      </div>

      <div className="feature-grid">
        <Feature icon={Spade} title={t('fPokerTitle')} text={t('fPokerText')} action={t('fPokerAction')} onClick={() => setPage('poker')} />
        <Feature icon={Calculator} title={t('fPotTitle')} text={t('fPotText')} action={t('fPotAction')} onClick={() => setPage('potodds')} />
        <Feature icon={Target} title={t('fOutsTitle')} text={t('fOutsText')} action={t('fOutsAction')} onClick={() => setPage('poker')} />
        <Feature icon={ShieldCheck} title={t('fBjTitle')} text={t('fBjText')} action={t('fBjAction')} onClick={() => setPage('blackjack')} />
        <Feature icon={BookOpen} title={t('fGuidesTitle')} text={t('fGuidesText')} action={t('fGuidesAction')} onClick={() => setPage('guides')} />
        <Feature icon={MonitorDown} title={t('fDesktopTitle')} text={t('fDesktopText')} action={t('fDesktopAction')} onClick={() => setPage('desktop')} />
      </div>

      <div className="monetization-ready">
        <h3>{t('homeMonTitle')}</h3>
        <p>{t('homeMonText')}</p>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, text, action, onClick }) {
  return (
    <motion.article whileHover={{ y: -3 }} className="feature-card">
      <div className="feature-icon"><Icon size={20} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={onClick}>{action} <ArrowRight size={14} /></button>
    </motion.article>
  );
}
