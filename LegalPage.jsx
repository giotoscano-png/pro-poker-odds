import React from 'react';
import { BookOpen, AlertTriangle, Target, Calculator, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function GuidesPage() {
  const { t } = useLanguage();

  const guides = [
    { icon: Calculator, title: t('g1Title'), body: t('g1Body') },
    { icon: Target, title: t('g2Title'), body: t('g2Body') },
    { icon: Calculator, title: t('g3Title'), body: t('g3Body') },
    { icon: AlertTriangle, title: t('g4Title'), body: t('g4Body') },
    { icon: ShieldCheck, title: t('g5Title'), body: t('g5Body') },
  ];

  return (
    <section className="page-card">
      <div className="section-header">
        <div>
          <span className="eyebrow"><BookOpen size={14} /> {t('guidesEyebrow')}</span>
          <h2>{t('guidesTitle')}</h2>
          <p>{t('guidesText')}</p>
        </div>
      </div>

      <div className="article-list">
        {guides.map(({ icon: Icon, title, body }) => (
          <article key={title} className="article-card">
            <div className="feature-icon"><Icon size={20} /></div>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="monetization-ready">
        <h3>{t('nextContent')}</h3>
        <p>{t('nextContentText')}</p>
      </div>
    </section>
  );
}
