import ProductItem from "@/app/components/ProductItem";
import data from "@/utils/data";

export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product) => (
        <ProductItem product={product} key={product.slug} />
      ))}
    </div>
  );
}
