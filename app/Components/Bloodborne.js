const React = require( 'react' ),
      Carousel = require( './carousel.js' );

class Bloodborne extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	    <h1>Bloodborne Weapon Guide</h1>
		<a target='blank' href='https://arcane-cauliflower.firebaseapp.com'>
		  See it here</a>
	  
	    <p>I made this project using React.js and React Router v4. I used
		  CommonJS to achieve modularity, and npm with Webpack to manage
		  all of my dependencies.
		</p>
	  
	    <img className='screenshot' src={ require( '../Images/bloodborne1.png' ) } />
	 
        <p>This applet displays information about various weapons used
		   in the game Bloodborne, a horror/action game with Lovecraftian
           elements.
           I made this applet in large part because I found the game's wiki
           page for weapon stats to be difficult to read. 		
		</p>
		
		<Carousel />
		
		<p>Item descriptions and stats 
		   are rendered when a weapon is selected from the sidebar.
		   The weapon list can be filtered by categories, which are 
		   shown on the buttons at the top of the screen. When a category 
		   is chosen, the corresponding route is rendered by React 
		   Router. A category route is also indicated by a corresponding
		   svg image on the bottom left of the screen.
		   I relied upon the match property supplied by React Router (along with
           URL parameters) to 
		   allow for nested routes, i.e. a specialization route followed
		   by an individual weapon route. 
		</p>
		<p>The user can visually compare stats between two weapons in chart form
		by selecting
		a weapon to compare with from a dropdown list.
		I used chart.js to render the stat comparison charts in a pop-up modal.
		</p>
		<p>The entire UI is itself wrapped in a Route component- with no specified path,
           just a render property- to allow for
		   usage of the location prop supplied by React Router. This prop was
		   essential for adding CSS animations for route transitions (via the
		   TransitionGroup and CSSTransition components supplied by the react-
		   transition-group npm module).
		</p>
		<p>The applet utilizes a single stateful component along with several
		   stateless functional components. This made development much simpler
		   overall because the logic was relatively straightforward and easy
		   to reason about. Nesting of components was likewise very shallow.
		</p>
		<p>This project helped me gain a deeper understanding (and appreciation)
		   of the React Router library. 
		</p>
	 </div>
	);
  }
}

module.exports = Bloodborne;