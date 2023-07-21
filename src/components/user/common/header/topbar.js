import React from "react";
import {
  FaFacebook,
  FaHeadphonesAlt,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { settings } from "../../../../helpers/settings";
const TopBar = () => {
  return (
    <div className="topbar">
      <ul className="contact-bar">
        <li>
          <a href={`tel:${settings.phone1}`}>
            <FaHeadphonesAlt />
            {settings.phone1}
          </a>
        </li>
        <li>
          <a href={`email:${settings.email}`}>
            <FaRegEnvelope />
            {settings.email}
          </a>
        </li>
      </ul>
      <ul className="social-bar">
        <li>
          <a href="https://instagram.com" target="_blank">
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://youtupe.com" target="_blank">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
