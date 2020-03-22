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
          <span className='top'>
            <h1>
              EMMETT <br />
              SLACK
            </h1>
          </span>
          <span className='bottom'>
            <h4>emmett.slack90@gmail.com</h4>
          </span>
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

        <div className='d-flex flex-column text-center p-3'>
          <h1 className='text-primary'>JS developer in Austin, TX</h1>
          <p className='lead'>
            I build full stack web applications with a focus on the nifty
            technologies available in the JS ecosystem.
          </p>
          <ul>
            <li className='d-flex align-items-center justify-content-center'>
              <FontAwesomeIcon className='p-1 text-purple' icon={faHeart} />
              <span>Declarative Code</span>
              <FontAwesomeIcon className='p-1 text-purple' icon={faHeart} />
            </li>
            <li className='d-flex align-items-center justify-content-center'>
              <FontAwesomeIcon className='p-1 text-purple' icon={faHeart} />
              <span>Babel</span>
              <FontAwesomeIcon className='p-1 text-purple' icon={faHeart} />
            </li>
            <li className='d-flex align-items-center justify-content-center'>
              <FontAwesomeIcon className='p-1 text-purple' icon={faHeart} />
              <span>Webpack</span>
              <FontAwesomeIcon className='p-1 text-purple' icon={faHeart} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = Sidebar;
