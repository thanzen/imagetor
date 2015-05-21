var React = require("react/addons");
var uuid = require("./uuid");
var LocalItem = require("./navitems/LocalImage");
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
    canvas: null,
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
    getInitialState: function () {
        return {canvas:{}};
    },
    componentWillMount: function() {
        this.id = this.id || uuid();
    },

    componentDidMount: function() {
        this.setState({stage: new fabric.Canvas(this.id)});
    },

    componentWillUnmount: function() {
        this.state.stage.dispose();
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
              self.state.stage.setBackgroundImage(  img.src ,self.state.stage.renderAll.bind(self.state.stage));
            }else{
              var imgInstance = new fabric.Image(img, {});
              self.state.stage.selection = true;
              self.state.stage.add(imgInstance);
              var text = new fabric.IText('text', { left: 100, top: 100 });
              self.state.stage.add(text);
            }

        }
        reader.readAsDataURL(file);
    },
    preview: function() {
      this.state.stage.deactivateAllWithDispatch();
      var img =document.getElementById("preview");
      img.src = this.state.stage.toDataURL('png');
      this.state.stage.selection = true;
      //  alert(this.canvas.toDataURL('png').length)
    },
    setText:function(){
      var text= this.state.stage.getActiveObject();
      if (text instanceof fabric.Text){
       text.setText("ok changed!");
       this.state.stage.renderAll();
      }
    },
    render: function() {
        return (
          <div>
            <div>
              <input type = "file"  accept = "image/*" onChange = {this.handleFile}/>
              <button onClick = {this.preview}>Preview</button>
              <button onClick = {this.setText}>Text</button>
            </div>
            <canvas width = "800" height = "600" id = {this.id} ></canvas>
            <img id="preview"></img>
            <LocalItem stage={this.state.stage}></LocalItem>
          </div>
        )

    }
});
