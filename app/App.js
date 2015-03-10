var React = require('react');
var ImageComponent = require('./ImageComponent');
var UrlComponent = require('./UrlComponent');
var SearchItunes = require('./SearchItunes');
var Griddle = require('griddle-react');

var App = React.createClass({
  getInitialState: function() {
    return ({
      data: ''
    });
  },

  updateState: function(info) {
    this.setState({
      data: info
    });
  },

  render: function(){
    var griddleMeta = [
      {columnName: 'trackName',displayName: 'Name'},
      {columnName: 'artistName',displayName: 'Artist'},
      {columnName: 'primaryGenreName',displayName: 'Genre'},
      {columnName: 'artworkUrl100',displayName: 'Artwork',customComponent: ImageComponent},
      {columnName: 'trackPrice',displayName: 'Price'},{columnName: 'kind',displayName: 'Type'},
      {columnName: 'trackViewUrl',displayName: 'Online Link',customComponent: UrlComponent}
    ],
    panelStyle = {'margin-top': '49px'},
    note;

    note = (this.state.data === '') ? 'Make A Search' : 'Your Search Results';
    console.log(note);
    return (
      <span>
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <SearchItunes cb={this.updateState}/>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default" style={panelStyle}>
          <div className="panel-heading">
            <h4>{note}</h4>
          </div>
          <Griddle results={this.state.data} tableClassName={'table'} columnMetadata={griddleMeta} columns={griddleMeta.map( (meta) => (meta.columnName))}/>
        </div>
      </span>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
