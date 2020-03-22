const React = require("react");
const Screenshot = require("./Screenshot");

class Sudoku extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <h1>Sudoku</h1>

        <a target='blank' href='https://solve-doku-d86e1.firebaseapp.com/'>Play it here.</a>

        <p>
          This sudoku mini project allows the user to either solve a pre entered puzzle, or clear the board entirely and enter a custom puzzle of their choosing.
          The board auto checks each entry to ensure that it does not violate the rules of sudoku.
        </p>

        <Screenshot url='sudoku1.PNG' />

        <p>
          This project also led me to write a backtracking algorithm capable of solving a sudoku puzzle. Since this mini project is a front end project only,
          this algorithm isn't enabled in the application, but can be found in <a href='https://github.com/dastuschierblau/solve-doku'>the source code</a> for the project. 
        </p>

      </div>
    );
  }
}

module.exports = Sudoku;
