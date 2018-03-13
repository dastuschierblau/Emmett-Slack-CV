const React = require( 'react' );

function Tweet ( props ) {
	const { name, handle, avatar, tweet, timestamp, retweets, likes } = props;
	
	return (
	 
	  <div className='tweet-wrapper'>
			<img className='tweet-avatar' src={ require( `../Images/${ avatar }` ) } />
		    <div className='tweet'>
			  <header>
			  <h3>{ name }</h3>
			  <h3 className='tweet-handle'>{ `@${ handle }` }</h3>
			  </header>
			  
			  <p>{ tweet }</p>
			  <h4 className='tweet-timestamp'>{ timestamp }</h4>
			  <ul className='tweet-stats'>
			    <li className='tweet-stat'>RETWEETS <span style={{ fontWeight: 'bold' }}>{ retweets }</span> </li>
				<li className='tweet-stat'>LIKES <span style={{ fontWeight: 'bold' }}>{ likes }</span> </li>
			  </ul>
			</div>
		  </div>
	 
	);
}

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
		
		<section>
		
		  <Tweet 
		    name='Jack'
			avatar='pumpkin.jpg'
			handle='jackOLntrn'
			tweet='Is it Halloween yet?'
			timestamp='3/12/18, 1:32 PM'
			retweets={ 4 }
			likes={ 65 }
		  />
		
		  <Tweet 
		    name='Toby'
			handle='toblet'
			avatar='toby.png'
			tweet='You ask this every week...'
			timestamp='3/12/18, 2:46 PM'
			retweets={ 3 }
			likes={ 23 }
		  />
		  
		  <Tweet 
		    name='Apples'
			handle='awesomeApp'
			avatar='apples.jpg'
			tweet='There are 33 weeks until Halloween.'
			timestamp='3/12/18, 6:35 PM'
			retweets={ 7 }
			likes={ 42 }
		  />
		  
		  <Tweet 
		    name='Jack'
			avatar='pumpkin.jpg'
			handle='jackOLntrn'
			tweet='Only 33 weeks until Halloween!'
			timestamp='3/12/18, 8:11 PM'
			retweets={ 12 }
			likes={ 78 }
		  />
		  
	      <Tweet 
		    name='Jack'
			avatar='pumpkin.jpg'
			handle='jackOLntrn'
			tweet='Is it Halloween yet?'
			timestamp='3/20/18, 11:13 AM'
			retweets={ 1 }
			likes={ 6 }
		  />
		  
		
		</section>
	  
	  </div>
	);
  }
}

module.exports = Redux;