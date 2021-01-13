import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";

export default function Tabla(props) {
  useEffect(() => {
    console.log(props.HeroData);
  }, [props.HeroData]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Superhéroes</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.HeroData.map((row) => (
            <StyledTableRow key={row.nombre} className="ItemClass">
              <StyledTableCell component="th" scope="row" className="WrapIcon">
                <img src={row.avatarURL} alt="hero-icon" className="HeroIcon" />
              </StyledTableCell>
              <StyledTableCell align="right">
                <div className="Nombre">{row.nombre}</div>
                <div className="NombreReal">{row.nombreReal}</div>
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.habilidades.map((habilidad) => (
                  <div className="habilidad">{habilidad}</div>
                ))}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </TableContainer>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
