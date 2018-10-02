import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { InputBase, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Search from "@material-ui/icons/Search";

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
      main: "#fff"
    }
  },
  searchExtend: {
    transition: "width 0.8s cubic-bezier(0.000, 0.795, 0.000, 1.000)"
  },
  open: {
    width: 180,
    transition: "width 0.8s cubic-bezier(0.000, 0.795, 0.000, 1.000)"
  },
  closed: {
    width: 0,
    transition: "width 0.8s cubic-bezier(0.000, 0.795, 0.000, 1.000)"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handSearch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { classes } = this.props;

    let textStyle = this.state.isOpen ? classes.open : classes.closed;

    return (
      <MuiThemeProvider className={classes.palette}>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              AppBar
            </Typography>
            <div className={classes.searchExtend}>
              <IconButton color="inherit" onClick={this.handSearch}>
                <Search />
              </IconButton>
              <InputBase
                name="search"
                placeholder="Search"
                autoComplete="false"
                className={textStyle}
              />
            </div>
            <IconButton aria-haspopup="true" color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
