import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useLanguage } from '../../i18n.jsx';

export default function PlayerSelector({ value, onChange }) {
  const { t } = useLanguage();

  return (
    <div className="player-selector">
      <div className="panel-title">
        <Users size={16} />
        <span>{t('playersTotal')}</span>
      </div>

      <div className="player-buttons">
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.9 }}
            onClick={() => onChange(num)}
            className={value === num ? 'player active' : 'player'}
          >
            {num}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
