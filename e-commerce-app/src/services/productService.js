const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://picsum.photos/300/200?random=1",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    category: "Electronics",
    image: "https://picsum.photos/300/200?random=2",
    description: "Smart watch with fitness tracking and heart-rate monitoring.",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2999,
    category: "Footwear",
    image: "https://picsum.photos/300/200?random=3",
    description: "Lightweight running shoes designed for everyday comfort.",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    category: "Accessories",
    image: "https://picsum.photos/300/200?random=4",
    description: "Durable backpack suitable for work, college and travel.",
  },
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}
