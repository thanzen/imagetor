var React = require("react/addons");
var NavItemMixin = require("../navItemMixin");
var Modal = require('react-bootstrap/lib/Modal');
var OverlayMixin = require('react-bootstrap/lib/OverlayMixin');
var TextForm = require('./TextForm');
var dispatcher = require("../../dispatcher");
var EventType = require("../../eventType");
var hidden={
  display:"none"
};
module.exports = React.createClass({
  mixins: [NavItemMixin], // Set mixins
  getInitialState: function () {
    return ({content:""});
  },
  componentWillMount() {
    this.iconUrl = "../images/folder_64.ico";
    this.toolTip = "Open";
  },
  registerEvents: function () {
    var self = this;
    dispatcher.register(function (action) {
        switch (action.type) {
            case EventType.CHANGE_TEXT_CONTENT:
                if(action.content!==""){
                  self.selected.setText(action.content);
                  self.stage.renderAll();
                }else if(self.selected){
                  self.stage.remove(self.selected);
                  self.stage.deactivateAllWithDispatch();
                }

                break;
            default:
                break;
        }
    });
  },
  onClick() {
    if (this.selected instanceof fabric.Text){
      this.setState({content:this.selected.getText()});
    }else{
      var text = new fabric.IText('', { left: 100, top: 100 });
      this.stage.add(text);
      this.stage.setActiveObject(text);
    }
    dispatcher.dispatch({type: EventType.OPEN_TEXT_FORM});
  },
  render : function(){
    var icon = null;
    if(this.iconUrl!==""){
       icon = <img src={this.iconUrl} alt={this.toolTip}></img>;
    }
    return  (<div onClick={this.onClick}>
              {icon}
              <TextForm/>
            </div>);
  }
});
