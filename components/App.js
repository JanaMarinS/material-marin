import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "./Menu";
import SearchTextField from "./SearchTextField";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a1c9c5"
    },
    secondary: {
      main: "#c2185b"
    }
  }
});

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  palette: {
    primary: {
      main: "#a1c9c5"
    },
    secondary: {
      main: "#c2185b"
    }
  }
};

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="absolute">
            <Toolbar>
              <Menu />
              <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
              >
                Teste
              </Typography>
              <SearchTextField />
              <IconButton aria-haspopup="true" color="inherit">
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
