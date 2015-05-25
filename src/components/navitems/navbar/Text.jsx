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
const panel =
<Popover title='Text'>
  <strong>Font family</strong>
  <DropdownButton eventKey={3} >
    <MenuItem eventKey='1'>16</MenuItem>
  </DropdownButton>
</Popover>
;
const content =
<ButtonToolbar>
  <OverlayTrigger trigger='click' placement='bottom' overlay={panel}>
    <i className={"fa fa-font fa-2x"} > </i>
  </OverlayTrigger>
</ButtonToolbar>
;
module.exports = React.createClass({
  mixins: [NavItemMixin], // Set mixins
  render : function(){
    return  (
      content
    );
  }
});
