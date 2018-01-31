let React = require( 'react' );

class Resume extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	    <header>
		  <h2>Emmett Frank Slack</h2>
		  <h3>emmett.slack@yahoo.com</h3>
		</header>
		  
		  <section className='resume-section'>
		    <h2>Skills and Qualifications:</h2>
			<h3>Coding Stuff:</h3>
			<ul className='ul-square'>
			  <li>JavaScript programming (utilizing ES6 features)</li>
			  <li>React.js and React Router for use in SPA's</li>
			  <li>jQuery- primarily to augment javaScript features such
			    as DOM manipulation, global custom events, and addition of
				UI elements such as sliders</li>
			  <li>Web design with a focus on responsive design- familiarity
			    with Bootstrap, media queries, and CSS grid to achieve this end</li>
			  <li>HTML5 and CSS3</li>
			  <li>Use of node.js npm, particularly for React projects</li>
			  <li>Version control using Git</li>
			</ul>
			
			<h3>Non Coding Stuff:</h3>
			  <ul className='ul-square'>
			    <li>Proficiency in Mandarin Chinese and Spanish (written and
				  spoken).</li>
				<li>Experience with Microsoft Office and graphic design programs:
				  Excel, PowerPoint, PaintTool Sai, Adobe Photoshop. I use a Wacom
				  tablet for the latter group.</li>
				<li>Animal husbandry and care; 15 years of experience in raising and
				  breeding parrots of various species.</li>
			  </ul>
			  
			  <h3>Maybe Most Importantly of All:</h3>
			    <p>The ability and enthusiasm to always be learning something new!</p>
		  </section>
		  
		  
		
	  </div>
	);
  }
}

module.exports = Resume;