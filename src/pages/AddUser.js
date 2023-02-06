import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  const { name, email, contact, address } = state;

  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("bitch");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };
  return (
    <Box sx={{ mt: 10 }}>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="primary"
        type="submit"
      >
        go back
      </Button>
      {error ? <Typography>{error}</Typography> : <></>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          name="name"
          id="standart-basic"
          label="name"
          type="text"
          value={name}
          onChange={handleInput}
        />
        <TextField
          name="email"
          id="standart-basic"
          label="email"
          type="text"
          value={email}
          onChange={handleInput}
        />
        <TextField
          name="contact"
          id="standart-basic"
          label="contact"
          type="text"
          value={contact}
          onChange={handleInput}
        />
        <TextField
          name="address"
          id="standart-basic"
          label="address"
          type="text"
          value={address}
          onChange={handleInput}
        />
        <Button variant="contained" color="primary" type="submit">
          add user
        </Button>
      </form>
    </Box>
  );
};

export default AddUser;
