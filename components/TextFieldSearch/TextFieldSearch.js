import React from "react";
import { InputBase, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

const TextFieldSearch = ({ isOpen, onClick, additionalStyles }) => {
  const baseStyles = {
    open: {
      width: 180
    },
    closed: {
      width: 0
    },
    icon: {
      width: 40,
      height: 40,
      padding: 5
    },
    frame: {
      borderRadius: 5,
      top: 50
    }
  };

  let textStyle = isOpen ? baseStyles.open : baseStyles.closed;

  const divStyle = Object.assign(
    {},
    textStyle,
    "",
    additionalStyles ? additionalStyles.frame : {}
  );
  divStyle.width += baseStyles.icon.width + 5;

  return (
    <div style={divStyle}>
      <IconButton
        style={baseStyles.icon}
        onClick={() => onClick()}
        color="inherit"
      >
        <Search />
      </IconButton>
      <InputBase name="search" style={textStyle} placeholder="Search" />
    </div>
  );
};

export default TextFieldSearch;
