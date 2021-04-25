const React = require('react');
const { Link } = require('react-router-dom');
const Fragment = React.Fragment;

function Overlay({ link, title, desc, tools }) {
  return (
    <a
      target='_blank'
      href={link}
      className='project-link inherit d-flex flex-column justify-content-center absolute'
    >
      <p className='text-white'>{desc}</p>
    </a>
  );
}

function OverlayWithInternalLink({ link, title, desc, match }) {
  return (
    <Link
      to='/heatmap'
      className='project-link inherit d-flex flex-column justify-content-center absolute'
    >
      <p className='text-white'>{desc}</p>
    </Link>
  );
}

class Screenshot extends React.Component {
  render() {
    const imgUrl = this.props.url;
    const { hovering, tools, title, desc, note, internalLink } = this.props;

    return (
      <div className='project-item mb-4'>
        <div className='bg-dark-blue text-white text-center border-rounded'>
          <h3>{title}</h3>
          {note && <p className='font-small p-1'>{note}</p>}
        </div>

        <div className='relative bg-translucent'>
          <div
            className={hovering ? 'overlay d-flex align-items-center' : 'hide'}
          >
            {internalLink ? (
              <OverlayWithInternalLink {...this.props} />
            ) : (
              <Overlay {...this.props} />
            )}
          </div>
          <img className='screenshot' src={require(`../Images/${imgUrl}`)} />
        </div>
        <ul className='d-flex justify-content-center tools-list flex-wrap'>
          {tools.map((tool, ind) => {
            return (
              <li key={ind} className='pb-1'>
                <i className='fas fa-check p-1 text-blue'></i> {tool}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Screenshot;
