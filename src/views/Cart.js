import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import CartItem from "../components/UI/CartItem";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  const totalItemOnCart = cartState?.items
    .map((item) => item.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const renderedCartItems = cartState.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        amount={item.amount}
        price={item.price}
      />
    );
  });
  return (
    <div className="cart-container row p-0">
      <div className="cart col-12 col-lg-8 row m-0">
        <div className="cart__header col-6 m-0 p-0">
          Sepetim ({totalItemOnCart} ürün)
        </div>
        <div className="cart__nav col-6 text-end p-0">
          <Link to="/"> &lt; Alışverişe Devam Et</Link>
        </div>
        {renderedCartItems}
      </div>

      <div className="summary col-12 col-lg-4 row">
        <h5 className="summary__title">Sipariş Özeti</h5>

        <div className="summary__price col-6 text-start">Ürün toplam</div>
        <div className="summary__price col-6 text-end">
          {cartState.totalAmount.toFixed(2)} TL
        </div>
        <div className="summary__discount col-6 text-start">İndirimler</div>
        <div className="summary__discount col-6 text-end">%10</div>
        <div className="summary__check col-6 text-start">Ara toplam</div>
        <div className="summary__check col-6 text-end">
          {(cartState.totalAmount * 0.9).toFixed(2)} TL
        </div>
        <div className="summary__cargo col-6 text-start">Kargo Ücreti</div>
        <div className="summary__cargo col-6 text-end">Bedava</div>
        <div className="summary__total col-6 text-start">Genel toplam</div>
        <div className="summary__total col-6 text-end">
          {(cartState.totalAmount * 0.9).toFixed(2)} TL
        </div>
      </div>
    </div>
  );
};

export default Cart;
