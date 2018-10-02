import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const style = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <IconButton
        color="inherit"
        aria-label="Menu"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    );
  }
}
export default withStyles(style)(Menu);
