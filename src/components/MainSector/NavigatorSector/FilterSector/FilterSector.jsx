import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterNewsByTypeAndValue} from '../../../../actionCreators/filterSector';
import styled from 'styled-components';
import InputField from '../../../shared/Input/InputField';

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
    }

    onChangeFilter(e) {
        this.props.filterNewsByTypeAndValue(FILTER_TYPE, e.target.value);
    }

    render() {
        return (
            <FilterWrapper>
                <FilterBlock>
                    <label htmlFor="blog-author">Filter By Author</label>
                    <InputField type="search"
                                id="blog-author"
                                onChange={this.onChangeFilter}/>
                </FilterBlock>
            </FilterWrapper>
        );
    }
}

export default connect(
    null,
    {filterNewsByTypeAndValue}
)(FilterSector);