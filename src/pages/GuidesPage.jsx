import React from 'react';
import { BookOpen, AlertTriangle, Target, Calculator, ShieldCheck, Brain } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const guides = [
  { icon: Calculator, title: 'pokerTitle', body: 'pokerText' },
  { icon: Target, title: 'learnOutsTitle', body: 'learnOutsText' },
  { icon: Calculator, title: 'learnPotTitle', body: 'learnPotText' },
  { icon: AlertTriangle, title: 'learnRiverTitle', body: 'learnRiverText' },
  { icon: Brain, title: 'learnVarianceTitle', body: 'learnVarianceText' },
  { icon: ShieldCheck, title: 'learnBjTitle', body: 'learnBjText' },
];

export default function GuidesPage() {
  const { t } = useLanguage();
  return (
    <section className="page-card">
      <div className="section-header"><div><span className="eyebrow"><BookOpen size={14} /> {t('guidesEyebrow')}</span><h2>{t('guidesTitle')}</h2><p>{t('guidesText')}</p></div></div>
      <div className="article-list">{guides.map(({ icon: Icon, title, body }) => (<article key={title} className="article-card"><div className="feature-icon"><Icon size={20} /></div><div><h3>{t(title)}</h3><p>{t(body)}</p></div></article>))}</div>
      <div className="monetization-ready"><h3>{t('guideGoalTitle')}</h3><p>{t('guideGoalText')}</p></div>
    </section>
  );
}
