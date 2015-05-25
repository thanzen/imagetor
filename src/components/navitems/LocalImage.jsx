var React = require("react/addons");
var NavItemMixin = require("../navItemMixin");
var hidden={
  display:"none"
};
module.exports = React.createClass({
  mixins: [NavItemMixin], // Set mixins
  onClick:function() {
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
          self.stage.add(imgInstance);
          React.findDOMNode(self.refs.fileInput).value = "";
      }
      reader.readAsDataURL(file);
  },
  render : function(){
    var icon = null;
    if(this.iconUrl!==""){
       icon = <img src={this.props.iconUrl}></img>;
    }
    return  (<div onClick={this.onClick}>
            <i className={"fa fa-folder-open fa-2x"} >    </i>
              <input type = "file" ref="fileInput" style={hidden} accept = "image/*"  onChange = {this.handleFile}/>

            </div>);
  }
});
