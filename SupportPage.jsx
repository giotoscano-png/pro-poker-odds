import React from 'react';
import { GraduationCap, Calculator, Target, AlertTriangle, ShieldCheck, Brain } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const sections = [
  { icon: Calculator, title: 'learnEquityTitle', text: 'learnEquityText' },
  { icon: Target, title: 'learnOutsTitle', text: 'learnOutsText' },
  { icon: Calculator, title: 'learnPotTitle', text: 'learnPotText' },
  { icon: AlertTriangle, title: 'learnRiverTitle', text: 'learnRiverText' },
  { icon: Brain, title: 'learnVarianceTitle', text: 'learnVarianceText' },
  { icon: ShieldCheck, title: 'learnBjTitle', text: 'learnBjText' },
];

export default function StrategyPage() {
  const { t } = useLanguage();
  return (
    <section className="page-card">
      <div className="section-header"><div><span className="eyebrow"><GraduationCap size={14} /> {t('strategyEyebrow')}</span><h2>{t('strategyTitle')}</h2><p>{t('strategyText')}</p></div></div>
      <div className="article-list">{sections.map(({ icon: Icon, title, text }) => (<article key={title} className="article-card"><div className="feature-icon"><Icon size={20} /></div><div><h3>{t(title)}</h3><p>{t(text)}</p></div></article>))}</div>
    </section>
  );
}
