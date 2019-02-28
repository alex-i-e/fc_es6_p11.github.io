import PropTypes from 'prop-types';
import React, {Component, RefObject, SyntheticEvent} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { filterNewsByTypeAndValue } from '../../../../../../actions/filterSector';
import InputField from '../../../../../shared/Input/InputField';
import {Input} from 'antd';

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


export type FilterSectorType = {
  filterNewsByTypeAndValue: Function
};

export class FilterSector extends Component<FilterSectorType> {
  public filterRef: RefObject<Input>;

  constructor(props: any) {
    super(props);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.filterRef = React.createRef();
  }

  onChangeFilter(e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) {
    this.props.filterNewsByTypeAndValue(FILTER_TYPE, e.currentTarget.value);
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

export default connect(
  null,
  { filterNewsByTypeAndValue }
)(FilterSector);
