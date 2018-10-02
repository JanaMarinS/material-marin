import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#80cbc4"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                Janaína Marin
              </Typography>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
