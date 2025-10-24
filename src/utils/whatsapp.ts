export const generateWhatsAppMessage = (productName: string, price: string) => {
  return `Bonjour! Je suis intéressé(e) par ${productName} au prix de ${price} DH. Pouvez-vous me donner plus d'informations?`;
};

export const generateWhatsAppLink = (productName: string, price: string) => {
  const phoneNumber = "212650968936"; // Format international sans le 0
  const message = generateWhatsAppMessage(productName, price);
  const encodedMessage = encodeURIComponent(message);
  // Use the api endpoint which is broadly supported for both mobile and web
  const apiLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  // Log the generated link for debugging (check browser console)
  // eslint-disable-next-line no-console
  console.debug('[whatsapp] generated link', apiLink);
  return apiLink;
};

export const openWhatsApp = (productName: string, price: string) => {
  const link = generateWhatsAppLink(productName, price);
  const message = generateWhatsAppMessage(productName, price);
  // Try to open in a new tab/window. If blocked by popup blocker, fallback to navigating the current window.
  // On mobile, prefer the whatsapp:// protocol to open the native app with a prefilled message.
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  let openLink = link;
  if (isMobile) {
    // For many mobile setups, whatsapp:// works better to open the native app directly
    const phoneNumber = "212650968936";
    const message = `Bonjour! Je suis intéressé(e) par ${productName} au prix de ${price} DH. Pouvez-vous me donner plus d'informations?`;
    const encodedMessage = encodeURIComponent(message);
    openLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    // eslint-disable-next-line no-console
    console.debug('[whatsapp] mobile detected, using deep link', openLink);
  } else {
    // eslint-disable-next-line no-console
    console.debug('[whatsapp] opening web link', openLink);
  }
  // Force navigation in the same tab/window to avoid popup blocking issues.
  // This is more reliable across desktop and mobile environments.
  // Try to copy the message to clipboard (user gesture should allow it).
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(message).then(
      () => {
        // eslint-disable-next-line no-console
        console.debug('[whatsapp] message copied to clipboard');
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.warn('[whatsapp] failed to copy message to clipboard', err);
      }
    );
  }

  // eslint-disable-next-line no-console
  console.debug('[whatsapp] navigating to', openLink);
  window.location.href = openLink;
};
