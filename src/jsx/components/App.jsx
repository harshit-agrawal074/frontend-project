import React from "react";
import List from "./List";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.css";

const App = () => (
    <div>
      <div>
        <table>
          <tr>
            <td><img src="favicon.ico" alt=""/></td>
            <td><span className="badge badge-danger"><h1 align="left">Hosteler's Treasure</h1></span></td>
          </tr>
        </table>
      </div>
      <List/>
      <div align="center">
        <h2>Add a new element</h2>
        <Form/>
      </div>
      {/*<div>*/}
        {/*<h2>Add all elements</h2>*/}
        {/*<Form/>*/}
      {/*</div>*/}
      {/*<div>*/}
        {/*<h2>Read all elements</h2>*/}
        {/*<Form/>*/}
      {/*</div>*/}
      {/*<div>*/}
        {/*<h2>Read all elements for Category</h2>*/}
        {/*<Form/>*/}
      {/*</div>*/}
      {/*<div>*/}
        {/*<h2>Read all elements for Genre</h2>*/}
        {/*<Form/>*/}
      {/*</div>*/}
      {/*<div>*/}
        {/*<h2>Read By UUID</h2>*/}
        {/*<Form/>*/}
      {/*</div>*/}
    </div>
);

export default App;
