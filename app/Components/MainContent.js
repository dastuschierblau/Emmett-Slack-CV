let React = require( 'react' ),
    ReactDOM = require( 'react-dom' );

class MainContent extends React.Component {
  componentDidMount() {	
    const mainContent = ReactDOM.findDOMNode( this ),
	      top = mainContent.offsetTop;
  
    console.log( top );
  
  }
	
  render() {
    return (
	  <div className='mainContent'>
	  { this.props.children }
	  </div>
	);
  }
}

module.exports = MainContent;