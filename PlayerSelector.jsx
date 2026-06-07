// Configurazione pagamento PayPal.Me
// Link generato: https://paypal.me/gt17pp/2EUR

export const PAYPAL_ME_USERNAME = 'gt17pp';
export const SUPPORT_AMOUNT_EUR = 2;

// IMPORTANTE:
// Non caricare l'installer .exe dentro GitHub/Vercel se supera 25MB.
// Caricalo come GitHub Release asset, poi incolla qui il link diretto.
export const DESKTOP_INSTALLER_URL = 'INSERISCI_LINK_DOWNLOAD_EXE';
export const DESKTOP_INSTALLER_FILENAME = 'PRO Poker Leak Finder-Setup-2.0.0.exe';

export function getPaypalSupportUrl() {
  return `https://paypal.me/${PAYPAL_ME_USERNAME}/${SUPPORT_AMOUNT_EUR}EUR`;
}

export function isPaypalConfigured() {
  return PAYPAL_ME_USERNAME && PAYPAL_ME_USERNAME !== 'INSERISCI_USERNAME_PAYPALME';
}

export function isDownloadConfigured() {
  return DESKTOP_INSTALLER_URL && DESKTOP_INSTALLER_URL !== 'INSERISCI_LINK_DOWNLOAD_EXE';
}

export function startDesktopDownload() {
  if (!isDownloadConfigured()) {
    alert('Download non ancora configurato: carica prima l\'installer come GitHub Release e incolla il link in src/config/payment.js');
    return;
  }

  const link = document.createElement('a');
  link.href = DESKTOP_INSTALLER_URL;
  link.download = DESKTOP_INSTALLER_FILENAME;
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function supportAndStartDownload() {
  startDesktopDownload();

  if (isPaypalConfigured()) {
    window.open(getPaypalSupportUrl(), '_blank', 'noopener,noreferrer');
  }
}
