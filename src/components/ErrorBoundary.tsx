import { Component, ErrorInfo } from "react";

import { Props, State } from "../types";

import {
  ErrorHeading,
  ErrorMessage,
  ErrorPageContainer,
} from "../styles/Container.styled";

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPageContainer>
          <ErrorHeading>Oops!</ErrorHeading>
          <ErrorMessage>
            Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
          </ErrorMessage>
        </ErrorPageContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
