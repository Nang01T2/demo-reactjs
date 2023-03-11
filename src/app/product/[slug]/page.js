import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "@/utils/data";
import AddToCartButton from "@/app/components/AddToCartButton";

export let metadata = {
  title: "Product Not Found",
};

export default function ProductPage(props) {
  const { slug } = props.params;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  metadata = { title: product.name };

  return (
    <>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
