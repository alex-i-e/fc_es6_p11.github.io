// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Loader = styled.div`
    text-align: center;
`;

const mapStateToNewsBlockProps = (state) => ({
    loading: state.news.loading,
    data: state.news.status ? state.news.articles : []
    // isFormOpen: state.blog.isOpenNewBlogForm,
});

const mapDispatchToNewsBlockProps = (dispatch) => ({
    onChangeFormState(country) {
        dispatch({
            type: 'USER_FETCH_REQUESTED', payload: {country}
        });
    }
});

class NewsBlock extends Component {
    constructor() {
        super();
    }

    componentDidMount(): void {
        this.props.onChangeFormState('us');
    }

    getDerivedStateFromProps(nextProps, prevState) {
        console.log(' ...getDerivedStateFromProps >>> nextProps', nextProps);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // this.props.onNewsLoaded();
        console.log(' ...getSnapshotBeforeUpdate >>> prevProps', prevProps);
        console.log(' ...getSnapshotBeforeUpdate >>> nextProps', this.props);

        // this.props.loading = this.props.news.loading;
        // this.props.data = this.props.news.data;
    }

    componentDidUpdate() {
        console.log(' ...componentDidUpdate >>> this.props', this.props);
    }

    render() {
        const isLoading = this.props.loading;
        console.log('>>> isLoading', isLoading);
        return (
            <div>
                {isLoading
                    ?
                    <div>
                        some news...{this.props.data}
                    </div>
                    :
                    <Loader>Loading...</Loader>}
            </div>
        );
    }
}


export default connect(
    mapStateToNewsBlockProps,
    mapDispatchToNewsBlockProps
)(NewsBlock);