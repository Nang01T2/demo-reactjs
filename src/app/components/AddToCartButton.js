"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/slices/cartSlice";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch(addItem({ ...product, quantity }));
    router.push("/cart");
  };

  return (
    <button
      className="primary-button w-full"
      type="button"
      onClick={() => addToCartHandler(product)}
    >
      Add to cart
    </button>
  );
}
