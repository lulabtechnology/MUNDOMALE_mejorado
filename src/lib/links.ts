export function normalizePhoneDigits(input: string) {
  return (input || "").replace(/[^\d]/g, "");
}

export function waMeLink(phoneDigitsOrE164: string, message: string) {
  const phone = normalizePhoneDigits(phoneDigitsOrE164);
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${phone}?text=${text}`;
}
