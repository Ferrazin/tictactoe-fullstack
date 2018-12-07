import React from "react";
import Square from "./square";
import { connect } from "react-redux";
import { saveGame } from "../actions/games";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null
    };
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); // shallow copy to maintain immutability
    if (this.calculateWinner(squares) || squares[i]) {
      this.setState({
        winner: this.calculateWinner(this.state.squares)
      })
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  handleReset(squares) {
    const winner = this.calculateWinner(this.state.squares);
    this.props.saveGame(winner, squares);
    return this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    const squares = this.state.squares.slice(); // shallow copy to maintain immutability
    let status;
    if (winner) {
      status = "And the winner is... " + winner;
    } else if (!squares.includes(null)) {
      status = "The game is draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="saveReset" onClick={() => this.handleReset(squares)}>
          SAVE AND RESET
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squares: state.squares
});
export default connect(
  mapStateToProps,
  { saveGame }
)(Board);
