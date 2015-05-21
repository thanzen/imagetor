var React = require("react/addons");
var NavItemMixin = require("../navItemMixin");
var hidden={
  display:"none",
  width:0,
  height:0
};
module.exports = React.createClass({
  mixins: [NavItemMixin], // Set mixins
  componentWillMount() {
    this.iconUrl = "../images/folder_64.ico";
    this.toolTip = "Open";
  },
  onClick() {
    React.findDOMNode(this.refs.fileInput).click();
  },
  handleFile: function(e) {
      var self = this;
      var reader = new FileReader();
      var file = e.target.files[0];
      var img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      reader.onload = function(aImg) {
          img.src = aImg.target.result;
          var imgInstance = new fabric.Image(img, {});
          self.props.stage.add(imgInstance);
      }
      reader.readAsDataURL(file);
  },
  render : function(){
    var icon = null;
    if(this.iconUrl!==""){
       icon = <img src={this.iconUrl} alt={this.toolTip}></img>;
    }
    return  (<div onClick={this.onClick}>
              {icon}
              <input type = "file" ref="fileInput" style={hidden} accept = "image/*" onChange = {this.handleFile}/>
            </div>);
  }
});
