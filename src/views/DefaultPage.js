import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "../components/UI/ProductCard";

import { Link } from "react-router-dom";

import sortIcon from "../assets/interactions/sort.svg";
const DefaultPage = () => {
  const [sortType, setSortType] = useState("featured");

  const productsList = useSelector((state) => state.products);

  const searchTerm = useSelector((state) => state.searchTerm.term);

  const filteredList = productsList?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm?.toLocaleLowerCase())
  );
  let sortedList;

  switch (sortType) {
    case "featured":
      sortedList = filteredList;
      break;
    case "ascending":
      sortedList = filteredList.sort((a, b) => a.price - b.price);
      break;
    case "descending":
      sortedList = filteredList.sort((a, b) => b.price - a.price);
      break;

    default:
      sortedList = filteredList;
      break;
  }

  const totalFoundProduct = filteredList?.length;
  const renderedCards = sortedList?.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        img={product.img}
        name={product.name}
        price={product.price}
        colors={product.colors}
        isFavorite={product.isFavorite}
      />
    );
  });
  return (
    <div className="default-page">
      <div className="search-categories">
        <ul>
          <li>
            <Link to="#">Ana sayfa</Link>
          </li>
          <li>
            <Link to="#">Erkek</Link>
          </li>
          <li>
            <Link to="#">Sweatshirt</Link>
          </li>
        </ul>
      </div>
      <h2>Erkek Sweatshirt Modelleri</h2>
      <div className="row m-0 p-0">
        <div className="search-result col-4 m-0 p-0">
          {searchTerm
            ? `"${searchTerm}" ile ilgili ${totalFoundProduct} ürün bulduk`
            : `${totalFoundProduct} ürün`}
        </div>
        <div className="col-4 m-0 p-0"></div>
        <div className="filter-text col-4 m-0 p-0 text-end">
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
              <img className="me-1" src={sortIcon} alt="Sort" /> Sırala
            </button>
            <ul
              className="dropdown-menu ps-2"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value="featured"
                    type="radio"
                    name="sort"
                    id="featured"
                    onChange={(e) => setSortType(e.target.value)}
                    checked={sortType === "featured"}
                  />
                  <label className="form-check-label" htmlFor="featured">
                    Önerilen
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value="descending"
                    type="radio"
                    name="sort"
                    id="descending"
                    onChange={(e) => setSortType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="descending">
                    Fiyat azalan
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value="ascending"
                    type="radio"
                    name="sort"
                    id="ascending"
                    onChange={(e) => setSortType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="ascending">
                    Fiyat artan
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="products row justify-content-center justify-content-md-around">
        {renderedCards}
      </div>
    </div>
  );
};

export default DefaultPage;
