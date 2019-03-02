import React, {ClassAttributes, Fragment, memo, ReactType, useEffect, useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'antd';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {ButtonProps} from 'antd/lib/button';
import {ActionButtonState} from 'antd/lib/modal/ActionButton';

type CustomButtomProps = {
  counter: number;
  counterFunc: Function;
};
const CustomButtom = <BaseProps extends CustomButtomProps>({
  counter,
  counterFunc,
  ...rest
} : BaseProps) /* : React.FunctionComponent<any> */ => {
  return (
    <Button onClick={() => counterFunc(counter)} {...rest}>
      + {counter}
    </Button>
  );
};

const DocumentClicker = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <Fragment>
      <p>You clicked {count} times</p>
      <Button shape="circle" icon="download" onClick={() => setCount(count + 1)} />
    </Fragment>
  );
};

type RowData = {
  make: string;
  model: string;
  price: number;
};
export type NewsPageType = {
  initialTableProps: {
    columnDefs: {
      headerName: string;
      field: string;
    }[];
    rowData: RowData[];
  };
};
export const NewsPage = memo(({ initialTableProps }: NewsPageType) => {
  const [rows, setRowsCount] = useState(initialTableProps.rowData);

  const addExtraRow = (fillNumber = 1) => {
    setRowsCount(
      [].concat(
        rows as never,
        Array(fillNumber).fill({ make: 'Toyota', model: 'Celica', price: 35000 }, 0) as never
      )
    );
  };

  return (
    <div>
      <DocumentClicker />
      <CustomButtom
        shape="round"
        icon="plus-circle"
        type="primary"
        counter={1}
        counterFunc={addExtraRow}
      />
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
});

export default NewsPage;
