import React from 'react';
import { BookOpen, AlertTriangle, Target, Calculator, ShieldCheck, Brain, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';
import { seoGuideList } from './SeoGuidePage.jsx';

const quickGuides = [
  { icon: Calculator, title: 'pokerTitle', body: 'pokerText' },
  { icon: Target, title: 'learnOutsTitle', body: 'learnOutsText' },
  { icon: Calculator, title: 'learnPotTitle', body: 'learnPotText' },
  { icon: AlertTriangle, title: 'learnRiverTitle', body: 'learnRiverText' },
  { icon: Brain, title: 'learnVarianceTitle', body: 'learnVarianceText' },
  { icon: ShieldCheck, title: 'learnBjTitle', body: 'learnBjText' },
];


export default function GuidesPage() {
  const { t, language } = useLanguage();
  const seoGuides = seoGuideList(language);

  return (
    <section className="page-card guides-hub-page">
      <div className="section-header">
        <div>
          <span className="eyebrow"><BookOpen size={14} /> {t('guidesEyebrow')}</span>
          <h2>{t('guidesTitle')}</h2>
          <p>{t('guidesText')}</p>
        </div>
      </div>

      <div className="seo-guides-grid">
        {seoGuides.map((guide) => (
          <article key={guide.key} className="seo-guide-card">
            <div className="seo-guide-card-top">
              <span>{guide.keywords?.[0]}</span>
            </div>
            <h3>{guide.title}</h3>
            <p>{guide.desc}</p>
            <a href={`#${guide.route}`} className="seo-guide-link">
              {t('readGuide')} <ArrowRight size={14} />
            </a>
          </article>
        ))}
      </div>

      <div className="guides-subsection">
        <h3>{t('quickConceptsTitle')}</h3>
        <div className="article-list">
          {quickGuides.map(({ icon: Icon, title, body }) => (
            <article key={title} className="article-card">
              <div className="feature-icon"><Icon size={20} /></div>
              <div><h3>{t(title)}</h3><p>{t(body)}</p></div>
            </article>
          ))}
        </div>
      </div>

      <div className="monetization-ready">
        <h3>{t('guideGoalTitle')}</h3>
        <p>{t('guideGoalText')}</p>
      </div>
    </section>
  );
}
