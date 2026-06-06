import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Minus, TrendingDown, Trophy } from 'lucide-react';
import { useLanguage } from '../../i18n.jsx';

export default function OddsDisplay({ odds, isCalculating }) {
  const { t } = useLanguage();
  if (!odds && !isCalculating) return null;

  return (
    <div className="odds-stack">
      {odds?.currentHandName && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="current-hand">
          <Trophy size={16} />
          <span>{odds.currentHandName}</span>
        </motion.div>
      )}

      <OddsBar label={t('win')} value={odds?.win || 0} tone="win" icon={<TrendingUp size={16} />} isCalculating={isCalculating} />
      <OddsBar label={t('tie')} value={odds?.tie || 0} tone="tie" icon={<Minus size={16} />} isCalculating={isCalculating} />
      <OddsBar label={t('loss')} value={odds?.lose || 0} tone="loss" icon={<TrendingDown size={16} />} isCalculating={isCalculating} />
    </div>
  );
}

function OddsBar({ label, value, tone, icon, isCalculating }) {
  const numValue = parseFloat(value) || 0;

  return (
    <div className={`odds-bar ${tone}`}>
      <div className="odds-line">
        <div className="odds-label">
          {icon}
          <span>{label}</span>
        </div>
        <motion.strong key={value} initial={{ scale: 1.25, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          {isCalculating ? '...' : `${Number(value || 0).toFixed(1)}%`}
        </motion.strong>
      </div>
      <div className="bar-track">
        <motion.div
          className="bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${numValue}%` }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
