let React = require("react"),
  ReactRouter = require("react-router-dom"),
  NavLink = ReactRouter.NavLink,
  Link = ReactRouter.Link;

function createMarkup(sym) {
  return sym === "open" ? { __html: "+" } : { __html: "&times" };
}

class Sidebar extends React.Component {
  render() {
    const collapseBtn = document.querySelector(".collapsed-list-btn");

    return (
      <div className="sidebar">
        <header className="header-logo">
          <span className="top">
            <h1>Emmett Slack</h1>
          </span>
          <span className="bottom">
            <h3>emmett.slack90@gmail.com</h3>
          </span>
        </header>

        {/* Collapsed menu for smaller screens */}
        <div className="collapsed-list-header">
          <h4>
            <Link to="/">Home</Link>
          </h4>
        </div>

        <div
          className="collapsed-list-btn"
          onClick={this.props.toggle}
          dangerouslySetInnerHTML={createMarkup(this.props.btnLabel)}
        />

        <div className="collapsed-list">
          <h2>Projects</h2>
          <ul className="collapsed-list-ul">
            <Link to="/weatherApp" onClick={this.props.toggle}>
              <li>Weather App</li>
            </Link>

            <Link to="/bloodborne" onClick={this.props.toggle}>
              <li>Bloodborne Weapon Guide</li>
            </Link>

            <Link to="/corvid" onClick={this.props.toggle}>
              <li>Corvid</li>
            </Link>

            <Link to="/redux" onClick={this.props.toggle}>
              <li>Redux project- Coming Soon</li>
            </Link>
          </ul>
        </div>

        {/* Regular sidebar menu for med/large screens */}
        <div className="project-list">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <h3>Projects:</h3>
          <ul className="projects">
            <li>
              <Link to="/weatherApp">Weather App</Link>
            </li>

            <li>
              <Link to="/bloodborne">Bloodborne Weapon Guide</Link>
            </li>

            <li>
              <Link to="/corvid">Corvid</Link>
            </li>

            <li>
              <Link to="/redux">Redux project- Coming Soon</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = Sidebar;
