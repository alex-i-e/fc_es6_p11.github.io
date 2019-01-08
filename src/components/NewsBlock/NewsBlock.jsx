// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Loader = styled.div`
    position: fixed;
    top: 16px;
    right: 0;
    text-align: center;
`;
const NewsContainer = styled.div`
    overflow: hidden;
    position: absolute;
`;

const mapStateToNewsBlockProps = (state) => ({
    loading: state.news.loading,
    data: state.news.status ? state.news.articles : []
});

const mapDispatchToNewsBlockProps = (dispatch) => ({
    onChangeFormState(country: string) {
        dispatch({
            type: 'NEWS_FETCH_REQUESTED', payload: {country}
        });
    },
    onChangeEpicFormState(country: string) {
        dispatch({
            type: 'EPIC_NEWS_FETCH_REQUESTED', payload: {country}
        });
    }
});

class NewsBlock extends Component<any, {}> {
    constructor() {
        super();
    }

    componentDidMount(): void {
        this.props.onChangeFormState('us');
        this.props.onChangeEpicFormState('ru');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div>
                {this.props.loading
                    ?
                    <Loader>Loading...</Loader>
                    :
                    <NewsContainer>
                        <div className={this.props.loading ? 'loading' : 'loaded'}>
                            <span>some news...{`length = ${this.props.data.length}`}</span>
                        </div>
                    </NewsContainer>
                }
            </div>
        );
    }
}

export default connect(
    mapStateToNewsBlockProps,
    mapDispatchToNewsBlockProps
)(NewsBlock);