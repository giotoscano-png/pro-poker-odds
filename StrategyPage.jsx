import React from 'react';
import { Brain, ShieldCheck, MonitorDown, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function AboutPage() {
  const { t } = useLanguage();
  const items = [
    { icon: Brain, title: 'homeTrust1', text: 'aboutText' },
    { icon: ShieldCheck, title: 'homeTrust2', text: 'footerText' },
    { icon: MonitorDown, title: 'desktopTitle', text: 'desktopText' },
    { icon: BookOpen, title: 'guidesTitle', text: 'guidesText' },
  ];
  return (<section className="page-card"><div className="section-header"><div><span className="eyebrow"><Brain size={14} /> {t('aboutEyebrow')}</span><h2>{t('aboutTitle')}</h2><p>{t('aboutText')}</p></div></div><div className="article-list">{items.map(({icon: Icon,title,text})=><article key={title} className="article-card"><div className="feature-icon"><Icon size={20}/></div><div><h3>{t(title)}</h3><p>{t(text)}</p></div></article>)}</div></section>);
}
