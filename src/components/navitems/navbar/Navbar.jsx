var React = require("react/addons");
var NavItemMixin = require("../../navItemMixin");
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var LocalFile = require('../LocalImage');
var dispatcher = require("../../../dispatcher");
var EventType = require("../../../eventType");
var TextPanel = require('./Text');
module.exports = React.createClass({
  mixins: [NavItemMixin], // Set mixins
  render : function(){
    return  (
      <Navbar brand='Imagetor' inverse toggleNavKey={0}>
        <Nav left eventKey={0}>
          <NavItem eventKey={1}><LocalFile iconUrl="../../../images/folder_open.ico"/></NavItem>
            <NavItem eventKey={2}>    <TextPanel></TextPanel>  

      </NavItem>
        </Nav>
      </Navbar>
    );
  }
});
