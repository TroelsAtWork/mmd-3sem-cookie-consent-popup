"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

const CookieConsentHeader = () => {
  return (
    <header className="cookie-consent-popup-header">
      <LiaCookieBiteSolid size={50} />
      <IoIosClose className="pointer" size={25} />
    </header>
  );
};

export default CookieConsentHeader;
