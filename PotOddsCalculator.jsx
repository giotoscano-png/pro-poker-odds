import React, { useState } from 'react';
import { ShieldCheck, HelpCircle } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function BlackjackTrainer() {
  const { t } = useLanguage();
  const [total, setTotal] = useState(16);
  const [dealer, setDealer] = useState(10);
  const [soft, setSoft] = useState(false);
  const [pair, setPair] = useState(false);

  const advice = getBlackjackAdvice(Number(total), Number(dealer), soft, pair);

  return (
    <section className="page-card">
      <div className="section-header">
        <div>
          <span className="eyebrow"><ShieldCheck size={14} /> {t('bjEyebrow')}</span>
          <h2>{t('bjTitle')}</h2>
          <p>{t('bjText')}</p>
        </div>
      </div>

      <div className="tool-grid">
        <div className="panel form-panel">
          <label>
            {t('playerTotal')}
            <input type="number" min="4" max="21" value={total} onChange={(e) => setTotal(e.target.value)} />
          </label>

          <label>
            {t('dealerCard')}
            <select value={dealer} onChange={(e) => setDealer(e.target.value)}>
              {[2, 3, 4, 5, 6, 7, 8, 9].map(n => <option key={n} value={n}>{n}</option>)}
              <option value="10">10 / J / Q / K</option>
              <option value="11">A</option>
            </select>
          </label>

          <label className="checkbox-line">
            <input type="checkbox" checked={soft} onChange={(e) => setSoft(e.target.checked)} />
            {t('softHand')}
          </label>

          <label className="checkbox-line">
            <input type="checkbox" checked={pair} onChange={(e) => setPair(e.target.checked)} />
            {t('pairHand')}
          </label>
        </div>

        <div className="panel result-panel">
          <div className="verdict neutral">
            <ShieldCheck size={26} />
            <div>
              <span>{t('suggestedMove')}</span>
              <strong>{advice}</strong>
            </div>
          </div>

          <div className="explain-box">
            <HelpCircle size={18} />
            <p>{t('bjExplain')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function getBlackjackAdvice(total, dealer, soft, pair) {
  if (pair) {
    if ([8, 11].includes(total / 2)) return 'Split';
    if (total === 20) return 'Stand';
    if (total === 18) return dealer === 7 || dealer >= 10 ? 'Stand' : 'Split';
    if (total === 14) return dealer >= 2 && dealer <= 7 ? 'Split' : 'Hit';
    if (total === 12) return dealer >= 2 && dealer <= 6 ? 'Split' : 'Hit';
    if (total === 10) return dealer >= 2 && dealer <= 9 ? 'Double se consentito, altrimenti Hit' : 'Hit';
  }

  if (soft) {
    if (total >= 19) return 'Stand';
    if (total === 18) {
      if (dealer >= 3 && dealer <= 6) return 'Double se consentito, altrimenti Stand';
      if (dealer === 2 || dealer === 7 || dealer === 8) return 'Stand';
      return 'Hit';
    }
    if (total === 17) return dealer >= 3 && dealer <= 6 ? 'Double se consentito, altrimenti Hit' : 'Hit';
    if (total === 15 || total === 16) return dealer >= 4 && dealer <= 6 ? 'Double se consentito, altrimenti Hit' : 'Hit';
    if (total === 13 || total === 14) return dealer === 5 || dealer === 6 ? 'Double se consentito, altrimenti Hit' : 'Hit';
  }

  if (total >= 17) return 'Stand';
  if (total >= 13 && total <= 16) return dealer >= 2 && dealer <= 6 ? 'Stand' : 'Hit';
  if (total === 12) return dealer >= 4 && dealer <= 6 ? 'Stand' : 'Hit';
  if (total === 11) return 'Double se consentito, altrimenti Hit';
  if (total === 10) return dealer <= 9 ? 'Double se consentito, altrimenti Hit' : 'Hit';
  if (total === 9) return dealer >= 3 && dealer <= 6 ? 'Double se consentito, altrimenti Hit' : 'Hit';
  return 'Hit';
}
