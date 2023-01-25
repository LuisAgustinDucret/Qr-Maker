import * as React from "react";
import { getKeys } from "../../utils"
import EditIcon from '@mui/icons-material/Edit'
import IconButton from "@mui/material/IconButton";
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
    const columnsMap = columns.map((column,index) => {
      //index andando bien.
      return (
        <TableCell key={`${column.field+index}`}>{column.field}</TableCell>
      );
    });

    columnsMap.push(<TableCell key='buttons' >{"Acciones"}</TableCell>);

    return columnsMap;
  };

  const renderRows = () => {
    const rows = data.map((item, index) => {
      //a este data le esta llegando el id, y solo el evento
      const row = getKeys(item).map((rowValue) => {
        //index esta andando bien
        return <TableCell key={`${item.id+index}`}>{item[rowValue]}</TableCell>;
      });

      row.push(
        <TableCell key={`${item.id}-buttons`}>
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