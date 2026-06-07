# PRO Poker Odds V3.0 Complete MVP

Versione completa MVP della web app gratuita.

## Include

- Home più commerciale e chiara
- Analizza Mani / Hand History Analyzer
- Poker Odds Calculator
- Pot Odds Calculator
- Blackjack Trainer
- Strategia rapida
- Guide pratiche
- FAQ
- About
- Contatti
- Disclaimer / Privacy / Cookie base
- Roadmap Poker Leak Finder
- Layout full width desktop
- Carte colorate nel tester hand history

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Nota

Solo uso educativo. Nessun gioco con denaro reale. Nessuna assistenza live.


## V3.1 PayPal Support

- Aggiunta pagina Supporta
- Aggiunto bottone “Supporta il progetto — €2”
- Pagamento tramite link PayPal.Me
- Configurazione in `src/config/payment.js`

### Configurare PayPal

Nel file `src/config/payment.js`, sostituisci:

```js
export const PAYPAL_ME_USERNAME = 'INSERISCI_USERNAME_PAYPALME';
```

con il tuo username PayPal.Me.  
Esempio: se il tuo link è `https://paypal.me/giovannipoker`, scrivi:

```js
export const PAYPAL_ME_USERNAME = 'giovannipoker';
```


## V3.2

- Donazione/supporto modificato da €5 a €2


## V3.3

- Rimossi riferimenti a piattaforme specifiche
- Testi aggiornati con dicitura generica: software di gioco / hand history scaricabili dai software di gioco
- Chiarito che l’analisi è solo post-sessione e non live


## V3.4

- Pagina Contatti ripulita
- Rimossi blocchi “Email di contatto” e “Cosa testare adesso”
- Lasciati campi vuoti placeholder


## V3.5

- PayPal.Me configurato
- Username: gt17pp
- Importo supporto: €2
- Link generato: https://paypal.me/gt17pp/2EUR


## V3.6

- Blackjack riaggiunto nel menu
- Trainer blackjack migliorato con selezione visiva delle carte
- UI più curata, in stile coerente con il poker calculator


## V3.7

- Blackjack aggiornato con carte universali
- Rimossi i semi singoli dalla UI blackjack
- Aggiunta grafica con i 4 simboli delle carte solo nella sezione blackjack


## V3.8

- Restyling delle carte nella sezione Poker Odds
- Carte più simili a un mazzo reale: indici agli angoli e centro più elegante
- Selettore carte aggiornato con lo stesso stile


## V3.9

- Revisione testi pubblici in italiano
- Pulizia pagina per pagina
- J/Q/K del Poker Odds resi più premium
- Mantenuta analisi post-sessione e nessuna assistenza live


## V4.0

- Banner home reso più accattivante con Pocket Aces e win rate 85.2%
- Logo aggiornato a diamante verde con simbolo % nero
- Riga introduttiva rimossa dalla pagina Contatti
- FAQ aggiornata con domanda tecnica al posto della monetizzazione
- Pagina Pot Odds migliorata con nota: equity stimabile dalla pagina Poker Odds


## V4.2
- logo aggiornato con fiore/club, simbolo % centrale e badge 99
- hero banner trasformato in preview live di mani forti/speculative con odds che si aggiornano per street
- barra navigazione con evidenze colore per Analizza Mani, Poker Odds, Pot Odds, Blackjack e Leak Finder


## V4.3
- Traduzioni ampliate su home, tool principali, pagine informative e menu
- Selettore lingua con bandierine
- Logo aggiornato: carta + simbolo % sopra, sia header/home sia favicon


## V4.6

- Rebuilt Hand History Tester for better stability
- Supports #Game No hand history format
- Handles comma-separated cards like [ Kd, Kh ]
- Limits rendered hands to improve performance and avoid black screen


## V5.0
- Full polish pass on language selector with real flag SVG buttons
- Tester page copy refined in all supported languages
- Tester upload readability fix: panels remain dark and readable after loading hand-history files
- Future model kept as two cards: free online mode and future paid PC download


## V5.1 Security
- Added Vercel security headers through vercel.json
- Added Content Security Policy, anti-clickjacking and no-sniff headers
- Added local-only hand-history privacy note
- Added 2 MB hand-history file size guard
- Added basic security.txt placeholder
- Ran basic secret-pattern scan before packaging


## V5.2 Routing
- Added hash routing for direct shareable page links
- Routes now include:
  - #/poker
  - #/pot-odds
  - #/analyze-hands
  - #/blackjack
  - #/leak-finder
  - #/guides
  - #/support
- Keeps Vercel deployment simple and safe without server rewrites


## V5.3 Final Public Polish
- Final translation polish for home live banner, About, Legal, Contact and key public pages
- Improved footer layout and button alignment
- Premium polish for header, cards and inner pages
- Contact page upgraded while keeping the form non-sending/simple
- Routing, security headers and tester privacy note preserved


## V5.4 SEO Guides Pack
- Added SEO-style guide pages for:
  - Pot Odds Explained
  - Poker Equity Explained
  - Flush Draw Odds
  - Straight Draw Odds
  - Top 10 Poker Mistakes for Beginners
  - Blackjack Hit or Stand Chart
- Added shareable hash routes under #/guides/...
- Added guide cards to the Guides hub
- Added CTA buttons from guide pages to relevant tools
- Added dynamic document title and meta description updates for guide pages
- Added guide copy in Italian and English, with localized ES/FR/DE titles and descriptions


## V5.4.1 Guides Routing Hotfix
- Fixed guide routes in routePages map
- Guide cards now navigate correctly to dedicated guide pages
- Guide cards also use hash hrefs for robust direct routing


## V5.4.2 Definitive Guides Routing Fix
- Added missing guide routes to routePages map
- Guide cards now use direct hash anchors without preventDefault
- Direct guide URLs and guide card clicks now resolve to the correct SeoGuidePage


## V5.4.3 Full Guide Translations
- Fully translated all SEO guide pages in IT / EN / ES / FR / DE
- Removed English fallback for Spanish, French and German guide bodies
- Translated sections, takeaways, CTAs and keywords for every guide


## V5.5 SEO Technical Pack

Added:
- `public/robots.txt`
- `public/sitemap.xml`
- `public/seo-setup.json`
- improved meta title and meta description in `index.html`
- Open Graph / Twitter preview tags
- Vercel content-type/cache headers for `robots.txt` and `sitemap.xml`

### Google Search Console setup

1. Open Google Search Console.
2. Add property using **URL prefix**.
3. Use this property URL:
   `https://pro-poker-odds.vercel.app/`
4. Choose verification by **HTML tag**.
5. Google will give you a tag like:
   `<meta name="google-site-verification" content="YOUR_CODE_HERE" />`
6. Paste that tag inside `index.html`, inside `<head>`, near the existing Google Search Console comment.
7. Deploy again.
8. Go back to Search Console and click **Verify**.
9. Open **Sitemaps** and submit:
   `sitemap.xml`

### Important SEO note

The current website uses hash routes like `#/guides/pot-odds-explained`.
These are fine for users and sharing links, but not ideal for strong Google SEO.
For stronger indexing later, migrate guides to clean URLs such as:
- `/guides/pot-odds-explained`
- `/guides/flush-draw-odds`
- `/tools/poker-odds`


## V5.5.1 Google Verification

Added Google Search Console HTML file verification:

- `public/google969e34e2ec52b7b4.html`

After deployment, verify that this URL opens:

`https://pro-poker-odds.vercel.app/google969e34e2ec52b7b4.html`

Then go back to Google Search Console and click **Verify**.


## V5.5.2 Sitemap Hotfix

- Fixed sitemap XML namespace to the canonical sitemap protocol namespace:
  `http://www.sitemaps.org/schemas/sitemap/0.9`
- Keep submitting the sitemap in Google Search Console as:
  `sitemap.xml`
  without a leading slash.
- If a previous `/sitemap.xml` submission shows "Could not fetch", submit `sitemap.xml` again after deployment and wait. Google Search Console may need time to refresh.


## V5.5.3 Sitemap Clean

- Rewrote `public/sitemap.xml` from scratch with a clean XML sitemap.
- Added `public/sitemap-google.xml` as an alternate fresh sitemap name for Google Search Console.
- Updated `robots.txt` to reference both sitemap files.

If `/sitemap.xml` remains red in Search Console because of cache, submit:
`sitemap-google.xml`


## V5.6 Leak Finder Pro Preview

- Upgraded only the Leak Finder page.
- Kept Analyze Hands / Hand Review unchanged.
- Leak Finder now works as a Pro preview of Analyze Hands:
  - premium hero section
  - session report preview
  - recurring leak categories
  - future workflow
  - future Desktop Basic / Desktop Pro model
  - full multilingual copy in IT / EN / ES / FR / DE
  - post-session / no live-assistance disclaimer preserved


## V5.6.1 Leak Finder Pro Download Fix

- Fixed the "View report preview" button: it now scrolls inside the page instead of changing hash route.
- Removed Desktop Basic / Desktop Pro split.
- Leak Finder is now presented as one future PRO desktop download.
- Added a locked/coming-soon download card ready to connect later.
- No price is displayed on the page.
- Analyze Hands remains unchanged.
