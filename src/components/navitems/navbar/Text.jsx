var React = require("react/addons");
var Popover = require('react-bootstrap/lib/Popover');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');
var Button = require('react-bootstrap/lib/Button');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var NavItemMixin = require("../../navItemMixin");
var dispatcher = require("../../../dispatcher");
var EventType = require("../../../eventType");

module.exports = React.createClass({
  mixins: [NavItemMixin], // Set mixins
  getInitialState:function(){
    return {
      text:"ddd",
      currentFamily:"normal",
      currentSize:40,
      currentBackground:"black"
    };
  },
  handleSizeChange: function (event) {
    this.setState({currentSize: event.target.value});
  },
  handleFontFamilySelect:function(selectedKey) {
    alert('selected ' + selectedKey);
  },
  render : function(){
    var panel =
    <Popover title='Text'>
      <textarea  value={this.state.text}
                onChange={this.handleChange}  />
              <br/>
      <strong>Font family</strong>
      <DropdownButton eventKey={1} title={this.state.currentFamily} onSelect={this.handleFontFamilySelect} >
        <MenuItem eventKey='1'>{this.state.currentFamily}</MenuItem>
      </DropdownButton>
      <br/>
      <strong>Font size</strong>
      <input type="number" min="20" max="80"
        onChange={this.handleSizeChange}  value={this.state.currentSize}/>
    </Popover>;
    return  (
      <ButtonToolbar>
        <OverlayTrigger trigger='click' placement='bottom' rootClose={true} overlay={panel}>
          <i className={"fa fa-font fa-2x"} > </i>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
});
