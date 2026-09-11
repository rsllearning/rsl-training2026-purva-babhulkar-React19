import { Suspense } from "react";
import { preconnect, preload } from "react-dom";

import ProductList from "./components/ProductList";
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
  return (
    <>
      <title>Mini E-Commerce Store - Products</title>

      <meta
        name="description"
        content="Browse products from our Mini E-Commerce Store."
      />

      <main>
        <h1>Mini E-Commerce Store</h1>

        <RegistrationForm />

        <UserProfile />

        <section>
          <h2>Products</h2>

          <ProductErrorBoundary>
            <Suspense fallback={<p>Loading products...</p>}>
              <ProductList productsPromise={productsPromise} />
            </Suspense>
          </ProductErrorBoundary>
        </section>
      </main>
    </>
  );
}

export default App;
