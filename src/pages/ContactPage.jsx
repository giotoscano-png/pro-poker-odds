import React from 'react';
import { MessageSquare, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <section className="page-card contact-page">
      <div className="section-header">
        <div>
          <span className="eyebrow"><MessageSquare size={14} /> {t('contactEyebrow')}</span>
          <h2>{t('contactTitle')}</h2>
          <p>{t('contactText')}</p>
        </div>
      </div>

      <div className="contact-layout">
        <div className="panel contact-placeholder">
          <label>{t('emailContact')}<input type="text" value="" readOnly placeholder="" aria-label={t('emailContact')} /></label>
          <label>{t('message')}<textarea value="" readOnly placeholder="" aria-label={t('message')} /></label>
        </div>

        <aside className="contact-info-card">
          <div className="feature-icon"><ShieldCheck size={20} /></div>
          <h3>{t('contactInfoTitle')}</h3>
          <p>{t('contactInfoText')}</p>
        </aside>
      </div>
    </section>
  );
}
