import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Icon } from 'antd';
import { fetchNewsViaEpic, fetchNewsViaSaga } from '../../../actions/newsBlock';
import NewsDetails from './NewsDetails/NewsDetails';
import { GeneralStore } from '../../../reducers/index';

const Header = styled.div`
  z-index: 100;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const HeaderText = styled.span`
  margin-left: 12px;
`;

export const NewsInnerContainer = styled.div`
  color: black;
  background-color: white;
  box-shadow: -3px 1px 9px 0px #adadad;
  width: 200px;
  height: 40px;
  position: fixed;
  top: 48px;
  right: -160px;
  z-index: 100;

  transition: transform .5s;
`;

export type NewsHeaderProps = {
  loading: boolean,
  news: any[],
  fetchNewsViaSaga: Function,
  fetchNewsViaEpic: Function,
  className?: string
};

export type NewsHeaderState = {
  newsDetailsHoverIn: boolean | null,
  openNews: boolean,
};

export class NewsHeader extends Component<NewsHeaderProps, NewsHeaderState> {
  static defaultProps = {
    loading: false,
    news: []
  };

  constructor(props: any) {
    super(props);

    this.state = {
      newsDetailsHoverIn: null,
      openNews: false
    };

    this.onHoverIn = this.onHoverIn.bind(this);
    this.onHoverOut = this.onHoverOut.bind(this);
    this.onClickAction = this.onClickAction.bind(this);
  }

  componentDidMount() {
    this.props.fetchNewsViaSaga('us');
    this.props.fetchNewsViaEpic('ru');
  }

  componentDidUpdate() {}

  onHoverIn() {
    if (this.state.openNews) {
      this.setState({ newsDetailsHoverIn: true });
    }
  }

  onHoverOut() {
    if (this.state.openNews) {
      this.setState({ newsDetailsHoverIn: false });
    }
  }

  onClickAction() {
    this.setState(({ openNews }) => ({
      openNews: !openNews,
      newsDetailsHoverIn: !openNews
    }));
  }

  getSnapshotBeforeUpdate() {
    return null;
  }

  render() {
    const { loading, news, className } = this.props;
    const { newsDetailsHoverIn, openNews } = this.state;
    const classAnimation = newsDetailsHoverIn === true ? 'showOn' : '';
    const newsContainerClass = openNews ? ' news-show-in ' : '';

    return (
      <div>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <NewsContainer className={className}>
            <NewsInnerContainer
              className={newsContainerClass}
              onMouseEnter={this.onHoverIn}
              onMouseLeave={this.onHoverOut}
            >
              <Header onClick={this.onClickAction}>
                <Icon
                  className="svg-arrow"
                  style={{ fontSize: '24px', color: '#08c', marginLeft: '12px' }}
                  type="right-circle"
                />
                <HeaderText>News...length ={news.length}</HeaderText>
              </Header>
              <NewsDetails classAnimation={classAnimation} news={news} />
            </NewsInnerContainer>
          </NewsContainer>
        )}
      </div>
    );
  }
}

export default connect(
  (state: GeneralStore) => ({
    loading: state.news.loading,
    news: state.news.status ? state.news.articles : []
  }),
  { fetchNewsViaSaga, fetchNewsViaEpic }
)(NewsHeader);
