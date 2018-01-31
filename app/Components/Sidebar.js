let React = require( 'react' ),
    ReactRouter = require( 'react-router-dom' ),
	NavLink = ReactRouter.NavLink;

class Sidebar extends React.Component {
	
  render() {
	const collapseBtn = document.querySelector( '.collapsed-list-btn' );
	  
    return (
	  <div className='sidebar'>
	    <header className='header-logo'>
		  <span className='top'><h1>EMMETT</h1></span>
		  <span className='bottom'><h1>SLACK</h1></span>
		</header>
		
		<div className='collapsed-list-btn' onClick={ this.props.toggle }>
			{ this.props.btnLabel }
		</div>
		
		<div className='collapsed-list'>
		  <h2>Projects</h2>
		  <ul className='collapsed-list-ul'>
		    <li>Weather App</li>
		    <li>Cheng and Tsui Chinese Odyssey</li>
		    <li>Corvid App Landing Page</li>
		    <li>Netflix clone</li>
		  </ul>
		</div>
		
		<div className='project-list'>
		  <h3>Projects:</h3>
		  <ul className='projects'>
		    <li>Weather App</li>
		    <li>Cheng and Tsui Chinese Odyssey</li>
		    <li>Corvid App Landing Page</li>
		    <li>Netflix clone</li>
		  </ul>
		</div>
		
	  </div>
	);
  }
}

module.exports = Sidebar;