import React, { useState } from "react";
import './ProductItem.css'
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu/Menu";
import car1 from "../../assets/images/car-1.jpg"
import car2 from "../../assets/images/car-2.jpg"
import car3 from "../../assets/images/car-3.jpg"
import car4 from "../../assets/images/car-4.jpg"
import car5 from "../../assets/images/car-5.jpg"

const ProductItem = () => {

  const [isBuyError, setIsBuyError] = useState(false);
  const [showAllProductsError, setShowAllProductsError] = useState(false);

  const { productId } = useParams();
  const productImages = {
    1: car1,
    2: car2,
    3: car3,
    4: car4,
    5: car5,
  }
  const navigate = useNavigate();

  const handlePreviousProduct = () => {
    if (productId > 1) {
      navigate(`/products/${productId - 1}`);
    }  
  }

  const handleNextProduct = () => {
    if (productId < 5) {
      navigate(`/products/${+productId + 1}`);
    }
  }

  const handleMethodError = () => {
    try {
      throw new Error("You've caught an error");
    } catch (error) {
      console.log(error);
      setIsBuyError(true);
    }
  }

  if (showAllProductsError) {
    return new Error("You've caught an error");
  }

  const handleAllProducts = () => {
    setShowAllProductsError(true);
  }

  return (
    <div className="product-page">
      <Menu />
      <div className="product-navigation">
        <button className="button" onClick={handlePreviousProduct}>Попередній товар</button>
        <h4>Товар {productId}</h4>
        <button className="button" onClick={handleNextProduct}>Наступний товар</button>
      </div>
      <div className="product-navigation">
        <button className="button" onClick={handleAllProducts}><b>Показати всі товари</b></button>
        <span>- Експериментальна функція! Не натискати!</span>
      </div>
      <img src={productImages[productId]} alt={productId}></img>
      
      {!isBuyError && <p>
        <button className="button" onClick={handleMethodError}>
          <b>Купити!</b> (Кнопка з помилкою - не натискати!)
        </button>
      </p>}
      {isBuyError && <p>Something went wrong</p>}
    </div>
  )
}

export default ProductItem;
