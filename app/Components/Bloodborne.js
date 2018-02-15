const React = require( 'react' );

class Bloodborne extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	    <img className='screenshot' src={ require( '../Images/bloodborne1.png' ) } />
	 
        <p>This applet displays information about various weapons used
		   in the horror game Bloodborne. Item descriptions and stats 
		   are rendered when a weapon is selected from the sidebar.
		</p>
		<p>The weapon list can be filtered by categories, which are 
		   shown on the buttons at the top of the screen. When a category 
		   is chosen, the corresponding route is rendered by React 
		   Router. A category route is also indicated by a corresponding
		   svg image on the bottom left of the screen.
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