import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title, subTitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color="var(--clr-main)"
        fontWeight="bold"
        sx={{ mb: "5" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color="var(--clr-main-light)">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
