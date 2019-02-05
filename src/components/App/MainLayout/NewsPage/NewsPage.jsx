import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

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
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button type="button" onClick={() => addExtraRow(1)}>
        Fill 1+
      </button>
      <button type="button" onClick={() => addExtraRow(100)}>
        Fill 100+
      </button>
      <button type="button" onClick={() => addExtraRow(10000)}>
        Fill 10000+
      </button>
      <button type="button" onClick={() => addExtraRow(1000000)}>
        Fill 1000000+
      </button>
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
