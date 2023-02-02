import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import { CryptoState } from "../CryptoContext"
function Header() {

  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "gold",
      cursor: "pointer",
    }
  }));

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });
    const {currency,setCurrency} = CryptoState();
    console.log(currency);


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography className={classes.title} variant='h5'>
                <Link to="/" style={{ fontFamily: "Montserrat", fontWeight: "bold" }}>
                  Crypto-info
                </Link>
              </Typography>
              <Select variant="outlined"
                defaultValue={"USD"}
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"PKR"}>PKR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default Header

