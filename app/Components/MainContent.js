let React = require('react'),
  ReactDOM = require('react-dom');
let Screenshot = require('./Screenshot');
let Hover = require('./Hover');

class MainContent extends React.Component {
  componentDidMount() {
    const mainContent = ReactDOM.findDOMNode(this),
      top = mainContent.offsetTop;

    console.log(top);
  }

  render() {
    const slackTrackerTools = [
        'React',
        'Redux',
        'React Router v4',
        'Express',
        'MongoDB',
      ],
      sudokuTools = ['React'];

    return (
      <div className='mainContent'>
        <div className='mainContent-inner'>
          <div className='project'>
            <Hover>
              {(hovering) => {
                return (
                  <Screenshot
                    hovering={hovering}
                    tools={slackTrackerTools}
                    link='https://ancient-sierra-91444.herokuapp.com/'
                    url={'Slack-Tracker-landing.PNG'}
                    title='Slack Tracker'
                    desc='A full stack MERN application that allows management of projects via creation of tickets for individual tasks.'
                    note={`(The project below is a full stack application hosted on heroku's free tier, and as such usually takes about 15-20 seconds to spin up if the dyno has idled.)`}
                  />
                );
              }}
            </Hover>
          </div>

          <div className='project'>
            <Hover>
              {(hovering) => {
                return (
                  <Screenshot
                    hovering={hovering}
                    tools={sudokuTools}
                    link='https://solve-doku-d86e1.firebaseapp.com/'
                    url={'sudoku1.PNG'}
                    title='Solve Doku'
                    desc='A mini project using React that allows the user to check their entries to ensure they do not violate the current board based on the rules of sudoku.'
                  />
                );
              }}
            </Hover>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainContent;
