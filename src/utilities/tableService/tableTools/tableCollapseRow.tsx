import * as React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

interface props {
  styleClass?: string;
  collapseValue: (row: any, index: number) => JSX.Element;
  header: any;
  body: any;
  data: any;
  row: any;
  index: number;
  value: any;
}

function CustomTableCollapsibleRow(prop:props) {
    const [open, setOpen] = React.useState(false);
    const { styleClass, collapseValue, header, body, data } = prop;
    return (
      <>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          {header.row.beginValue ? header.row.beginValue() : null}
          <TableCell
            style={{ width: "min-content" }}
            sx={{ ...body.cell.style.sx, width: "min-content"}}
            id="collapse_arrow_table_def" 
          >
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <ArrowCircleUpTwoToneIcon /> : <ArrowCircleDownTwoToneIcon />}
            </IconButton>
          </TableCell>
          {prop.value}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={data.keys.length+1}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {collapseValue(prop.row, prop.index)}
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };
  export default CustomTableCollapsibleRow;