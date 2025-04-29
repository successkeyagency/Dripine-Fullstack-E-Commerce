import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2cl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="">
        <div className="">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
