import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
    <div>
      <div>
        <h2>Netflix</h2>
        <List/>
      </div>
      <div>
        <h2>Add a new element</h2>
        <Form/>
      </div>
      <div>
        <h2>Add all elements</h2>
        <Form/>
      </div>
      <div>
        <h2>Read all elements</h2>
        <Form/>
      </div>
      <div>
        <h2>Read all elements for Category</h2>
        <Form/>
      </div>
      <div>
        <h2>Read all elements for Genre</h2>
        <Form/>
      </div>
      <div>
        <h2>Read By UUID</h2>
        <Form/>
      </div>
    </div>
);

export default App;
