import React from "react";
import { Box, Typography } from "@mui/material";

const OverviewDashboard = ({ title, subTitle, total }) => {
  return (
    <Box>
      <Typography variant="h6" color="var(--clr-main)" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="p" color="var(--clr-darg-gray)">
        {subTitle}
      </Typography>
      <Typography variant="h4" color="var(--clr-accent)" fontWeight="bold">
        ${total}
      </Typography>
    </Box>
  );
};

export default OverviewDashboard;
