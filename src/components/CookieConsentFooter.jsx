"use client";
import AccepCookieButton from "./AcceptCookieButton";
import CookieConsentParagraph from "./CookieConsentParagraph";

const CookieConsentFooter = () => {
  return (
    <footer className="cookie-consent-popup-footer">
      <CookieConsentParagraph
        text={"We use cookies to improve your user experience!"}
      />
      <AccepCookieButton />
    </footer>
  );
};

export default CookieConsentFooter;
