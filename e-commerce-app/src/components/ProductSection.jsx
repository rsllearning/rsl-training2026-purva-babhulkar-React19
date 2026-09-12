function ProductSection({ children }) {
  return (
    <section
      ref={(element) => {
        if (!element) {
          return;
        }

        const observer = new ResizeObserver(() => {
          console.log("Product section size changed");
        });

        observer.observe(element);

        return () => {
          observer.disconnect();
          console.log("ResizeObserver cleaned up");
        };
      }}
    >
      <h2>Products</h2>

      {children}
    </section>
  );
}

export default ProductSection;
