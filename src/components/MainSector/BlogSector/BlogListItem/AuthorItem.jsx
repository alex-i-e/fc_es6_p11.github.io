import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Author = styled.div`
  display: flex;
  flex-flow: row;
`;

const AuthorItem = ({ value, matchingValue }) => {
  let innerHtml = value;
  if (value && matchingValue) {
    const regexp = new RegExp(matchingValue, 'g');
    innerHtml = `<span>${value.replace(
      regexp,
      `<b style="background-color: yellow">${matchingValue}</b>`
    )}</span>`;
  }
  // TODO: use sanitise DOM, ex. DOMPurify

  return <Author dangerouslySetInnerHTML={{ __html: innerHtml }} />;
};

AuthorItem.propTypes = {
  value: PropTypes.string.isRequired,
  matchingValue: PropTypes.string.isRequired
};

export default AuthorItem;
