import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store";

import banner from "../../assets/logo.svg";
import favorites from "../../assets/interactions/favorites.svg";
import cart from "../../assets/interactions/cart.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearchClick = (e) => {
    e.preventDefault();
    dispatch(searchActions.search(searchInput));
  };

  return (
    <div className="header">
      <div className="nav-top row align-items-center">
        <div className="banner col-8 col-lg-4 order-1 ">
          <Link to="/">
            <img src={banner} alt="Banner" />
          </Link>
        </div>
        <div className="search col-12 col-lg-4 order-3 order-lg-2 justify-content-center">
          <form onSubmit={onSearchClick}>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Tüm ürünlerde ara"
                value={searchInput}
                onChange={onInputChange}
              />

              <div className="input-group-append">
                <button
                  className="btn btn-outline-dark rounded-0 rounded-end"
                  type="submit"
                >
                  Ara
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="nav-top__links col-4 order-2 order-lg-3 text-center d-flex justify-content-end">
          <div>
            <Link to="#">
              <img src={favorites} alt="Favorites" />
              <p>Favorilerim</p>
            </Link>
          </div>
          <div>
            <Link to="#">
              <img src={cart} alt="Cart" />
              <p>Sepetim</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-bottom row align-items-center text-left col-12">
        <ul>
          <li>
            <NavLink to="#">KADIN</NavLink>
          </li>
          <li>
            <NavLink to="#">ERKEK</NavLink>
          </li>
          <li>
            <NavLink to="#">ÇOCUK</NavLink>
          </li>
          <li>
            <NavLink to="#">BEBEK</NavLink>
          </li>
          <li>
            <NavLink to="#">LCW HOME</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;