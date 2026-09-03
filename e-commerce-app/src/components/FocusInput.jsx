function FocusInput({ ref, value, onChange }) {
  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search products..."
    />
  );
}

export default FocusInput;
