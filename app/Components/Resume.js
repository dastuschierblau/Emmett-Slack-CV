let React = require( 'react' );

class Resume extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	    <header className='resume-header'>
		  <h2 className='resume-header-item'>EMMETT FRANK SLACK</h2>
		  <span className='resume-header-item'>
		    <img className='resume-header-photo' 
			  src={ require( '../Images/profile.jpg' ) } />
		  </span>
		  <h3 className='resume-header-item'><a target='blank' href='https://github.com/dastuschierblau'>Github: dastuschierblau</a></h3>
		  <h3 className='resume-header-item'>emmett.slack@yahoo.com</h3>
		</header>
		  
		  <section className='resume-section'>
		    <h2>Skills and Qualifications:</h2>
			<h3>Coding Stuff:</h3>
			<div className='underline'></div>
			<ul className='ul-square'>
			  <li>JavaScript programming, utilizing ES6 features- arrow functions,
			  destructuring, promises, and block scoped variables are among those that I use most often.
			  </li>
			  <li>React.js for use in SPA's. I chose to learn React because I found my
			  favorite programming features tended to be declarative in nature, and React's component-based
			  architecture is as declarative as it gets.</li>
			  <li>React Router v4 for client side routing.</li>
			  <li>Redux</li>
			  <li>Web design with a focus on responsive design- familiarity
			    with Bootstrap, media queries, and CSS grid to achieve this end</li>
			  <li>HTML5 and CSS3</li>
			  <li>Use of Node.js npm, particularly for React projects. Some of the packages
			  regularly listed in my package.json manifest include axios, query-string, webpack-dev-server, 
			  babel, and react-transition-group.</li>
			  <li>Webpack to bundle everything together</li>
			  <li>Version control using Git</li>
			  <li>An understanding of basic server side routing with Node.js and Express</li>
			</ul>
			
			<h3>Non Coding Stuff:</h3>
			<div className='underline'></div>
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
			  <div className='underline'></div>
			    <p>The ability and enthusiasm to always be learning something new!</p>
		  </section>
		  
		  <section className='resume-section'>
		    <h2>Education:</h2>
			  <ul className='ul-square'>
			    <li>
				  <strong>2009-2012: </strong><br />
				  <div className='underline'></div>
				  Attended University of Rochester, Rochester, NY. Graduated cum
                  laude with B.S. in Neuroscience and a minor in Chinese language 
				  studies.
				</li>
				<li>
				  <strong>2008-2009: </strong><br />
				  <div className='underline'></div>
				  Attended SUNY Geneseo, Geneseo, NY.
				</li>
				<li>
				  <strong>2008: </strong><br />
				  <div className='underline'></div>
				  Received Advanced Regents Diploma from Mattituck High School, Mattituck, NY.
				</li>
			  </ul>
		  </section>
		  
		  <section className='resume-section'>
		    <h2>Employment and Volunteer Work:</h2>
			  <ul className='ul-square'>
			    <li>
				  <strong>January 2014 - present: </strong><br />
				  <div className='underline'></div>
				  Patient registration, insurance claims biller and medical record
				  manager at Stat Health Urgent Care, P.C. in Cutchogue, NY.
				</li>
				<li>
				  <strong>May 2009 - present: </strong><br />
				  <div className='underline'></div>
				  Volunteer seasonal farm worker, wholesale delivery coordinator, and
				  public market vendor for Catapano Dairy Farm of Peconic, NY.
				</li>
				<li>
				  <strong>December 2012 - April 2013: </strong><br />
				  <div className='underline'></div>
				  Customer service and perishables consultant at BJ's wholesale club #312
				  in Riverhead, NY.
				</li>
				<li>
				  <strong>February 2012 - May 2012: </strong><br />
				  <div className='underline'></div>
				  Assistant coordinating deliveries for <u>The Campus Times</u> university
				  newspaper for the University of Rochester.
				</li>
				<li>
				  <strong>January 2011 - December 2011: </strong><br />
				  <div className='underline'></div>
				  Research assistant in autism treatment studies at the University of Rochester
				  Medical Center. Supervised by Dr. Tristram Smith; work included supervision of
				  child subjects and assisting with assessments, both physical and cognitive. College
				  credit attained under Independent Study qualifications.
				</li>
				<li>
				  <strong>June 2010 - August 2010: </strong><br />
				  <div className='underline'></div>
				  Volunteer in Strong Memorial Hospital Physical Therapy department in Rochester, 
				  NY. Supervised by head physical therapist Cynthia Thieleman, duties included extensive
				  patient contact and transport, as well as maintenance and upkeep of facilities.
				</li>
				<li>
				  <strong>June 2009 - August 2009: </strong><br />
				  <div className='underline'></div>
				  Worker/retail clerk at Garden of Eve Organic Farm in Riverhead, NY. Responsibilities
				  included opening and closing farmstand retail shop, cashier work, along with various
				  upkeep and manual labor duties.
				</li>
			  </ul>
		  </section>
		  
		  <section className='resume-section'>
		    <h2>References: </h2>
			<ul className='ul-square'>
			  <li>
			    <strong>Karen Catapano: </strong><br/>
				<div className='underline'></div>
				Employer and owner of Catapano Dairy Farm in Peconic, NY; Site Supervisor
				of Stat Health in Cutchogue, NY.
			  </li>
			  <li>
			    <strong>Dr. Michael Catapano, MD: </strong><br/>
				<div className='underline'></div>
				Employer and practice owner of Stat Health in Cutchogue, NY.
			  </li>
			  <li>
			    <strong>Christopher Finnegan, PA: </strong><br/>
				<div className='underline'></div>
				Colleague and provider for Stat Health P.C.
			  </li>
			  
			  <div style={{'paddingTop': '10px'}}>Contact information provided upon request.</div>
			</ul>
		  </section>
		  
		  <p>This resume template was built with React and React Router.
		  </p>
		
	  </div>
	);
  }
}

module.exports = Resume;