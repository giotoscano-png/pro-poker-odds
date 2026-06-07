* {
  box-sizing: border-box;
}

:root {
  --bg: #080b13;
  --bg2: #0d1220;
  --card: rgba(255,255,255,.065);
  --card2: rgba(255,255,255,.09);
  --border: rgba(255,255,255,.13);
  --text: #f6f8ff;
  --muted: #9fa9bf;
  --primary: #86ef7d;
  --primary-dark: #18331a;
  --accent: #6ee7ff;
  --danger: #fb7185;
  --shadow: 0 24px 80px rgba(0,0,0,.28);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(134,239,125,.18), transparent 35%),
    radial-gradient(circle at top right, rgba(110,231,255,.13), transparent 28%),
    linear-gradient(180deg, var(--bg2), var(--bg));
  color: var(--text);
}

button, input, select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 560px;
  margin: 0 auto;
  padding: 0 14px 34px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 14px 0;
  background: rgba(8,11,19,.78);
  backdrop-filter: blur(18px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid var(--border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 28px rgba(134,239,125,.2);
}

.brand-icon.club-logo {
  position: relative;
  background: transparent;
  box-shadow: none;
  width: 44px;
  height: 44px;
}

.brand-icon.club-logo::before {
  content: '♣';
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--primary);
  font-size: 46px;
  line-height: 1;
  text-shadow: 0 10px 22px rgba(134,239,125,.22);
}

.brand-percent {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -42%);
  color: #061006;
  font-size: 16px;
  font-weight: 1000;
  line-height: 1;
  text-shadow: 0 1px 0 rgba(255,255,255,.1);
}

.brand-score {
  position: absolute;
  z-index: 3;
  right: -2px;
  top: -6px;
  min-width: 22px;
  height: 16px;
  border-radius: 999px;
  background: rgba(134,239,125,.95);
  color: #061006;
  display: grid;
  place-items: center;
  font-size: 9px;
  font-weight: 1000;
  padding: 0 5px;
  box-shadow: 0 8px 16px rgba(134,239,125,.18);
}

.brand-icon.secondary {

  background: var(--accent);
  color: #061018;
}

.brand h1 {
  font-size: 18px;
  line-height: 1;
  margin: 0;
}

.brand p {
  margin: 3px 0 0;
  color: var(--muted);
  font-size: 12px;
}

.topnav {
  display: flex;
  gap: 6px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255,255,255,.04);
}

.topnav button {
  border: 0;
  border-radius: 999px;
  padding: 8px 10px;
  color: var(--muted);
  background: transparent;
  font-weight: 800;
  font-size: 12px;
}

.topnav button.nav-active {
  background: var(--primary);
  color: #061006;
}

main {
  padding: 18px 0 10px;
}

.page-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
}

.section-header h2 {
  font-size: 28px;
  margin: 0 0 6px;
}

.section-header p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.panel {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 12px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 99px;
}

.dot-primary {
  background: var(--primary);
}

.dot-accent {
  background: var(--accent);
}

.icon-button {
  border: 1px solid var(--border);
  color: var(--muted);
  background: rgba(255,255,255,.05);
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
}

.icon-button:hover {
  color: var(--text);
  background: rgba(255,255,255,.09);
}

.player-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.player {
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 14px;
  background: rgba(255,255,255,.09);
  color: var(--text);
  font-weight: 900;
}

.player.active {
  background: var(--primary);
  color: #071207;
  box-shadow: 0 12px 28px rgba(134,239,125,.18);
}

.card-row {
  display: flex;
  align-items: center;
  gap: 11px;
}

.wrap {
  flex-wrap: wrap;
}

.hint {
  color: var(--muted);
  font-size: 12px;
}

.empty-card {
  border: 2px dashed rgba(134,239,125,.28);
  color: rgba(134,239,125,.65);
  background: rgba(134,239,125,.055);
  border-radius: 14px;
  display: grid;
  place-items: center;
}

.empty-card.large {
  width: 66px;
  height: 96px;
}

.empty-card.medium {
  width: 58px;
  height: 82px;
  border-color: rgba(110,231,255,.26);
  color: rgba(110,231,255,.7);
  background: rgba(110,231,255,.055);
}

.playing-card {
  position: relative;
  border: 0;
  width: 58px;
  height: 82px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  box-shadow: 0 14px 28px rgba(0,0,0,.3);
  user-select: none;
}

.playing-card.lg {
  width: 66px;
  height: 96px;
}

.playing-card.sm {
  width: 42px;
  height: 58px;
}

.real-card {
  background: linear-gradient(145deg, #fff, #e9edf3);
}

.placeholder-card {
  border: 2px dashed var(--border);
  background: rgba(255,255,255,.05);
  color: rgba(255,255,255,.28);
}

.rank {
  font-weight: 950;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.suit {
  font-size: 22px;
  line-height: 1;
}

.remove-card {
  position: absolute;
  right: -7px;
  top: -7px;
  width: 21px;
  height: 21px;
  border-radius: 99px;
  background: var(--danger);
  color: white;
  display: grid;
  place-items: center;
  opacity: 0;
}

.playing-card:hover .remove-card {
  opacity: 1;
}

.black-suit { color: #111827; }
.red-suit { color: #dc2626; }
.blue-suit { color: #2563eb; }
.green-suit { color: #16a34a; }

.stage-row {
  display: flex;
  gap: 6px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.stage {
  font-size: 11px;
  font-weight: 800;
  color: rgba(255,255,255,.35);
  border-radius: 999px;
  padding: 6px 9px;
  background: rgba(255,255,255,.045);
}

.stage.active {
  color: var(--accent);
  background: rgba(110,231,255,.1);
}

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 4px;
  border-radius: 16px;
  background: rgba(255,255,255,.055);
  margin-bottom: 16px;
}

.tab {
  border: 0;
  border-radius: 13px;
  background: transparent;
  color: var(--muted);
  font-weight: 900;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
}

.tab.active {
  background: var(--primary);
  color: #071207;
}

.empty-state {
  padding: 24px 12px;
  color: rgba(255,255,255,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  font-size: 14px;
}

.empty-state.compact {
  padding: 12px;
  border-radius: 14px;
  background: rgba(255,255,255,.055);
}

.odds-stack, .outs-stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.current-hand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: var(--accent);
  font-weight: 900;
}

.odds-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.odds-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 800;
}

.odds-bar.win .odds-label,
.odds-bar.win strong { color: var(--primary); }

.odds-bar.tie .odds-label,
.odds-bar.tie strong { color: var(--accent); }

.odds-bar.loss .odds-label,
.odds-bar.loss strong { color: var(--danger); }

.bar-track {
  height: 12px;
  background: rgba(255,255,255,.08);
  border-radius: 999px;
  overflow: hidden;
  margin-top: 7px;
}

.bar-track.small {
  height: 7px;
}

.bar-fill {
  height: 100%;
  border-radius: 999px;
  background: currentColor;
}

.odds-bar.win .bar-fill { background: var(--primary); }
.odds-bar.tie .bar-fill { background: var(--accent); }
.odds-bar.loss .bar-fill { background: var(--danger); }

.tiny-title {
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--muted);
  font-size: 11px;
  font-weight: 900;
  margin: 0 0 8px;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.draw-badge {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 7px 9px;
  font-size: 12px;
  font-weight: 800;
  display: inline-flex;
  gap: 6px;
  align-items: center;
}

.draw-badge.blue { color: #7dd3fc; background: rgba(14,165,233,.12); border-color: rgba(14,165,233,.28); }
.draw-badge.yellow { color: #fde68a; background: rgba(234,179,8,.12); border-color: rgba(234,179,8,.28); }
.draw-badge.orange { color: #fdba74; background: rgba(249,115,22,.12); border-color: rgba(249,115,22,.28); }
.draw-badge.purple { color: #c4b5fd; background: rgba(139,92,246,.12); border-color: rgba(139,92,246,.28); }

.outs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.outs-total {
  border: 1px solid rgba(134,239,125,.22);
  background: rgba(134,239,125,.08);
  color: var(--primary);
  border-radius: 18px;
  padding: 14px;
  text-align: center;
}

.outs-total div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 900;
}

.outs-total strong {
  display: block;
  font-size: 36px;
  line-height: 1.1;
}

.outs-total small {
  color: var(--muted);
  font-size: 11px;
}

.outs-probs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.prob-mini {
  border: 1px solid var(--border);
  background: rgba(255,255,255,.055);
  border-radius: 16px;
  padding: 10px;
}

.prob-mini > div:first-child {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.prob-mini span {
  font-size: 12px;
  color: var(--muted);
}

.prob-mini strong {
  color: var(--accent);
}

.outs-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mini-card {
  width: 42px;
  height: 56px;
  border-radius: 9px;
  background: linear-gradient(145deg, #fff, #edf1f6);
  color: #111827;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  box-shadow: 0 10px 18px rgba(0,0,0,.22);
  font-weight: 900;
}

.microcopy {
  margin: 0 0 6px;
  text-align: center;
  color: rgba(255,255,255,.35);
  font-size: 11px;
}

.modal-backdrop {
  position: fixed;
  z-index: 50;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,.62);
  padding: 18px;
}

.modal-card {
  width: min(430px, 100%);
  border-radius: 24px;
  border: 1px solid var(--border);
  background: #121827;
  box-shadow: var(--shadow);
  padding: 16px;
}

.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
}

.modal-head h3 {
  margin: 0;
  font-size: 18px;
}

.suit-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
  padding: 4px;
  background: rgba(255,255,255,.055);
  border-radius: 16px;
}

.suit-tab {
  border: 0;
  background: transparent;
  color: var(--muted);
  border-radius: 13px;
  padding: 9px 4px;
  display: grid;
  gap: 2px;
  place-items: center;
  font-weight: 900;
}

.suit-tab.active {
  background: var(--primary);
}

.suit-tab small {
  font-size: 10px;
}

.selector-grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.selector-card {
  height: 58px;
  border-radius: 14px;
  border: 0;
  background: linear-gradient(145deg, #fff, #e9edf3);
  display: grid;
  place-items: center;
  font-weight: 950;
  box-shadow: 0 10px 20px rgba(0,0,0,.18);
}

.selector-card:hover {
  transform: translateY(-1px);
}

.selector-card.disabled {
  opacity: .2;
  cursor: not-allowed;
  filter: grayscale(1);
}

.form-panel {
  display: grid;
  gap: 14px;
}

.form-panel label {
  display: grid;
  gap: 7px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 800;
}

.form-panel input,
.form-panel select {
  border: 1px solid var(--border);
  background: rgba(0,0,0,.25);
  color: var(--text);
  border-radius: 14px;
  padding: 12px;
}

.checkbox-line {
  grid-template-columns: auto 1fr;
  display: grid !important;
  align-items: center;
}

.advice-box {
  display: grid;
  gap: 8px;
  border-color: rgba(134,239,125,.25);
  background: rgba(134,239,125,.075);
}

.advice-box span {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 11px;
  font-weight: 900;
}

.advice-box strong {
  font-size: 28px;
  color: var(--primary);
}

.advice-box p {
  margin: 0;
  color: var(--muted);
}

.footer-note {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: rgba(255,255,255,.38);
  font-size: 12px;
  text-align: center;
  margin-top: 22px;
}

@media (max-width: 430px) {
  .brand p {
    display: none;
  }

  .section-header h2 {
    font-size: 24px;
  }

  .outs-grid {
    grid-template-columns: 1fr;
  }

  .selector-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .topnav button {
    padding-left: 8px;
    padding-right: 8px;
  }
}

/* ---------- V2 premium layout additions ---------- */
.wide-shell { max-width: 1180px; }
.brand-button { cursor: pointer; }
.v2-topbar { gap: 18px; }
.desktop-nav {
  display: flex;
  gap: 6px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255,255,255,.04);
  overflow-x: auto;
}

.desktop-nav button, .mobile-nav button {
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 9px 12px;
  color: var(--muted);
  background: transparent;
  font-weight: 850;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  position: relative;
  transition: .18s ease;
}

.desktop-nav button:hover,
.mobile-nav button:hover {
  transform: translateY(-1px);
  color: var(--text);
}

.desktop-nav button.nav-active, .mobile-nav button.nav-active {
  background: var(--primary);
  color: #061006;
}

.desktop-nav button.nav-spot-red, .mobile-nav button.nav-spot-red {
  border-color: rgba(248,113,113,.4);
  color: #fecaca;
  box-shadow: inset 0 0 0 1px rgba(248,113,113,.08);
}
.desktop-nav button.nav-spot-red.nav-active, .mobile-nav button.nav-spot-red.nav-active {
  background: linear-gradient(180deg, rgba(248,113,113,.98), rgba(220,38,38,.96));
  color: #fff7f7;
  border-color: rgba(254,202,202,.6);
}

.desktop-nav button.nav-spot-green, .mobile-nav button.nav-spot-green {
  border-color: rgba(134,239,125,.4);
  color: #d9f99d;
  box-shadow: inset 0 0 0 1px rgba(134,239,125,.08);
}
.desktop-nav button.nav-spot-green.nav-active, .mobile-nav button.nav-spot-green.nav-active {
  background: linear-gradient(180deg, rgba(134,239,125,.98), rgba(74,222,128,.95));
  color: #061006;
  border-color: rgba(220,252,231,.7);
}

.desktop-nav button.nav-spot-blue, .mobile-nav button.nav-spot-blue {
  border-color: rgba(96,165,250,.42);
  color: #bfdbfe;
  box-shadow: inset 0 0 0 1px rgba(96,165,250,.08);
}
.desktop-nav button.nav-spot-blue.nav-active, .mobile-nav button.nav-spot-blue.nav-active {
  background: linear-gradient(180deg, rgba(96,165,250,.98), rgba(37,99,235,.95));
  color: #eff6ff;
  border-color: rgba(191,219,254,.7);
}

.desktop-nav button.nav-spot-purple, .mobile-nav button.nav-spot-purple {
  border-color: rgba(192,132,252,.45);
  color: #e9d5ff;
  box-shadow: inset 0 0 0 1px rgba(192,132,252,.08), 0 0 18px rgba(168,85,247,.12);
  padding-left: 18px;
  padding-right: 18px;
}
.desktop-nav button.nav-spot-purple::before,
.desktop-nav button.nav-spot-purple::after,
.mobile-nav button.nav-spot-purple::before,
.mobile-nav button.nav-spot-purple::after {
  content: '⚡';
  position: absolute;
  top: 50%;
  transform: translateY(-52%);
  color: #d8b4fe;
  font-size: 10px;
  opacity: .85;
}
.desktop-nav button.nav-spot-purple::before,
.mobile-nav button.nav-spot-purple::before { left: 6px; }
.desktop-nav button.nav-spot-purple::after,
.mobile-nav button.nav-spot-purple::after { right: 6px; }
.desktop-nav button.nav-spot-purple.nav-active, .mobile-nav button.nav-spot-purple.nav-active {
  background: linear-gradient(180deg, rgba(192,132,252,.98), rgba(126,34,206,.96));
  color: #fff7ff;
  border-color: rgba(233,213,255,.8);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}


.language-select-wrap {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255,255,255,.04);
}

.language-flag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: rgba(255,255,255,.08);
  font-size: 16px;
  line-height: 1;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
}
.language-select {
  border: 1px solid var(--border);
  background: rgba(255,255,255,.06);
  color: var(--text);
  border-radius: 999px;
  padding: 10px 12px;
  font-weight: 850;
  outline: none;
}

.language-select option {
  background: #121827;
  color: var(--text);
}

.mobile-menu {
  display: none;
  border: 1px solid var(--border);
  color: var(--text);
  background: rgba(255,255,255,.06);
  width: 42px;
  height: 42px;
  border-radius: 14px;
  place-items: center;
}

.mobile-nav {
  display: none;
  position: sticky;
  top: 67px;
  z-index: 19;
  background: rgba(8,11,19,.96);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: var(--shadow);
}
.home-page { display: flex; flex-direction: column; gap: 22px; }
.hero-section {
  display: grid;
  grid-template-columns: 1.08fr .92fr;
  gap: 22px;
  min-height: 420px;
  align-items: center;
}
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--primary);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: .08em;
  font-weight: 950;
  margin-bottom: 12px;
}
.hero-copy h2 { font-size: clamp(42px, 7vw, 76px); line-height: .92; margin: 0 0 18px; max-width: 820px; }
.hero-copy p { max-width: 690px; color: var(--muted); font-size: 17px; line-height: 1.6; margin: 0 0 22px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.primary-action, .secondary-action {
  border: 0;
  border-radius: 999px;
  padding: 14px 18px;
  font-weight: 950;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.primary-action { background: var(--primary); color: #061006; }
.secondary-action { background: rgba(255,255,255,.08); color: var(--text); border: 1px solid var(--border); }
.hero-panel {
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,255,255,.1), rgba(255,255,255,.045));
  border-radius: 34px;
  padding: 22px;
  box-shadow: var(--shadow);
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
}
.hero-live-panel {
  gap: 14px;
}
.glass-card { border: 1px solid var(--border); background: rgba(255,255,255,.07); border-radius: 24px; padding: 18px; }
.big-metric span { color: var(--muted); font-weight: 850; text-transform: uppercase; letter-spacing: .08em; font-size: 11px; }
.big-metric strong { display: block; font-size: clamp(50px, 5vw, 64px); color: var(--primary); line-height: 1; margin: 8px 0; }
.big-metric small { color: var(--muted); }
.live-odds-card span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.hero-live-stage-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.hero-stage-chip {
  border-radius: 999px;
  padding: 7px 11px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.08);
  color: var(--muted);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .04em;
  text-transform: uppercase;
}
.hero-stage-chip.active {
  color: #061006;
  background: var(--primary);
  border-color: transparent;
  box-shadow: 0 10px 20px rgba(134,239,125,.16);
}
.hero-live-cards-block {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 14px;
  align-items: start;
}
.hero-sub-label {
  color: var(--muted);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 8px;
}
.hero-cards { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.hero-live-hand-cards {
  justify-content: flex-start;
}
.hero-live-board-cards {
  justify-content: flex-start;
  gap: 10px;
}
.hero-ace-card {
  width: 82px;
  height: 118px;
  border-radius: 18px;
  background: linear-gradient(145deg, #ffffff, #e8edf3);
  box-shadow: 0 18px 28px rgba(0,0,0,.26);
  position: relative;
  border: 1px solid rgba(255,255,255,.9);
  overflow: hidden;
}
.hero-live-card.compact {
  width: 66px;
  height: 94px;
  border-radius: 16px;
}
.hero-live-placeholder {
  width: 66px;
  height: 94px;
  border-radius: 16px;
  border: 2px dashed rgba(134,239,125,.22);
  background: rgba(134,239,125,.05);
  color: rgba(134,239,125,.6);
  display: grid;
  place-items: center;
  font-size: 26px;
  font-weight: 900;
}
.hero-card-corner {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  font-weight: 1000;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  line-height: .95;
}
.hero-card-corner.top {
  top: 8px;
  left: 8px;
}
.hero-card-corner.bottom {
  right: 8px;
  bottom: 8px;
  transform: rotate(180deg);
}
.hero-card-corner span:first-child {
  font-size: 17px;
}
.hero-card-corner span:last-child {
  font-size: 17px;
}
.hero-live-card.compact .hero-card-corner span:first-child,
.hero-live-card.compact .hero-card-corner span:last-child {
  font-size: 14px;
}
.hero-card-center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 34px;
  font-weight: 1000;
}
.hero-live-card.compact .hero-card-center {
  font-size: 28px;
}
.hero-ace-card.red { color: #dc2626; }
.hero-ace-card.black { color: #111827; }
.hero-ace-card.blue { color: #2563eb; }
.hero-ace-card.green { color: #16a34a; }
.hero-note {
  color: var(--accent);
  font-weight: 800;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  line-height: 1.45;
}
.hero-note strong {
  color: var(--text);
}
.hero-note-badge {
  min-width: 46px;
  height: 30px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  font-size: 12px;
  font-weight: 1000;
  color: #061006;
  background: var(--primary);
  box-shadow: 0 10px 20px rgba(134,239,125,.18);
}
.feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.feature-card, .article-card { background: var(--card); border: 1px solid var(--border); border-radius: 24px; padding: 18px; box-shadow: var(--shadow); }
.feature-icon {
  width: 42px;
  height: 42px;
  border-radius: 15px;
  display: grid;
  place-items: center;
  background: rgba(134,239,125,.12);
  color: var(--primary);
  border: 1px solid rgba(134,239,125,.22);
  margin-bottom: 14px;
}
.feature-card h3, .article-card h3 { margin: 0 0 8px; font-size: 18px; }
.feature-card p, .article-card p { margin: 0; color: var(--muted); line-height: 1.55; }
.feature-card button { margin-top: 16px; border: 0; color: var(--primary); background: transparent; display: inline-flex; align-items: center; gap: 6px; padding: 0; font-weight: 900; }
.monetization-ready, .pricing-preview { border: 1px solid rgba(134,239,125,.22); background: rgba(134,239,125,.07); border-radius: 28px; padding: 22px; }
.monetization-ready h3, .pricing-preview h3 { margin: 0 0 8px; }
.monetization-ready p, .pricing-preview p { margin: 0; color: var(--muted); line-height: 1.6; }
.tool-grid { 
  display: grid; 
  grid-template-columns: minmax(360px, .85fr) minmax(560px, 1.25fr); 
  gap: 22px; 
  align-items: start;
}
.mini-divider { height: 1px; background: var(--border); margin: 4px 0; }
.result-panel { display: flex; flex-direction: column; gap: 14px; }
.verdict { display: flex; align-items: center; gap: 14px; border-radius: 20px; padding: 16px; border: 1px solid var(--border); background: rgba(255,255,255,.055); }
.verdict.good { color: var(--primary); background: rgba(134,239,125,.08); border-color: rgba(134,239,125,.25); }
.verdict.bad { color: var(--danger); background: rgba(251,113,133,.08); border-color: rgba(251,113,133,.25); }
.verdict span { color: var(--muted); text-transform: uppercase; letter-spacing: .08em; font-size: 11px; font-weight: 950; }
.verdict strong { display: block; font-size: 25px; margin-top: 2px; color: currentColor; }
.metric-list { display: grid; gap: 8px; }
.metric-row { display: flex; justify-content: space-between; gap: 12px; border: 1px solid var(--border); background: rgba(255,255,255,.045); border-radius: 16px; padding: 12px; }
.metric-row span { color: var(--muted); }
.metric-row strong { color: var(--text); }
.explain-box { display: flex; align-items: flex-start; gap: 10px; color: var(--muted); border: 1px solid var(--border); background: rgba(255,255,255,.045); border-radius: 18px; padding: 14px; }
.explain-box p { margin: 0; line-height: 1.55; }
.article-list { display: grid; gap: 14px; }
.article-card { display: flex; gap: 16px; align-items: flex-start; }
.article-card .feature-icon { margin-bottom: 0; flex: 0 0 auto; }
.desktop-hero { border: 1px solid rgba(110,231,255,.24); background: radial-gradient(circle at top right, rgba(110,231,255,.18), transparent 35%), rgba(255,255,255,.06); border-radius: 32px; padding: 28px; box-shadow: var(--shadow); }
.desktop-hero h2 { font-size: clamp(38px, 7vw, 72px); line-height: .95; margin: 0 0 12px; }
.desktop-hero p { max-width: 760px; color: var(--muted); line-height: 1.6; margin: 0 0 20px; font-size: 17px; }
.roadmap-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.price-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 14px; }
.price-cards div { border: 1px solid var(--border); background: rgba(0,0,0,.16); border-radius: 18px; padding: 16px; }
.price-cards span { color: var(--muted); font-weight: 850; }
.price-cards strong { display: block; color: var(--primary); font-size: 28px; margin: 8px 0; }
.site-footer { border-top: 1px solid var(--border); margin-top: 34px; padding: 20px 0 10px; display: flex; justify-content: space-between; gap: 16px; align-items: center; color: var(--muted); }
.site-footer div { display: grid; gap: 3px; }
.site-footer strong { color: var(--text); }
.site-footer button { border: 1px solid var(--border); background: rgba(255,255,255,.06); color: var(--text); border-radius: 999px; padding: 10px 12px; display: flex; align-items: center; gap: 6px; }
@media (max-width: 980px) { .desktop-nav { display: none; } .mobile-menu { display: grid; } .mobile-nav { display: grid; gap: 6px; } .mobile-nav button { justify-content: flex-start; border-radius: 14px; padding: 12px; } .hero-section { grid-template-columns: 1fr; min-height: auto; } .feature-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 700px) { .hero-copy h2 { font-size: 42px; } .feature-grid, .tool-grid, .roadmap-grid, .price-cards { grid-template-columns: 1fr; } .site-footer { flex-direction: column; align-items: flex-start; } .article-card { flex-direction: column; } }


.file-upload {
  border: 1px dashed rgba(134,239,125,.35);
  background: rgba(134,239,125,.07);
  color: var(--primary) !important;
  border-radius: 18px;
  padding: 16px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 9px !important;
  cursor: pointer;
  text-align: center;
}

.file-upload input {
  display: none;
}

.loaded-file {
  border: 1px solid var(--border);
  background: rgba(255,255,255,.045);
  border-radius: 14px;
  padding: 10px 12px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.hh-textarea {
  min-height: 260px;
  resize: vertical;
  border: 1px solid var(--border);
  background: rgba(0,0,0,.25);
  color: var(--text);
  border-radius: 14px;
  padding: 12px;
  line-height: 1.45;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
}

.hh-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.danger-soft {
  color: var(--danger);
}

.leak-box {
  border: 1px solid var(--border);
  background: rgba(255,255,255,.045);
  border-radius: 18px;
  padding: 14px;
}

.leak-box h3 {
  margin: 0 0 10px;
}

.finding {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 11px 0;
  border-top: 1px solid rgba(255,255,255,.08);
}

.finding:first-of-type {
  border-top: 0;
  padding-top: 0;
}

.finding.good {
  color: var(--primary);
}

.finding.warning {
  color: var(--warning);
}

.finding strong {
  display: block;
  color: var(--text);
  margin-bottom: 4px;
}

.finding p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.muted-text {
  color: var(--muted);
  margin: 0;
}


.wide-page {
  width: min(100%, 1320px);
  max-width: 1320px;
}

.session-summary {
  border: 1px solid rgba(110,231,255,.22);
  background: rgba(110,231,255,.07);
  border-radius: 18px;
  padding: 14px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--accent);
}

.session-summary p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.hand-review-list {
  display: grid;
  gap: 12px;
}

.hand-review-list h3 {
  margin: 0;
}

.hand-card {
  border: 1px solid var(--border);
  background: rgba(255,255,255,.045);
  border-radius: 20px;
  padding: 14px;
}

.hand-card.good {
  border-color: rgba(134,239,125,.22);
}

.hand-card.mistake {
  border-color: rgba(251,113,133,.28);
}

.hand-card.review {
  border-color: rgba(253,230,138,.25);
}

.hand-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.hand-number {
  color: var(--muted);
  font-size: 11px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.hand-card h4 {
  margin: 4px 0 0;
  font-size: 18px;
}

.verdict-pill {
  border-radius: 999px;
  padding: 7px 9px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 950;
  white-space: nowrap;
}

.verdict-pill.good {
  background: rgba(134,239,125,.12);
  color: var(--primary);
}

.verdict-pill.mistake {
  background: rgba(251,113,133,.12);
  color: var(--danger);
}

.verdict-pill.review {
  background: rgba(253,230,138,.12);
  color: var(--warning);
}

.hand-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.hand-meta span {
  border: 1px solid var(--border);
  background: rgba(0,0,0,.16);
  border-radius: 999px;
  padding: 7px 9px;
  color: var(--muted);
  font-size: 12px;
}

.hand-meta strong {
  color: var(--text);
}

.hand-summary {
  color: var(--muted);
  line-height: 1.5;
  margin: 0 0 12px;
}

.hand-reasons {
  display: grid;
  gap: 8px;
}

.reason {
  border-left: 3px solid var(--border);
  padding: 8px 10px;
  background: rgba(0,0,0,.12);
  border-radius: 10px;
}

.reason.good {
  border-left-color: var(--primary);
}

.reason.bad {
  border-left-color: var(--danger);
}

.reason.review {
  border-left-color: var(--warning);
}

.reason.info {
  border-left-color: var(--accent);
}

.reason strong {
  display: block;
  margin-bottom: 4px;
}

.reason p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}


.cards-inline {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  vertical-align: middle;
}

.card-token {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 30px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.13);
  background: rgba(255,255,255,.06);
  font-weight: 950;
  font-size: 14px;
  line-height: 1;
  letter-spacing: .01em;
}

.card-token.suit-heart {
  color: #ff5f7a;
  border-color: rgba(255,95,122,.28);
  background: rgba(255,95,122,.10);
}

.card-token.suit-diamond {
  color: #67e8f9;
  border-color: rgba(103,232,249,.28);
  background: rgba(103,232,249,.10);
}

.card-token.suit-club {
  color: #86ef7d;
  border-color: rgba(134,239,125,.28);
  background: rgba(134,239,125,.10);
}

.card-token.suit-spade {
  color: #f8fafc;
  border-color: rgba(248,250,252,.25);
  background: rgba(248,250,252,.08);
}

/* V2.6 wide layout */

@media (min-width: 1100px) {
  .result-panel {
    min-width: 0;
  }

  .hand-review-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }

  .hand-review-list h3 {
    grid-column: 1 / -1;
  }

  .hand-card {
    min-height: 100%;
  }

  .hero-section {
    grid-template-columns: minmax(0, 1.25fr) minmax(360px, .75fr);
  }
}

@media (min-width: 1280px) {
  .tool-grid {
    grid-template-columns: minmax(390px, .8fr) minmax(650px, 1.35fr);
  }

  .hh-textarea {
    min-height: 360px;
  }
}

@media (max-width: 980px) {
  .app-shell {
    padding-left: 18px;
    padding-right: 18px;
  }

  .tool-grid {
    grid-template-columns: 1fr;
  }

  .hand-review-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .app-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .panel {
    padding: 16px;
  }
}


/* V2.7 TRUE FULL WIDTH DESKTOP PATCH */
@media (min-width: 981px) {
  .app-shell {
    width: 100%;
    max-width: none;
    margin: 0;
    padding-left: clamp(28px, 4vw, 72px);
    padding-right: clamp(28px, 4vw, 72px);
  }

  main {
    width: 100%;
  }

  .home-page,
  .page-card,
  .wide-page {
    width: 100%;
    max-width: none;
    margin-left: 0;
    margin-right: 0;
  }

  .hero-section {
    width: 100%;
    grid-template-columns: minmax(0, 1.35fr) minmax(420px, .65fr);
    gap: clamp(24px, 4vw, 64px);
  }

  .hero-copy {
    max-width: none;
  }

  .hero-copy p {
    max-width: 880px;
  }

  .hero-panel {
    width: 100%;
    max-width: none;
  }

  .feature-grid {
    width: 100%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .tool-grid {
    width: 100%;
    grid-template-columns: minmax(420px, .72fr) minmax(720px, 1.28fr);
    gap: clamp(22px, 3vw, 44px);
  }

  .article-list {
    width: 100%;
  }

  .desktop-hero,
  .monetization-ready,
  .pricing-preview {
    width: 100%;
  }

  .roadmap-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .price-cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hand-review-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hand-review-list h3 {
    grid-column: 1 / -1;
  }

  .section-header {
    width: 100%;
  }

  .site-footer {
    width: 100%;
  }
}

@media (min-width: 1500px) {
  .tool-grid {
    grid-template-columns: minmax(460px, .65fr) minmax(850px, 1.35fr);
  }

  .hero-section {
    grid-template-columns: minmax(0, 1.45fr) minmax(460px, .55fr);
  }

  .hero-copy h2 {
    max-width: 1000px;
  }
}

@media (max-width: 980px) {
  .app-shell {
    width: min(100%, 760px);
    margin: 0 auto;
  }

  .page-card,
  .wide-page,
  .home-page {
    width: 100%;
    max-width: none;
  }

  .tool-grid,
  .hero-section,
  .feature-grid,
  .roadmap-grid,
  .price-cards,
  .hand-review-list {
    grid-template-columns: 1fr;
  }
}


/* V2.8 product polish */
.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 18px;
}

.trust-row span {
  border: 1px solid rgba(134,239,125,.22);
  background: rgba(134,239,125,.08);
  color: var(--primary);
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 900;
}

.feature-card.featured {
  border-color: rgba(134,239,125,.34);
  background:
    radial-gradient(circle at top right, rgba(134,239,125,.16), transparent 34%),
    rgba(255,255,255,.065);
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.hand-card-head h4,
.hand-card h4 {
  word-break: break-word;
}

.hand-card.mistake .hand-summary {
  color: #fecdd3;
}

.hand-card.good .hand-summary {
  color: #d9f99d;
}

.reason.bad {
  background: rgba(251,113,133,.08);
}

.reason.good {
  background: rgba(134,239,125,.07);
}

.reason.review {
  background: rgba(253,230,138,.07);
}

@media (max-width: 980px) {
  .footer-actions {
    width: 100%;
  }
}


/* V2.9 content cleanup */
.price-cards.clean-model strong {
  font-size: 24px;
}

.price-cards.clean-model div {
  min-height: 150px;
}

.pricing-preview {
  border-color: rgba(110,231,255,.22);
  background: rgba(110,231,255,.06);
}


/* V3.0 complete MVP polish */
.clean-model strong {
  font-size: 24px;
}

.price-cards.clean-model div {
  min-height: 150px;
}

.pricing-preview {
  border-color: rgba(110,231,255,.22);
  background: rgba(110,231,255,.06);
}

@media (min-width: 981px) {
  .desktop-nav {
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 860px;
  }

  .desktop-nav button {
    padding: 9px 11px;
  }
}


/* V3.1 PayPal support */
.support-button {
  border: 0;
  border-radius: 999px;
  padding: 13px 16px;
  font-weight: 950;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #86ef7d, #6ee7ff);
  color: #061006;
  box-shadow: 0 14px 28px rgba(134,239,125,.18);
}

.support-button.compact {
  padding: 9px 11px;
  font-size: 12px;
  white-space: nowrap;
}

.support-secondary {
  border-color: rgba(134,239,125,.24);
}

.support-hero {
  border: 1px solid rgba(134,239,125,.26);
  background:
    radial-gradient(circle at top right, rgba(134,239,125,.16), transparent 34%),
    rgba(255,255,255,.065);
  border-radius: 32px;
  padding: 30px;
  box-shadow: var(--shadow);
}

.support-hero h2 {
  font-size: clamp(38px, 6vw, 68px);
  line-height: .95;
  margin: 0 0 14px;
}

.support-hero p {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.6;
  max-width: 850px;
  margin: 0 0 22px;
}

.warning-card {
  border-color: rgba(253,230,138,.30);
  background: rgba(253,230,138,.06);
}

code {
  color: var(--accent);
  background: rgba(255,255,255,.06);
  border-radius: 6px;
  padding: 2px 5px;
}

@media (max-width: 980px) {
  .header-actions .support-button.compact {
    display: none;
  }
}


/* V3.4 clean contact page */
.contact-placeholder {
  display: grid;
  gap: 16px;
  max-width: 720px;
}

.contact-placeholder label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 850;
}

.contact-placeholder input,
.contact-placeholder textarea {
  border: 1px solid var(--border);
  background: rgba(0,0,0,.20);
  color: var(--text);
  border-radius: 14px;
  padding: 12px;
}

.contact-placeholder textarea {
  min-height: 140px;
  resize: vertical;
}


/* V3.6 blackjack restored */
.bj-block {
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
}

.bj-block-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: end;
}

.bj-block-head strong {
  font-size: 15px;
}

.bj-selected-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.bj-slot {
  width: 92px !important;
  height: 130px !important;
  position: relative;
  align-items: flex-start;
  padding: 10px;
  justify-content: flex-start;
  transition: transform .15s ease, box-shadow .15s ease, outline-color .15s ease;
  outline: 2px solid transparent;
}

.bj-slot.active {
  outline-color: rgba(110,231,255,.7);
  transform: translateY(-2px);
}

.bj-slot-label {
  font-size: 11px;
  font-weight: 800;
  color: #6b7280;
  line-height: 1;
}

.bj-slot-rank {
  font-size: 28px;
  font-weight: 950;
  line-height: 1;
  margin-top: 12px;
}

.bj-slot-suit {
  font-size: 22px;
  line-height: 1;
  margin-top: 2px;
}

.bj-dealer-tag {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 10px;
  color: #6b7280;
  font-weight: 800;
}

.bj-active-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(110,231,255,.08);
  color: var(--accent);
  border: 1px solid rgba(110,231,255,.18);
  font-weight: 900;
  font-size: 13px;
  margin-bottom: 14px;
}

.bj-rank-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.bj-rank-card {
  border: 0;
  border-radius: 14px;
  min-height: 70px;
  background: linear-gradient(145deg, #fff, #e9edf3);
  display: grid;
  place-items: center;
  font-weight: 950;
  box-shadow: 0 12px 22px rgba(0,0,0,.2);
  transition: transform .15s ease;
}

.bj-rank-card:hover {
  transform: translateY(-2px);
}

.bj-rank-card span {
  font-size: 20px;
  line-height: 1;
}

.bj-rank-card small {
  font-size: 16px;
  line-height: 1;
  margin-top: -2px;
}

.suit-heart { color: #dc2626; }
.suit-spade { color: #111827; }
.suit-club { color: #15803d; }
.suit-diamond { color: #0891b2; }

.bj-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 14px;
}

.bj-reset {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.bj-summary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.bj-summary-card {
  border: 1px solid var(--border);
  background: rgba(255,255,255,.04);
  border-radius: 18px;
  padding: 14px;
  display: grid;
  gap: 4px;
}

.bj-summary-card span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.bj-summary-card strong {
  font-size: 24px;
  line-height: 1;
}

.bj-summary-card small {
  color: var(--muted);
  font-size: 12px;
}

.bj-notes {
  display: grid;
  gap: 12px;
  margin-top: 14px;
}

@media (max-width: 980px) {
  .bj-summary-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .bj-block-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .bj-rank-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .bj-slot {
    width: 84px !important;
    height: 120px !important;
  }
}


/* V3.7 blackjack universal cards */
.bj-slot .universal-rank {
  color: #111827;
}

.bj-slot-universal-icons {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
  font-size: 16px;
  line-height: 1;
}

.bj-slot-universal-icons .suit-spade { color: #111827; }
.bj-slot-universal-icons .suit-heart { color: #dc2626; }
.bj-slot-universal-icons .suit-diamond { color: #0891b2; }
.bj-slot-universal-icons .suit-club { color: #15803d; }

.bj-rank-card.universal {
  gap: 4px;
}

.bj-rank-main {
  color: #111827;
  font-size: 20px;
  line-height: 1;
  font-weight: 950;
}

.bj-suit-strip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  line-height: 1;
}


/* V3.8 styled poker cards */
.poker-card {
  background: linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 14px;
  overflow: hidden;
}

.poker-card.real-card {
  position: relative;
}

.poker-card-center {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 8px;
}

.corner-index {
  position: absolute;
  display: grid;
  justify-items: center;
  gap: 0;
  line-height: .9;
}

.corner-index.top-left {
  top: 6px;
  left: 5px;
}

.corner-index.bottom-right {
  right: 5px;
  bottom: 6px;
  transform: rotate(180deg);
}

.corner-index.compact.top-left {
  top: 4px;
  left: 4px;
}

.corner-index.compact.bottom-right {
  right: 4px;
  bottom: 4px;
}

.corner-rank {
  font-size: 16px;
  font-weight: 900;
  font-family: "Times New Roman", Georgia, serif;
}

.corner-suit {
  font-size: 13px;
  margin-top: -1px;
}

.playing-card.sm .corner-rank {
  font-size: 11px;
}

.playing-card.sm .corner-suit {
  font-size: 10px;
}

.playing-card.lg .corner-rank {
  font-size: 18px;
}

.playing-card.lg .corner-suit {
  font-size: 14px;
}

.ace-center,
.face-center,
.pip-layout {
  width: 100%;
  display: grid;
  place-items: center;
}

.ace-suit {
  font-size: 30px;
  line-height: 1;
}

.playing-card.lg .ace-suit {
  font-size: 36px;
}

.playing-card.sm .ace-suit {
  font-size: 20px;
}

.face-center {
  gap: 4px;
}

.face-badge {
  width: 28px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid currentColor;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 900;
  font-family: "Times New Roman", Georgia, serif;
  background: rgba(255,255,255,.65);
}

.face-suit {
  font-size: 16px;
  line-height: 1;
}

.playing-card.sm .face-badge {
  width: 18px;
  height: 22px;
  font-size: 12px;
  border-radius: 7px;
}

.playing-card.lg .face-badge {
  width: 30px;
  height: 38px;
  font-size: 20px;
}

.face-badge.compact {
  width: 22px;
  height: 26px;
  font-size: 14px;
}

.pip-layout {
  gap: 2px;
}

.pip-row {
  width: 100%;
  display: flex;
  align-items: center;
}

.pip-row.cols-1 {
  justify-content: center;
}

.pip-row.cols-2 {
  justify-content: space-between;
  padding: 0 10px;
}

.playing-card.sm .pip-row.cols-2 {
  padding: 0 6px;
}

.pip {
  font-size: 12px;
  line-height: 1;
}

.playing-card.lg .pip {
  font-size: 14px;
}

.playing-card.sm .pip {
  font-size: 10px;
}

.poker-grid {
  gap: 10px;
}

.poker-selector-card {
  position: relative;
  min-height: 86px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 22px rgba(0,0,0,.18);
}

.poker-selector-card .poker-card-center.compact {
  height: 100%;
  padding: 10px 6px;
}

.mini-pip {
  font-size: 18px;
  line-height: 1;
}

.ace-suit.compact {
  font-size: 20px;
}

.black-suit { color: #111827; }
.red-suit { color: #dc2626; }
.blue-suit { color: #0891b2; }
.green-suit { color: #15803d; }


/* V3.9 public-ready polish */
@media (min-width: 981px) {
  .app-shell {
    width: 100%;
    max-width: none;
    margin: 0;
    padding-left: clamp(28px, 4vw, 72px);
    padding-right: clamp(28px, 4vw, 72px);
  }

  .home-page,
  .page-card,
  .wide-page {
    width: 100%;
    max-width: none;
    margin-left: 0;
    margin-right: 0;
  }

  .tool-grid {
    width: 100%;
    grid-template-columns: minmax(420px, .72fr) minmax(720px, 1.28fr);
    gap: clamp(22px, 3vw, 44px);
  }

  .hand-review-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hand-review-list h3 {
    grid-column: 1 / -1;
  }
}

.face-illustration {
  width: 38px;
  min-height: 54px;
  border: 1px solid currentColor;
  border-radius: 12px;
  display: grid;
  place-items: center;
  gap: 0;
  padding: 5px 3px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.75)),
    radial-gradient(circle at top, currentColor, transparent 55%);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.55);
}

.face-crown {
  font-size: 13px;
  line-height: 1;
  opacity: .9;
}

.face-letter {
  font-family: "Times New Roman", Georgia, serif;
  font-size: 22px;
  font-weight: 950;
  line-height: .9;
}

.face-label {
  font-size: 6px;
  letter-spacing: .08em;
  font-weight: 950;
  line-height: 1;
}

.face-suit-premium {
  font-size: 12px;
  line-height: 1;
}

.playing-card.lg .face-illustration {
  width: 42px;
  min-height: 60px;
}

.playing-card.sm .face-illustration {
  width: 26px;
  min-height: 36px;
  border-radius: 8px;
}

.playing-card.sm .face-letter {
  font-size: 15px;
}

.playing-card.sm .face-label,
.playing-card.sm .face-suit-premium {
  display: none;
}

.face-illustration.mini {
  width: 28px;
  min-height: 38px;
  border-radius: 9px;
  padding: 3px;
}

.face-illustration.mini .face-letter {
  font-size: 16px;
}

.face-illustration.mini .face-crown {
  font-size: 10px;
}


@media (min-width: 981px) {
  .desktop-nav {
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 900px;
  }
}


.field-help {
  margin-top: 8px;
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  line-height: 1.45;
  font-size: 12px;
}

.inline-link-button {
  border: 0;
  background: transparent;
  color: var(--accent);
  font-weight: 900;
  padding: 0;
  display: inline-flex;
  align-items: center;
}

.inline-link-button:hover {
  text-decoration: underline;
}

@media (max-width: 980px) {
  .hero-ace-grid {
    grid-template-columns: repeat(2, minmax(72px, 1fr));
  }
}


@media (max-width: 1180px) {
  .hero-live-cards-block {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 980px) {
  .hero-section {
    grid-template-columns: 1fr;
  }
  .hero-live-hand-cards,
  .hero-live-board-cards {
    justify-content: center;
  }
}

@media (max-width: 720px) {
  .hero-live-board-cards {
    gap: 8px;
  }
  .hero-live-placeholder,
  .hero-live-card.compact {
    width: 56px;
    height: 82px;
  }
  .hero-ace-card {
    width: 74px;
    height: 106px;
  }
}

/* V4.3 card-percent logo + language flags polish */
.brand-icon.card-percent-logo {
  width: 42px;
  height: 54px;
  position: relative;
  border-radius: 10px;
  background: linear-gradient(145deg, #ffffff, #e8edf3);
  border: 1px solid rgba(255,255,255,.85);
  box-shadow: 0 14px 26px rgba(0,0,0,.28), inset -2px -2px 0 rgba(0,0,0,.08);
  transform: rotate(-8deg);
  color: #111827;
}
.brand-card-rank {
  position: absolute;
  top: 5px;
  left: 6px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 15px;
  font-weight: 900;
  line-height: 1;
}
.brand-card-suit {
  position: absolute;
  top: 19px;
  left: 7px;
  font-size: 13px;
  line-height: 1;
}
.brand-icon.card-percent-logo .brand-percent {
  position: absolute;
  z-index: 2;
  right: -10px;
  top: -11px;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: linear-gradient(145deg, #86ef7d, #22c55e);
  color: #121212;
  font-size: 18px;
  font-weight: 1000;
  box-shadow: 0 10px 20px rgba(34,197,94,.28), inset 0 1px 0 rgba(255,255,255,.55);
  transform: rotate(8deg);
}
.language-select {
  min-width: 128px;
  font-size: 13px;
  padding-right: 12px;
}


/* V4.6 tester rebuilt */
.tester-file-note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.45;
}
.tester-file-note strong {
  color: var(--primary);
  font-size: 18px;
}

.price-cards.two-cards {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.price-cards.two-cards div {
  min-height: 170px;
}

@media (max-width: 700px) {
  .price-cards.two-cards {
    grid-template-columns: 1fr;
  }
}


/* V4.9 language flag buttons */
.language-select-wrap {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.45rem;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(10, 18, 32, 0.9);
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}

.language-flag-btn {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
}

.language-flag-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(129, 245, 102, 0.55);
  box-shadow: 0 0 0 3px rgba(129, 245, 102, 0.12);
}

.language-flag-btn.active {
  background: rgba(129, 245, 102, 0.12);
  border-color: rgba(129, 245, 102, 0.72);
  box-shadow: 0 0 0 3px rgba(129, 245, 102, 0.16);
}

.language-flag-img {
  width: 20px;
  height: 14px;
  object-fit: cover;
  border-radius: 2px;
  display: block;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.16);
}

@media (max-width: 900px) {
  .language-select-wrap {
    gap: 0.3rem;
    padding: 0.3rem;
  }

  .language-flag-btn {
    width: 28px;
    height: 28px;
  }

  .language-flag-img {
    width: 18px;
    height: 12px;
  }
}

.language-select, .language-flag { display:none !important; }


/* V5.0 tester readability fix: keep tester dark after file upload */
.page-card.wide-page,
.page-card.wide-page .panel,
.page-card.wide-page .result-panel,
.page-card.wide-page .form-panel {
  background-color: rgba(13, 19, 31, 0.92) !important;
}

.page-card.wide-page .panel {
  background:
    linear-gradient(180deg, rgba(255,255,255,.065), rgba(255,255,255,.035)),
    rgba(13, 19, 31, 0.94) !important;
}

.page-card.wide-page .verdict.good,
.page-card.wide-page .hand-card.good,
.page-card.wide-page .reason.good,
.page-card.wide-page .session-summary,
.page-card.wide-page .tester-file-note {
  background: rgba(255,255,255,.045) !important;
}

.page-card.wide-page .verdict.good {
  color: var(--primary);
  border-color: rgba(134,239,125,.25);
}

.page-card.wide-page .hand-card.good {
  border-color: rgba(134,239,125,.24);
  box-shadow: inset 3px 0 0 rgba(134,239,125,.45);
}

.page-card.wide-page .hand-card.mistake {
  box-shadow: inset 3px 0 0 rgba(251,113,133,.45);
}

.page-card.wide-page .hand-card.review {
  box-shadow: inset 3px 0 0 rgba(253,230,138,.45);
}

.page-card.wide-page .reason.good,
.page-card.wide-page .reason.bad,
.page-card.wide-page .reason.review,
.page-card.wide-page .reason.info {
  background: rgba(8,11,19,.32) !important;
}

.page-card.wide-page .metric-row,
.page-card.wide-page .loaded-file,
.page-card.wide-page .hh-textarea {
  background: rgba(8,11,19,.36) !important;
}

.page-card.wide-page .file-upload {
  background: rgba(134,239,125,.055) !important;
  border-color: rgba(134,239,125,.42);
}

/* V5.0 premium flag buttons */
.language-select-wrap {
  gap: 0.55rem;
  padding: 0.42rem 0.52rem;
  background:
    linear-gradient(180deg, rgba(255,255,255,.075), rgba(255,255,255,.035)),
    rgba(10, 18, 32, 0.94);
  border-color: rgba(255,255,255,0.16);
  box-shadow: 0 12px 28px rgba(0,0,0,.20), inset 0 1px 0 rgba(255,255,255,.08);
}

.language-flag-btn {
  width: 34px;
  height: 34px;
  overflow: hidden;
}

.language-flag-btn.active {
  transform: translateY(-1px);
}

.language-flag-img {
  width: 23px;
  height: 16px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(255,255,255,.22), 0 6px 12px rgba(0,0,0,.22);
}


/* V5.1 security/privacy polish */
.privacy-note {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  border: 1px solid rgba(96,165,250,.20);
  background: rgba(96,165,250,.075);
  color: var(--muted);
  border-radius: 14px;
  padding: 10px 12px;
  line-height: 1.45;
  font-size: 12px;
}

.privacy-note svg {
  flex: 0 0 auto;
  color: var(--accent);
  margin-top: 1px;
}

.privacy-note.error {
  border-color: rgba(251,113,133,.30);
  background: rgba(251,113,133,.085);
  color: #fecdd3;
}

.privacy-note.error svg {
  color: var(--danger);
}

/* Extra upload readability hardening */
.page-card.wide-page .hand-review-list {
  background: transparent !important;
}

.page-card.wide-page .hand-card,
.page-card.wide-page .hand-card.good,
.page-card.wide-page .hand-card.review,
.page-card.wide-page .hand-card.mistake {
  color: var(--text) !important;
}


/* V5.3 final public polish */
.topbar {
  border-radius: 0 0 18px 18px;
}

.desktop-nav {
  box-shadow: 0 18px 38px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.05);
}

.brand {
  border-radius: 18px;
  padding: 6px 8px;
  transition: transform .18s ease, background .18s ease;
}

.brand:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,.035);
}

.hero-live-panel .big-metric strong,
.live-odds-card strong {
  text-shadow: 0 12px 32px rgba(134,239,125,.22);
}

.hero-sub-label {
  letter-spacing: .08em;
}

.monetization-ready,
.pricing-preview {
  box-shadow: inset 0 1px 0 rgba(255,255,255,.035), 0 22px 55px rgba(0,0,0,.12);
}

.site-footer {
  border-top: 1px solid rgba(255,255,255,.10);
  margin-top: 42px;
  padding: 22px 0 8px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.site-footer > div:first-child {
  display: grid;
  gap: 4px;
}

.site-footer .footer-actions {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
  width: auto !important;
}

.site-footer .footer-actions button {
  min-width: auto;
  white-space: nowrap;
  padding: 9px 12px;
  background: rgba(255,255,255,.045);
  border-color: rgba(255,255,255,.11);
  color: var(--muted);
  transition: transform .18s ease, border-color .18s ease, color .18s ease, background .18s ease;
}

.site-footer .footer-actions button:hover {
  transform: translateY(-1px);
  color: var(--text);
  border-color: rgba(134,239,125,.32);
  background: rgba(134,239,125,.07);
}

.contact-page .section-header {
  margin-bottom: 18px;
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(360px, 680px) minmax(280px, 1fr);
  gap: 16px;
  align-items: stretch;
}

.contact-info-card {
  border: 1px solid var(--border);
  background:
    radial-gradient(circle at top right, rgba(134,239,125,.14), transparent 36%),
    rgba(255,255,255,.055);
  border-radius: 22px;
  padding: 22px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-info-card h3 {
  margin: 14px 0 8px;
}

.contact-info-card p {
  color: var(--muted);
  line-height: 1.55;
}

.contact-placeholder input,
.contact-placeholder textarea {
  background: rgba(8,11,19,.34) !important;
}

.article-card {
  transition: transform .18s ease, border-color .18s ease, background .18s ease;
}

.article-card:hover {
  transform: translateY(-2px);
  border-color: rgba(134,239,125,.26);
  background: rgba(255,255,255,.065);
}

@media (max-width: 980px) {
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .site-footer .footer-actions {
    justify-content: flex-start;
  }

  .contact-layout {
    grid-template-columns: 1fr;
  }
}


/* V5.4 SEO Guides Pack */
.seo-guides-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 24px;
}

.seo-guide-card {
  border: 1px solid rgba(255,255,255,.11);
  background:
    radial-gradient(circle at top right, rgba(134,239,125,.13), transparent 34%),
    rgba(255,255,255,.055);
  border-radius: 22px;
  padding: 18px;
  min-height: 235px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform .18s ease, border-color .18s ease, background .18s ease;
}

.seo-guide-card:hover {
  transform: translateY(-3px);
  border-color: rgba(134,239,125,.30);
  background:
    radial-gradient(circle at top right, rgba(134,239,125,.18), transparent 38%),
    rgba(255,255,255,.07);
}

.seo-guide-card-top span,
.seo-keywords span {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(134,239,125,.22);
  background: rgba(134,239,125,.075);
  color: var(--primary);
  border-radius: 999px;
  padding: 6px 9px;
  font-size: 11px;
  font-weight: 900;
}

.seo-guide-card h3 {
  margin: 14px 0 8px;
  line-height: 1.18;
}

.seo-guide-card p {
  color: var(--muted);
  line-height: 1.52;
}

.seo-guide-card button {
  border: 1px solid rgba(134,239,125,.24);
  background: rgba(134,239,125,.08);
  color: var(--primary);
  border-radius: 999px;
  padding: 10px 12px;
  font-weight: 950;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 14px;
}

.guides-subsection {
  margin-top: 8px;
}

.guides-subsection > h3 {
  margin-bottom: 12px;
}

.seo-guide-header {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
}

.seo-guide-icon {
  width: 74px;
  height: 74px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, rgba(134,239,125,.16), rgba(110,231,255,.08));
  border: 1px solid rgba(134,239,125,.20);
  color: var(--primary);
  flex: 0 0 auto;
}

.seo-keywords {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.seo-article {
  display: grid;
  gap: 18px;
}

.seo-intro {
  color: var(--text);
  font-size: 18px;
  line-height: 1.62;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.045);
  padding: 18px;
  border-radius: 22px;
}

.seo-section-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.seo-section-card {
  border: 1px solid var(--border);
  background: rgba(255,255,255,.055);
  border-radius: 22px;
  padding: 18px;
}

.seo-section-card h3 {
  margin: 12px 0 8px;
}

.seo-section-card p {
  color: var(--muted);
  line-height: 1.56;
}

.seo-mini-icon {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--primary);
  background: rgba(134,239,125,.09);
  border: 1px solid rgba(134,239,125,.18);
}

.seo-takeaways {
  border: 1px solid rgba(134,239,125,.20);
  background: rgba(134,239,125,.055);
  border-radius: 24px;
  padding: 18px;
}

.takeaway-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.takeaway-item {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: var(--muted);
}

.takeaway-item svg {
  color: var(--primary);
  flex: 0 0 auto;
  margin-top: 2px;
}

.seo-cta-card {
  border: 1px solid rgba(110,231,255,.22);
  background:
    radial-gradient(circle at top right, rgba(110,231,255,.14), transparent 34%),
    rgba(110,231,255,.055);
  border-radius: 24px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.seo-cta-card p {
  color: var(--muted);
  margin: 6px 0 0;
  line-height: 1.5;
}

@media (max-width: 980px) {
  .seo-guides-grid,
  .seo-section-grid {
    grid-template-columns: 1fr 1fr;
  }

  .seo-cta-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 700px) {
  .seo-guides-grid,
  .seo-section-grid,
  .takeaway-list {
    grid-template-columns: 1fr;
  }

  .seo-guide-header {
    align-items: flex-start;
  }

  .seo-guide-icon {
    display: none;
  }
}


.seo-guide-link {
  border: 1px solid rgba(134,239,125,.24);
  background: rgba(134,239,125,.08);
  color: var(--primary);
  border-radius: 999px;
  padding: 10px 12px;
  font-weight: 950;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 14px;
  text-decoration: none;
}
.seo-guide-link:hover {
  border-color: rgba(134,239,125,.40);
  background: rgba(134,239,125,.12);
}


/* V5.6 Leak Finder Pro Preview */
.leak-pro-page {
  gap: 18px;
}

.leak-pro-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
  gap: 18px;
  align-items: stretch;
  border: 1px solid rgba(167,139,250,.30);
  background:
    radial-gradient(circle at top right, rgba(167,139,250,.22), transparent 32%),
    radial-gradient(circle at bottom left, rgba(134,239,125,.12), transparent 34%),
    rgba(255,255,255,.055);
  border-radius: 30px;
  padding: 28px;
  box-shadow: 0 28px 80px rgba(0,0,0,.24);
}

.leak-pro-copy h2 {
  font-size: clamp(44px, 6vw, 82px);
  line-height: .95;
  margin: 16px 0 16px;
  letter-spacing: -0.055em;
}

.leak-pro-copy p {
  max-width: 800px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.58;
}

.leak-pro-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.leak-anchor {
  text-decoration: none;
}

.leak-trust-row {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.leak-trust-row span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(134,239,125,.22);
  background: rgba(134,239,125,.075);
  color: var(--primary);
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 950;
}

.leak-pro-device {
  border: 1px solid rgba(255,255,255,.16);
  background:
    linear-gradient(180deg, rgba(255,255,255,.075), rgba(255,255,255,.045)),
    #111827;
  border-radius: 28px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 26px 70px rgba(0,0,0,.24);
}

.device-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .07em;
}

.device-topline span,
.device-topline strong {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.device-topline strong {
  color: #061006;
  background: var(--primary);
  border-radius: 999px;
  padding: 6px 9px;
}

.device-main-score {
  border: 1px solid rgba(167,139,250,.26);
  background:
    radial-gradient(circle at top left, rgba(167,139,250,.18), transparent 36%),
    rgba(8,11,19,.38);
  border-radius: 22px;
  padding: 16px;
}

.device-main-score span {
  display: block;
  color: var(--muted);
  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 8px;
}

.device-main-score strong {
  display: block;
  color: #d8b4fe;
  font-size: 28px;
  line-height: 1.05;
}

.device-main-score p {
  color: var(--muted);
  margin: 10px 0 0;
  line-height: 1.45;
}

.device-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 8px;
}

.device-metrics div {
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.055);
  border-radius: 18px;
  padding: 12px;
}

.device-metrics strong {
  display: block;
  color: var(--primary);
  font-size: 26px;
  line-height: 1;
}

.device-metrics span {
  display: block;
  color: var(--muted);
  font-size: 11px;
  margin-top: 7px;
  line-height: 1.25;
  font-weight: 800;
}

.device-leak-list {
  display: grid;
  gap: 8px;
}

.device-leak-list div {
  border-radius: 16px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
  color: var(--text);
}

.risk-high {
  background: rgba(251,113,133,.12);
  border: 1px solid rgba(251,113,133,.28);
}

.risk-mid {
  background: rgba(250,204,21,.10);
  border: 1px solid rgba(250,204,21,.24);
}

.risk-good {
  background: rgba(134,239,125,.10);
  border: 1px solid rgba(134,239,125,.24);
}

.leak-section {
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
  border-radius: 28px;
  padding: 22px;
}

.section-header.compact {
  align-items: flex-start;
  margin-bottom: 16px;
}

.section-header.compact h2 {
  font-size: 34px;
}

.leak-type-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 14px;
}

.leak-type-card {
  border: 1px solid rgba(255,255,255,.11);
  background:
    radial-gradient(circle at top right, rgba(167,139,250,.12), transparent 35%),
    rgba(255,255,255,.055);
  border-radius: 22px;
  padding: 18px;
  min-height: 220px;
  transition: transform .18s ease, border-color .18s ease, background .18s ease;
}

.leak-type-card:hover {
  transform: translateY(-2px);
  border-color: rgba(167,139,250,.34);
  background:
    radial-gradient(circle at top right, rgba(167,139,250,.18), transparent 38%),
    rgba(255,255,255,.07);
}

.leak-type-card h3,
.workflow-step h3,
.leak-plan-card h3 {
  margin: 14px 0 8px;
}

.leak-type-card p,
.workflow-step p,
.leak-plan-card p {
  color: var(--muted);
  line-height: 1.55;
}

.leak-workflow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 12px;
}

.workflow-step {
  position: relative;
  border: 1px solid rgba(110,231,255,.16);
  background: rgba(110,231,255,.045);
  border-radius: 22px;
  padding: 18px;
  min-height: 220px;
}

.workflow-number {
  position: absolute;
  right: 15px;
  top: 13px;
  color: rgba(255,255,255,.16);
  font-size: 32px;
  font-weight: 1000;
}

.leak-premium-section {
  border-color: rgba(134,239,125,.20);
  background:
    radial-gradient(circle at top right, rgba(134,239,125,.12), transparent 32%),
    rgba(134,239,125,.035);
}

.leak-plan-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 14px;
}

.leak-plan-card {
  border: 1px solid rgba(134,239,125,.20);
  background: rgba(8,11,19,.36);
  border-radius: 24px;
  padding: 20px;
}

.leak-plan-card > span {
  display: inline-flex;
  color: var(--muted);
  font-size: 12px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.leak-plan-card > strong {
  display: block;
  color: var(--primary);
  font-size: 30px;
  line-height: 1.1;
  margin: 10px 0;
}

.plan-bullets {
  display: grid;
  gap: 9px;
  margin-top: 16px;
}

.plan-bullets div {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--text);
  font-weight: 850;
}

.plan-bullets svg {
  color: var(--primary);
}

.leak-disclaimer {
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.045);
  border-radius: 20px;
  padding: 14px 16px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--muted);
}

.leak-disclaimer svg {
  color: var(--primary);
  flex: 0 0 auto;
  margin-top: 2px;
}

.leak-disclaimer p {
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 1100px) {
  .leak-pro-hero {
    grid-template-columns: 1fr;
  }

  .leak-type-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .leak-workflow {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}

@media (max-width: 720px) {
  .leak-pro-hero {
    padding: 20px;
  }

  .leak-pro-copy h2 {
    font-size: 46px;
  }

  .device-metrics,
  .leak-type-grid,
  .leak-workflow,
  .leak-plan-grid {
    grid-template-columns: 1fr;
  }

  .device-topline {
    align-items: flex-start;
    flex-direction: column;
  }
}


/* V5.6.1 Leak Finder single PRO download block */
.leak-download-card {
  border: 1px solid rgba(167,139,250,.28);
  background:
    radial-gradient(circle at top right, rgba(167,139,250,.18), transparent 34%),
    radial-gradient(circle at bottom left, rgba(134,239,125,.10), transparent 32%),
    rgba(8,11,19,.40);
  border-radius: 26px;
  padding: 22px;
  display: grid;
  gap: 18px;
}

.download-card-main {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.download-lock {
  width: 58px;
  height: 58px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  color: var(--primary);
  background: rgba(134,239,125,.10);
  border: 1px solid rgba(134,239,125,.24);
  flex: 0 0 auto;
}

.download-card-main span {
  display: inline-flex;
  color: #d8b4fe;
  font-size: 12px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.download-card-main h3 {
  margin: 8px 0;
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.02;
}

.download-card-main p {
  color: var(--muted);
  line-height: 1.55;
  max-width: 900px;
  margin: 0;
}

.download-features {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 10px;
}

.download-features div {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.045);
  border-radius: 16px;
  padding: 12px;
  font-weight: 900;
  color: var(--text);
}

.download-features svg {
  color: var(--primary);
  flex: 0 0 auto;
}

.download-locked-button {
  justify-self: flex-start;
  border: 1px solid rgba(255,255,255,.16);
  background: rgba(255,255,255,.10);
  color: var(--muted);
  border-radius: 999px;
  padding: 13px 18px;
  font-weight: 1000;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: not-allowed;
  opacity: .85;
}

@media (max-width: 900px) {
  .download-features {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}

@media (max-width: 560px) {
  .download-card-main {
    flex-direction: column;
  }

  .download-features {
    grid-template-columns: 1fr;
  }
}
