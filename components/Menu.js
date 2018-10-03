import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { mailFolderListItems, otherMailFolderListItems } from "./tileDara";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const style = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class Menu extends Component {
  state = {
    left: false
  };

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Menu"
          className={classes.menuButton}
          onClick={this.toggleDrawer(true)}
        >
          <MenuIcon onClick={this.toggleDrawer(true)} />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.list}>
              <List>{mailFolderListItems}</List>
              <Divider />
              <List>{otherMailFolderListItems}</List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default withStyles(style)(Menu);
