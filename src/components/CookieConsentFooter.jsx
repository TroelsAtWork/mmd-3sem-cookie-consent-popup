"use client";
import AcceptCookieButton from "./AcceptCookieButton";
import CookieConsentParagraph from "./CookieConsentParagraph";

const CookieConsentFooter = ({ cookieAccepted, setCookieAccepted }) => {
  return (
    <footer className="cookie-consent-popup-footer">
      <CookieConsentParagraph
        text={"We use cookies to improve your user experience!"}
      />
      <AcceptCookieButton
        cookieAccepted={cookieAccepted}
        setCookieAccepted={setCookieAccepted}
      />
    </footer>
  );
};

export default CookieConsentFooter;
