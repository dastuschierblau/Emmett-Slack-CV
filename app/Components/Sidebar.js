let React = require('react'),
  ReactRouter = require('react-router-dom'),
  NavLink = ReactRouter.NavLink,
  Link = ReactRouter.Link;

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faHeart } = require('@fortawesome/free-solid-svg-icons');

function createMarkup(sym) {
  return sym === 'open' ? { __html: '+' } : { __html: '&times' };
}

class Sidebar extends React.Component {
  render() {
    const collapseBtn = document.querySelector('.collapsed-list-btn');

    return (
      <div className='sidebar'>
        <header className='header-logo'>
          <h1 className='text-center big-text'>EMMETT SLACK</h1>
        </header>

        <div>
          <ul className='d-flex justify-content-center bg-dark'>
            <li className='p-1'>
              <a target='blank' href='https://github.com/dastuschierblau'>
                <i className='fab fa-github fa-3x icon'></i>
              </a>
            </li>
            <li className='p-1'>
              <a
                target='blank'
                href='https://www.linkedin.com/in/emmett-slack-b3828438/'
              >
                <i className='fab fa-linkedin fa-3x icon'></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Technology icons */}
        <ul className='tech-icons mt-1 py-1'>
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

        <div className='d-flex flex-column  sidebar-text py-3'>
          <h1 className='text-primary'>
            {'{ '} JS developer {' }'} = Austin, TX
          </h1>
          <p className='lead'>
            I build full stack web applications with a focus on the nifty
            technologies available in the JavaScript ecosystem.
          </p>
          <p className='lead'>
            I love leveraging the best of JavaScript in a functional way (reduce
            method FTW!) which is why I often reach for React and friends when
            building my own applications.
          </p>
          <h1 className='text-blue py-1 '>Check out some of my projects.</h1>
        </div>
      </div>
    );
  }
}

module.exports = Sidebar;
