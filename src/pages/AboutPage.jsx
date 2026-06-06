import React from 'react';
import { Brain, ShieldCheck, MonitorDown, BookOpen } from 'lucide-react';

export default function AboutPage({ setPage }) {
  return (
    <section className="page-card">
      <div className="section-header">
        <div>
          <span className="eyebrow"><Brain size={14} /> About</span>
          <h2>Perché esiste PRO Poker Odds</h2>
          <p>
            L’obiettivo è aiutare i giocatori a studiare meglio le decisioni, non a ricevere aiuti live mentre giocano.
            Il sito combina strumenti gratuiti, guide e un primo demo di analisi delle mani già giocate.
          </p>
        </div>
      </div>

      <div className="article-list">
        <article className="article-card">
          <div className="feature-icon"><Brain size={20} /></div>
          <div>
            <h3>Studio post-sessione</h3>
            <p>La parte più importante è capire dopo la sessione se hai perso per errore tecnico, cooler, bad beat o semplice varianza.</p>
          </div>
        </article>

        <article className="article-card">
          <div className="feature-icon"><ShieldCheck size={20} /></div>
          <div>
            <h3>Nessuna assistenza live</h3>
            <p>Il progetto non è pensato per leggere tavoli in tempo reale o suggerire mosse mentre giochi. È un prodotto educativo e post-sessione.</p>
          </div>
        </article>

        <article className="article-card">
          <div className="feature-icon"><MonitorDown size={20} /></div>
          <div>
            <h3>Roadmap: Poker Leak Finder</h3>
            <p>La futura versione PC potrà importare hand history, creare report sessione e individuare leak ricorrenti nel tuo gioco.</p>
          </div>
        </article>

        <article className="article-card">
          <div className="feature-icon"><BookOpen size={20} /></div>
          <div>
            <h3>Contenuti e monetizzazione</h3>
            <p>Il sito gratuito crescerà con guide, strumenti e contenuti SEO. Solo dopo potrà essere monetizzato con ads o prodotti premium.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
