import { Suspense, useState } from "react";
import { preconnect, preload } from "react-dom";

import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductSection from "./components/ProductSection";
import ProductSearch from "./components/ProductSearch";
import RegistrationForm from "./components/RegistrationForm";
import UserProfile from "./components/UserProfile";
import ProductErrorBoundary from "./components/ProductErrorBoundary";

import { getProducts } from "./services/productService";

preconnect("https://picsum.photos");

preload("https://picsum.photos/300/200?random=1", {
  as: "image",
});

const productsPromise = getProducts();

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <title>Mini E-Commerce Store – Products</title>

      <meta
        name="description"
        content="Browse products from our Mini E-Commerce Store."
      />

      <main>
        <h1>Mini E-Commerce Store</h1>

        <RegistrationForm />

        <UserProfile />

        <ProductSearch />

        <ProductSection>
          <ProductErrorBoundary>
            <Suspense fallback={<p>Loading products...</p>}>
              <ProductList
                productsPromise={productsPromise}
                onSelectProduct={setSelectedProduct}
              />
            </Suspense>
          </ProductErrorBoundary>
        </ProductSection>

        <ProductDetails
          product={selectedProduct}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </main>
    </>
  );
}

export default App;
