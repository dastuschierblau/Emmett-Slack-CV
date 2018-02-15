const React = require( 'react' );

class ChineseOdyssey extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	   
	    <p>This site is a custom digitization of the Cheng and Tsui Chinese
		   Odyssey volume 5 textbook. The site itself deals with the first 
		   two lessons in the textbook, presenting a main lesson text 
		   followed by a breakdown of its vocabulary and grammar.
		</p>
		<p>For this project, I sought to use purely vanilla JavaScript, using
		   Jquery only for the lesson text hover feature. I also chose to 
		   use CSS3 media queries to achieve a responsive layout, and modules were
		   made using IIFE's rather than CommonJS. 
		</p>
		<p>Each lesson text page features a hover feature on desktop screen
		   sizes. Hovering over a highlighted vocabulary word reveals a tooltip
		   style div with the word's pinyin pronounciation and definition.
		</p>
		 
		<img className='screenshot' src={ require( '../Images/lesson1Text.png' ) } />
		 
		<p>The vocabulary selection for each lesson can be found via the vocabulary
		   section of the sidebar. Vocabulary words are searchable by pinyin 
		   pronounciation.
		</p>
		   
		<img className='screenshot' src={ require( '../Images/dictionary.png' ) } />
		
		<p>Aside from vocabulary and grammar, each lesson also has a section for
		   its chengyu- proverbial phrases which often have no direct translation
		   into English. The chengyu section explains the historical context of these
		   idioms as well as when to use them.
		</p>
		
		<img className='screenshot' src={ require( '../Images/chengyu.png' ) } />
	  </div>
	);
  }
}

module.exports = ChineseOdyssey;