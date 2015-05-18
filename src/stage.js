/// <reference path="./libs/definitions/fabric.d.ts"/>
(function (MediaType) {
    MediaType[MediaType["png"] = 0] = "png";
    MediaType[MediaType["bmp"] = 1] = "bmp";
    MediaType[MediaType["gif"] = 2] = "gif";
    MediaType[MediaType["svg"] = 3] = "svg";
})(exports.MediaType || (exports.MediaType = {}));
var MediaType = exports.MediaType;
var Stage = (function () {
    function Stage(id, width, height) {
        if (id === "") {
            throw "id can not be empty!";
        }
        this.stage = new fabric.Canvas(id);
        this.setSize(width, height);
    }
    Stage.prototype.setSize = function (width, height) {
        if (width > 0) {
            this.stage.setWidth(width);
        }
        if (height > 0) {
            this.stage.setHeight(height);
        }
    };
    Stage.prototype.setBackgroundImage = function (image) {
        this.stage.setBackgroundImage(image, function () { });
    };
    Stage.prototype.addImage = function (image) {
        this.stage.add(image);
    };
    Stage.prototype.getImageAsString = function (imgType) {
        return this.stage.toDataURL(imgType.toString());
    };
    return Stage;
})();
exports.Stage = Stage;
