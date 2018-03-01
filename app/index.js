let React = require( 'react' ),
    ReactDOM = require( 'react-dom' ),
	ReactRouter = require( 'react-router-dom' ),
	Router = ReactRouter.BrowserRouter,
	Route = ReactRouter.Route,
	Switch = ReactRouter.Switch,
	Sidebar = require( './Components/Sidebar.js' ),
	Resume = require( './Components/Resume.js' ),
	Bloodborne = require( './Components/Bloodborne.js' ),
	ChineseOdyssey = require( './Components/ChineseOdyssey.js' ),
	WeatherApp = require( './Components/WeatherApp.js' ),
	MainContent = require( './Components/MainContent.js' );
	
require( './index.css' );



class App extends React.Component {
	constructor( props ) {
		super( props );
		
		this.state = {
			label: 'open'
		};
		
		this.toggleCollapsed = this.toggleCollapsed.bind( this );
	}

	toggleCollapsed( e ) {
		let el = e.target,
		    sibling = el.nextElementSibling;
			
		if( sibling.classList.contains( 'active' ) ) {
			sibling.classList.remove( 'active' );
			this.setState(() => ({ label: 'open' }));
		} else {
			sibling.classList.add( 'active' );
			this.setState(() => ({ label: 'close' }));
		}
		
	}
	
	render() {
		return (
		  <Router>
		  <div className='container'>
			<Sidebar toggle={ this.toggleCollapsed } btnLabel={ this.state.label }/>
			
			<Switch>
			<Route exact path='/' component={ Resume } />
			<Route path='/bloodborne' component={ Bloodborne } />
			<Route path='/chineseOdyssey' component={ ChineseOdyssey } />
			<Route path='/weatherApp' component={ WeatherApp } />
			<Route render={() => <div>404 Not Found</div> } />
			</Switch>
			
		  </div>
		  </Router>
		);
	}
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );