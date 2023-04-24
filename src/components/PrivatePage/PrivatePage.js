import React from "react";
import "./PrivatePage.css";
import { useNavigate } from "react-router-dom";

function PrivatePage() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  }

  return (
    <div className="private-page">
      <h1>Це приватна сторінка.</h1>
      <p>Але тут немає ніц цікавого.</p>
      <p>Натисніть кнопку "Назад", щоб перейти до головної сторінки.</p>
      <p>
        <button className="button" onClick={handleHome}>Назад</button>
      </p>
    </div>
  );
}

export default PrivatePage;
