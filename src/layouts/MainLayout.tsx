import React, { useEffect } from "react";
import { Header } from "../components/Header";
import Values from "values.js";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let primaryColor = "#170F1E";
  let secondaryColor = "#E5E1E6";

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#E5E1E6",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#170F1E",
        paper: "#170F1E",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
