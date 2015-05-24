var React = require("react/addons");
var NavItemMixin = require("../../navItemMixin");
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var OverlayMixin = require('react-bootstrap/lib/OverlayMixin');
var LocalFile = require('../LocalImage');
var dispatcher = require("../../../dispatcher");
var EventType = require("../../../eventType");
module.exports = React.createClass({
  mixins: [NavItemMixin], // Set mixins
  // handleSelect : function(selectedKey) {
  // //  alert('selected ' + selectedKey);
  // },
  // handleClick : function(selectedKey) {
  //   alert('selected ' + selectedKey);
  // },
  render : function(){
    return  (
      <Navbar brand='Imagetor' inverse toggleNavKey={0}>
        <Nav left eventKey={0}>
          <NavItem eventKey={1}><LocalFile iconUrl="../../../images/folder_open.ico"/></NavItem>
          <DropdownButton eventKey={3} title='A'>
            <MenuItem eventKey='1'>16</MenuItem>
            <MenuItem eventKey='2'>17</MenuItem>
            <MenuItem eventKey='3'>18</MenuItem>
              <MenuItem eventKey='1'>19</MenuItem>
              <MenuItem eventKey='2'>20</MenuItem>
              <MenuItem eventKey='3'>21</MenuItem>
                <MenuItem eventKey='1'>22</MenuItem>
                <MenuItem eventKey='2'>23</MenuItem>
                <MenuItem eventKey='3'>24</MenuItem>
                  <MenuItem eventKey='1'>25</MenuItem>
                  <MenuItem eventKey='2'>26</MenuItem>
                  <MenuItem eventKey='3'>27</MenuItem>
                    <MenuItem eventKey='1'>28</MenuItem>
                    <MenuItem eventKey='2'>29</MenuItem>
                    <MenuItem eventKey='3'>30</MenuItem>
          </DropdownButton>
        </Nav>
      </Navbar>
    );
  }
});
