import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {fetchNewsViaEpic, fetchNewsViaSaga} from '../../actions/newsBlock';
import NewsDetails from './NewsDetails/NewsDetails';

const Header = styled.div`
    z-index: 100;
`;
export const Loader = styled.div`
    position: fixed;
    top: 16px;
    right: 0;
    text-align: center;
`;
const NewsContainer = styled.div`
    overflow: hidden;
    position: absolute;
`;
export const NewsInnerContainer = styled.div`
`;

export class NewsBlock extends Component<any, {}> {
    constructor() {
        super();

        this.state = {
            newsDetailsHoverIn: null
        };

        this.onHoverIn = this.onHoverIn.bind(this);
        this.onHoverOut = this.onHoverOut.bind(this);
    }

    componentDidMount() {
        this.props.fetchNewsViaSaga('us');
        this.props.fetchNewsViaEpic('ru');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate() {
    }

    onHoverIn() {
        this.setState({newsDetailsHoverIn: true});
    }

    onHoverOut() {
        this.setState({newsDetailsHoverIn: false});
    }

    render() {
        const {loading, news} = this.props;
        const {newsDetailsHoverIn} = this.state;
        const classAnimation = newsDetailsHoverIn === null
            ? ''
            : newsDetailsHoverIn === true
                ? 'showOn'
                : 'showOff';

        return (
            <div>
                {loading
                    ?
                    <Loader>Loading...</Loader>
                    : (
                        <NewsContainer>
                            <NewsInnerContainer
                                className={loading ? 'loading' : 'loaded'}
                                onMouseEnter={this.onHoverIn}
                                onMouseLeave={this.onHoverOut}
                            >
                                <Header>
                                    News...length =
                                    {news.length}
                                </Header>
                                <NewsDetails
                                    classAnimation={classAnimation}
                                    news={news}
                                />
                            </NewsInnerContainer>
                        </NewsContainer>
                    )}
            </div>
        );
    }
}

NewsBlock.propTypes = {
    loading: PropTypes.bool.isRequired,
    news: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchNewsViaSaga: PropTypes.func.isRequired,
    fetchNewsViaEpic: PropTypes.func.isRequired
};

NewsBlock.defaultProps = {
    loading: false,
    news: [],
};

export default connect(
    (state) => ({
        loading: state.news.loading,
        news: state.news.status ? state.news.articles : [],
    }),
    {fetchNewsViaSaga, fetchNewsViaEpic}
)(NewsBlock);