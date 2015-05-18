var React = require("react/addons");
var uuid = require("./uuid");
var fabric = require("../libs/fabric.js").fabric;
var EVENTS = [
    'activate', 'blur', 'change', 'deactivate', 'focus', 'hide',
    'init', 'redo', 'remove', 'reset', 'show', 'submit', 'undo'
];

var colors = {
    light: '#ffffff',
    dark: '#66CCFF',
    bg: '#989898'
};
var count = 0;
module.exports = React.createClass({
    displayName: 'Imagetor',
    stage: null,
    propTypes: {
        config: React.PropTypes.object,
        content: React.PropTypes.string,

        onActivate: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onDeactivate: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        onHide: React.PropTypes.func,
        onInit: React.PropTypes.func,
        onRedo: React.PropTypes.func,
        onRemove: React.PropTypes.func,
        onReset: React.PropTypes.func,
        onShow: React.PropTypes.func,
        onSubmit: React.PropTypes.func,
        onUndo: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            config: {}
        };
    },

    componentWillMount: function() {
        this.id = this.id || uuid();
    },

    componentDidMount: function() {
        this.canvas = new fabric.Canvas(this.id);
    },

    componentWillUnmount: function() {
        this.canvas.dispose();
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
            if(count===0){
              count++;
              self.canvas.setBackgroundImage(  img.src ,function(){});
            }else{
              var imgInstance = new fabric.Image(img, {});
              self.canvas.selection = true;
              self.canvas.add(imgInstance);
            }

        }

        reader.readAsDataURL(file);
    },
    checkSize: function() {
      this.canvas.selection =false;
      var img =document.getElementById("preview");
      img.src = this.canvas.toDataURL('png');
      this.canvas.selection = true;
      //  alert(this.canvas.toDataURL('png').length)
    },
    render: function() {
        return (
          <div>
            <div>
              <input type = "file"  accept = "image/*" onChange = {this.handleFile}/>
              <button onClick = {this.checkSize}>Preview</button>
            </div>
            <canvas width = "800" height = "600" id = {this.id}></canvas>
            <img id="preview"></img>
          </div>
        )

    }
});
