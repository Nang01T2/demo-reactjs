"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CartItem() {
  
  const { cart } = useSelector((state) => state.cart);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <Link href="/cart" className="p-2">
      Cart
      {cartItemsCount > 0 && (
        <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-sx font-bold text-white">
          {cartItemsCount}
        </span>
      )}
    </Link>
  );
}
