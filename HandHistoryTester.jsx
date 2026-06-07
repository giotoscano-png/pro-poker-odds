import React from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  History,
  ListChecks,
  Lock,
  MonitorDown,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useLanguage } from '../i18n.jsx';
import { supportAndStartDownload } from '../config/payment.js';

const leakTypes = [
  { icon: Target, title: 'lfLeak1Title', text: 'lfLeak1Text' },
  { icon: Activity, title: 'lfLeak2Title', text: 'lfLeak2Text' },
  { icon: BarChart3, title: 'lfLeak3Title', text: 'lfLeak3Text' },
  { icon: AlertTriangle, title: 'lfLeak4Title', text: 'lfLeak4Text' },
  { icon: Brain, title: 'lfLeak5Title', text: 'lfLeak5Text' },
  { icon: TrendingUp, title: 'lfLeak6Title', text: 'lfLeak6Text' },
];

const reportMetrics = [
  ['75', 'lfMetricHands'],
  ['14', 'lfMetricReview'],
  ['8', 'lfMetricErrors'],
  ['53', 'lfMetricVariance'],
];

const workflow = [
  { icon: FileText, title: 'lfStep1Title', text: 'lfStep1Text' },
  { icon: ListChecks, title: 'lfStep2Title', text: 'lfStep2Text' },
  { icon: History, title: 'lfStep3Title', text: 'lfStep3Text' },
  { icon: Download, title: 'lfStep4Title', text: 'lfStep4Text' },
];

export default function DesktopPage({ setPage }) {
  const { t } = useLanguage();

  const scrollToReport = () => {
    const element = document.getElementById('leak-report-preview');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="page-card leak-pro-page">
      <div className="leak-pro-hero">
        <div className="leak-pro-copy">
          <span className="eyebrow"><MonitorDown size={14} /> {t('lfEyebrow')}</span>
          <h2>{t('lfTitle')}</h2>
          <p>{t('lfSubtitle')}</p>

          <div className="leak-pro-actions">
            <button className="primary-action" onClick={() => setPage('tester')}>
              {t('lfPrimaryCta')} <ArrowRight size={18} />
            </button>
            <button className="secondary-action" type="button" onClick={scrollToReport}>
              {t('lfSecondaryCta')}
            </button>
          </div>

          <div className="leak-trust-row">
            <span><CheckCircle2 size={14} /> {t('lfTrust1')}</span>
            <span><CheckCircle2 size={14} /> {t('lfTrust2')}</span>
            <span><CheckCircle2 size={14} /> {t('lfTrust3')}</span>
          </div>
        </div>

        <div className="leak-pro-device" id="leak-report-preview">
          <div className="device-topline">
            <span><Zap size={14} /> {t('lfReportPreview')}</span>
            <strong>{t('lfBetaLabel')}</strong>
          </div>

          <div className="device-main-score">
            <span>{t('lfMainLeakLabel')}</span>
            <strong>{t('lfMainLeakValue')}</strong>
            <p>{t('lfMainLeakText')}</p>
          </div>

          <div className="device-metrics">
            {reportMetrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{t(label)}</span>
              </div>
            ))}
          </div>

          <div className="device-leak-list">
            <div className="risk-high"><AlertTriangle size={15} /> {t('lfReportRow1')}</div>
            <div className="risk-mid"><Clock3 size={15} /> {t('lfReportRow2')}</div>
            <div className="risk-good"><ShieldCheck size={15} /> {t('lfReportRow3')}</div>
          </div>
        </div>
      </div>

      <section className="leak-section">
        <div className="section-header compact">
          <div>
            <span className="eyebrow"><Brain size={14} /> {t('lfDetectEyebrow')}</span>
            <h2>{t('lfDetectTitle')}</h2>
            <p>{t('lfDetectText')}</p>
          </div>
        </div>

        <div className="leak-type-grid">
          {leakTypes.map(({ icon: Icon, title, text }) => (
            <article key={title} className="leak-type-card">
              <div className="feature-icon"><Icon size={20} /></div>
              <h3>{t(title)}</h3>
              <p>{t(text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leak-section">
        <div className="section-header compact">
          <div>
            <span className="eyebrow"><ListChecks size={14} /> {t('lfWorkflowEyebrow')}</span>
            <h2>{t('lfWorkflowTitle')}</h2>
            <p>{t('lfWorkflowText')}</p>
          </div>
        </div>

        <div className="leak-workflow">
          {workflow.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="workflow-step">
              <div className="workflow-number">{index + 1}</div>
              <div className="feature-icon"><Icon size={18} /></div>
              <h3>{t(title)}</h3>
              <p>{t(text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leak-section leak-premium-section">
        <div className="section-header compact">
          <div>
            <span className="eyebrow"><Download size={14} /> {t('lfPremiumEyebrow')}</span>
            <h2>{t('lfPremiumTitle')}</h2>
            <p>{t('lfPremiumText')}</p>
          </div>
        </div>

        <article className="leak-download-card">
          <div className="download-card-main">
            <div className="download-lock">
              <Lock size={28} />
            </div>
            <div>
              <span>{t('lfDownloadBadge')}</span>
              <h3>{t('lfDownloadTitle')}</h3>
              <p>{t('lfDownloadText')}</p>
            </div>
          </div>

          <div className="download-features">
            <div><CheckCircle2 size={15} /> {t('lfDownload1')}</div>
            <div><CheckCircle2 size={15} /> {t('lfDownload2')}</div>
            <div><CheckCircle2 size={15} /> {t('lfDownload3')}</div>
            <div><CheckCircle2 size={15} /> {t('lfDownload4')}</div>
          </div>

          <button className="download-locked-button" type="button" onClick={supportAndStartDownload}>
            <Download size={16} /> {t('lfDownloadButton')}
          </button>
        </article>
      </section>

      <div className="leak-disclaimer">
        <ShieldCheck size={18} />
        <p>{t('lfDisclaimer')}</p>
      </div>
    </section>
  );
}
