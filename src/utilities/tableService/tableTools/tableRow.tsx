import { TableRow } from "@mui/material";
interface props {
    value: any;
    styleClass?: string;
    sx?: Object;
}

function CustomTableRow (props:props) {
    return (
        <TableRow sx={props.sx} id={props.styleClass ?? "default_roww"}>
          {props.value}
        </TableRow>
      )
}

export default CustomTableRow;