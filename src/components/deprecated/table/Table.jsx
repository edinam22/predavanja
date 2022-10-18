import React from "react";

//header - ["Title 1", "Title 2"]

//rows - [
//   { }

const Table = ({header = [], rows = [], onRowClick = () => {}}) => {
    return <table>
        <thead>
        <tr>
            {Array.isArray(header) &&
                header.map((title, index) => <td key={index} style={{
                    maxWidth: '150px', overflow: "hidden"
                }}>{title}</td>)
            }
        </tr>
        </thead>
        <tbody>
        {Array.isArray(rows) &&
            rows.map(row => {
                return <tr key={row?.id} onClick={() => onRowClick(row)}>
                    {Object.values(row).map((rowProperty, index) => <td key={index} style={{
                        maxWidth: '150px', overflow: "hidden"
                    }}>{rowProperty.toString()}</td>)}
                </tr>
            })
        }
        </tbody>
    </table>
}

export default Table;