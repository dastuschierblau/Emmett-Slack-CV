const React = require('react');
const Fragment = React.Fragment;

function Overlay({ link, title, desc, tools }) {
  return (
    <a
      target='_blank'
      href={link}
      className='project-link inherit d-flex flex-column justify-content-center absolute'
    >
      <h1>{title}</h1>
      <p className='text-white'>{desc}</p>
      <ul className='d-flex justify-content-center tools-list flex-wrap'>
        {tools.map((tool, ind) => {
          return (
            <li key={ind} className='pb-1'>
              <i className='fas fa-check p-1 text-blue'></i> {tool}
            </li>
          );
        })}
      </ul>
    </a>
  );
}

class Screenshot extends React.Component {
  render() {
    const imgUrl = this.props.url;
    const { hovering, tools, title, desc } = this.props;

    return (
      <Fragment>
        <div className='relative'>
          <div
            className={hovering ? 'overlay d-flex align-items-center' : 'hide'}
          >
            <Overlay {...this.props} />
          </div>
          <img className='screenshot' src={require(`../Images/${imgUrl}`)} />
        </div>
      </Fragment>
    );
  }
}

module.exports = Screenshot;
