import React from 'react';
import { BookOpen, AlertTriangle, Target, Calculator, ShieldCheck, Brain } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

export default function GuidesPage() {
  const { language } = useLanguage();
  const isItalian = language === 'it';

  const guides = isItalian ? [
    {
      icon: Calculator,
      title: 'Poker odds: cosa significano davvero',
      body: 'Le odds non prevedono la prossima carta: indicano quante volte una decisione tende a funzionare nel lungo periodo. Usale per capire se una giocata è sostenibile, non per cercare certezze.'
    },
    {
      icon: Target,
      title: 'Outs e progetti: quando inseguire ha senso',
      body: 'Un out è una carta che migliora la tua mano. Non tutti gli outs sono puliti: alcuni ti migliorano ma possono comunque farti perdere contro mani più forti.'
    },
    {
      icon: Calculator,
      title: 'Pot odds: il prezzo corretto del call',
      body: 'Prima di chiamare devi confrontare quanto devi mettere nel piatto con quanto puoi vincere. Se la tua equity stimata è sotto la soglia richiesta, il call tende a perdere valore nel lungo periodo.'
    },
    {
      icon: AlertTriangle,
      title: 'Errori comuni dei principianti',
      body: 'I leak più frequenti sono giocare troppe mani, chiamare troppo al river, inseguire progetti senza prezzo corretto e sopravvalutare mani come top pair con kicker debole.'
    },
    {
      icon: Brain,
      title: 'Errore o varianza?',
      body: 'Non ogni mano persa è giocata male. L’obiettivo della review post-sessione è distinguere gli errori tecnici dagli spot inevitabili, dai cooler e dalla normale varianza.'
    },
    {
      icon: ShieldCheck,
      title: 'Blackjack basic strategy',
      body: 'La strategia base aiuta a ridurre gli errori nelle decisioni hit, stand, double e split. È uno strumento di studio, non una promessa di profitto.'
    },
  ] : [
    {
      icon: Calculator,
      title: 'Poker odds: what they really mean',
      body: 'Odds do not predict the next card. They show how often a decision tends to work over the long run.'
    },
    {
      icon: Target,
      title: 'Outs and draws',
      body: 'An out improves your hand, but not every out is clean. Some cards improve you while still losing to stronger hands.'
    },
    {
      icon: Calculator,
      title: 'Pot odds',
      body: 'Compare the amount to call with the pot you can win. If your equity is below the required threshold, the call usually loses value long term.'
    },
    {
      icon: AlertTriangle,
      title: 'Common beginner mistakes',
      body: 'Typical leaks include playing too many hands, calling too much on the river and chasing draws without the right price.'
    },
    {
      icon: Brain,
      title: 'Mistake or variance?',
      body: 'Not every lost hand is a mistake. Post-session review helps separate technical errors from coolers, bad beats and normal variance.'
    },
    {
      icon: ShieldCheck,
      title: 'Blackjack basic strategy',
      body: 'Basic strategy reduces decision mistakes in hit, stand, double and split spots. It is educational, not a profit guarantee.'
    },
  ];

  return (
    <section className="page-card">
      <div className="section-header">
        <div>
          <span className="eyebrow"><BookOpen size={14} /> Learning Center</span>
          <h2>{isItalian ? 'Guide pratiche' : 'Practical guides'}</h2>
          <p>
            {isItalian
              ? 'Concetti semplici per leggere meglio odds, pot odds, outs e review delle mani. La parte educativa serve a rendere il sito utile anche prima della futura app PC.'
              : 'Simple concepts to understand odds, pot odds, outs and hand reviews before moving to the future desktop app.'}
          </p>
        </div>
      </div>

      <div className="article-list">
        {guides.map(({ icon: Icon, title, body }) => (
          <article key={title} className="article-card">
            <div className="feature-icon"><Icon size={20} /></div>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="monetization-ready">
        <h3>{isItalian ? 'Obiettivo delle guide' : 'Goal of the guides'}</h3>
        <p>
          {isItalian
            ? 'Le guide devono aiutare l’utente a capire il perché delle decisioni: non solo “call o fold”, ma il ragionamento dietro equity, prezzo del call, posizione e varianza.'
            : 'The guides should help users understand the reasoning behind decisions: not just call or fold, but equity, call price, position and variance.'}
        </p>
      </div>
    </section>
  );
}
