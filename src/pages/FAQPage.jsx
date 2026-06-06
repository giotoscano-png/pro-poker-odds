import React from 'react';
import { HelpCircle, ShieldAlert, Brain, MonitorDown, BadgeInfo } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const faqs = [
  { icon: Brain, q: 'faq1q', a: 'faq1a' },
  { icon: ShieldAlert, q: 'faq2q', a: 'faq2a' },
  { icon: Brain, q: 'faq3q', a: 'faq3a' },
  { icon: MonitorDown, q: 'faq4q', a: 'faq4a' },
  { icon: BadgeInfo, q: 'faq5q', a: 'faq5a' },
];

export default function FAQPage() {
  const { t } = useLanguage();
  return (
    <section className="page-card">
      <div className="section-header"><div><span className="eyebrow"><HelpCircle size={14} /> {t('faqEyebrow')}</span><h2>{t('faqTitle')}</h2><p>{t('faqText')}</p></div></div>
      <div className="article-list">{faqs.map(({ icon: Icon, q, a }) => (<article key={q} className="article-card"><div className="feature-icon"><Icon size={20} /></div><div><h3>{t(q)}</h3><p>{t(a)}</p></div></article>))}</div>
    </section>
  );
}
