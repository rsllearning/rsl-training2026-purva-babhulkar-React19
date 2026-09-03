import { useOptimistic, useState, useTransition } from "react";

function AddToCartButton({ product, cartCount, setCartCount }) {
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const [optimisticCartCount, addOptimisticItem] = useOptimistic(
    cartCount,
    (currentCount) => currentCount + 1,
  );

  function addToCartAPI(product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;

        if (success) {
          resolve();
        } else {
          reject(new Error("Failed to add product"));
        }
      }, 2000);
    });
  }

  function handleAddToCart() {
    setError("");

    startTransition(async () => {
      addOptimisticItem();

      try {
        await addToCartAPI(product);

        setCartCount((count) => count + 1);
      } catch {
        setError("Unable to add product to cart.");
      }
    });
  }

  return (
    <div>
      <p className="cart-count">Cart: {optimisticCartCount}</p>

      <button onClick={handleAddToCart} disabled={isPending}>
        {isPending ? "Adding..." : "Add to Cart"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default AddToCartButton;
