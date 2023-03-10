import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteUser, loadUsers } from "../redux/actions";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("are u sure?")) {
      dispatch(deleteUser(id));
      dispatch(loadUsers());
    }
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <div>
      <TableContainer sx={{ minWidth: 900, marginTop: 20 }} component={Paper}>
        <Button
          color="primary"
          onClick={() => {
            navigate("/addUser");
          }}
        >
          add user
        </Button>
        <Table
          sx={{ minWidth: 900, marginTop: 5 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">contact</StyledTableCell>
              <StyledTableCell align="center">address</StyledTableCell>
              <StyledTableCell align="center">action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup>
                      <Button
                        onClick={() => handleDelete(user.id)}
                        color="secondary"
                      >
                        delete
                      </Button>
                      <Button
                        onClick={() => navigate(`/edituser/${user.id}`)}
                        color="primary"
                      >
                        edit
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
    </div>
  );
};

export default Home;
