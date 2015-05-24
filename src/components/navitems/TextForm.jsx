var React = require('react/addons');
var Modal = require('react-bootstrap/lib/Modal');
var NavItemMixin = require("../navItemMixin");
var OverlayMixin = require('react-bootstrap/lib/OverlayMixin');
var Button = require('react-bootstrap/lib/Button');
var dispatcher = require("../../dispatcher");
var EventType = require("../../eventType");
var TextForm = React.createClass({
    mixins: [NavItemMixin,OverlayMixin, React.addons.LinkedStateMixin],
    getInitialState: function () {
        return {isModalOpen: false, content:""};
    },
    handleToggle: function () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    },

    handleOk: function () {
        dispatcher.dispatch({type: EventType.CHANGE_TEXT_CONTENT,content:this.state.content});
        this.handleToggle();
    },
    getScreenText:function(){
      var result = "";
      if(this.selected instanceof fabric.Text){
        result = this.selected.getText();
      }
      return result;
    },

    handleClose: function () {
        dispatcher.dispatch({type: EventType.CHANGE_TEXT_CONTENT,content:this.state.content});
        this.handleToggle();
    },
    registerEvents: function () {
      var self = this;
      dispatcher.register(function (action) {
          switch (action.type) {
              case EventType.OPEN_TEXT_FORM:
                  self.handleToggle();
                  self.setState({content:self.getScreenText()});
                  break;
              default:
                  break;
          }
      });
    },

    componentDidMount: function () {
      this.setState({content:this.props.content});
    },

    handleChange: function (event) {
        this.state.content = event.target.value;
        this.setState({content: this.state.content});
    },
    render: function () {
        return null;
    },

    renderOverlay: function () {
        if (!this.state.isModalOpen) {
            return <span/>;
        }
        return (
            <Modal {...this.props} bsStyle='primary' title={'Text'}
                                   animation={true} onRequestHide={this.handleToggle}>
                            <div className='modal-body'>
                        {'Text:         '}<textarea  value={this.state.content}
                        onChange={this.handleChange}  />

                </div>
                <div className='modal-footer'>
                    <Button onClick={this.handleOk}>Ok</Button>
                    <Button onClick={this.handleClose}>Close</Button>
                </div>
            </Modal>
        )
    }

});
module.exports = TextForm;
