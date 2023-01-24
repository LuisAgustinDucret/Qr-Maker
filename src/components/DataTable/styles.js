import styled from "styled-components";
import TableRowUI from "@material-ui/core/TableRow";
import TableUI from "@material-ui/core/Table";
import TableHeaderUI from "@material-ui/core/TableHead";
import TableBodyUI from "@material-ui/core/TableBody";

import TableCellUI from "@material-ui/core/TableCell";

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

export const Table = styled(TableUI)``;
export const TableHeader = styled(TableHeaderUI)``;
export const TableBody = styled(TableBodyUI)``;
export const TableRow = styled(TableRowUI)``;
export const TableCell = styled(TableCellUI)``;