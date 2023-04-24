import React from "react";
import './MainPage.css'
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/products');
  }

  const handlePrivatePage = () => {
    navigate('/private');
  }

  return (
    <div className="main-page">
      <Menu />
      <p>
        <button className="button" onClick={handleStartShopping}>Розпочати покупки</button>
      </p>
      <p>
        <button className="button" onClick={handlePrivatePage}>Перейти на приватну сторінку</button>
      </p>
    </div>
  )
}

export default MainPage;
