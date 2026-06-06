import React from 'react';
import { MonitorDown, FileText, Brain, TrendingUp, Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function DesktopPage({ setPage }) {
  const { t } = useLanguage();

  return (
    <section className="page-card">
      <div className="desktop-hero">
        <span className="eyebrow"><MonitorDown size={14} /> {t('desktopEyebrow')}</span>
        <h2>{t('desktopTitle')}</h2>
        <p>{t('desktopText')}</p>
        <button className="primary-action" onClick={() => setPage('tester')}>
          {t('desktopCta')} <ArrowRight size={18} />
        </button>
      </div>

      <div className="roadmap-grid">
        <Roadmap icon={FileText} title={t('r1Title')} text={t('r1Text')} />
        <Roadmap icon={Brain} title={t('r2Title')} text={t('r2Text')} />
        <Roadmap icon={TrendingUp} title={t('r3Title')} text={t('r3Text')} />
        <Roadmap icon={Lock} title={t('r4Title')} text={t('r4Text')} />
      </div>

      <div className="pricing-preview">
        <h3>{t('pricingLater')}</h3>
        <div className="price-cards">
          <div>
            <span>{t('freeWeb')}</span>
            <strong>€0</strong>
            <p>{t('freeWebText')}</p>
          </div>
          <div>
            <span>{t('desktopBasic')}</span>
            <strong>€19.99</strong>
            <p>{t('desktopBasicText')}</p>
          </div>
          <div>
            <span>{t('desktopPro')}</span>
            <strong>€39.99</strong>
            <p>{t('desktopProText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap({ icon: Icon, title, text }) {
  return (
    <article className="feature-card">
      <div className="feature-icon"><Icon size={20} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
