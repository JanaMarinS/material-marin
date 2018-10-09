import React, { Component } from "react";
import { Typography, Paper, TextField, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import SuccessDialog from "./SuccessDialog";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  dense: {
    marginTop: 19
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    marginTop: 19,
    flexGrow: 1
  }
});

SuccessDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

const SuccessDialogShow = withStyles(styles)(SuccessDialog);

class Form extends Component {
  state = {
    open: false
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleSuccessOpen = () => {
    this.setState({
      open: true
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline" component="h3">
            Pessoa Física
          </Typography>
          <Grid container direction="row" justify="flex-start" spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="standard-dense"
                label="Nome Completo"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="standard-dense"
                label="Endereço"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="standard-dense"
                label="E-mail"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="standard-dense"
                label="Cidade"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
              />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-end" spacing={24}>
            <Grid item>
              <Button
                raised
                className={classes.button}
                elevation={2}
                justify="flex-end"
                onClick={this.handleSuccessOpen}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
          <SuccessDialogShow
            open={this.state.open}
            onClose={this.handleClose}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Form);
