import React from 'react';
import { Heart } from 'lucide-react';
import { isPaypalConfigured, SUPPORT_AMOUNT_EUR, supportAndStartDownload, startDesktopDownload } from '../config/payment.js';
import { useLanguage } from '../i18n.jsx';

export default function SupportButton({ compact = false }) {
  const { t } = useLanguage();
  const configured = isPaypalConfigured();

  const handleClick = () => {
    if (!configured) {
      startDesktopDownload();
      alert(t('notifyPaypal'));
      return;
    }

    supportAndStartDownload();
  };

  return (
    <button className={compact ? 'support-button compact' : 'support-button'} onClick={handleClick}>
      <Heart size={compact ? 14 : 17} />
      {compact ? t('supportCompact', { amount: SUPPORT_AMOUNT_EUR }) : t('supportButton', { amount: SUPPORT_AMOUNT_EUR })}
    </button>
  );
}
