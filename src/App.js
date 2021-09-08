import React from "react";
import Vpt from "./vptracky/layouts/main";

class App extends React.Component {
  render() {
    return <Vpt state={this.state} />;
  }
}

export default App;
