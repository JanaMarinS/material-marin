import React, { Component } from "react";
import { Dialog, Typography } from "@material-ui/core";

class SuccessDialog extends Component {
  render() {
    return (
      <Dialog>
        <Typography variant="headline" component="h3">
          Operação realizada com sucesso!
        </Typography>
      </Dialog>
    );
  }
}

export default SuccessDialog;
