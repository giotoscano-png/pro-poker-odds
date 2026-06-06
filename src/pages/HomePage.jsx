import React from 'react';
import { motion } from 'framer-motion';
import { Spade, Calculator, Target, ShieldCheck, MonitorDown, ArrowRight, BookOpen, Sparkles, Brain } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function HomePage({ setPage }) {
  const { t } = useLanguage();

  return (
    <section className="home-page">
      <div className="hero-section">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="hero-copy">
          <span className="eyebrow"><Sparkles size={14} /> Poker study tools</span>
          <h2>{t('homeTitle')}</h2>
          <p>{t('homeText')}</p>

          <div className="hero-actions">
            <button className="primary-action" onClick={() => setPage('tester')}>
              {t('homeOpenPoker')} <ArrowRight size={18} />
            </button>
            <button className="secondary-action" onClick={() => setPage('desktop')}>
              {t('homePcConcept')}
            </button>
          </div>

          <div className="trust-row">
            <span>✓ Analisi post-sessione</span>
            <span>✓ Nessuna assistenza live</span>
            <span>✓ Strumenti educativi</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} className="hero-panel">
          <div className="glass-card big-metric">
            <span>Decision review</span>
            <strong>3 spot</strong>
            <small>da rivedere nella sessione</small>
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
        <Feature icon={Brain} title="Analizza mani giocate" text="Carica una hand history e ricevi una review mano per mano: possibile errore, spot da rivedere o varianza." action="Apri demo" onClick={() => setPage('tester')} featured />
        <Feature icon={Spade} title={t('fPokerTitle')} text={t('fPokerText')} action={t('fPokerAction')} onClick={() => setPage('poker')} />
        <Feature icon={Calculator} title={t('fPotTitle')} text={t('fPotText')} action={t('fPotAction')} onClick={() => setPage('potodds')} />
        <Feature icon={Target} title={t('fOutsTitle')} text={t('fOutsText')} action={t('fOutsAction')} onClick={() => setPage('poker')} />
        <Feature icon={BookOpen} title={t('fGuidesTitle')} text={t('fGuidesText')} action={t('fGuidesAction')} onClick={() => setPage('guides')} />
        <Feature icon={MonitorDown} title={t('fDesktopTitle')} text={t('fDesktopText')} action="Roadmap" onClick={() => setPage('desktop')} />
      </div>

      <div className="monetization-ready">
        <h3>{t('homeMonTitle')}</h3>
        <p>{t('homeMonText')}</p>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, text, action, onClick, featured }) {
  return (
    <motion.article whileHover={{ y: -3 }} className={featured ? 'feature-card featured' : 'feature-card'}>
      <div className="feature-icon"><Icon size={20} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={onClick}>{action} <ArrowRight size={14} /></button>
    </motion.article>
  );
}
