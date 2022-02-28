import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.cypress.io/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filteredrobot = this.state.robots.filter((robots) => {
      return robots.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="fw9 b">ROBOFRIEND</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredrobot} />
      </div>
    );
  }
}
export default App;
