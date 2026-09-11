import { Component } from "react";

class ProductErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <p>Unable to load products. Please try again.</p>;
    }

    return this.props.children;
  }
}

export default ProductErrorBoundary;
