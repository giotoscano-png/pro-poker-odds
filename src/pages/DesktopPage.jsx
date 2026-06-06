import React from 'react';
import { MonitorDown, FileText, Brain, TrendingUp, Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function DesktopPage({ setPage }) {
  const { t } = useLanguage();
  const items = [
    { icon: FileText, title: 'importHandHistoryTitle', text: 'importHandHistoryText' },
    { icon: Brain, title: 'learnVarianceTitle', text: 'learnVarianceText' },
    { icon: TrendingUp, title: 'leakFinderTitle', text: 'leakFinderText' },
    { icon: Lock, title: 'navSupport', text: 'homeMonText' },
  ];
  return (
    <section className="page-card">
      <div className="desktop-hero"><span className="eyebrow"><MonitorDown size={14} /> {t('desktopEyebrow')}</span><h2>{t('desktopTitle')}</h2><p>{t('desktopText')}</p><button className="primary-action" onClick={() => setPage('tester')}>{t('tryDemo')} <ArrowRight size={18} /></button></div>
      <div className="roadmap-grid">{items.map(({icon: Icon,title,text})=><article key={title} className="feature-card"><div className="feature-icon"><Icon size={20}/></div><h3>{t(title)}</h3><p>{t(text)}</p></article>)}</div>
      <div className="pricing-preview">
        <h3>{t('futureModel')}</h3>
        <div className="price-cards clean-model two-cards">
          <div>
            <span>{t('futureOnlineTitle')}</span>
            <strong>{t('futureOnlineBadge')}</strong>
            <p>{t('futureOnlineText')}</p>
          </div>
          <div>
            <span>{t('futureDesktopTitle')}</span>
            <strong>{t('futureDesktopBadge')}</strong>
            <p>{t('futureDesktopText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
