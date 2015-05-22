'use strict';

var React = require('react/addons');
var Canvas = require("./canvas")
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var ImagetorApp = React.createClass({
  render: function() {
    return (
      <Canvas></Canvas>
    );
  }
});
React.render(<ImagetorApp />, document.getElementById('editor')); // jshint ignore:line

module.exports = ImagetorApp;
