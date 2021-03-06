var React = require('react');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var LocalItem = require("./navitems/LocalImage");
var Text = require("./navitems/Text");
var TextForm = require("./navitems/TextForm");
var Navbar = require("./navitems/navbar/Navbar");
var fabric = require("../libs/fabric.js").fabric;
var dispatcher = require("../dispatcher");
var EventType = require("../eventType");
var uuid = require("../uuid");
var canvasStyle={
  height:"100%",
  width:"100%"
}
var rowStyle={
  height:"800px"
}
var Editor = React.createClass({
  getInitialState: function () {
    return {stage:{}};
  },
  componentWillMount: function() {
    this.id = this.id || uuid();
  },
  componentDidMount: function() {
    var canvas = new fabric.Canvas(this.id);
    canvas.setWidth(React.findDOMNode(this.refs.canvas).offsetWidth);
    canvas.setHeight(React.findDOMNode(this.refs.canvas).offsetHeight);
    dispatcher.dispatch({type:EventType.INITIALIZED_STAGE,stage: canvas});
  },
  render: function() {
    return (
        <Grid>
          <row>
            <Navbar></Navbar>
          </row>
          <Row>
            <Col md={2} >
              <Text></Text>
            </Col>
            <Col md={10} ref="canvas" style={rowStyle}>
              <canvas style={canvasStyle} id = {this.id} ></canvas>
            </Col>
          </Row>
        </Grid>
    );
  }

});
module.exports = Editor;
