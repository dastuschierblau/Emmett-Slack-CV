const React = require("react"),
  { Link } = require("react-router-dom");

class Resume extends React.Component {
  render() {
    return (
      <div className="homepage">
        {/*}
        <div className="resume-header-row icon-row">
          <img src={require("../Images/js.svg")} />
          <img src={require("../Images/react.svg")} />
          <img src={require("../Images/redux.svg")} />
				</div>
		*/}

        <header className="resume-header">
          <h1>Emmett Slack</h1>

          {/*
			  <span className='resume-header-item'>
				<img className='resume-header-photo' 
				  src={ require( '../Images/profile.jpg' ) } />
			  </span>
			  */}
          <span className="resume-header-item">
            <a target="blank" href="https://github.com/dastuschierblau">
              <img className="icon" src={require("../Images/github.svg")} />
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/emmett-slack-b3828438/"
            >
              <img className="icon" src={require("../Images/linkedin.svg")} />
            </a>
          </span>
        </header>

        <section className="resume-section">
          <ul className="tech-icons">
            <li>
              <img className="icon" src={require("../Images/js.svg")} />
            </li>

            <li>
              <img className="icon" src={require("../Images/react.svg")} />
            </li>

            <li>
              <img className="icon" src={require("../Images/redux.svg")} />
            </li>

            <li>
              <img className="icon" src={require("../Images/node.svg")} />
            </li>

            <li>
              <img className="icon" src={require("../Images/html5.svg")} />
            </li>

            <li>
              <img className="icon" src={require("../Images/css3.svg")} />
            </li>

            <li>
              <img className="icon" src={require("../Images/git.svg")} />
            </li>
          </ul>
        </section>

        <section className="resume-section project-list-section">
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            Projects:
          </h2>
          <ul className="projects-list">
            <li className="projects-list-project" id="weatherApp-project">
              <Link className="project-link" to="/weatherApp">
                Weather App
              </Link>
              <div className="project-info" />
            </li>

            <li className="projects-list-project" id="bloodborne-project">
              <Link className="project-link" to="/bloodborne">
                Bloodborne Weapon Guide
              </Link>
              <div className="project-info" />
            </li>

            <li className="projects-list-project" id="corvid-project">
              <Link className="project-link" to="/corvid">
                Corvid
              </Link>
              <div className="project-info" />
            </li>

            <li>
              <Link style={{ color: "#222222" }} to="/redux">
                Redux project- Coming Soon
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

module.exports = Resume;
