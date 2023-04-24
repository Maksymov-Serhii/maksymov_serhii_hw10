import React from "react";
import { useNavigate } from "react-router-dom";
import "./AgeConfirmationPage.css"

function AgeConfirmationPage({ onAgeConfirmation }) {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    onAgeConfirmation();
    navigate('/private');
  };

  const handleRejectClick = () => {
    navigate('/');
  };

  return (
    <div className="age-page">
      <h1>Підтвердіть свій вік</h1>
      <p>Ви повинні бути старше 18 років, щоб увійти на приватну сторінку.</p>
      <button className="button" onClick={handleConfirmClick}>Я підтверджую, що мені більше 18 років</button>
      <button className="button" onClick={handleRejectClick}>Ні, мені ще немає 18 років</button>
    </div>
  );
}

export default AgeConfirmationPage;
