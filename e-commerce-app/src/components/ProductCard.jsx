function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <h2>{product.name}</h2>

      <p className="category">{product.category}</p>

      <p>{product.description}</p>

      <strong>₹{product.price}</strong>
    </div>
  );
}

export default ProductCard;
