"use client";
import CookieConsentHeader from "./CookieConsentHeader";
import CookieConsentFooter from "./CookieConsentFooter";
const CookieConsentPopup = () => {
  return (
    <section className="cookie-consent-popup">
      <CookieConsentHeader />
      <CookieConsentFooter />
    </section>
  );
};

export default CookieConsentPopup;
