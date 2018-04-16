const React = require( 'react' );
	  
	  
class Carousel extends React.Component {
  constructor( props ) {
    super( props );
	this.state = {

	};

	this.cacheElems = this.cacheElems.bind( this );
	this.prevSlide = this.prevSlide.bind( this );
	this.nextSlide = this.nextSlide.bind( this );

  }  
	
  componentDidMount() {
	
    this.cacheElems();
  }
  
  cacheElems() {
	  const 
	      carouselItems = this.carousel.querySelectorAll( '.carousel-li' ),
		  numItems = carouselItems.length;
		  
	  this.prevBtn.addEventListener( 'click', this.prevSlide );

      this.nextBtn.addEventListener( 'click', this.nextSlide );
		  
	  let slide = 0;

	  this.setState(() => ({
		carouselItems,
		slide,
		numItems
		}));
  }

  
  prevSlide () {
	  const { carouselItems, numItems } = this.state;
	  let { slide } = this.state,
	      i;
		  
      for( let i = 0; i < numItems; i++ ) {
	    if( carouselItems[ i ].classList.contains( 'active' ) ) {
		  carouselItems[ i ].classList.remove( 'active' );
		  if( i === 0 ) {
		    carouselItems[ numItems - 1 ].classList.add( 'active' );
			slide = numItems - 1;
			break;
		  }
		  else {
		    carouselItems[ i - 1 ].classList.add( 'active' );
			slide = slide - 1;
			break;
		  }
		}
	  }
	  
	  this.setState(() => ({
		  slide
	  }));

  }
  
  nextSlide () {
	  const { carouselItems, numItems } = this.state;
	  let { slide } = this.state,
	      i;
		  
      for( let i = 0; i < numItems; i++ ) {
	    if( carouselItems[ i ].classList.contains( 'active' ) ) {
		  carouselItems[ i ].classList.remove( 'active' );
		  if( i === numItems - 1 ) {
		    carouselItems[ 0 ].classList.add( 'active' );
			slide = 0;
			break;
		  }
		  else {
		    carouselItems[ i + 1 ].classList.add( 'active' );
			slide = slide + 1;
			break;
		  }
		}
	  }
	  
	  this.setState(() => ({
		  slide
	  }));
  }
  
  componentWillUnmount() {
	  
	this.prevBtn.removeEventListener( 'click', this.prevSlide );
	this.nextBtn.removeEventListener( 'click', this.nextSlide );
  }

  render() {
    return (
	  <div id='carousel'>
	  
	    <button className='prevBtn carousel-btn' 
		  ref={( prev ) => this.prevBtn = prev } 
		  dangerouslySetInnerHTML={{ __html: '&lt' }} />

	    <ul className='carousel-ul' ref={( carouselUl ) => {
		this.carousel = carouselUl }}>
		  <li className='carousel-li active'>
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
			  src={ require( '../Images/bloodborne6.png' ) } />
		  </li>

		</ul>
		
		<button className='nextBtn carousel-btn' 
		  ref={( next ) => this.nextBtn = next }
		  dangerouslySetInnerHTML={{ __html: '&gt' }} />
		
	  </div>
	);
  }
}

module.exports = Carousel;