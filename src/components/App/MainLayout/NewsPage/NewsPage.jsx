import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'antd';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const CustomButtom = ({ counter, counterFunc, ...rest }) => {
  return (
    <Button onClick={() => counterFunc(counter)} {...rest}>
      + {counter}
    </Button>
  );
};
CustomButtom.propTypes = {
  counter: PropTypes.number.isRequired,
  counterFunc: PropTypes.func.isRequired
};

export const NewsPage = ({ initialTableProps }) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [rows, setRowsCount] = useState(initialTableProps.rowData);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  const addExtraRow = (fillNumber = 1) => {
    setRowsCount(
      Array.concat(
        rows,
        Array(fillNumber).fill({ make: 'Toyota', model: 'Celica', price: 35000 }, 0)
      )
    );
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button shape="circle" icon="download" onClick={() => setCount(count + 1)} />
      <CustomButtom shape="round" icon="plus-circle" type="primary" counter={1} counterFunc={addExtraRow} />
      <CustomButtom icon="plus-circle" counter={100} counterFunc={addExtraRow} />
      <CustomButtom icon="plus-circle" counter={10000} counterFunc={addExtraRow} />
      <CustomButtom icon="plus-circle" counter={1000000} counterFunc={addExtraRow} />
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: 'auto'
        }}
      >
        <AgGridReact columnDefs={initialTableProps.columnDefs} rowData={rows} />
      </div>
    </div>
  );
};
NewsPage.propTypes = {
  initialTableProps: PropTypes.shape({
    columnDefs: PropTypes.arrayOf(
      PropTypes.shape({
        headerName: PropTypes.string,
        field: PropTypes.string
      })
    ),
    rowData: PropTypes.arrayOf(
      PropTypes.shape({
        make: PropTypes.string,
        model: PropTypes.string,
        price: PropTypes.number
      })
    )
  }).isRequired
};

export default NewsPage;
