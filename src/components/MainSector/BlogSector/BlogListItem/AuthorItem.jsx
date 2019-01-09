import React from 'react';
import styled from 'styled-components';

const Author = styled.div`
    display: flex;
    flex-flow: row;
`;

const AuthorItem = (props) => {
    const {author, matchingValue} = props;
    // TODO: use sanitise DOM, ex. DOMPurify
    const innerHtml = `<span>${author.replace(new RegExp(matchingValue, 'g'), `<b>${matchingValue}</b>`)}</span>`;

    return (
        <Author dangerouslySetInnerHTML={{__html: innerHtml}}>
        </Author>
    );
};

export default AuthorItem;
