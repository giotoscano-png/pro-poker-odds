import React from 'react';
import { Heart, ShieldCheck, BadgeInfo } from 'lucide-react';
import SupportButton from '../components/SupportButton.jsx';
import { isPaypalConfigured, getPaypalSupportUrl, SUPPORT_AMOUNT_EUR } from '../config/payment.js';
import { useLanguage } from '../i18n.jsx';

export default function SupportPage() {
  const { t } = useLanguage();
  const configured = isPaypalConfigured();
  return (<section className="page-card"><div className="support-hero"><span className="eyebrow"><Heart size={14} /> {t('supportEyebrow')}</span><h2>{t('supportTitle')}</h2><p>{t('supportText', { amount: SUPPORT_AMOUNT_EUR })}</p><SupportButton /></div><div className="article-list"><article className="article-card"><div className="feature-icon"><ShieldCheck size={20}/></div><div><h3>{t('paypalExternal')}</h3><p>{t('paypalExternalText')}</p></div></article><article className="article-card"><div className="feature-icon"><BadgeInfo size={20}/></div><div><h3>{t('voluntarySupport')}</h3><p>{t('voluntarySupportText')}</p></div></article>{!configured && <article className="article-card warning-card"><div className="feature-icon"><BadgeInfo size={20}/></div><div><h3>PayPal.Me</h3><p>{t('notifyPaypal')}</p><p className="muted-text">{getPaypalSupportUrl()}</p></div></article>}</div></section>);
}
