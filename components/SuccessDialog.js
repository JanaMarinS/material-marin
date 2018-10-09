import React, { Component } from "react";
import { Dialog } from "@material-ui/core";
import Done from "@material-ui/icons/Done";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 2
  }
});

class SuccessDialog extends Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <Done fontSize="large" className={classes.icon} />
      </Dialog>
    );
  }
}

export default withStyles(styles)(SuccessDialog);
