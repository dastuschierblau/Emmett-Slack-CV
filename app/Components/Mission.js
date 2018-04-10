const React = require( 'react' );

class Mission extends React.Component {
  render() {
    return (
	  <div className='mainContent'>
	    <h1>A Mission Statement</h1>
		<p>
		  What implications does the rapid development of machine learning have for our future as a society, and how can we direct that development toward the benefit of all? I am interested in addressing this particular question over the course of my work in programming. 
		</p>
		<p>
		  As our country ages, it becomes increasingly clear that many Americans do not possess the means to continue living fulfilling and independent lives in their own homes. Live in aides are often cost prohibitive for many seniors on a fixed income, and these aides themselves are low wage and at high risk of work related injury. This system as it exists is not sustainable. 
		</p>
		<p>
		  I see in machine learning and AI the tools to afford seniors a chance to remain in their homes, with home care aides transitioning to a more skilled role in maintaining the AI and any integrated systems in the home. This process will of course be a gradual one, beginning with more applications geared toward helping older people with their daily tasks, such as scheduling doctor's visits or prescription refills. Further development in this field could encompass anything, from companion AI to mobility assistance robots programmed to learn a home's layout and follow an instruction to reach a specific location.
		</p>
		<p>
		  These innovations are what I want to see come from tech in the decades to come. They require a shift in our culture, one which views elderly people as valuable sources of experience, humans who deserve a better quality of life than that which many have now. I am not content to merely hope for these innovations, and so am intent on contributing to their development in whatever way I can. This intent is my ultimate motivation toward improving my skills in programming.
		</p>
		
	  </div>
	);
  }
}

module.exports = Mission;