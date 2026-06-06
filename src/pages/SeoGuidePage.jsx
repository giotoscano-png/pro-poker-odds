import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Calculator, CheckCircle2, Lightbulb, ShieldCheck, Target, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const guideMeta = {
  potOdds: { icon: Calculator, tool: 'potodds', route: '/guides/pot-odds-explained' },
  equity: { icon: Target, tool: 'poker', route: '/guides/poker-equity-explained' },
  flushDraw: { icon: Target, tool: 'poker', route: '/guides/flush-draw-odds' },
  straightDraw: { icon: Target, tool: 'poker', route: '/guides/straight-draw-odds' },
  mistakes: { icon: AlertTriangle, tool: 'tester', route: '/guides/top-10-poker-mistakes' },
  blackjack: { icon: ShieldCheck, tool: 'blackjack', route: '/guides/blackjack-hit-or-stand' },
};

const guideContent = {
  it: {
    potOdds: {
      title: 'Pot Odds Explained: quando un call è profittevole',
      desc: 'Impara a confrontare il prezzo del call con il piatto e la tua equity stimata.',
      keywords: ['pot odds', 'equity richiesta', 'call profittevole', 'Texas Hold’em'],
      intro: 'Le pot odds ti dicono quanto devi investire rispetto a quanto puoi vincere. Se la tua equity è superiore all’equity richiesta, il call può essere corretto nel lungo periodo.',
      sections: [
        ['Formula base', 'Equity richiesta = importo da chiamare / (piatto + importo da chiamare). Se devi chiamare 20 su un piatto che diventerà 100, ti serve almeno il 20% di equity.'],
        ['Esempio pratico', 'Il piatto è 80 e devi chiamare 20. Il piatto finale sarà 100. Ti serve il 20% di equity. Se il tuo progetto ha circa il 30%, il call può avere senso.'],
        ['Errore comune', 'Molti principianti guardano solo “ho un progetto”, ma non guardano il prezzo. Anche un buon draw può diventare un call sbagliato se stai pagando troppo caro.'],
      ],
      takeaways: ['Calcola sempre il prezzo del call.', 'Confronta pot odds ed equity.', 'Considera implied odds e posizione.', 'Usa il calcolatore Pot Odds per verificare lo spot.'],
      cta: 'Apri il Pot Odds Calculator',
    },
    equity: {
      title: 'Poker Equity Explained: perché puoi perdere anche giocando bene',
      desc: 'Capisci cos’è l’equity e perché il risultato di una singola mano non racconta tutta la verità.',
      keywords: ['poker equity', 'varianza', 'odds poker', 'decisioni corrette'],
      intro: 'L’equity è la tua quota teorica del piatto in base alla probabilità di vincere la mano allo showdown. Avere il 70% non significa vincere sempre: significa vincere spesso nel lungo periodo.',
      sections: [
        ['Equity vs risultato', 'Puoi avere il 80% e perdere comunque una mano. Questo non rende la decisione sbagliata: è varianza.'],
        ['Esempio semplice', 'AA preflop contro una mano casuale è molto favorita, ma non vince il 100% delle volte. Per questo il poker va studiato sulle decisioni, non solo sui risultati.'],
        ['Come usarla', 'Prima di chiamare, confronta la tua equity stimata con l’equity richiesta dalle pot odds. Se la tua equity è più alta, la decisione può essere profittevole.'],
      ],
      takeaways: ['Equity alta non significa certezza.', 'Analizza decisione, non solo risultato.', 'Equity e pot odds lavorano insieme.', 'Usa Poker Odds per stimare la mano.'],
      cta: 'Apri Poker Odds',
    },
    flushDraw: {
      title: 'Flush Draw Odds: probabilità di chiudere colore',
      desc: 'Quante chance hai di completare un progetto colore al turn o entro il river.',
      keywords: ['flush draw odds', 'progetto colore', '9 outs', 'odds colore poker'],
      intro: 'Un classico progetto colore al flop ha di solito 9 outs, cioè 9 carte che possono completare il colore.',
      sections: [
        ['Probabilità tipica', 'Con 9 outs al flop hai circa il 19% di chiudere al turn e circa il 35% entro il river.'],
        ['Esempio', 'Hai A♥ 9♥ e il flop è K♥ 7♥ 2♣. Qualsiasi cuori tra le carte rimanenti completa il colore.'],
        ['Quando chiamare', 'Il call è buono solo se il prezzo è corretto. Se devi pagare troppo rispetto al piatto, anche un flush draw può diventare costoso.'],
      ],
      takeaways: ['Flush draw standard = circa 9 outs.', 'Turn singolo ≈ 19%.', 'Turn + river ≈ 35%.', 'Controlla sempre le pot odds.'],
      cta: 'Calcola la tua mano',
    },
    straightDraw: {
      title: 'Straight Draw Odds: open-ended vs gutshot',
      desc: 'La differenza tra progetto di scala bilaterale e incastro, con outs e probabilità.',
      keywords: ['straight draw odds', 'open ended', 'gutshot', 'scala poker'],
      intro: 'Non tutti i progetti di scala hanno lo stesso valore. Un open-ended straight draw è molto più forte di un gutshot.',
      sections: [
        ['Open-ended', 'Un progetto bilaterale ha di solito 8 outs. Esempio: hai 9-10 su board J-8-2, puoi chiudere con Q o 7.'],
        ['Gutshot', 'Un incastro ha di solito 4 outs. Esempio: hai 9-10 su board Q-8-2, ti serve solo J.'],
        ['Impatto sulle decisioni', 'Con 8 outs puoi difendere più spesso, ma con 4 outs devi stare molto attento al prezzo del call.'],
      ],
      takeaways: ['Open-ended ≈ 8 outs.', 'Gutshot ≈ 4 outs.', 'Più outs non significa call automatico.', 'Prezzo del call e posizione contano.'],
      cta: 'Apri Poker Odds',
    },
    mistakes: {
      title: 'Top 10 errori poker per principianti',
      desc: 'Gli errori più comuni che costano chip: limp passivo, call al river larghi e draw pagati troppo.',
      keywords: ['errori poker principianti', 'leak poker', 'river call', 'hand review'],
      intro: 'Il modo più veloce per migliorare è individuare gli errori ripetuti. Molti principianti non perdono per una singola mano, ma per pattern che si ripetono.',
      sections: [
        ['Errori più comuni', 'Giocare troppe mani, limpare troppo, inseguire draw senza pot odds, chiamare river troppo larghi e ignorare posizione sono leak molto frequenti.'],
        ['Perché sono costosi', 'Gli errori piccoli ripetuti per centinaia di mani pesano più di un singolo cooler.'],
        ['Come correggerli', 'Rivedi le mani dopo la sessione, cerca pattern ricorrenti e separa gli errori veri dalla varianza.'],
      ],
      takeaways: ['Non inseguire ogni progetto.', 'Evita limp passivi senza piano.', 'I river call sono costosi.', 'Rivedi le hand history dopo la sessione.'],
      cta: 'Analizza le tue mani',
    },
    blackjack: {
      title: 'Blackjack Hit or Stand Chart: guida rapida',
      desc: 'Come leggere una decisione hit/stand usando una versione semplificata della basic strategy.',
      keywords: ['blackjack hit or stand', 'basic strategy', 'blackjack chart', 'dealer upcard'],
      intro: 'Nel blackjack la decisione dipende dalla tua mano, dalla carta visibile del dealer e dal tipo di mano: hard, soft o coppia.',
      sections: [
        ['Hard hand', 'Una mano hard non contiene un asso flessibile. Più il totale è basso, più spesso devi fare hit.'],
        ['Soft hand', 'Una mano soft contiene un asso che può valere 11 senza sballare. È più flessibile e permette più opzioni.'],
        ['Dealer upcard', 'Contro una carta forte del dealer devi spesso giocare in modo più prudente. Contro carte deboli puoi far lavorare il dealer.'],
      ],
      takeaways: ['Distingui hard e soft hand.', 'Guarda sempre la carta del dealer.', 'Le coppie hanno regole dedicate.', 'Il trainer è educativo, non garantisce vincite.'],
      cta: 'Apri Blackjack Trainer',
    },
  },
  en: {
    potOdds: {
      title: 'Pot Odds Explained: how to know if a poker call is profitable',
      desc: 'Learn how to compare the call price with the pot and your estimated equity.',
      keywords: ['pot odds', 'required equity', 'profitable call', 'Texas Hold’em'],
      intro: 'Pot odds tell you how much you must invest compared with how much you can win. If your equity is higher than the required equity, the call can be correct long term.',
      sections: [
        ['Basic formula', 'Required equity = amount to call / (pot + amount to call). If you call 20 into a pot that will become 100, you need at least 20% equity.'],
        ['Practical example', 'The pot is 80 and you must call 20. Final pot: 100. You need 20% equity. If your draw has around 30%, the call can make sense.'],
        ['Common mistake', 'Many beginners only think “I have a draw”, but they do not check the price. Even a good draw can become a bad call if it is too expensive.'],
      ],
      takeaways: ['Always calculate the call price.', 'Compare pot odds and equity.', 'Consider implied odds and position.', 'Use the Pot Odds Calculator to verify the spot.'],
      cta: 'Open Pot Odds Calculator',
    },
    equity: {
      title: 'Poker Equity Explained: why you can lose even when you play well',
      desc: 'Understand what equity means and why one hand result does not tell the whole story.',
      keywords: ['poker equity', 'variance', 'poker odds', 'correct decisions'],
      intro: 'Equity is your theoretical share of the pot based on your chance of winning at showdown. Having 70% does not mean winning every time: it means winning often long term.',
      sections: [
        ['Equity vs result', 'You can have 80% equity and still lose one hand. That does not make the decision wrong: it is variance.'],
        ['Simple example', 'AA preflop against a random hand is a big favourite, but it does not win 100% of the time. Poker should be studied through decisions, not only results.'],
        ['How to use it', 'Before calling, compare your estimated equity with the equity required by pot odds. If your equity is higher, the decision can be profitable.'],
      ],
      takeaways: ['High equity is not certainty.', 'Analyze the decision, not only the result.', 'Equity and pot odds work together.', 'Use Poker Odds to estimate the hand.'],
      cta: 'Open Poker Odds',
    },
    flushDraw: {
      title: 'Flush Draw Odds: chance to complete a flush',
      desc: 'How likely you are to complete a flush draw on the turn or by the river.',
      keywords: ['flush draw odds', 'flush draw', '9 outs', 'poker flush odds'],
      intro: 'A classic flush draw on the flop usually has 9 outs: 9 remaining cards that can complete the flush.',
      sections: [
        ['Typical probability', 'With 9 outs on the flop you have about 19% to hit on the turn and about 35% by the river.'],
        ['Example', 'You have A♥ 9♥ and the flop is K♥ 7♥ 2♣. Any remaining heart completes your flush.'],
        ['When to call', 'The call is good only if the price is correct. If you pay too much compared with the pot, even a flush draw can be costly.'],
      ],
      takeaways: ['Standard flush draw = about 9 outs.', 'One card to turn ≈ 19%.', 'Turn + river ≈ 35%.', 'Always check pot odds.'],
      cta: 'Calculate your hand',
    },
    straightDraw: {
      title: 'Straight Draw Odds: open-ended vs gutshot',
      desc: 'The difference between open-ended straight draws and gutshots, with outs and probabilities.',
      keywords: ['straight draw odds', 'open-ended', 'gutshot', 'poker straight draw'],
      intro: 'Not all straight draws have the same value. An open-ended straight draw is much stronger than a gutshot.',
      sections: [
        ['Open-ended', 'An open-ended draw usually has 8 outs. Example: you hold 9-10 on J-8-2, and Q or 7 can complete the straight.'],
        ['Gutshot', 'A gutshot usually has 4 outs. Example: you hold 9-10 on Q-8-2, and only J completes the straight.'],
        ['Decision impact', 'With 8 outs you can defend more often, but with 4 outs you must be much more careful with the call price.'],
      ],
      takeaways: ['Open-ended ≈ 8 outs.', 'Gutshot ≈ 4 outs.', 'More outs does not mean automatic call.', 'Call price and position matter.'],
      cta: 'Open Poker Odds',
    },
    mistakes: {
      title: 'Top 10 poker mistakes for beginners',
      desc: 'The most common chip-burning mistakes: passive limps, loose river calls and overpriced draws.',
      keywords: ['beginner poker mistakes', 'poker leaks', 'river call', 'hand review'],
      intro: 'The fastest way to improve is to identify repeated mistakes. Many beginners do not lose because of one hand, but because of repeated patterns.',
      sections: [
        ['Most common mistakes', 'Playing too many hands, limping too much, chasing draws without pot odds, calling too wide on the river and ignoring position are very common leaks.'],
        ['Why they cost money', 'Small mistakes repeated over hundreds of hands matter more than a single cooler.'],
        ['How to fix them', 'Review your hands after the session, look for recurring patterns and separate real mistakes from variance.'],
      ],
      takeaways: ['Do not chase every draw.', 'Avoid passive limps without a plan.', 'River calls are expensive.', 'Review hand histories after the session.'],
      cta: 'Analyze your hands',
    },
    blackjack: {
      title: 'Blackjack Hit or Stand Chart: quick guide',
      desc: 'How to read a hit/stand decision using a simplified version of basic strategy.',
      keywords: ['blackjack hit or stand', 'basic strategy', 'blackjack chart', 'dealer upcard'],
      intro: 'In blackjack, your decision depends on your hand, the dealer upcard and the hand type: hard, soft or pair.',
      sections: [
        ['Hard hand', 'A hard hand has no flexible ace. The lower the total, the more often you need to hit.'],
        ['Soft hand', 'A soft hand includes an ace that can count as 11 without busting. It is more flexible and allows more options.'],
        ['Dealer upcard', 'Against a strong dealer card you often need to be more careful. Against weak cards you can let the dealer work.'],
      ],
      takeaways: ['Separate hard and soft hands.', 'Always check the dealer upcard.', 'Pairs have dedicated rules.', 'The trainer is educational and does not guarantee winnings.'],
      cta: 'Open Blackjack Trainer',
    },
  },
};

guideContent.es = guideContent.en;
guideContent.fr = guideContent.en;
guideContent.de = guideContent.en;

const localizedFallback = {
  es: {
    potOdds: ['Pot Odds Explained: cuándo un call es rentable', 'Aprende a comparar el precio del call con el bote y tu equity estimada.', 'Abrir Pot Odds Calculator'],
    equity: ['Poker Equity Explained: por qué puedes perder jugando bien', 'Entiende qué es la equity y por qué el resultado de una mano no cuenta toda la historia.', 'Abrir Poker Odds'],
    flushDraw: ['Flush Draw Odds: probabilidad de completar color', 'Cuántas opciones tienes de completar un proyecto de color al turn o river.', 'Calcular tu mano'],
    straightDraw: ['Straight Draw Odds: open-ended vs gutshot', 'Diferencia entre proyecto bilateral e incastro, con outs y probabilidades.', 'Abrir Poker Odds'],
    mistakes: ['Top 10 errores de póker para principiantes', 'Los errores más comunes que cuestan fichas: limp pasivo, river calls amplios y draws caros.', 'Analizar tus manos'],
    blackjack: ['Blackjack Hit or Stand Chart: guía rápida', 'Cómo leer una decisión hit/stand con una versión simplificada de la basic strategy.', 'Abrir Blackjack Trainer'],
  },
  fr: {
    potOdds: ['Pot Odds Explained : quand un call est rentable', 'Apprends à comparer le prix du call avec le pot et ton equity estimée.', 'Ouvrir Pot Odds Calculator'],
    equity: ['Poker Equity Explained : pourquoi tu peux perdre en jouant bien', 'Comprends ce qu’est l’equity et pourquoi le résultat d’une seule main ne dit pas tout.', 'Ouvrir Poker Odds'],
    flushDraw: ['Flush Draw Odds : probabilité de compléter une couleur', 'Tes chances de compléter un tirage couleur au turn ou d’ici la river.', 'Calculer ta main'],
    straightDraw: ['Straight Draw Odds : open-ended vs gutshot', 'Différence entre tirage bilatéral et gutshot, avec outs et probabilités.', 'Ouvrir Poker Odds'],
    mistakes: ['Top 10 erreurs poker pour débutants', 'Les erreurs les plus fréquentes qui coûtent des jetons : limps passifs, river calls larges et tirages trop chers.', 'Analyser tes mains'],
    blackjack: ['Blackjack Hit or Stand Chart : guide rapide', 'Comment lire une décision hit/stand avec une version simplifiée de la basic strategy.', 'Ouvrir Blackjack Trainer'],
  },
  de: {
    potOdds: ['Pot Odds Explained: wann ein Call profitabel ist', 'Lerne, den Preis des Calls mit dem Pot und deiner geschätzten Equity zu vergleichen.', 'Pot Odds Calculator öffnen'],
    equity: ['Poker Equity Explained: warum du trotz gutem Spiel verlieren kannst', 'Verstehe Equity und warum das Ergebnis einer einzelnen Hand nicht alles erzählt.', 'Poker Odds öffnen'],
    flushDraw: ['Flush Draw Odds: Chance, den Flush zu treffen', 'Wie wahrscheinlich du einen Flushdraw am Turn oder bis zum River vervollständigst.', 'Hand berechnen'],
    straightDraw: ['Straight Draw Odds: open-ended vs gutshot', 'Der Unterschied zwischen Open-ended Draw und Gutshot, mit Outs und Wahrscheinlichkeiten.', 'Poker Odds öffnen'],
    mistakes: ['Top 10 Pokerfehler für Anfänger', 'Die häufigsten Fehler: passive Limps, zu weite River Calls und zu teuer bezahlte Draws.', 'Hände analysieren'],
    blackjack: ['Blackjack Hit or Stand Chart: Kurzguide', 'So liest du Hit/Stand-Entscheidungen mit einer vereinfachten Basic Strategy.', 'Blackjack Trainer öffnen'],
  }
};

function getGuide(language, guideKey) {
  const base = guideContent[language]?.[guideKey] || guideContent.en[guideKey] || guideContent.en.potOdds;
  const localized = localizedFallback[language]?.[guideKey];
  if (!localized) return base;
  return { ...base, title: localized[0], desc: localized[1], cta: localized[2] };
}

export function seoGuideList(language = 'it') {
  return Object.keys(guideMeta).map((key) => {
    const guide = getGuide(language, key);
    return { key, route: guideMeta[key].route, tool: guideMeta[key].tool, title: guide.title, desc: guide.desc, keywords: guide.keywords };
  });
}

export default function SeoGuidePage({ guideKey = 'potOdds', setPage }) {
  const { language, t } = useLanguage();
  const guide = getGuide(language, guideKey);
  const meta = guideMeta[guideKey] || guideMeta.potOdds;
  const Icon = meta.icon;

  useEffect(() => {
    document.title = `${guide.title} | PRO Poker Odds`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', guide.desc);
  }, [guide.title, guide.desc]);

  return (
    <section className="page-card seo-guide-page">
      <div className="section-header seo-guide-header">
        <div>
          <span className="eyebrow"><BookOpen size={14} /> {t('guidesEyebrow')}</span>
          <h2>{guide.title}</h2>
          <p>{guide.desc}</p>
          <div className="seo-keywords">
            {guide.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
          </div>
        </div>
        <div className="seo-guide-icon">
          <Icon size={34} />
        </div>
      </div>

      <article className="seo-article">
        <p className="seo-intro">{guide.intro}</p>

        <div className="seo-section-grid">
          {guide.sections.map(([title, body]) => (
            <section key={title} className="seo-section-card">
              <div className="seo-mini-icon"><Lightbulb size={16} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </section>
          ))}
        </div>

        <div className="seo-takeaways">
          <h3>{language === 'it' ? 'Punti chiave' : language === 'es' ? 'Puntos clave' : language === 'fr' ? 'Points clés' : language === 'de' ? 'Wichtige Punkte' : 'Key takeaways'}</h3>
          <div className="takeaway-list">
            {guide.takeaways.map((item) => (
              <div key={item} className="takeaway-item">
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="seo-cta-card">
          <div>
            <h3>{language === 'it' ? 'Provalo sul tool' : language === 'es' ? 'Pruébalo en la herramienta' : language === 'fr' ? 'Teste-le dans l’outil' : language === 'de' ? 'Im Tool testen' : 'Try it in the tool'}</h3>
            <p>{language === 'it' ? 'Usa questa guida come base, poi verifica lo spot direttamente con uno degli strumenti.' : language === 'es' ? 'Usa esta guía como base y luego verifica el spot directamente con una herramienta.' : language === 'fr' ? 'Utilise ce guide comme base, puis vérifie le spot directement avec un outil.' : language === 'de' ? 'Nutze diesen Guide als Basis und prüfe den Spot direkt mit einem Tool.' : 'Use this guide as a base, then verify the spot directly with one of the tools.'}</p>
          </div>
          <button className="primary-action" onClick={() => setPage(meta.tool)}>
            {guide.cta} <ArrowRight size={18} />
          </button>
        </div>
      </article>
    </section>
  );
}
