import React from "react";
import List from "./List";
import "bootstrap/dist/css/bootstrap.css";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import HomeBody from "./HomeBody";
import AddElement from "./AddElement";

const renderPage = (state) => {
  switch (state.bodyComponent) {

    case "HomeBody":
      return (
          <HomeBody />
      );
    case "AddElement":
      return (
          <AddElement />
      );
    default:
      return (
          <HomeBody />
      );
  }
};

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      bodyComponent: "HomeBody"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( { bodyComponent : "AddElement" })
  }


  render() {
    return (<React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <h2><a className="navbar-brand badge badge-danger" href="./">Hosteler's Treasure</a></h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            <MDBDropdown className="mr-sm-2">
              <MDBDropdownToggle caret>Menu Dropdown</MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem onClick={this.handleClick}>Add Element</MDBDropdownItem>
                <MDBDropdownItem>Add Multiple Elements</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </form>
        </div>
      </nav>

      <main role="main" className="container">
        {renderPage(this.state)}
      </main>
      <List />

    </React.Fragment>);
  }
}

export default App;
