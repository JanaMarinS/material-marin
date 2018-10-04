import React, { Component } from "react";
import { Typography, Paper, TextField, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

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
    //width: 325
  },
  button: {
    marginTop: 19,
    flexGrow: 1
  }
});

class Form extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline" component="h3">
            Pessoa Física
          </Typography>
          <Grid
            container
            direction="row"
            justify="left"
            alignItems="left"
            spacing={24}
          >
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
                label="Nome Completo"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
              />
            </Grid>
            <TextField
              id="standard-dense"
              label="E-mail"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>

          <TextField
            id="standard-dense"
            label="Endereço"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="Cidade"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Button raised className={classes.button} elevation={2}>
              Salvar
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Form);
