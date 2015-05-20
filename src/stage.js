/// <reference path="./libs/definitions/fabric.d.ts"/>
var disp = require("./dispatcher");
var dispatcher = disp.dispatcher;
var Stage = (function () {
    function Stage(id, width, height) {
        if (id === "") {
            throw "id can not be empty!";
        }
        this.stage = new fabric.Canvas(id);
        this.setSize(width, height);
        this.setSelectable(true);
    }
    Stage.prototype.setSelectable = function (allow) {
        this.stage.selection = allow;
    };
    Stage.prototype.setSize = function (width, height) {
        if (width > 0) {
            this.stage.setWidth(width);
        }
        if (height > 0) {
            this.stage.setHeight(height);
        }
    };
    Stage.prototype.setBackgroundImage = function (url_or_data, callback) {
        this.stage.setBackgroundImage(url_or_data, callback);
    };
    Stage.prototype.getImageAsString = function (imgType) {
        return this.stage.toDataURL(imgType.toString());
    };
    Stage.prototype.clear = function () {
        this.stage.clear();
    };
    return Stage;
})();
exports.Stage = Stage;
