import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Check from "@material-ui/icons/Check";
import Alarm from "@material-ui/icons/Alarm";
import Archive from "@material-ui/icons/Archive";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  subjectName: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
  },
});

function createData(avatar, name, calories) {
  return { avatar, name, calories };
}

const rows = [
  createData("A", "Mathematics", 159),
  createData("B", "Physics", 237),
  createData("C", "Biotechnology", 262),
  createData("D", "Microbiology", 305),
  createData("E", "Agriculture", 356),
];

export default function DataGrid() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell width={35}>
                <Avatar>{row.avatar}</Avatar>
              </TableCell>
              <TableCell component="th" scope="row">
                <div className={classes.subjectName}>{row.name}</div>
                <br />
                <span>Test description should come here.</span>
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">
                <IconButton color="secondary" component="span">
                  <Archive />
                </IconButton>
                <IconButton color="secondary" component="span">
                  <Alarm />
                </IconButton>
                <IconButton color="secondary" component="span">
                  <Check />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
