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
	MainContent = require( './Components/MainContent.js' );
	
require( './index.css' );

class App extends React.Component {
	constructor( props ) {
		super( props );
		
		this.state = {
			label: '+'
		};
		
		this.toggleCollapsed = this.toggleCollapsed.bind( this );
	}

	toggleCollapsed( e ) {
		let el = e.target,
		    sibling = el.nextElementSibling;
		sibling.classList.contains( 'active' ) 
		? sibling.classList.remove( 'active' ) : sibling.classList.add( 'active' );
		
		sibling.classList.contains( 'active' )
		? this.setState(() => ({ label: 'x' }))
		: this.setState(() => ({ label: '+' }));
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
			<Route render={() => <div>404 Not Found</div> } />
			</Switch>
			
		  </div>
		  </Router>
		);
	}
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );