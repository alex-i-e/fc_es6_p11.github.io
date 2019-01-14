import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {fetchNewsViaSaga, fetchNewsViaEpic} from '../../actionCreators/newsBlock';
import {hoverNewsDetails} from '../../actionCreators/newsDetails';
import NewsDetails from './NewsDetails/NewsDetails';

const Header = styled.div`
    z-index: 100;
`;
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

class NewsBlock extends Component<any, {}> {
    constructor() {
        super();

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
        this.props.hoverNewsDetails(true);
    }

    onHoverOut() {
        this.props.hoverNewsDetails(false);
    }

    render() {
        const {loading, news, newsDetailsHoverIn} = this.props;
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
                    :
                    <NewsContainer>
                        <div className={loading ? 'loading' : 'loaded'}
                             onMouseEnter={this.onHoverIn}
                             onMouseLeave={this.onHoverOut}>
                            <Header>
                                News...length = {news.length}
                            </Header>
                            <NewsDetails classAnimation={classAnimation}
                                         news={news}/>
                        </div>
                    </NewsContainer>
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        loading: state.news.loading,
        news: state.news.status ? state.news.articles : [],
        newsDetailsHoverIn: state.news.hoverIn,
    }),
    {fetchNewsViaSaga, fetchNewsViaEpic, hoverNewsDetails}
)(NewsBlock);