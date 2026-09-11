## React 19 Mini E-Commerce Application

## Overview

A Mini E-Commerce application built using **React 19** to demonstrate modern React features including asynchronous data handling, form actions, Context, document metadata, and resource loading.

### Features

- Product listing with name, price, category, image, and description
- Asynchronous product loading
- Loading state using `Suspense`
- Error handling using Error Boundary
- User registration with form validation
- Async form submission
- Pending state
- React Context for registered user information
- Document metadata
- Resource loading using `preconnect()` and `preload()`

---

## 1. `use()` and Suspense

Product data is returned as a Promise from the mock product service.

```jsx
const productsPromise = getProducts();
```

`ProductList` uses React 19's `use()` API to consume the Promise:

```jsx
const products = use(productsPromise);
```

## Server & Client Components

Since this project uses Vite, the Server and Client Component architecture is explained conceptually. Actual React Server Components require appropriate framework/tooling support such as Next.js.

### ProductDetails – Server Component

`ProductDetails` can be a Server Component because its main responsibility is to fetch and display product information such as:

- Product name
- Price
- Description
- Product image

Product data can be fetched on the server and rendered before being sent to the client. This can reduce the amount of JavaScript required on the client.

### AddToCartButton – Client Component

`AddToCartButton` needs to remain a Client Component because it contains interactive functionality such as:

- Handling the `onClick` event
- Using `useState()`
- Using `useOptimistic()`
- Performing the asynchronous add-to-cart operation
- Updating the UI optimistically

These operations require browser-side JavaScript and user interaction.

### How They Work Together

In a real e-commerce application, the components could be structured as:

```text
Server
  |
  └── ProductDetails
        |
        | product data
        ↓
      Client
        |
        └── AddToCartButton
              |
              ├── User clicks "Add to Cart"
              ├── Optimistic UI update
              └── API request
```

The `ProductDetails` Server Component can fetch and display the product information and render the `AddToCartButton` Client Component by passing the product data as props.

The Client Component then handles user interactions and cart updates.

Because this project uses Vite, the above Server/Client Component separation is conceptual rather than an actual React Server Components implementation.

## 6. React Compiler

React Compiler is a build-time optimization tool for React applications. It
automatically analyzes React components and optimizes rendering by identifying
values and components that do not need to be recalculated or rendered again.

It reduces the need for developers to manually use optimization techniques
such as `React.memo`, `useMemo`, and `useCallback` in many cases.

### How React Compiler Could Optimize This Application

This application contains multiple components such as `ProductList`,
`ProductCard`, `ProductDetails`, `ProductSearch`, and `AddToCartButton`.

## For example, `ProductList` renders multiple `ProductCard` components:

```jsx
function ProductList({ products, onSelectProduct }) {
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
```
