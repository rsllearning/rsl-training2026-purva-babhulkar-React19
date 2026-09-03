import { use } from "react";
import ProductCard from "./ProductCard";

function ProductList({ productsPromise, onSelectProduct }) {
  const products = use(productsPromise);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
