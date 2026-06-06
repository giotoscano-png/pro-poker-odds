import React from 'react';
import { MonitorDown, FileText, Brain, TrendingUp, Lock, ArrowRight } from 'lucide-react';

export default function DesktopPage({ setPage }) {
  return (
    <section className="page-card">
      <div className="desktop-hero">
        <span className="eyebrow"><MonitorDown size={14} /> Futuro programma PC</span>
        <h2>Poker Leak Finder</h2>
        <p>
          L’obiettivo della versione desktop sarà analizzare le mani già giocate e trasformarle in un report chiaro:
          possibili errori, spot da rivedere, cooler, bad beat e situazioni in cui hai perso pur giocando correttamente.
        </p>
        <button className="primary-action" onClick={() => setPage('tester')}>
          Prova il demo Analizza Mani <ArrowRight size={18} />
        </button>
      </div>

      <div className="roadmap-grid">
        <Roadmap
          icon={FileText}
          title="Import hand history"
          text="Caricamento delle hand history salvate dal client poker. Analisi post-sessione, senza leggere il tavolo live."
        />
        <Roadmap
          icon={Brain}
          title="Errore vs varianza"
          text="Classificazione degli spot: possibile errore, decisione corretta, cooler, bad beat o mano da rivedere."
        />
        <Roadmap
          icon={TrendingUp}
          title="Leak dashboard"
          text="Individuazione dei leak ricorrenti: call troppo larghi, river call costosi, preflop passivo, sizing incoerenti."
        />
        <Roadmap
          icon={Lock}
          title="Versione premium"
          text="La web app resta gratuita; il programma PC potrà diventare il prodotto avanzato per chi vuole report più completi."
        />
      </div>

      <div className="pricing-preview">
        <h3>Modello futuro</h3>
        <div className="price-cards clean-model">
          <div>
            <span>Web app gratuita</span>
            <strong>Free</strong>
            <p>Odds calculator, pot odds, guide e demo Analizza Mani.</p>
          </div>
          <div>
            <span>Desktop standard</span>
            <strong>Report</strong>
            <p>Import hand history, analisi sessione e review mano per mano.</p>
          </div>
          <div>
            <span>Desktop avanzato</span>
            <strong>Leak Finder</strong>
            <p>Storico, leak ricorrenti, export report e statistiche personali.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap({ icon: Icon, title, text }) {
  return (
    <article className="feature-card">
      <div className="feature-icon"><Icon size={20} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
