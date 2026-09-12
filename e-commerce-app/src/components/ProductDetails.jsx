import AddToCartButton from "./AddToCartButton";

function ProductDetails({ product, cartCount, setCartCount }) {
  if (!product) {
    return (
      <section>
        <h2>Product Details</h2>
        <p>Select a product to view its details.</p>
      </section>
    );
  }

  return (
    <section className="product-details">
      <h2>Product Details</h2>

      <div className="product-details-content">
        <img src={product.image} alt={product.name} />

        <div>
          <h3>{product.name}</h3>

          <p className="details-price">₹{product.price}</p>

          <p>{product.description}</p>

          <p>
            <strong>Cart: {cartCount}</strong>
          </p>

          <AddToCartButton
            product={product}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
