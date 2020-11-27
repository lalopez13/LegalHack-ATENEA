import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import CustomizedDialogs from "./OpenDialog";
import { listenAllDocs } from "../API/crud";
import user from "../assets/icons/user.svg";
import "./tablaProveedores.scss";
// import Badge from "./Badge";
// import "./ClientTable.scss";
// import headerColumn from "../API/headerTable";


function TableComunicacion() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    listenAllDocs(setRowData);
  }, []);

  const headerColumn = [
    {
      id: "01",
      label: "Prov",
    },
    {
      id: "02",
      label: "Giro Comercial",
    },
    {
      id: "03",
      label: "RUC",
    },
    {
      id: "04",
      label: "Conversación",
    },
    
  ];

  return (
    <>

      <div className="filterZone">
        <TableContainer>
          <Table>
            <TableHead>
            <TableRow>
                {headerColumn.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
                ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {rowData.map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.proveedor}</TableCell>
                <TableCell>{row.giroComercial}</TableCell>
                <TableCell>{row.ruc}</TableCell>
                <TableCell><CustomizedDialogs/></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    </>
  );
}
export default TableComunicacion;
