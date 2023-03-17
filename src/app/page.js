import ProductItem from "@/app/components/ProductItem";
import data from "@/utils/data";

export const metadata = {
  title: "Home",
};

async function getData() {
  const res = await fetch(`${process.env.LOCAL_AUTH_URL}/api/getProducts`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
  //return data.products;
}

export default async function Page() {
  const products = await getData();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem product={product} key={product.slug} />
      ))}
    </div>
  );
}
