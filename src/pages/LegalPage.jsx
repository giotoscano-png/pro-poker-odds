import React from 'react';
import { Scale, Cookie, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function LegalPage() {
  const { t } = useLanguage();

  return (
    <section className="page-card legal-page">
      <div className="section-header">
        <div>
          <span className="eyebrow"><Scale size={14} /> {t('legalEyebrow')}</span>
          <h2>{t('legalTitle')}</h2>
          <p>{t('legalText')}</p>
        </div>
      </div>

      <div className="article-list">
        <Card icon={ShieldAlert} title={t('legal1Title')} text={t('legal1Text')} />
        <Card icon={Scale} title={t('legal2Title')} text={t('legal2Text')} />
        <Card icon={Cookie} title={t('legal3Title')} text={t('legal3Text')} />
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, text }) {
  return (
    <article className="article-card">
      <div className="feature-icon"><Icon size={20} /></div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
