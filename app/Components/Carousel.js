const React = require( 'react' ),
      $ = require( 'jquery' );
	  
class Carousel extends React.Component {
  constructor( props ) {
    super( props );
	this.state = {
		timer: null,
		width: 0,
		paused: false
	};
	
	this.cacheElems = this.cacheElems.bind( this );
	this.startSlider = this.startSlider.bind( this );
	this.stopSlider = this.stopSlider.bind( this );
  }  
	
  componentDidMount() {
    this.cacheElems();
  }
  
  cacheElems() {
	  const $carousel = $( '#carousel' ),
	      $carouselUl = $( '.carousel-ul' ),
		  $carouselItems = $( '.carousel-li' ),
		  $carouselItem = $carouselUl.find( '.carousel-li' ),
		  numItems = $carouselItems.length,
		  width = $carouselItems[0].offsetWidth;
		  
	  let slide = 1;
	  

	  this.setState(() => ({
		$carousel,
		$carouselUl,
		$carouselItems,
		$carouselItem,
		numItems,
		slide,
		width
		}), () => {
		  const { $carouselUl } = this.state;
		  
		  $carouselUl.on( 'mouseenter', this.stopSlider );
		  $carouselUl.on( 'mouseleave', this.startSlider );
		  
		  this.startSlider();
		});
  }
  
  startSlider() {
	  const { $carouselUl, numItems, width } = this.state;
	  let { paused } = this.state;
	  
	  let slide = paused? this.state.slide + 1 : 1;
	  let timer;
	  
	  timer = setInterval(() => {
	  
	  $carouselUl.animate( { 'margin-left': '-='+width }, 1500, () => {
        slide++;
	  if( slide >= numItems ) {
		  slide = 1;
		  $carouselUl.css( 'margin-left', 0 );
	  }
	  });
	  
	  this.setState(() => ({
		  slide,
	  }));
	  
	}, 3000 );
	
	this.setState(() => ({
		 timer,
		 paused: false
	  }));
  }
  
  stopSlider() {
	  const { timer } = this.state;
	  clearInterval( timer );
	  this.setState(() => ({
		  paused: true
	  }));
  }
  
  componentWillUnmount() {
	
    const { $carouselUl } = this.state;
	$carouselUl.off( 'mouseenter', this.stopSlider );
	$carouselUl.off( 'mouseleave', this.startSlider );
	this.stopSlider();
	
  }

  render() {
    return (
	  <div id='carousel'>
	    <ul className='carousel-ul'>
		  <li className='carousel-li'>
		    <img className='screenshot' 
			  src={ require( '../Images/bloodborne2.png' ) } />
		  </li>
		  <li className='carousel-li'>
		    <img className='screenshot' 
			  src={ require( '../Images/bloodborne3.png' ) } />
		  </li>
		  <li className='carousel-li'>
		    <img className='screenshot' 
			  src={ require( '../Images/bloodborne4.png' ) } />
		  </li>
		  <li className='carousel-li'>
		    <img className='screenshot' 
			  src={ require( '../Images/bloodborne5.png' ) } />
		  </li>
		  <li className='carousel-li'>
		    <img className='screenshot' 
			  src={ require( '../Images/bloodborne2.png' ) } />
		  </li>
		</ul>
	  </div>
	);
  }
}

module.exports = Carousel;