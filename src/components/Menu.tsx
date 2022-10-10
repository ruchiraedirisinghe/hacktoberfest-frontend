import React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as RSLink } from "react-scroll";

const Menubar: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 12,
      }}
      className="shadowTextRed"
    >
      <Link style={{ textDecoration: "none" }} to="/">
        <Typography fontSize={16} fontWeight="600">
          Home
        </Typography>
      </Link>

      <RSLink activeClass="active" style={{ textDecoration: "none" }} spy smooth to="/about">
        <Typography fontSize={16} fontWeight="600">
          About
        </Typography>
      </RSLink>

      <Link style={{ textDecoration: "none" }} to="/LeaderBoard">
        <Typography fontSize={16} fontWeight="600">
          LeaderBoard
        </Typography>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/blog">
        <Typography fontSize={16} fontWeight="600">
          Blog
        </Typography>
      </Link>

      {/* <Link style={{ textDecoration: "none" }} to="#">
        <Typography fontSize={16} fontWeight="600">
          Forum
        </Typography>
      </Link> */}
    </Box>
  );
};

export default Menubar;
