import React from "react";
import Form from "./Form";

class AddElement extends React.Component {
  render() {
    return (
        <div>
          <div align="center" style={{"marginTop":'100px'}}>
            <h1>Add a new element</h1>
            <Form />
          </div>
        </div>
    )
  }
}

export default AddElement;
