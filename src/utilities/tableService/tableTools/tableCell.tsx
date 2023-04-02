import React from "react";
import TableCell from "@mui/material/TableCell";
interface props {
    value: string;
    styleClass?: string;
    sx?: Object;
}

function CustomTableCell (props:props) {
    return (
        <TableCell
            className={props.styleClass}
            sx={props.sx}>
            {props.value}
        </TableCell>
    );
};
export default CustomTableCell;