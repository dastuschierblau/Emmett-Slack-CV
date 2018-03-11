const React = require( 'react' );

class Redux extends React.Component {
  render () {
    return (
	  <div className='mainContent'>
	    <h1>Redux Project</h1>
		<h2>Coming Soon
		</h2>
		
		<p>This project will utilize Redux to create
		  a Twitter application clone. 
		</p>
		
	    <p>A series of initial Tweets will be loaded into the store and subsequently
	      displayed as Tweet components on the page. The user will be able to like these 
		  tweets as well as compose and post their own tweet. All of this
		  functionality will take place in accordance with the Redux paradigm:
		  actions are dispatched and passed through reducer functions to generate
		  a new state in the application's store. Any components subscribed to 
		  state changes will update themselves accordingly.
	    </p>
		
		<p>This project will be primarily concerned with making what would otherwise be
		  a complex state management endeavor a predictable and straightforward one by using
		  the Redux store as a singular state storage/management resource.
		</p>
	  
	  </div>
	);
  }
}

module.exports = Redux;