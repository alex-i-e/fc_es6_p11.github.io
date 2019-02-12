import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { filterNewsByTypeAndValue } from '../../../../../../actions/filterSector';
import InputField from '../../../../../shared/Input/InputField';

const FilterWrapper = styled.div`
  margin: 8px;
  padding: 8px;

  box-shadow: -3px 1px 9px 0px #adadad;
`;
export const FilterBlock = styled.div`
  display: flex;
  flex-flow: column;

  margin: 8px;
`;

const FILTER_TYPE = 'author';

export class FilterSector extends Component {
  constructor(props) {
    super(props);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.filterRef = React.createRef();
  }

  onChangeFilter(e) {
    this.props.filterNewsByTypeAndValue(FILTER_TYPE, e.target.value);
  }

  render() {
    return (
      <FilterWrapper>
        <FilterBlock>
          <InputField
            labelValue="Filter By Author"
            ref={this.filterRef}
            placeholder={"ex. Some filter's value"}
            type="search"
            id="blog-filter"
            onChange={this.onChangeFilter}
          />
        </FilterBlock>
      </FilterWrapper>
    );
  }
}

FilterSector.propTypes = {
  filterNewsByTypeAndValue: PropTypes.func.isRequired
};

export default connect(
  null,
  { filterNewsByTypeAndValue }
)(FilterSector);