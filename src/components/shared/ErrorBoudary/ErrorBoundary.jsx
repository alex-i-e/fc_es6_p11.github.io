import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {logComponentStackToMyService} from '../../../actionCreators/logService';

const ErrorBoundaryWrapper = styled.h1`
    margin: 8px;
`;

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, info) {
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
    {logComponentStackToMyService}
)(ErrorBoundary);