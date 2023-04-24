import React from "react";
import './Contacts.css';
import locationIcon from '../../assets/icons/location.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/mail.svg';
import Menu from "../Menu/Menu";

const Contacts = () => {
  return (
    <div className="contacts-page">
      <Menu />
      <ul className="contact-list">
        <li>
          <div className="li-wrapper">
            <img src={locationIcon} alt="location" />
            <p>Адреса: Україна, м. Київ</p>
          </div>
        </li>
        <li>
          <div className="li-wrapper">
            <img src={phoneIcon} alt="phone" />
            <p>Телефон: +38 (033) 333-33-33</p>
          </div>          
        </li>
        <li>
          <div className="li-wrapper">
            <img src={mailIcon} alt="email" />
            <p>megainternetshop@somemail.com</p>
          </div>          
        </li>
      </ul>
    </div>
  )
}

export default Contacts;
