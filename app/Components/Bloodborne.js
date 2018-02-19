const React = require( 'react' ),
      Carousel = require( './carousel.js' );

class Bloodborne extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
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
		<span className='caption'>
		  Mouse over the image to pause scrolling.
		</span>
		
		<p>Item descriptions and stats 
		   are rendered when a weapon is selected from the sidebar.
		   The weapon list can be filtered by categories, which are 
		   shown on the buttons at the top of the screen. When a category 
		   is chosen, the corresponding route is rendered by React 
		   Router. A category route is also indicated by a corresponding
		   svg image on the bottom left of the screen.
		   I relied upon the match property supplied by React Router to 
		   allow for nested routes, i.e. a specialization route followed
		   by an individual weapon route. 
		</p>
		<p>The applet utilizes a single stateful component along with several
		   stateless functional components. This made development much simpler
		   overall because the logic was relatively straightforward and easy
		   to reason about. Nesting of components was likewise very shallow.
		</p>
	 </div>
	);
  }
}

module.exports = Bloodborne;