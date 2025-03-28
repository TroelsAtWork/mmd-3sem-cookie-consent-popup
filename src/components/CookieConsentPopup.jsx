"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const CookieConsentPopup = () => {
  const [cookieAccepted, setCookieAccepted] = useState(true);
  return (
    cookieAccepted && (
      <section className="cookie-consent-popup">
        <header className="cookie-consent-popup-header">
          <LiaCookieBiteSolid size={50} />
          <IoIosClose className="pointer" size={25} />
        </header>
        <footer className="cookie-consent-popup-footer">
          <p className="cookie-consent-popup-paragraph">
            We use cookies to improve your user experience!
          </p>
          <button
            onClick={() => setCookieAccepted(!cookieAccepted)}
            className="cookie-consent-popup-cta pointer"
          >
            I like Cookies
          </button>
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup;
