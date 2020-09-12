import React, { Component } from "react";
// import Gameboard from "./components/gameboard";
import NavBar from "./navbar";

class Layout extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0, oof: 1 },
      { id: 2, value: 0, oof: 1 },
      { id: 3, value: 0, oof: 1 },
      { id: 4, value: 0, oof: 1 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <NavBar />

            <main className="container">
              {/* <Counters
    counters={this.state.counters}
    onReset={this.handleReset}
    onIncrement={this.handleIncrement}
    onDelete={this.handleDelete}
  /> */}
            </main>
          </div>
          <div class="col-1"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
