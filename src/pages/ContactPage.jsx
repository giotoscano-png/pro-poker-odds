import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <section className="page-card">
      <div className="section-header"><div><span className="eyebrow"><MessageSquare size={14} /> {t('contactEyebrow')}</span><h2>{t('contactTitle')}</h2></div></div>
      <div className="panel contact-placeholder">
        <label>{t('emailContact')}<input type="text" value="" readOnly placeholder="" aria-label={t('emailContact')} /></label>
        <label>{t('message')}<textarea value="" readOnly placeholder="" aria-label={t('message')} /></label>
      </div>
    </section>
  );
}
