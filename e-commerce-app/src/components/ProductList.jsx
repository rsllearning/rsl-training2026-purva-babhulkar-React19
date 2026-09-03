import { use } from "react";
import ProductCard from "./ProductCard";

function ProductList({ productsPromise }) {
  const products = use(productsPromise);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
