import React, { useState } from 'react';
import { Spade, Calculator, ShieldCheck, BookOpen, MonitorDown, Home, Scale, BadgeInfo, Menu, X, Brain } from 'lucide-react';
import HomePage from './pages/HomePage.jsx';
import PokerCalculator from './pages/PokerCalculator.jsx';
import PotOddsCalculator from './pages/PotOddsCalculator.jsx';
import BlackjackTrainer from './pages/BlackjackTrainer.jsx';
import GuidesPage from './pages/GuidesPage.jsx';
import DesktopPage from './pages/DesktopPage.jsx';
import HandHistoryTester from './pages/HandHistoryTester.jsx';
import LegalPage from './pages/LegalPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { LanguageProvider, useLanguage } from './i18n.jsx';

const pages = [
  { id: 'home', labelKey: 'navHome', icon: Home },
  { id: 'poker', labelKey: 'navPoker', icon: Spade },
  { id: 'potodds', labelKey: 'navPotOdds', icon: Calculator },
  { id: 'blackjack', labelKey: 'navBlackjack', icon: ShieldCheck },
  { id: 'guides', labelKey: 'navGuides', icon: BookOpen },
  { id: 'tester', labelKey: 'navTester', icon: Brain },
  { id: 'desktop', labelKey: 'navDesktop', icon: MonitorDown },
  { id: 'about', labelKey: 'navAbout', icon: BookOpen },
  { id: 'contact', labelKey: 'navContact', icon: BadgeInfo },
  { id: 'legal', labelKey: 'navLegal', icon: Scale },
];

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [page, setPage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, languages, t } = useLanguage();

  const CurrentPage = {
    home: HomePage,
    poker: PokerCalculator,
    potodds: PotOddsCalculator,
    blackjack: BlackjackTrainer,
    guides: GuidesPage,
    tester: HandHistoryTester,
    desktop: DesktopPage,
    about: AboutPage,
    contact: ContactPage,
    legal: LegalPage,
  }[page];

  const goTo = (id) => {
    setPage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo('home')}>
          <div className="brand-icon">
            <Spade size={18} />
          </div>
          <div>
            <h1>PRO Poker Odds</h1>
            <p>{t('brandSub')}</p>
          </div>
        </button>

        <nav className="desktop-nav">
          {pages.map(item => {
            const Icon = item.icon;
            return (
              <button key={item.id} className={page === item.id ? 'nav-active' : ''} onClick={() => goTo(item.id)}>
                <Icon size={15} />
                {t(item.labelKey)}
              </button>
            );
          })}
        </nav>

        <div className="header-actions">
          <select className="language-select" value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Language">
            {Object.entries(languages).map(([code, label]) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>

          <button className="mobile-menu" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav">
          {pages.map(item => {
            const Icon = item.icon;
            return (
              <button key={item.id} className={page === item.id ? 'nav-active' : ''} onClick={() => goTo(item.id)}>
                <Icon size={16} />
                {t(item.labelKey)}
              </button>
            );
          })}
        </div>
      )}

      <main>
        <CurrentPage setPage={goTo} />
      </main>

      <footer className="site-footer">
        <div>
          <strong>{t('footerStrong')}</strong>
          <span>{t('footerText')}</span>
        </div>
        <div className="footer-actions">
          <button onClick={() => goTo('contact')}>
            <BadgeInfo size={14} />
            Contatti
          </button>
          <button onClick={() => goTo('legal')}>
            <BadgeInfo size={14} />
            {t('footerLegal')}
          </button>
        </div>
      </footer>
    </div>
  );
}
