"use client";

const AcceptCookieButton = ({ cookieAccepted, setCookieAccepted }) => {
  return (
    <button
      onClick={() => setCookieAccepted(!cookieAccepted)}
      className="cookie-consent-popup-cta pointer"
    >
      I like Cookies
    </button>
  );
};

export default AcceptCookieButton;
