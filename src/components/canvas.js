var React = require("react/addons");
var uuid = require("./uuid");
var fabric = require("../libs/fabric.js")
var EVENTS = [
  'activate', 'blur','change', 'deactivate', 'focus', 'hide',
  'init', 'redo', 'remove', 'reset', 'show', 'submit', 'undo'
];

var colors = {
    light: '#ffffff',
    dark: '#66CCFF',
    bg:'#989898'
};

module.exports = React.createClass({
  displayName: 'Imagetor',
  canvas: fabric.Canvas,
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

  getDefaultProps: function () {
    return {
      config: {}
    };
  },

  componentWillMount: function () {
    this.id = this.id || uuid();
  },

  componentDidMount: function () {
    this.canvas = new fabric.Canvas(this.id, {
       backgroundColor: colors.bg
   });
  },

  componentWillUnmount: function () {
    this.canvas.dispose();
  },

  render: function () {
    return <canvas width="700" height="700" id={this.id}></canvas>;
  }
});
