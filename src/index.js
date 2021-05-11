import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ReduxApp } from "./providers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { COLORS } from "./colors";

const theme = createMuiTheme({
  palette: { primary: { main: COLORS.YELLOW } },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
      },
      containedPrimary: {
        color: "white",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReduxApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
