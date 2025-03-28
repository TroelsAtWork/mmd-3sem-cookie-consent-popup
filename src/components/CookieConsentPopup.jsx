"use client";
import CookieConsentHeader from "./CookieConsentHeader";
import CookieConsentFooter from "./CookieConsentFooter";
import { useState } from "react";

const CookieConsentPopup = () => {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [cookieNotAccepted, setCookieNotAccepted] = useState(true);
  return (
    !cookieAccepted && (
      <section className="cookie-consent-popup">
        <CookieConsentHeader />
        <CookieConsentFooter
          cookieAccepted={cookieAccepted}
          setCookieAccepted={setCookieAccepted}
        />
      </section>
    )
  );
};

export default CookieConsentPopup;
