import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      value: "",
      onChange: "",
      className: ""
    };
  }

  render() {
    const { id, name, value, onChange, className } = this.props;
    return <React.Fragment>
      <tr>
        <td><h5><label className={className} htmlFor={id}>{name}</label></h5></td>
        <td><input
            className="ml-2"
            type="text"
            id={id}
            value={value}
            onChange={onChange}
        /></td>
      </tr>
    </React.Fragment>

  }
}

export default TableRow;
