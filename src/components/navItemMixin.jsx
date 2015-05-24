var React = require("react/addons");
var dispatcher = require("../dispatcher");
var EventType = require("../eventType");
module.exports  = {
  stage:null,
  selected:null,
  componentDidMount: function () {
    var self = this;
    dispatcher.register(function (action) {
        switch (action.type) {
            case EventType.INITIALIZED_STAGE:
                self.stage = action.stage;
                self.stage.on({
                  "object:selected":function(e){
                    self.selected = e.target;
                  },
                  "selection:cleared":function(e){
                    self.selected  = null;
                  }
                });
                if(self.registerEvents && typeof(self.registerEvents) === "function"){
                  self.registerEvents();
                }

                break;
            default:
                break;
        }
    });
  },
};
