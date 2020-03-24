let React = require('react');

function Footer() {
  return (
    <footer className='d-flex align-items-center justify-content-around p-1'>
      <div className='copyright text-center my-auto'>
        <span>Copyright &copy; Emmett Slack 2020</span>
      </div>
      <div>
        emmett.slack90@gmail.com
        <i className='fas fa-envelope text-purple p-1'></i>{' '}
      </div>
    </footer>
  );
}

module.exports = Footer;
