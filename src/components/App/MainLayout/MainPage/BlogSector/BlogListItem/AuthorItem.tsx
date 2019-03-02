import React from 'react';
import styled from 'styled-components';

const Author = styled.div`
  display: flex;
  flex-flow: row;
`;

type AuthorItemType = {
  value: string,
  matchingValue: string,
  className?: string
};

const AuthorItem = ({ value, matchingValue, className }: AuthorItemType) => {
  let innerHtml = value;
  if (value && matchingValue) {
    const regexp = new RegExp(matchingValue, 'g');
    innerHtml = `<span>${value.replace(
      regexp,
      `<b style="background-color: yellow">${matchingValue}</b>`
    )}</span>`;
  }
  
  return <Author className={className} dangerouslySetInnerHTML={{ __html: innerHtml }} />;
};

export default AuthorItem;
