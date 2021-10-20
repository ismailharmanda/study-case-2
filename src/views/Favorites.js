import React from "react";
import { useSelector } from "react-redux";

import FavoriteItem from "../components/UI/FavoriteItem";

const Favorites = () => {
  const productState = useSelector((state) => state.products);
  const favoritedProducts = productState.filter(
    (product) => product.isFavorite === true
  );
  const renderedFavoriteItems = favoritedProducts.map((product) => {
    return (
      <FavoriteItem key={product.id} id={product.id} price={product.price} />
    );
  });
  return (
    <div className="favorites-container row m-0 p-0 g-3">
      {renderedFavoriteItems}
    </div>
  );
};

export default Favorites;
