var 
  React = require('react'),
  ImageComponent;

ImageComponent = React.createClass({
  propTypes: {
    data: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <img src={this.props.data}></img>
    );
  }
});

module.exports = ImageComponent;