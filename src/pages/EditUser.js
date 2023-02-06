import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getSingleUser, updateUser } from "../redux/actions";
import { useSelector } from "react-redux";

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  const { name, email, contact, address } = state;
  console.log(id);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("bitch");
    } else {
      dispatch(updateUser(state, id));
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
          value={name || ""}
          onChange={handleInput}
        />
        <TextField
          name="email"
          id="standart-basic"
          label="email"
          type="text"
          value={email || ""}
          onChange={handleInput}
        />
        <TextField
          name="contact"
          id="standart-basic"
          label="contact"
          type="text"
          value={contact || ""}
          onChange={handleInput}
        />
        <TextField
          name="address"
          id="standart-basic"
          label="address"
          type="text"
          value={address || ""}
          onChange={handleInput}
        />
        <Button variant="contained" color="primary" type="submit">
          edit user
        </Button>
      </form>
    </Box>
  );
};

export default EditUser;
