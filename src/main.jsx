import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

const theme = extendTheme({
  components: {
    JoyChip: {
      defaultProps: {
        size: "sm",
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
  },
  shadow: {
    xs: "red",
    sm: "red",
    md: "red",
    lg: "red",
    xl: "red",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </BrowserRouter>
);
