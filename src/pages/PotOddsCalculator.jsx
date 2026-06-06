import React, { useMemo, useState } from 'react';
import { Calculator, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function PotOddsCalculator({ setPage }) {
  const { t } = useLanguage();
  const [pot, setPot] = useState(50);
  const [call, setCall] = useState(10);
  const [equity, setEquity] = useState(25);
  const [outs, setOuts] = useState(9);
  const [street, setStreet] = useState('flop');
  const data = useMemo(() => {
    const potNum = Number(pot) || 0;
    const callNum = Number(call) || 0;
    const equityNum = Number(equity) || 0;
    const finalPot = potNum + callNum;
    const requiredEquity = finalPot > 0 ? (callNum / finalPot) * 100 : 0;
    const profitable = equityNum >= requiredEquity;
    const ev = (equityNum / 100) * finalPot - callNum;
    const outsNum = Number(outs) || 0;
    const outsPct = street === 'flop' ? (1 - ((47 - outsNum) / 47) * ((46 - outsNum) / 46)) * 100 : (outsNum / 46) * 100;
    return { requiredEquity, profitable, ev, outsPct };
  }, [pot, call, equity, outs, street]);
  return (
    <section className="page-card">
      <div className="section-header"><div><span className="eyebrow"><Calculator size={14} /> {t('potEyebrow')}</span><h2>{t('potTitle')}</h2><p>{t('potText')}</p></div></div>
      <div className="tool-grid">
        <div className="panel form-panel">
          <label>{t('currentPot')}<input type="number" min="0" value={pot} onChange={(e) => setPot(e.target.value)} /></label>
          <label>{t('amountToCall')}<input type="number" min="0" value={call} onChange={(e) => setCall(e.target.value)} /></label>
          <label>{t('estimatedEquity')}<input type="number" min="0" max="100" value={equity} onChange={(e) => setEquity(e.target.value)} /><small className="field-help">{t('equityHelp')}{setPage && <button type="button" className="inline-link-button" onClick={() => setPage('poker')}>{t('openPokerOdds')}</button>}</small></label>
          <div className="mini-divider" />
          <label>{t('outsEstimate')}<input type="number" min="0" max="20" value={outs} onChange={(e) => setOuts(e.target.value)} /></label>
          <label>{t('street')}<select value={street} onChange={(e) => setStreet(e.target.value)}><option value="flop">{t('flopTwo')}</option><option value="turn">{t('turnOne')}</option></select></label>
        </div>
        <div className="panel result-panel">
          <div className={data.profitable ? 'verdict good' : 'verdict bad'}>{data.profitable ? <CheckCircle2 size={26} /> : <XCircle size={26} />}<div><span>{data.profitable ? t('mathOk') : t('notProfitable')}</span><strong>{data.profitable ? t('callMakesSense') : t('callExpensive')}</strong></div></div>
          <div className="metric-list"><Metric label={t('requiredEquity')} value={`${data.requiredEquity.toFixed(1)}%`} /><Metric label={t('yourEquity')} value={`${Number(equity || 0).toFixed(1)}%`} /><Metric label={t('estimatedEv')} value={`${data.ev >= 0 ? '+' : ''}${data.ev.toFixed(2)}`} /><Metric label={t('outsProbability')} value={`${data.outsPct.toFixed(1)}%`} /></div>
          <div className="explain-box"><HelpCircle size={18} /><p>{t('potExplain')}</p></div>
        </div>
      </div>
    </section>
  );
}
function Metric({ label, value }) { return <div className="metric-row"><span>{label}</span><strong>{value}</strong></div>; }
