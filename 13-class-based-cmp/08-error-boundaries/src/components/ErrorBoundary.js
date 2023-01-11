import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    console.log("ErrorBoundary::componentDidCatch-start");
    console.log(error);
    this.setState({ hasError: true });
    console.log("ErrorBoundary::componentDidCatch-end");
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
