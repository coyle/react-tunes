var 
  React = require('react'),
  UrlComponent;

UrlComponent = React.createClass({
  propTypes: {
    data: React.PropTypes.string.isRequired,
    rowData: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <a href={this.props.data}>{this.props.rowData.trackName}</a>
    );
  }
});

module.exports = UrlComponent;