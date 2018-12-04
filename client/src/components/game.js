import React from "react";

import Board from "./board";

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Tic Tac Toe - Webbio Assignment</h1>
        <div className="game-board" align="center">
          <Board />
        </div>
      </div>
    );
  }
}
