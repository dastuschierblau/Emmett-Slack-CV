const React = require('react');

class Screenshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {}

  render() {
    const imgUrl = this.props.url;

    return (
      <img
        className='screenshot'
        src={require(`../Images/${imgUrl}`)}
        onClick={this.showModal}
      />
    );
  }
}

module.exports = Screenshot;
