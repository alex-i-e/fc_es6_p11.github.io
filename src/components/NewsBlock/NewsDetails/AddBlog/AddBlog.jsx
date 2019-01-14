import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {addNewBlog} from '../../../../actionCreators/blogForm';

const AddBlogWrapper = styled.button`
    background-size: 400% 400%;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    display: none;
    cursor: pointer;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 30px;
    height: 20px;
    border-radius: 20px;
    border-width: 0;
    box-shadow: -3px 1px 9px 0px #adadad;
    
    &:before {
     //content: '+';
     content: '👍';
    }
    
    &:hover {
        animation: 3s colorLink ease backwards;    
        box-shadow: -3px 1px 15px 0px; 
    }
`;

class AddBlog extends Component {
    constructor(props) {
        super(props);

        this.onClickAction = this.onClickAction.bind(this);
    }

    onClickAction(e) {
        e && e.preventDefault();
        e && e.stopPropagation();

        this.props.addNewBlog({
            author: this.props.topic.source.name + ' - ' + this.props.topic.author,
            title: this.props.topic.title,
            body: this.props.topic.description,
            image: this.props.topic.urlToImage,
            date: this.props.topic.publishedAt,
        });
    }

    render() {
        return (
            <AddBlogWrapper title={'Add to Blog!'} onClick={this.onClickAction}/>
        );
    }
}

export default connect(
    null,
    {addNewBlog}
)(AddBlog);