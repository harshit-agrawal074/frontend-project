import React from "react";
import List from "./List";
import "bootstrap/dist/css/bootstrap.css";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class App extends React.Component {

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
                <MDBDropdownItem>Add Element</MDBDropdownItem>
                <MDBDropdownItem>Add Multiple Elements</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </form>
        </div>
      </nav>

      <main role="main" className="container">
        <div align="center" style={{"marginTop":'100px'}}>
          <h1> <span className="badge badge-info">Hey Hostelers,</span></h1>
          <p className="lead"> <span className="badge badge-danger">Tell me, what is the most important thing in hostel life?</span>
            <br/> Some will say Food, some will say Relationships, some will say Internet. I know Internet is very important but
            <br/> the most important thing is <span className="badge badge-pill">Entertainment Content</span> because without content, internet is useless ;P
            <br/>and finding a place with all the content is reeeallly a mess. So, this website will help you with this.
          </p>
        </div>
        <div>
          <table>
            <tr>
              <td>
                <img src="https://picsum.photos/200" alt="" />
              </td>
              <td>
                <img src="https://picsum.photos/200?grayscale" alt="" />
              </td>
              <td>
                <img src="https://picsum.photos/200?blur" alt="" />
              </td>
              <td>
                <img src="https://picsum.photos/200?blur=2" alt="" />
              </td>
              <td>
                <img src="https://picsum.photos/id/237/200" alt="" />
              </td>
              <td>
                <img src="https://picsum.photos/200?" alt="" />
              </td>
            </tr>

          </table>
        </div>
      </main>
      <List />

    </React.Fragment>);
  }
}

export default App;
