import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    removeBlog
} from '../../../../../actions/blogActions';
import {
    BtnWrapper
} from '../../../../NewsBlock/NewsDetails/AddBlog/AddBlog';

const RemoveWrapper = styled(BtnWrapper)
`
  &::before {
    content: '👎🏾';
  }
`;
export class RemoveBlog extends Component {
    constructor(props) {
        super(props);

        this.onClickAction = this.onClickAction.bind(this);
    }

    onClickAction(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        this.props.removeBlog(this.props.index);
    }

    render() {
        return <RemoveWrapper title = "Remove from Blog!"
        onClick = {
            this.onClickAction
        }
        />;
    }
}

RemoveBlog.propTypes = {
    removeBlog: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired
};

export default connect(
    null, {
        removeBlog
    }
)(RemoveBlog);