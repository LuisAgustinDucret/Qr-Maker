import * as React from "react";
import { getKeys } from "../../utils"
import EditIcon from '@mui/icons-material/Edit'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@mui/icons-material/DeleteForever";

import { Table, TableRow, TableHeader, TableCell, TableBody } from "./styles";


export default function DataTable({
  data,
  columns,
  cantForPagpages,
  onEditClick,
  onDeleteClick,
}) {
  const renderColumns = () => {
    const columnsMap = columns.map((column, index) => {
      return (
        <TableCell key={`${column.field + index}`}>{column.field}</TableCell>
      );
    });

    columnsMap.push(<TableCell>{"Acciones"}</TableCell>);

    return columnsMap;
  };

  const renderRows = () => {
    const rows = data.map((item, index) => {
      const row = getKeys(item).map((rowValue) => {
        return <TableCell key={item.id + index}>{item[rowValue]}</TableCell>;
      });

      row.push(
        <TableCell>
          <IconButton
            onClick={() => {
              onEditClick(index);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              onDeleteClick(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      );

      return <TableRow key={item.id}>{row}</TableRow>;
    });

    return rows;
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>{renderColumns()}</TableRow>
      </TableHeader>
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
}