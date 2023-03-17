"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/slices/cartSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddToCartButton({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    console.log("Product", product);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    console.log("Product - quantity", quantity);
    if (product.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch(addItem({ ...product, quantity }));
    toast.success("Product added to the cart");
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
