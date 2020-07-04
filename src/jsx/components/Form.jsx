import React, { Component } from "react";
import { connect } from "react-redux";
import { addElement } from "../actions/actions";
import "bootstrap/dist/css/bootstrap.css";
import TableRow from "./TableRow";

const mapDispatchToProps = {
  addElement
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements : [
        {id: "title", name: "Name of the Element", value: "", className : "badge badge-success"},
        {id: "description", name: "Description", value: "", className : "badge badge-info"},
        {id: "casting", name: "Casting", value: "", className : "badge badge-primary"},
        {id: "category", name: "Category", value: "", className : "badge badge-dark"},
        {id: "genre", name: "Genre", value: "", className : "badge badge-dark"},
        {id: "duration", name: "Duration", value: "", className : "badge badge-dark"},
        {id: "languages", name: "Languages", value: "", className : "badge badge-dark"},
        {id: "rating", name: "Rating", value: "", className : "badge badge-dark"}
      ],
      title: "",
      category: "",
      genre: "",
      duration: "",
      description: "",
      languages: "",
      rating: "",
      casting: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category, genre, duration, description, languages, rating, casting } = this.state;
    this.props.addElement({ title, category, genre, duration, description, languages, rating, casting });
    this.setState({ title: "", category: "", genre: "", duration: "", description: "", languages: "", rating: "", casting: "" });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <table >
            {this.state.elements.map(element => (
                <TableRow
                    id={element.id}
                    name={element.name}
                    value={this.state[element.id]}
                    onChange={this.handleChange}
                    className={element.className}
                />
            ))}
          </table>
          <button className="btn btn-secondary btn-lg" type="submit">SAVE</button>
        </form>
    );
  }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;
