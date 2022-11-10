import React from "react";
import { Table as AntdTable } from 'antd';

const Table = ({header = [], rows = [], onRowClick = () => {}}) => {
    return <AntdTable columns={header} dataSource={rows}
                  onRow={(record, rowIndex) => {
        return {
            onClick: event => {
                onRowClick(record, event)
            }, // click row
        };
    }}/>
}

export default Table;