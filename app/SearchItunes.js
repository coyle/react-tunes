var React = require('react');
var $ = require('jquery');

var SearchItunes = React.createClass({
  propTypes: {
    cb: React.PropTypes.func.isRequired
  },

  formatURL: function() {

    return 'https://itunes.apple.com/search?term=' +
      this.refs.searchInput.getDOMNode().value +
      '&entity=' + this.refs.selectInput.getDOMNode().value;
  },

  handleSubmit: function(e) {
    if (e.keyCode !== 13) return;
    $.ajax({
      url: this.formatURL(),
      type: 'GET',
      dataType: 'jsonp',
      error: function() {
        console.log('There was an error communicating with iTunes');
      },
      success: function(data) {
        this.refs.searchInput.getDOMNode().value = '';
        this.props.cb(data.results);
      }.bind(this)
    });
  },

  render: function(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="input-group-inline col-sm-4">
            <div className = "form-group" >
              <input 
                type="text"
                ref='searchInput' placeholder='Search'
                className='form-control'
                onKeyDown={this.handleSubmit} />
            </div>
          </div>
          <div className="input-group-inline col-sm-4">
            <select ref="selectInput">
              <option value="musicTrack">Music</option>
              <option value="movie">Movie</option>
            </select>
          </div>
          <div className="input-group-inline col-sm-4">
            
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchItunes;