import * as React from "react";
import { getKeys } from "../../utils"
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteForever";

import { Table, TableRow, TableHeader, TableCell, TableBody } from "./styles";
//import { Row as TableRow } from "./styles";

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
        return <TableCell>{item[rowValue]}</TableCell>;
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

      return <TableRow key={data.id}>{row}</TableRow>;
    });

    rows.push();
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