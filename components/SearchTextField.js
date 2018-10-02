import React, { Component } from "react";
import { InputBase, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const transition = "width 0.8s cubic-bezier(0.000, 0.795, 0.000, 1.000)";

const styles = {
  searchExtend: {
    transition: transition
  },
  open: {
    width: 180,
    transition: transition
  },
  closed: {
    width: 0,
    transition: transition
  }
};

class SearchTextField extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.inputSearch = React.createRef();
  }

  handSearch = () => {
    this.setState({ isOpen: !this.state.isOpen });

    if (!this.state.isOpen) {
      this.inputSearch.focus();
    }
  };

  render() {
    const { classes } = this.props;
    let textStyle = this.state.isOpen ? classes.open : classes.closed;

    return (
      <div className={classes.searchExtend}>
        <IconButton color="inherit" onClick={this.handSearch}>
          <Search />
        </IconButton>
        <InputBase
          name="search"
          placeholder="Pesquisar"
          className={textStyle}
          autocomplete="off"
          type="text"
          inputRef={e => (this.inputSearch = e)}
          onBlur={this.handSearch}
        />
      </div>
    );
  }
}
export default withStyles(styles)(SearchTextField);
