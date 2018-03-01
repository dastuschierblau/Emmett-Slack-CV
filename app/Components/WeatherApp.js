const React = require( 'react' );

class WeatherApp extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	  <h1>Weather App</h1>
	  
	  <img className='screenshot' src={ require( '../Images/weatherApp2.png' ) } />
	  
	  <img className='screenshot' src={ require( '../Images/weatherApp.png' ) } />

	  <img className='screenshot' src={ require( '../Images/weatherApp1.png' ) } />

	  </div>
	);
  }
}

module.exports = WeatherApp;