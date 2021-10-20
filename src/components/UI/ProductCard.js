import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../store";
import { cartActions } from "../../store";

import unFavoritedIcon from "../../assets/interactions/unfavorited.svg";
import favoritedIcon from "../../assets/interactions/favorited.svg";

import img1 from "../../assets/products/hoodie-red.png";
import img2 from "../../assets/products/sweatshirt-black-zip.png";
import img3 from "../../assets/products/sweatshirt-gray-zip.png";
import img4 from "../../assets/products/sweatshirt-khaki.png";
import img5 from "../../assets/products/hoodie-black.png";
import img6 from "../../assets/products/hoodie-blue.png";
import img7 from "../../assets/products/sweatshirt-black.png";
import img8 from "../../assets/products/sweatshirt-black-zip-2.png";
import img9 from "../../assets/products/sweatshirt-black-ataturk.png";
import img10 from "../../assets/products/sweatshirt-white-ataturk.png";
import SuccessModal from "./SuccesModal";
const ProductCard = ({ id, img, name, price, colors, isFavorite }) => {
  const [showSuccessModal, setSuccessModal] = useState(false);
  const dispatch = useDispatch();

  const addCartClick = () => {
    dispatch(cartActions.add({ id, price, amount: 1 }));
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
    }, 1000);
  };
  let imageUrl;
  switch (id) {
    case 1:
      imageUrl = img1;
      break;
    case 2:
      imageUrl = img2;
      break;
    case 3:
      imageUrl = img3;
      break;
    case 4:
      imageUrl = img4;
      break;
    case 5:
      imageUrl = img5;
      break;
    case 6:
      imageUrl = img6;
      break;
    case 7:
      imageUrl = img7;
      break;
    case 8:
      imageUrl = img8;
      break;
    case 9:
      imageUrl = img9;
      break;
    case 10:
      imageUrl = img10;
      break;

    default:
      imageUrl = img1;
      break;
  }
  let favoriteButton;
  switch (isFavorite) {
    case true:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white favorite-container"
        >
          <img src={favoritedIcon} alt="Favorite" />
        </button>
      );
      break;
    case false:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white favorite-container"
        >
          <img src={unFavoritedIcon} alt="Favorite" />
        </button>
      );
      break;

    default:
      favoriteButton = (
        <button
          onClick={() => dispatch(productActions.favoriteToggle({ id }))}
          className="btn bg-white favorite-container"
        >
          <img src={unFavoritedIcon} alt="Favorite" />
        </button>
      );
      break;
  }

  return (
    <div
      style={{ maxWidth: "360px" }}
      className="product-card card col-12 col-sm-6 col-xl-3 p-0 m-1"
    >
      {favoriteButton}
      <img src={imageUrl} className="card-img-top" alt="Product"></img>
      <div className="card-body">
        <h5>{name}</h5>
        <div className="price">{price} TL</div>
        <div className="product-color d-flex align-items-center">
          {colors.map((color, index) => (
            <div key={index} className={color}></div>
          ))}
          <span className="product-color__total">{colors.length} renk</span>
        </div>
        <button onClick={addCartClick} className="btn btn-primary col-12">
          Sepete Ekle
        </button>
      </div>
      {showSuccessModal && <SuccessModal />}
    </div>
  );
};

export default ProductCard;
