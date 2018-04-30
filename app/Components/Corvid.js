const React = require("react");
const Screenshot = require("./Screenshot");

class Corvid extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <h1>Corvid</h1>

        <p>
          Over the course of learning new JavaScript features and patterns, I
          often found myself jotting down various miscellaneous notes scattered
          across notebooks. I wanted a way to organize these notes based on the
          specifics of what they pertained to- whether that was the DOM, the
          React framework, ES6 features, etc, and then be able to easily look
          them up again later. This project is a working demo of my solution to
          this problem.{" "}
          <a target="blank" href="https://corvid-redux.firebaseapp.com">
            See it here.
          </a>
        </p>

        <p>
          This application utilizes React and Redux to organize and store posts
          on various topics. Each post can be tagged with relevant keywords so
          that it can easily be searched later.
        </p>

        <Screenshot url="corvid1.png" />

        <p>
          The deployed application demo mocks a database by simulating an Ajax
          call to load the initial posts into the sidebar. These topics are
          stored in the Redux store, from which the application will have access
          to each topic's content and searchable tags/keywords.
        </p>

        <Screenshot url="corvid2.png" />

        <p>
          The slideover search feature allows the user to search the posts
          currently in the Redux store by matching their keywords. Posts added
          via the add post option (on the bottom of the sidebar) will also
          appear in these search results when their keywords are searched.
        </p>

        <Screenshot url="corvid3.png" />

        <p>The user can delete a post by clicking the trash bin icon.</p>

        <Screenshot url="corvid5.png" />

        <Screenshot url="corvid4.png" />

        <h2>Pending features:</h2>

        <p>
          Future functionality to be added to this application includes the
          ability to edit pre-existing posts. I intend to eventually refactor
          this application to be an Electron desktop application.
        </p>

        <p>
          Check out{" "}
          <a target="blank" href="https://github.com/dastuschierblau/Corvid">
            the code on Github.
          </a>
        </p>
      </div>
    );
  }
}

module.exports = Corvid;
