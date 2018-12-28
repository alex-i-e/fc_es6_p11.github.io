// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FILTER_BY_AUTHOR_WAS_CHANGED} from "../../../../constants/actionTypes";
import styled from 'styled-components';

const FilterWrapper = styled.div`
    margin: 8px;
    padding: 8px;
    
    box-shadow: -3px 1px 9px 0px #adadad;
`;
const FilterBlock = styled.div`
    display: flex;
    flex-flow: column;
    
    margin: 8px;
`;


type Props = {
    onChangeFilter: (filterType: string, value: string) => void
}

const mapDispatchToFilterSectorProps = (dispatch) => ({
    onChangeFilter (filterType, value) {
        dispatch({type: FILTER_BY_AUTHOR_WAS_CHANGED, value});
    },
});

class FilterSector extends Component<Props> {
    render() {
        return (
            <FilterWrapper>
                <FilterBlock>
                    <label htmlFor="blog-author">Filter By Author</label>
                    <input type="text" id="blog-author" onChange={this.onChangeFilter.bind(this)}/>
                </FilterBlock>
            </FilterWrapper>
        )
    }

    onChangeFilter(e) {
        this.props.onChangeFilter('author', e.currentTarget.value);
    }
}

export default connect(
    null,
    mapDispatchToFilterSectorProps
)(FilterSector);