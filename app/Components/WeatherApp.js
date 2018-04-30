const React = require("react");
const Screenshot = require("./Screenshot");

class WeatherApp extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <h1>Weather App</h1>
        <p>
          This weather app utilizes the openweathermap api to fetch weather data
          for any city.
        </p>

        <p>
          The complete code for the application on my github:{" "}
          <a href="https://github.com/dastuschierblau/weather-app">here</a>.
        </p>

        <a
          target="blank"
          href="https://react-weather-app-7394b.firebaseapp.com"
        >
          Firebase project
        </a>

        <Screenshot url="weatherApp1.png" />

        <Screenshot url="weatherApp2.png" />

        <p>
          Upon entry of a city into either of the input fields and a click of
          the submit button, I attached the entry value as a query parameter to
          the url by passing it through as a Link search prop. Once the url
          route changes to the /forecast route, the Forecast component is
          rendered by React Router. In the Forecast component's
          componentDidMount lifecycle method, I used axios to fetch the relevant
          forecast data with the openweathermap api, using the city property of
          the query parameters as the relevant city for which to search.
        </p>
        <p>
          Another important lifecycle method used by the Forecast component is
          componentWillReceiveProps. A key aspect of this app's design is that
          the user does not need to navigate back to the home route to input a
          new city- they can instead use the additional searchbar located at the
          top of the page. Entering a city in this fashion will simply change
          the query parameter of the URL, not the path, and thus the component
          would not be mounting a second time. For this reason, it was necessary
          to utilize componentWillReceiveProps to trigger another call to the
          axios.get method and a subsequent rerender when the query parameter
          changes to reflect selection of a new city.
        </p>

        <Screenshot url="weatherApp.png" />

        <p>
          Another feature I included in this app is a change in the displayed
          theme based on the user's local time when the app loads. Between the
          hours of 6AM and 6PM, the theme is set to default to 'sun'; otherwise
          it will default to 'fog'. The user can also manually switch the theme
          themselves using the button on the bottom right of the screen.
        </p>

        <Screenshot url="weatherApp3.png" />

        <p>
          When a city's forecast is being rendered to the screen, the user has
          to option to click on the detailed forecast button. This button brings
          up a modal with a more detailed breakdown of the day's weather in the
          selected city.
        </p>

        <span className="side-by-side">
          <img
            className="screenshot-small"
            src={require("../Images/weatherApp4.png")}
          />
          <p>The modal resizes to fill the entire window on smaller screens.</p>
        </span>

        <p>
          This project improved my skills with regard to combining the
          functionality of React, React Router, and a third party api.
        </p>
      </div>
    );
  }
}

module.exports = WeatherApp;
