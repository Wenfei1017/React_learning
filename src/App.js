// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import ReactDOM from "react-dom";
// import "./index.css";
// import Table from "./Table";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <Table />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./index.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    // this.setState({ character: [...this.state.characters, character] });
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;

// ReactDOM.render(<App />, document.getElementById("root"));
