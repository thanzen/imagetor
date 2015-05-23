'use strict';
require("../../node_modules/bootstrap/dist/css/bootstrap.css");
var React = require('react/addons');
var fabric = require("../libs/fabric.js").fabric;
var Canvas = require("./Editor");
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var ImagetorApp = React.createClass({
  render: function() {
    return (
      <Canvas></Canvas>
    );
  }
});
React.render(<ImagetorApp/>, document.getElementById('editor')); // jshint ignore:line

module.exports = ImagetorApp;
