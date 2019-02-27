import React, { Component, ErrorInfo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logComponentStackToMyService } from '../../../actions/logService';

const ErrorBoundaryWrapper = styled.h1`
  margin: 8px;
`;

export type ErrorBoundaryProps = {
  children: React.ReactElement;
  logComponentStackToMyService: Function;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    this.props.logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorBoundaryWrapper>Something went wrong.</ErrorBoundaryWrapper>;
    }

    return this.props.children;
  }
}

export default connect(
  null,
  { logComponentStackToMyService }
)(ErrorBoundary);
