import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {removeBlog} from '../../../../../actions/blogActions';
import {BtnWrapper} from '../../../../NewsBlock/NewsDetails/AddBlog/AddBlog';

const RemoveWrapper = styled(BtnWrapper)`
     &::before {
     content: '👎🏾';
    }
    
`;

class RemoveBlog extends Component {
    constructor(props) {
        super(props);

        this.onClickAction = this.onClickAction.bind(this);
    }

    onClickAction(e) {
        e && e.preventDefault();
        e && e.stopPropagation();

        this.props.removeBlog(this.props.index);
    }

    render() {
        return (
            <RemoveWrapper title={'Remove from Blog!'} onClick={this.onClickAction}/>
        );
    }
}

export default connect(
    null,
    {removeBlog}
)(RemoveBlog);