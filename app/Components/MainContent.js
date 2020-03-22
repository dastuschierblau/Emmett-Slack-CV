let React = require('react'),
  ReactDOM = require('react-dom');
let Screenshot = require('./Screenshot');

class MainContent extends React.Component {
  componentDidMount() {
    const mainContent = ReactDOM.findDOMNode(this),
      top = mainContent.offsetTop;

    console.log(top);
  }

  render() {
    return (
      <div className='mainContent'>
        {/* Technology icons */}
        <ul className='tech-icons py-1'>
          <li className='d-flex justify-content-center align-items-center'>
            <img className='icon' src={require('../Images/js.svg')} />
          </li>

          <li>
            <img className='icon' src={require('../Images/react.svg')} />
          </li>

          <li>
            <img className='icon' src={require('../Images/redux.svg')} />
          </li>

          <li>
            <img className='icon' src={require('../Images/node.svg')} />
          </li>
        </ul>
        {/* End technology icons */}

        <div className='mainContent-inner'>
          <h2 className='text-blue my-1'>My Projects:</h2>

          <div>
            <h3>Slack Tracker</h3>
            <a
              target='_blank'
              href='https://ancient-sierra-91444.herokuapp.com/'
            >
              See it here.
            </a>
            <p>
              A full stack MERN application that allows management of projects
              via creation of tickets for individual tasks.
            </p>
            <h3>Tools:</h3>
            <ul>
              <li className='pb-1'>
                <i className='fas fa-check text-blue'></i> React
              </li>
              <li className='pb-1'>
                <i className='fas fa-check text-blue'></i> Redux
              </li>
              <li className='pb-1'>
                <i className='fas fa-check text-blue'></i> React Router v4
              </li>
              <li className='pb-1'>
                <i className='fas fa-check text-blue'></i> Express
              </li>
              <li className='pb-1'>
                <i className='fas fa-check text-blue'></i> MongoDB
              </li>
            </ul>
            <Screenshot url={'Slack-Tracker-landing.PNG'} />
          </div>

          <div>
            <h3>Sudoku</h3>
            <a target='_blank' href='https://solve-doku-d86e1.firebaseapp.com/'>
              Play it here.
            </a>
            <p>
              A mini project using React that allows the user to check their
              entries to make sure they do not violate the current board based
              on the rules of sudoku.
            </p>
            <Screenshot url={'sudoku1.PNG'} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainContent;
