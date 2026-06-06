// Configurazione pagamento PayPal.Me
// Link generato: https://paypal.me/gt17pp/2EUR

export const PAYPAL_ME_USERNAME = 'gt17pp';
export const SUPPORT_AMOUNT_EUR = 2;

export function getPaypalSupportUrl() {
  return `https://paypal.me/${PAYPAL_ME_USERNAME}/${SUPPORT_AMOUNT_EUR}EUR`;
}

export function isPaypalConfigured() {
  return PAYPAL_ME_USERNAME && PAYPAL_ME_USERNAME !== 'INSERISCI_USERNAME_PAYPALME';
}
