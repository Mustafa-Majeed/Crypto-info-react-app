import "./style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Coinpages from "./pages/Coinpages";
import { makeStyles } from '@mui/styles';
import { createTheme,ThemeProvider } from '@mui/material/styles';

function App() {

  const text = "Crypt-info";
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",

    },
  }));
  
  const classes = useStyles();
  return (
    <div className={classes.App}>
        <Header />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<Coinpages />} />
      </Routes>
    </div>
  );
}
// import { formControlClasses } from "@mui/material";

export default App;
