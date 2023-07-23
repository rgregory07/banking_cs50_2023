import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState();
  const [user, setUser] = useState();

  // API Get
  useEffect(() => {
    axios.get("/account/users/").then((response) => {
      setProfile(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  return (
    <Box
      m="20px"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Typography variant="h1" fontSize={"40px"}>
        Welcome Back {}
      </Typography>

      <Box mt={"20px"}>
        <Typography variant="h3" fontSize={"25px"}>
          Personal Info
        </Typography>
        <Typography>Name: </Typography>
        <Typography>email: </Typography>
      </Box>

      <Box mt={"20px"}>
        <Typography variant="h3" fontSize={"25px"}>
          Account List
        </Typography>
        <Typography>Chequing Account</Typography>
        <Typography>Credit Card</Typography>
        <Typography>Business Account</Typography>
        <Typography>Savings</Typography>
      </Box>
      <button className="btn-main">Sign Out</button>
    </Box>
  );
}

export default Profile;
