import React from 'react';
import { Scale, Cookie, ShieldAlert, BadgeInfo } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function LegalPage() {
  const { t } = useLanguage();
  const items = [
    { icon: ShieldAlert, title: 'footerText', text: 'footerText' },
    { icon: Scale, title: 'homeTrust2', text: 'testerDisclaimer' },
    { icon: Cookie, title: 'legalTitle', text: 'legalText' },
    { icon: BadgeInfo, title: 'faq5q', text: 'faq5a' },
    { icon: BadgeInfo, title: 'voluntarySupport', text: 'voluntarySupportText' },
  ];
  return (<section className="page-card legal-page"><div className="section-header"><div><span className="eyebrow"><Scale size={14} /> {t('legalEyebrow')}</span><h2>{t('legalTitle')}</h2><p>{t('legalText')}</p></div></div><div className="article-list">{items.map(({icon:Icon,title,text})=><article key={title} className="article-card"><div className="feature-icon"><Icon size={20}/></div><div><h3>{t(title)}</h3><p>{t(text)}</p></div></article>)}</div></section>);
}
