let React = require('react'),
  Fragment = React.Fragment,
  ReactRouter = require('react-router-dom'),
  Router = ReactRouter.BrowserRouter,
  Route = ReactRouter.Route,
  Switch = ReactRouter.Switch,
  Sidebar = require('./Sidebar.js'),
  Footer = require('./Footer.js'),
  MainContent = require('./MainContent.js');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: 'open',
    };

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed(e) {
    let el = e.target,
      sibling = el.nextElementSibling;

    if (sibling.classList.contains('active')) {
      sibling.classList.remove('active');
      this.setState(() => ({ label: 'open' }));
    } else {
      sibling.classList.add('active');
      this.setState(() => ({ label: 'close' }));
    }
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
                return (
                  <Fragment>
                    <Sidebar />
                    <MainContent />
                    <Footer />
                  </Fragment>
                );
              }}
            />
            <Route
              render={() => {
                return (
                  <h1 className='p-3'>
                    Not sure how you got here, but this isn't a page!
                  </h1>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
