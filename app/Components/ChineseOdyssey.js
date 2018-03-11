const React = require( 'react' );

class ChineseOdyssey extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	    <h1>Cheng and Tsui Chinese Odyssey</h1>
		<a target='blank' href='https://chinese-textbook-concept.firebaseapp.com'>
		  See it here</a>
	   
	    <p>This site is a custom digitization of the Cheng and Tsui Chinese
		   Odyssey volume 5 textbook. The site itself deals with the first 
		   two lessons in the textbook, presenting a main lesson text 
		   followed by a breakdown of its vocabulary and grammar.
		</p>
		<p>For this project, I sought to use purely vanilla JavaScript with no additional
		   libraries. I also chose to 
		   use CSS3 media queries to achieve a responsive layout, and modules were
		   made using IIFE's rather than CommonJS. As a result of these practices,
		   this project did not require any bundling or transpiling.		   
		</p>
		
		<img className='screenshot' src={ require( '../Images/ChineseHome.png' ) } />
		
		<p>Each lesson text page features a hover feature on desktop screen
		   sizes. Hovering over a highlighted vocabulary word reveals a tooltip
		   style div with the word's pinyin pronounciation and definition.
		</p>
		 
		<img className='screenshot' src={ require( '../Images/lesson1Text.png' ) } />
		 
		<p>The vocabulary selection for each lesson can be found via the vocabulary
		   section of the sidebar. Vocabulary words are searchable by pinyin 
		   pronounciation. The typeahead search feature also gave me the opportunity to
		   work with custom events. When the user types into the searchbar and then 
		   deletes their input, rendering the searchbar empty, a custom event is dispatched,
		   resetting the list of suggestions to the empty default.
		</p>
		   
		<img className='screenshot' src={ require( '../Images/dictionary.png' ) } />
		
		<p>Aside from vocabulary and grammar, each lesson also has a section for
		   its chengyu- proverbial phrases which often have no direct translation
		   into English. The chengyu section explains the historical context of these
		   idioms as well as when to use them.
		</p>
		
		<img className='screenshot' src={ require( '../Images/chengyu.png' ) } />
		
		<p>Each lesson ends with a quiz based on the material covered in preceding sections.
		</p>
		
	  </div>
	);
  }
}

module.exports = ChineseOdyssey;