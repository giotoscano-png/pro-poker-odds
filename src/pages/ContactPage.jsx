import React from 'react';
import { Mail, MessageSquare, Lightbulb } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="page-card">
      <div className="section-header">
        <div>
          <span className="eyebrow"><MessageSquare size={14} /> Contatti</span>
          <h2>Feedback e suggerimenti</h2>
          <p>
            Questa è una versione MVP. Il modo migliore per migliorarla è provarla con hand history reali
            e raccogliere feedback su cosa il report dovrebbe spiegare meglio.
          </p>
        </div>
      </div>

      <div className="article-list">
        <article className="article-card">
          <div className="feature-icon"><Mail size={20} /></div>
          <div>
            <h3>Email di contatto</h3>
            <p>Per ora puoi inserire qui una mail dedicata quando decidi il nome definitivo del progetto.</p>
            <p className="muted-text">Esempio: contact@propokerodds.com quando avrai un dominio.</p>
          </div>
        </article>

        <article className="article-card">
          <div className="feature-icon"><Lightbulb size={20} /></div>
          <div>
            <h3>Cosa testare adesso</h3>
            <p>Carica più mani reali possibile nel demo “Analizza Mani” e verifica se le etichette “Possibile errore”, “Da rivedere” e “Corretto / varianza” sono utili.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
