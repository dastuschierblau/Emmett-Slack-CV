let React = require( 'react' ),
    ReactDOM = require( 'react-dom' ),
	ReactRouter = require( 'react-router-dom' ),
	Router = ReactRouter.BrowserRouter,
	Route = ReactRouter.Route,
	Sidebar = require( './Components/Sidebar.js' ),
	Resume = require( './Components/Resume.js' ),
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
			<Resume />
		  </div>
		  </Router>
		);
	}
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );