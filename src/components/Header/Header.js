import banner from "../../assets/logo.svg";
import favorites from "../../assets/interactions/favorites.svg";
import cart from "../../assets/interactions/cart.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-top row align-items-center">
        <div className="banner col-8 col-lg-4 order-1 ">
          <Link to="/">
            <img src={banner} />
          </Link>
        </div>
        <div className="search col-12 col-lg-4 order-3 order-lg-2 justify-content-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-dark"
              placeholder="Tüm ürünlerde ara"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-dark rounded-0 rounded-end"
                type="button"
              >
                Ara
              </button>
            </div>
          </div>
        </div>
        <div className="nav-top__links col-4 order-2 order-lg-3 text-center d-flex justify-content-end">
          <div>
            <Link to="#">
              <img src={favorites} />
              <p>Favorilerim</p>
            </Link>
          </div>
          <div>
            <Link to="#">
              <img src={cart} />
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
