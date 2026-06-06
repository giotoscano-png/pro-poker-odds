import React, { useEffect, useState } from 'react';
import { Spade, Calculator, ShieldCheck, BookOpen, MonitorDown, Home, Scale, BadgeInfo, Menu, X, Brain, HelpCircle, GraduationCap, Heart } from 'lucide-react';
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
import FAQPage from './pages/FAQPage.jsx';
import StrategyPage from './pages/StrategyPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import SeoGuidePage from './pages/SeoGuidePage.jsx';
import SupportButton from './components/SupportButton.jsx';
import { LanguageProvider, useLanguage } from './i18n.jsx';

const pages = [
  { id: 'home', labelKey: 'navHome', fallback: 'Home', icon: Home },
  { id: 'tester', labelKey: 'navTester', fallback: 'Analizza Mani', icon: Brain, navClass: 'nav-spot-green' },
  { id: 'poker', labelKey: 'navPoker', fallback: 'Poker Odds', icon: Spade, navClass: 'nav-spot-red' },
  { id: 'potodds', labelKey: 'navPotOdds', fallback: 'Pot Odds', icon: Calculator, navClass: 'nav-spot-red' },
  { id: 'blackjack', labelKey: 'navBlackjack', fallback: 'Blackjack', icon: ShieldCheck, navClass: 'nav-spot-blue' },
  { id: 'strategy', labelKey: 'navStrategy', fallback: 'Strategia', icon: GraduationCap },
  { id: 'guides', labelKey: 'navGuides', fallback: 'Guide', icon: BookOpen },
  { id: 'desktop', labelKey: 'navDesktop', fallback: 'Leak Finder', icon: MonitorDown, navClass: 'nav-spot-purple' },
  { id: 'faq', labelKey: 'navFAQ', fallback: 'FAQ', icon: HelpCircle },
  { id: 'about', labelKey: 'navAbout', fallback: 'About', icon: BookOpen },
  { id: 'support', labelKey: 'navSupport', fallback: 'Supporta', icon: Heart },
  { id: 'contact', labelKey: 'navContact', fallback: 'Contatti', icon: BadgeInfo },
  { id: 'legal', labelKey: 'navLegal', fallback: 'Disclaimer', icon: Scale },
];

const pageRoutes = {
  home: '/',
  tester: '/analyze-hands',
  poker: '/poker',
  potodds: '/pot-odds',
  blackjack: '/blackjack',
  strategy: '/strategy',
  guides: '/guides',
  guidePotOdds: '/guides/pot-odds-explained',
  guideEquity: '/guides/poker-equity-explained',
  guideFlushDraw: '/guides/flush-draw-odds',
  guideStraightDraw: '/guides/straight-draw-odds',
  guideMistakes: '/guides/top-10-poker-mistakes',
  guideBlackjack: '/guides/blackjack-hit-or-stand',
  desktop: '/leak-finder',
  faq: '/faq',
  about: '/about',
  support: '/support',
  contact: '/contact',
  legal: '/legal',
};

const routePages = {
  '/': 'home',
  '/home': 'home',
  '/analyze-hands': 'tester',
  '/analizza-mani': 'tester',
  '/hand-review': 'tester',
  '/poker': 'poker',
  '/poker-odds': 'poker',
  '/pot-odds': 'potodds',
  '/blackjack': 'blackjack',
  '/strategy': 'strategy',
  '/strategia': 'strategy',
  '/guides': 'guides',
  '/guide': 'guides',
  '/guides/pot-odds-explained': 'guidePotOdds',
  '/guides/poker-equity-explained': 'guideEquity',
  '/guides/flush-draw-odds': 'guideFlushDraw',
  '/guides/straight-draw-odds': 'guideStraightDraw',
  '/guides/top-10-poker-mistakes': 'guideMistakes',
  '/guides/blackjack-hit-or-stand': 'guideBlackjack',
  '/leak-finder': 'desktop',
  '/desktop': 'desktop',
  '/faq': 'faq',
  '/about': 'about',
  '/support': 'support',
  '/supporta': 'support',
  '/contact': 'contact',
  '/contatti': 'contact',
  '/legal': 'legal',
  '/disclaimer': 'legal',
};


function normalizeHashRoute(hash) {
  const raw = String(hash || '').replace(/^#/, '').trim();
  if (!raw || raw === '/') return '/';

  const withoutQuery = raw.split('?')[0].split('&')[0];
  const withSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
  const cleaned = withSlash.replace(/\/+$/, '');

  return cleaned || '/';
}

function getPageFromHash() {
  if (typeof window === 'undefined') return 'home';
  const route = normalizeHashRoute(window.location.hash);
  return routePages[route] || 'home';
}


export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [page, setPage] = useState(() => getPageFromHash());
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, languages, t } = useLanguage();

  useEffect(() => {
    const syncPageFromHash = () => {
      setPage(getPageFromHash());
      setMobileOpen(false);
    };

    syncPageFromHash();
    window.addEventListener('hashchange', syncPageFromHash);
    return () => window.removeEventListener('hashchange', syncPageFromHash);
  }, []);

  const languageFlags = {
    it: '/flags/it.svg',
    en: '/flags/gb.svg',
    es: '/flags/es.svg',
    fr: '/flags/fr.svg',
    de: '/flags/de.svg',
  };

  const CurrentPage = {
    home: HomePage,
    tester: HandHistoryTester,
    poker: PokerCalculator,
    potodds: PotOddsCalculator,
    blackjack: BlackjackTrainer,
    strategy: StrategyPage,
    guides: GuidesPage,
    guidePotOdds: (props) => <SeoGuidePage {...props} guideKey="potOdds" />,
    guideEquity: (props) => <SeoGuidePage {...props} guideKey="equity" />,
    guideFlushDraw: (props) => <SeoGuidePage {...props} guideKey="flushDraw" />,
    guideStraightDraw: (props) => <SeoGuidePage {...props} guideKey="straightDraw" />,
    guideMistakes: (props) => <SeoGuidePage {...props} guideKey="mistakes" />,
    guideBlackjack: (props) => <SeoGuidePage {...props} guideKey="blackjack" />,
    desktop: DesktopPage,
    faq: FAQPage,
    about: AboutPage,
    support: SupportPage,
    contact: ContactPage,
    legal: LegalPage,
  }[page] || HomePage;

  const goTo = (id) => {
    const safeId = pageRoutes[id] ? id : 'home';
    const route = pageRoutes[safeId];

    setPage(safeId);
    setMobileOpen(false);

    if (window.location.hash !== `#${route}`) {
      window.location.hash = route;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo('home')}>
          <div className="brand-icon card-percent-logo" aria-hidden="true">
            <span className="brand-card-rank">A</span>
            <span className="brand-card-suit">♠</span>
            <span className="brand-percent">%</span>
          </div>
          <div>
            <h1>PRO Poker Odds</h1>
            <p>{t('brandSub')}</p>
          </div>
        </button>

        <nav className="desktop-nav">
          {pages.map(item => {
            const Icon = item.icon;
            const label = t(item.labelKey);
            return (
              <button
                key={item.id}
                className={`${(page === item.id || (item.id === 'guides' && page.startsWith('guide'))) ? 'nav-active' : ''} ${item.navClass || ''}`.trim()}
                onClick={() => goTo(item.id)}
              >
                <Icon size={15} />
                {label === item.labelKey ? item.fallback : label}
              </button>
            );
          })}
        </nav>

        <div className="header-actions">
          <SupportButton compact />
          <div className="language-select-wrap" aria-label="Language selector">
            {Object.entries(languages).map(([code, label]) => (
              <button
                key={code}
                type="button"
                className={`language-flag-btn ${language === code ? 'active' : ''}`.trim()}
                onClick={() => setLanguage(code)}
                title={label}
                aria-label={label}
              >
                <img src={languageFlags[code]} alt={label} className="language-flag-img" />
              </button>
            ))}
          </div>

          <button className="mobile-menu" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav">
          {pages.map(item => {
            const Icon = item.icon;
            const label = t(item.labelKey);
            return (
              <button
                key={item.id}
                className={`${(page === item.id || (item.id === 'guides' && page.startsWith('guide'))) ? 'nav-active' : ''} ${item.navClass || ''}`.trim()}
                onClick={() => goTo(item.id)}
              >
                <Icon size={16} />
                {label === item.labelKey ? item.fallback : label}
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
          <button onClick={() => goTo('support')}>
            <Heart size={14} />
            {t('supportCompact', { amount: 2 })}
          </button>
          <button onClick={() => goTo('faq')}>
            <HelpCircle size={14} />
            {t('navFAQ')}
          </button>
          <button onClick={() => goTo('contact')}>
            <BadgeInfo size={14} />
            {t('navContact')}
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
