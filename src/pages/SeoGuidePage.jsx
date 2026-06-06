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
      ctaTitle: 'Provalo sul tool',
      ctaText: 'Usa questa guida come base, poi verifica lo spot direttamente con uno degli strumenti.',
      takeawaysTitle: 'Punti chiave',
    },
    equity: {
      title: 'Poker Equity Explained: perché puoi perdere anche giocando bene',
      desc: 'Capisci cos’è l’equity e perché il risultato di una singola mano non racconta tutta la verità.',
      keywords: ['poker equity', 'varianza', 'odds poker', 'decisioni corrette'],
      intro: 'L’equity è la tua quota teorica del piatto in base alla probabilità di vincere la mano allo showdown. Avere il 70% non significa vincere sempre: significa vincere spesso nel lungo periodo.',
      sections: [
        ['Equity vs risultato', 'Puoi avere l’80% e perdere comunque una mano. Questo non rende la decisione sbagliata: è varianza.'],
        ['Esempio semplice', 'AA preflop contro una mano casuale è molto favorita, ma non vince il 100% delle volte. Per questo il poker va studiato sulle decisioni, non solo sui risultati.'],
        ['Come usarla', 'Prima di chiamare, confronta la tua equity stimata con l’equity richiesta dalle pot odds. Se la tua equity è più alta, la decisione può essere profittevole.'],
      ],
      takeaways: ['Equity alta non significa certezza.', 'Analizza decisione, non solo risultato.', 'Equity e pot odds lavorano insieme.', 'Usa Poker Odds per stimare la mano.'],
      cta: 'Apri Poker Odds',
      ctaTitle: 'Provalo sul tool',
      ctaText: 'Usa questa guida come base, poi verifica lo spot direttamente con uno degli strumenti.',
      takeawaysTitle: 'Punti chiave',
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
      ctaTitle: 'Provalo sul tool',
      ctaText: 'Usa questa guida come base, poi verifica lo spot direttamente con uno degli strumenti.',
      takeawaysTitle: 'Punti chiave',
    },
    straightDraw: {
      title: 'Straight Draw Odds: open-ended vs gutshot',
      desc: 'La differenza tra progetto di scala bilaterale e incastro, con outs e probabilità.',
      keywords: ['straight draw odds', 'open-ended', 'gutshot', 'scala poker'],
      intro: 'Non tutti i progetti di scala hanno lo stesso valore. Un open-ended straight draw è molto più forte di un gutshot.',
      sections: [
        ['Open-ended', 'Un progetto bilaterale ha di solito 8 outs. Esempio: hai 9-10 su board J-8-2, puoi chiudere con Q o 7.'],
        ['Gutshot', 'Un incastro ha di solito 4 outs. Esempio: hai 9-10 su board Q-8-2, ti serve solo J.'],
        ['Impatto sulle decisioni', 'Con 8 outs puoi difendere più spesso, ma con 4 outs devi stare molto attento al prezzo del call.'],
      ],
      takeaways: ['Open-ended ≈ 8 outs.', 'Gutshot ≈ 4 outs.', 'Più outs non significa call automatico.', 'Prezzo del call e posizione contano.'],
      cta: 'Apri Poker Odds',
      ctaTitle: 'Provalo sul tool',
      ctaText: 'Usa questa guida come base, poi verifica lo spot direttamente con uno degli strumenti.',
      takeawaysTitle: 'Punti chiave',
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
      ctaTitle: 'Provalo sul tool',
      ctaText: 'Usa questa guida come base, poi verifica lo spot direttamente con uno degli strumenti.',
      takeawaysTitle: 'Punti chiave',
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
      ctaTitle: 'Provalo sul tool',
      ctaText: 'Usa questa guida come base, poi verifica lo spot direttamente con uno degli strumenti.',
      takeawaysTitle: 'Punti chiave',
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
      ctaTitle: 'Try it in the tool',
      ctaText: 'Use this guide as a base, then verify the spot directly with one of the tools.',
      takeawaysTitle: 'Key takeaways',
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
      ctaTitle: 'Try it in the tool',
      ctaText: 'Use this guide as a base, then verify the spot directly with one of the tools.',
      takeawaysTitle: 'Key takeaways',
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
      ctaTitle: 'Try it in the tool',
      ctaText: 'Use this guide as a base, then verify the spot directly with one of the tools.',
      takeawaysTitle: 'Key takeaways',
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
      ctaTitle: 'Try it in the tool',
      ctaText: 'Use this guide as a base, then verify the spot directly with one of the tools.',
      takeawaysTitle: 'Key takeaways',
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
      ctaTitle: 'Try it in the tool',
      ctaText: 'Use this guide as a base, then verify the spot directly with one of the tools.',
      takeawaysTitle: 'Key takeaways',
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
      ctaTitle: 'Try it in the tool',
      ctaText: 'Use this guide as a base, then verify the spot directly with one of the tools.',
      takeawaysTitle: 'Key takeaways',
    },
  },

  es: {
    potOdds: {
      title: 'Pot Odds Explained: cuándo un call es rentable',
      desc: 'Aprende a comparar el precio del call con el bote y tu equity estimada.',
      keywords: ['pot odds', 'equity requerida', 'call rentable', 'Texas Hold’em'],
      intro: 'Las pot odds te dicen cuánto tienes que invertir en relación con lo que puedes ganar. Si tu equity es superior a la equity requerida, el call puede ser correcto a largo plazo.',
      sections: [
        ['Fórmula básica', 'Equity requerida = importe a pagar / (bote + importe a pagar). Si debes pagar 20 en un bote que será 100, necesitas al menos un 20% de equity.'],
        ['Ejemplo práctico', 'El bote es 80 y debes pagar 20. El bote final será 100. Necesitas un 20% de equity. Si tu proyecto tiene alrededor del 30%, el call puede tener sentido.'],
        ['Error común', 'Muchos principiantes piensan solo “tengo un proyecto”, pero no miran el precio. Incluso un buen draw puede convertirse en un mal call si estás pagando demasiado.'],
      ],
      takeaways: ['Calcula siempre el precio del call.', 'Compara pot odds y equity.', 'Considera implied odds y posición.', 'Usa el Pot Odds Calculator para verificar el spot.'],
      cta: 'Abrir Pot Odds Calculator',
      ctaTitle: 'Pruébalo en la herramienta',
      ctaText: 'Usa esta guía como base y luego verifica el spot directamente con una herramienta.',
      takeawaysTitle: 'Puntos clave',
    },
    equity: {
      title: 'Poker Equity Explained: por qué puedes perder jugando bien',
      desc: 'Entiende qué es la equity y por qué el resultado de una sola mano no cuenta toda la historia.',
      keywords: ['poker equity', 'varianza', 'odds póker', 'decisiones correctas'],
      intro: 'La equity es tu parte teórica del bote según la probabilidad de ganar la mano al showdown. Tener un 70% no significa ganar siempre: significa ganar a menudo en el largo plazo.',
      sections: [
        ['Equity vs resultado', 'Puedes tener un 80% de equity y aun así perder una mano. Eso no convierte la decisión en incorrecta: es varianza.'],
        ['Ejemplo simple', 'AA preflop contra una mano aleatoria es gran favorita, pero no gana el 100% de las veces. Por eso el póker se estudia por decisiones, no solo por resultados.'],
        ['Cómo usarla', 'Antes de pagar, compara tu equity estimada con la equity requerida por las pot odds. Si tu equity es superior, la decisión puede ser rentable.'],
      ],
      takeaways: ['Equity alta no significa certeza.', 'Analiza la decisión, no solo el resultado.', 'Equity y pot odds trabajan juntas.', 'Usa Poker Odds para estimar la mano.'],
      cta: 'Abrir Poker Odds',
      ctaTitle: 'Pruébalo en la herramienta',
      ctaText: 'Usa esta guía como base y luego verifica el spot directamente con una herramienta.',
      takeawaysTitle: 'Puntos clave',
    },
    flushDraw: {
      title: 'Flush Draw Odds: probabilidad de completar color',
      desc: 'Qué probabilidad tienes de completar un proyecto de color en el turn o antes del river.',
      keywords: ['flush draw odds', 'proyecto de color', '9 outs', 'odds color póker'],
      intro: 'Un proyecto de color clásico en el flop suele tener 9 outs: 9 cartas restantes que pueden completar el color.',
      sections: [
        ['Probabilidad típica', 'Con 9 outs en el flop tienes cerca de un 19% de completar en el turn y cerca de un 35% antes del river.'],
        ['Ejemplo', 'Tienes A♥ 9♥ y el flop es K♥ 7♥ 2♣. Cualquier corazón restante completa tu color.'],
        ['Cuándo pagar', 'El call es bueno solo si el precio es correcto. Si pagas demasiado en relación con el bote, incluso un flush draw puede ser costoso.'],
      ],
      takeaways: ['Flush draw estándar = unas 9 outs.', 'Una carta al turn ≈ 19%.', 'Turn + river ≈ 35%.', 'Comprueba siempre las pot odds.'],
      cta: 'Calcular tu mano',
      ctaTitle: 'Pruébalo en la herramienta',
      ctaText: 'Usa esta guía como base y luego verifica el spot directamente con una herramienta.',
      takeawaysTitle: 'Puntos clave',
    },
    straightDraw: {
      title: 'Straight Draw Odds: open-ended vs gutshot',
      desc: 'La diferencia entre proyecto de escalera abierto y gutshot, con outs y probabilidades.',
      keywords: ['straight draw odds', 'open-ended', 'gutshot', 'escalera póker'],
      intro: 'No todos los proyectos de escalera tienen el mismo valor. Un open-ended straight draw es mucho más fuerte que un gutshot.',
      sections: [
        ['Open-ended', 'Un proyecto abierto suele tener 8 outs. Ejemplo: tienes 9-10 en board J-8-2, y Q o 7 completan la escalera.'],
        ['Gutshot', 'Un gutshot suele tener 4 outs. Ejemplo: tienes 9-10 en board Q-8-2, y solo J completa la escalera.'],
        ['Impacto en la decisión', 'Con 8 outs puedes defender más a menudo, pero con 4 outs debes ser mucho más cuidadoso con el precio del call.'],
      ],
      takeaways: ['Open-ended ≈ 8 outs.', 'Gutshot ≈ 4 outs.', 'Más outs no significa call automático.', 'El precio del call y la posición importan.'],
      cta: 'Abrir Poker Odds',
      ctaTitle: 'Pruébalo en la herramienta',
      ctaText: 'Usa esta guía como base y luego verifica el spot directamente con una herramienta.',
      takeawaysTitle: 'Puntos clave',
    },
    mistakes: {
      title: 'Top 10 errores de póker para principiantes',
      desc: 'Los errores más comunes que queman fichas: limps pasivos, river calls amplios y draws demasiado caros.',
      keywords: ['errores póker principiantes', 'leaks póker', 'river call', 'análisis manos'],
      intro: 'La forma más rápida de mejorar es identificar errores repetidos. Muchos principiantes no pierden por una sola mano, sino por patrones que se repiten.',
      sections: [
        ['Errores más comunes', 'Jugar demasiadas manos, limpear demasiado, perseguir draws sin pot odds, pagar demasiado amplio en river e ignorar la posición son leaks muy frecuentes.'],
        ['Por qué cuestan dinero', 'Los errores pequeños repetidos durante cientos de manos pesan más que un cooler aislado.'],
        ['Cómo corregirlos', 'Revisa tus manos después de la sesión, busca patrones recurrentes y separa los errores reales de la varianza.'],
      ],
      takeaways: ['No persigas todos los proyectos.', 'Evita limps pasivos sin plan.', 'Los river calls son caros.', 'Revisa hand histories después de la sesión.'],
      cta: 'Analizar tus manos',
      ctaTitle: 'Pruébalo en la herramienta',
      ctaText: 'Usa esta guía como base y luego verifica el spot directamente con una herramienta.',
      takeawaysTitle: 'Puntos clave',
    },
    blackjack: {
      title: 'Blackjack Hit or Stand Chart: guía rápida',
      desc: 'Cómo leer una decisión hit/stand usando una versión simplificada de la basic strategy.',
      keywords: ['blackjack hit or stand', 'basic strategy', 'blackjack chart', 'carta visible dealer'],
      intro: 'En blackjack, la decisión depende de tu mano, de la carta visible del dealer y del tipo de mano: hard, soft o pareja.',
      sections: [
        ['Hard hand', 'Una mano hard no tiene un as flexible. Cuanto más bajo sea el total, más a menudo tendrás que pedir carta.'],
        ['Soft hand', 'Una mano soft incluye un as que puede valer 11 sin pasarte. Es más flexible y permite más opciones.'],
        ['Carta visible del dealer', 'Contra una carta fuerte del dealer a menudo debes ser más prudente. Contra cartas débiles puedes dejar que el dealer se complique.'],
      ],
      takeaways: ['Distingue manos hard y soft.', 'Mira siempre la carta visible del dealer.', 'Las parejas tienen reglas dedicadas.', 'El trainer es educativo y no garantiza ganancias.'],
      cta: 'Abrir Blackjack Trainer',
      ctaTitle: 'Pruébalo en la herramienta',
      ctaText: 'Usa esta guía como base y luego verifica el spot directamente con una herramienta.',
      takeawaysTitle: 'Puntos clave',
    },
  },

  fr: {
    potOdds: {
      title: 'Pot Odds Explained : quand un call est rentable',
      desc: 'Apprends à comparer le prix du call avec le pot et ton equity estimée.',
      keywords: ['pot odds', 'equity requise', 'call rentable', 'Texas Hold’em'],
      intro: 'Les pot odds indiquent combien tu dois investir par rapport à ce que tu peux gagner. Si ton equity est supérieure à l’equity requise, le call peut être correct sur le long terme.',
      sections: [
        ['Formule de base', 'Equity requise = montant à payer / (pot + montant à payer). Si tu dois payer 20 dans un pot qui deviendra 100, il te faut au moins 20% d’equity.'],
        ['Exemple pratique', 'Le pot est de 80 et tu dois payer 20. Le pot final sera de 100. Il te faut 20% d’equity. Si ton tirage a environ 30%, le call peut avoir du sens.'],
        ['Erreur fréquente', 'Beaucoup de débutants pensent seulement “j’ai un tirage”, mais ne regardent pas le prix. Même un bon draw peut devenir un mauvais call s’il est trop cher.'],
      ],
      takeaways: ['Calcule toujours le prix du call.', 'Compare pot odds et equity.', 'Prends en compte implied odds et position.', 'Utilise le Pot Odds Calculator pour vérifier le spot.'],
      cta: 'Ouvrir Pot Odds Calculator',
      ctaTitle: 'Teste-le dans l’outil',
      ctaText: 'Utilise ce guide comme base, puis vérifie le spot directement avec un outil.',
      takeawaysTitle: 'Points clés',
    },
    equity: {
      title: 'Poker Equity Explained : pourquoi tu peux perdre en jouant bien',
      desc: 'Comprends ce qu’est l’equity et pourquoi le résultat d’une seule main ne dit pas tout.',
      keywords: ['poker equity', 'variance', 'odds poker', 'bonnes décisions'],
      intro: 'L’equity est ta part théorique du pot selon ta probabilité de gagner la main au showdown. Avoir 70% ne signifie pas gagner toujours : cela signifie gagner souvent sur le long terme.',
      sections: [
        ['Equity vs résultat', 'Tu peux avoir 80% d’equity et perdre quand même une main. Cela ne rend pas la décision mauvaise : c’est de la variance.'],
        ['Exemple simple', 'AA préflop contre une main aléatoire est largement favori, mais ne gagne pas 100% du temps. Le poker doit donc être étudié à travers les décisions, pas seulement les résultats.'],
        ['Comment l’utiliser', 'Avant de payer, compare ton equity estimée avec l’equity requise par les pot odds. Si ton equity est plus haute, la décision peut être rentable.'],
      ],
      takeaways: ['Une equity élevée n’est pas une certitude.', 'Analyse la décision, pas seulement le résultat.', 'Equity et pot odds fonctionnent ensemble.', 'Utilise Poker Odds pour estimer la main.'],
      cta: 'Ouvrir Poker Odds',
      ctaTitle: 'Teste-le dans l’outil',
      ctaText: 'Utilise ce guide comme base, puis vérifie le spot directement avec un outil.',
      takeawaysTitle: 'Points clés',
    },
    flushDraw: {
      title: 'Flush Draw Odds : probabilité de compléter une couleur',
      desc: 'Tes chances de compléter un tirage couleur au turn ou d’ici la river.',
      keywords: ['flush draw odds', 'tirage couleur', '9 outs', 'odds couleur poker'],
      intro: 'Un tirage couleur classique au flop a généralement 9 outs : 9 cartes restantes peuvent compléter la couleur.',
      sections: [
        ['Probabilité typique', 'Avec 9 outs au flop, tu as environ 19% de toucher au turn et environ 35% d’ici la river.'],
        ['Exemple', 'Tu as A♥ 9♥ et le flop est K♥ 7♥ 2♣. N’importe quel cœur restant complète ta couleur.'],
        ['Quand payer', 'Le call est bon seulement si le prix est correct. Si tu paies trop cher par rapport au pot, même un flush draw peut devenir coûteux.'],
      ],
      takeaways: ['Flush draw standard = environ 9 outs.', 'Une carte au turn ≈ 19%.', 'Turn + river ≈ 35%.', 'Vérifie toujours les pot odds.'],
      cta: 'Calculer ta main',
      ctaTitle: 'Teste-le dans l’outil',
      ctaText: 'Utilise ce guide comme base, puis vérifie le spot directement avec un outil.',
      takeawaysTitle: 'Points clés',
    },
    straightDraw: {
      title: 'Straight Draw Odds : open-ended vs gutshot',
      desc: 'La différence entre tirage quinte bilatéral et gutshot, avec outs et probabilités.',
      keywords: ['straight draw odds', 'open-ended', 'gutshot', 'quinte poker'],
      intro: 'Tous les tirages quinte n’ont pas la même valeur. Un open-ended straight draw est beaucoup plus fort qu’un gutshot.',
      sections: [
        ['Open-ended', 'Un tirage bilatéral a généralement 8 outs. Exemple : tu as 9-10 sur J-8-2, et Q ou 7 peuvent compléter la quinte.'],
        ['Gutshot', 'Un gutshot a généralement 4 outs. Exemple : tu as 9-10 sur Q-8-2, et seul J complète la quinte.'],
        ['Impact sur la décision', 'Avec 8 outs tu peux défendre plus souvent, mais avec 4 outs tu dois être beaucoup plus attentif au prix du call.'],
      ],
      takeaways: ['Open-ended ≈ 8 outs.', 'Gutshot ≈ 4 outs.', 'Plus d’outs ne signifie pas call automatique.', 'Le prix du call et la position comptent.'],
      cta: 'Ouvrir Poker Odds',
      ctaTitle: 'Teste-le dans l’outil',
      ctaText: 'Utilise ce guide comme base, puis vérifie le spot directement avec un outil.',
      takeawaysTitle: 'Points clés',
    },
    mistakes: {
      title: 'Top 10 erreurs poker pour débutants',
      desc: 'Les erreurs les plus courantes qui brûlent des jetons : limps passifs, river calls trop larges et tirages trop chers.',
      keywords: ['erreurs poker débutants', 'leaks poker', 'river call', 'analyse mains'],
      intro: 'La façon la plus rapide de progresser est d’identifier les erreurs répétées. Beaucoup de débutants ne perdent pas à cause d’une seule main, mais à cause de schémas qui se répètent.',
      sections: [
        ['Erreurs les plus fréquentes', 'Jouer trop de mains, limper trop souvent, poursuivre des tirages sans pot odds, payer trop large river et ignorer la position sont des leaks très fréquents.'],
        ['Pourquoi elles coûtent cher', 'Les petites erreurs répétées sur des centaines de mains pèsent plus qu’un seul cooler.'],
        ['Comment les corriger', 'Revois tes mains après la session, cherche les schémas récurrents et sépare les vraies erreurs de la variance.'],
      ],
      takeaways: ['Ne poursuis pas tous les tirages.', 'Évite les limps passifs sans plan.', 'Les river calls coûtent cher.', 'Revois les hand histories après la session.'],
      cta: 'Analyser tes mains',
      ctaTitle: 'Teste-le dans l’outil',
      ctaText: 'Utilise ce guide comme base, puis vérifie le spot directement avec un outil.',
      takeawaysTitle: 'Points clés',
    },
    blackjack: {
      title: 'Blackjack Hit or Stand Chart : guide rapide',
      desc: 'Comment lire une décision hit/stand avec une version simplifiée de la basic strategy.',
      keywords: ['blackjack hit or stand', 'basic strategy', 'blackjack chart', 'carte visible dealer'],
      intro: 'Au blackjack, la décision dépend de ta main, de la carte visible du dealer et du type de main : hard, soft ou paire.',
      sections: [
        ['Hard hand', 'Une main hard ne contient pas d’as flexible. Plus le total est bas, plus tu dois souvent demander une carte.'],
        ['Soft hand', 'Une main soft contient un as qui peut valoir 11 sans faire bust. Elle est plus flexible et offre plus d’options.'],
        ['Carte visible du dealer', 'Contre une carte forte du dealer, tu dois souvent être plus prudent. Contre des cartes faibles, tu peux laisser le dealer se mettre en difficulté.'],
      ],
      takeaways: ['Distingue les mains hard et soft.', 'Regarde toujours la carte visible du dealer.', 'Les paires ont des règles spécifiques.', 'Le trainer est éducatif et ne garantit pas de gains.'],
      cta: 'Ouvrir Blackjack Trainer',
      ctaTitle: 'Teste-le dans l’outil',
      ctaText: 'Utilise ce guide comme base, puis vérifie le spot directement avec un outil.',
      takeawaysTitle: 'Points clés',
    },
  },

  de: {
    potOdds: {
      title: 'Pot Odds Explained: wann ein Call profitabel ist',
      desc: 'Lerne, den Preis des Calls mit dem Pot und deiner geschätzten Equity zu vergleichen.',
      keywords: ['pot odds', 'benötigte Equity', 'profitabler Call', 'Texas Hold’em'],
      intro: 'Pot Odds zeigen dir, wie viel du investieren musst im Verhältnis zu dem, was du gewinnen kannst. Wenn deine Equity höher ist als die benötigte Equity, kann der Call langfristig korrekt sein.',
      sections: [
        ['Grundformel', 'Benötigte Equity = zu zahlender Betrag / (Pot + zu zahlender Betrag). Wenn du 20 in einen Pot callst, der 100 wird, brauchst du mindestens 20% Equity.'],
        ['Praktisches Beispiel', 'Der Pot ist 80 und du musst 20 callen. Der finale Pot beträgt 100. Du brauchst 20% Equity. Wenn dein Draw ungefähr 30% hat, kann der Call sinnvoll sein.'],
        ['Häufiger Fehler', 'Viele Anfänger denken nur “ich habe einen Draw”, prüfen aber den Preis nicht. Selbst ein guter Draw kann ein schlechter Call werden, wenn er zu teuer ist.'],
      ],
      takeaways: ['Berechne immer den Preis des Calls.', 'Vergleiche Pot Odds und Equity.', 'Berücksichtige implied odds und Position.', 'Nutze den Pot Odds Calculator, um den Spot zu prüfen.'],
      cta: 'Pot Odds Calculator öffnen',
      ctaTitle: 'Im Tool testen',
      ctaText: 'Nutze diesen Guide als Basis und prüfe den Spot direkt mit einem Tool.',
      takeawaysTitle: 'Wichtige Punkte',
    },
    equity: {
      title: 'Poker Equity Explained: warum du trotz gutem Spiel verlieren kannst',
      desc: 'Verstehe, was Equity bedeutet und warum das Ergebnis einer einzelnen Hand nicht alles erzählt.',
      keywords: ['poker equity', 'Varianz', 'poker odds', 'korrekte Entscheidungen'],
      intro: 'Equity ist dein theoretischer Anteil am Pot basierend auf deiner Chance, die Hand im Showdown zu gewinnen. 70% Equity bedeutet nicht, immer zu gewinnen: Es bedeutet, langfristig oft zu gewinnen.',
      sections: [
        ['Equity vs Ergebnis', 'Du kannst 80% Equity haben und trotzdem eine einzelne Hand verlieren. Das macht die Entscheidung nicht falsch: Es ist Varianz.'],
        ['Einfaches Beispiel', 'AA preflop gegen eine zufällige Hand ist klarer Favorit, gewinnt aber nicht 100% der Zeit. Poker sollte über Entscheidungen studiert werden, nicht nur über Ergebnisse.'],
        ['Wie du sie nutzt', 'Vergleiche vor einem Call deine geschätzte Equity mit der durch Pot Odds benötigten Equity. Wenn deine Equity höher ist, kann die Entscheidung profitabel sein.'],
      ],
      takeaways: ['Hohe Equity ist keine Sicherheit.', 'Analysiere die Entscheidung, nicht nur das Ergebnis.', 'Equity und Pot Odds gehören zusammen.', 'Nutze Poker Odds, um die Hand zu schätzen.'],
      cta: 'Poker Odds öffnen',
      ctaTitle: 'Im Tool testen',
      ctaText: 'Nutze diesen Guide als Basis und prüfe den Spot direkt mit einem Tool.',
      takeawaysTitle: 'Wichtige Punkte',
    },
    flushDraw: {
      title: 'Flush Draw Odds: Chance, den Flush zu treffen',
      desc: 'Wie wahrscheinlich du einen Flushdraw am Turn oder bis zum River vervollständigst.',
      keywords: ['flush draw odds', 'Flushdraw', '9 outs', 'poker flush odds'],
      intro: 'Ein klassischer Flushdraw am Flop hat normalerweise 9 Outs: 9 verbleibende Karten können den Flush vervollständigen.',
      sections: [
        ['Typische Wahrscheinlichkeit', 'Mit 9 Outs am Flop hast du ungefähr 19% Trefferchance am Turn und ungefähr 35% bis zum River.'],
        ['Beispiel', 'Du hältst A♥ 9♥ und der Flop ist K♥ 7♥ 2♣. Jedes verbleibende Herz vervollständigt deinen Flush.'],
        ['Wann du callen solltest', 'Der Call ist nur gut, wenn der Preis stimmt. Wenn du im Verhältnis zum Pot zu viel bezahlst, kann selbst ein Flushdraw teuer werden.'],
      ],
      takeaways: ['Standard-Flushdraw = etwa 9 Outs.', 'Eine Karte bis zum Turn ≈ 19%.', 'Turn + River ≈ 35%.', 'Prüfe immer die Pot Odds.'],
      cta: 'Hand berechnen',
      ctaTitle: 'Im Tool testen',
      ctaText: 'Nutze diesen Guide als Basis und prüfe den Spot direkt mit einem Tool.',
      takeawaysTitle: 'Wichtige Punkte',
    },
    straightDraw: {
      title: 'Straight Draw Odds: open-ended vs gutshot',
      desc: 'Der Unterschied zwischen Open-ended Straight Draw und Gutshot, mit Outs und Wahrscheinlichkeiten.',
      keywords: ['straight draw odds', 'open-ended', 'gutshot', 'poker straight draw'],
      intro: 'Nicht alle Straight Draws haben denselben Wert. Ein Open-ended Straight Draw ist deutlich stärker als ein Gutshot.',
      sections: [
        ['Open-ended', 'Ein Open-ended Draw hat normalerweise 8 Outs. Beispiel: Du hältst 9-10 auf J-8-2, und Q oder 7 vervollständigen die Straight.'],
        ['Gutshot', 'Ein Gutshot hat normalerweise 4 Outs. Beispiel: Du hältst 9-10 auf Q-8-2, und nur J vervollständigt die Straight.'],
        ['Auswirkung auf Entscheidungen', 'Mit 8 Outs kannst du häufiger verteidigen, aber mit 4 Outs musst du beim Call-Preis deutlich vorsichtiger sein.'],
      ],
      takeaways: ['Open-ended ≈ 8 Outs.', 'Gutshot ≈ 4 Outs.', 'Mehr Outs bedeutet keinen automatischen Call.', 'Call-Preis und Position sind entscheidend.'],
      cta: 'Poker Odds öffnen',
      ctaTitle: 'Im Tool testen',
      ctaText: 'Nutze diesen Guide als Basis und prüfe den Spot direkt mit einem Tool.',
      takeawaysTitle: 'Wichtige Punkte',
    },
    mistakes: {
      title: 'Top 10 Pokerfehler für Anfänger',
      desc: 'Die häufigsten chipfressenden Fehler: passive Limps, zu weite River Calls und zu teuer bezahlte Draws.',
      keywords: ['pokerfehler anfänger', 'poker leaks', 'river call', 'hand review'],
      intro: 'Der schnellste Weg zur Verbesserung ist, wiederholte Fehler zu erkennen. Viele Anfänger verlieren nicht wegen einer einzelnen Hand, sondern wegen wiederkehrender Muster.',
      sections: [
        ['Häufigste Fehler', 'Zu viele Hände spielen, zu oft limpen, Draws ohne Pot Odds verfolgen, zu weit am River callen und Position ignorieren sind sehr häufige Leaks.'],
        ['Warum sie teuer sind', 'Kleine Fehler, die sich über hunderte Hände wiederholen, wiegen mehr als ein einzelner Cooler.'],
        ['Wie du sie korrigierst', 'Analysiere deine Hände nach der Session, suche nach wiederkehrenden Mustern und trenne echte Fehler von Varianz.'],
      ],
      takeaways: ['Jage nicht jedem Draw hinterher.', 'Vermeide passive Limps ohne Plan.', 'River Calls sind teuer.', 'Überprüfe Hand Histories nach der Session.'],
      cta: 'Hände analysieren',
      ctaTitle: 'Im Tool testen',
      ctaText: 'Nutze diesen Guide als Basis und prüfe den Spot direkt mit einem Tool.',
      takeawaysTitle: 'Wichtige Punkte',
    },
    blackjack: {
      title: 'Blackjack Hit or Stand Chart: Kurzguide',
      desc: 'So liest du eine Hit/Stand-Entscheidung mit einer vereinfachten Version der Basic Strategy.',
      keywords: ['blackjack hit or stand', 'basic strategy', 'blackjack chart', 'dealer upcard'],
      intro: 'Beim Blackjack hängt die Entscheidung von deiner Hand, der sichtbaren Karte des Dealers und dem Handtyp ab: hard, soft oder Paar.',
      sections: [
        ['Hard Hand', 'Eine Hard Hand enthält kein flexibles Ass. Je niedriger die Summe, desto häufiger musst du eine Karte nehmen.'],
        ['Soft Hand', 'Eine Soft Hand enthält ein Ass, das als 11 zählen kann, ohne zu überkaufen. Sie ist flexibler und erlaubt mehr Optionen.'],
        ['Sichtbare Dealer-Karte', 'Gegen eine starke Dealer-Karte musst du oft vorsichtiger spielen. Gegen schwache Karten kannst du den Dealer eher arbeiten lassen.'],
      ],
      takeaways: ['Unterscheide Hard und Soft Hands.', 'Prüfe immer die sichtbare Dealer-Karte.', 'Paare haben eigene Regeln.', 'Der Trainer ist lehrreich und garantiert keine Gewinne.'],
      cta: 'Blackjack Trainer öffnen',
      ctaTitle: 'Im Tool testen',
      ctaText: 'Nutze diesen Guide als Basis und prüfe den Spot direkt mit einem Tool.',
      takeawaysTitle: 'Wichtige Punkte',
    },
  },
};

function getGuide(language, guideKey) {
  return guideContent[language]?.[guideKey] || guideContent.en[guideKey] || guideContent.en.potOdds;
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
          <h3>{guide.takeawaysTitle}</h3>
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
            <h3>{guide.ctaTitle}</h3>
            <p>{guide.ctaText}</p>
          </div>
          <button className="primary-action" onClick={() => setPage(meta.tool)}>
            {guide.cta} <ArrowRight size={18} />
          </button>
        </div>
      </article>
    </section>
  );
}
