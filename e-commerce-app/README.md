## React 19 Mini E-Commerce Application

## Overview

A Mini E-Commerce application built using **React 19** to demonstrate modern React features including asynchronous data handling, form actions, Context, document metadata, and resource loading.

### Features

* Product listing with name, price, category, image, and description
* Asynchronous product loading
* Loading state using `Suspense`
* Error handling using Error Boundary
* User registration with form validation
* Async form submission
* Pending state
* React Context for registered user information
* Document metadata
* Resource loading using `preconnect()` and `preload()`

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

The component is wrapped in `Suspense`:

```jsx
<Suspense fallback={<p>Loading products...</p>}>
  <ProductList productsPromise={productsPromise} />
</Suspense>
```

While the Promise is pending, the Suspense fallback is displayed. Once the Promise resolves, the products are rendered.

An Error Boundary is also used to display an error message if product rendering/loading fails.

---

## 2. User Registration

The registration form contains:

* Name
* Email
* Password

The form uses React 19's form action:

```jsx
<form action={formAction}>
```

No traditional `onSubmit` handler is used.

### `useActionState()`

`useActionState()` manages the result of the registration action:

```jsx
const [state, formAction] = useActionState(registerUser, initialState);
```

It is used to manage validation errors, successful registration, and the returned user information.

### Form Validation

The form validates:

* Required fields
* Valid email format
* Password with minimum 6 characters

After successful validation, registration is simulated asynchronously using `setTimeout()`.

---

## 3. `useFormStatus()`

The submit button uses `useFormStatus()` to track whether the form is being submitted:

```jsx
const { pending } = useFormStatus();
```

While submission is in progress:

* The button is disabled.
* The text changes from `Register` to `Registering...`.

This provides feedback to the user during the asynchronous operation.

---

## 4. React Context

The application uses React Context to store registered user information.

React 19's new provider syntax is used:

```jsx
<UserContext value={{ user, setUser }}>
  {children}
</UserContext>
```

Instead of the traditional:

```jsx
<UserContext.Provider>
```

The `UserProfile` component consumes the Context and displays the registered user's name and email.

---

## 5. Document Metadata

React 19 allows metadata to be rendered directly from components.

The application defines:

```jsx
<title>Mini E-Commerce Store - Products</title>

<meta
  name="description"
  content="Browse products from our Mini E-Commerce Store."
/>
```

This provides the page title and description.

---

## 6. Asset Loading

The application uses two React DOM resource loading APIs.

### `preconnect()`

```jsx
preconnect("https://picsum.photos");
```

This establishes an early connection to the image server, helping prepare for image requests.

### `preload()`

```jsx
preload("https://picsum.photos/300/200?random=1", {
  as: "image",
});
```

This tells the browser to prioritize loading an important image resource.

**Difference:** `preconnect()` prepares the connection, while `preload()` prioritizes a specific resource.

---

## 7. Project Structure

```text
src/
├── components/
│   ├── ProductCard.jsx
│   ├── ProductErrorBoundary.jsx
│   ├── ProductList.jsx
│   ├── RegistrationForm.jsx
│   ├── SubmitButton.jsx
│   └── UserProfile.jsx
├── context/
│   └── UserContext.jsx
├── services/
│   └── productService.js
├── App.jsx
└── main.jsx
```

---

## Key Learning Outcomes

This assignment demonstrates practical usage of React 19 features:

* `use()` with Promises
* `Suspense`
* `useActionState()`
* `useFormStatus()`
* React 19 Context provider syntax
* Document Metadata
* `preconnect()` and `preload()`
* Async form submission and validation
