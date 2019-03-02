import React, { SyntheticEvent, Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeBlog } from '../../../../../../../actions/blogActions';
import { BtnWrapper } from '../../../../../NewsHeader/NewsDetails/AddBlog/AddBlog';

export const RemoveWrapper = styled(BtnWrapper)`
  &::before {
    content: '👎🏾';
  }
`;

export type RemoveBlogType = {
  removeBlog: Function,
  index: string
};
export class RemoveBlog extends Component<RemoveBlogType> {
  constructor(props: any) {
    super(props);

    this.onClickAction = this.onClickAction.bind(this);
  }

  onClickAction(e: SyntheticEvent<HTMLButtonElement, MouseEvent>) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.props.removeBlog(this.props.index);
  }

  render() {
    return <RemoveWrapper title="Remove from Blog!" onClick={this.onClickAction} />;
  }
}

export default connect(
  null,
  {
    removeBlog
  }
)(RemoveBlog);
