/// <reference path="./libs/definitions/fabric.d.ts"/>
import disp = require("./dispatcher");
import enums = require("./enums");
var dispatcher = disp.dispatcher;
export class Stage {
    stage: fabric.ICanvas;
    constructor(id: string, width?: number, height?: number) {
        if (id === "") {
            throw "id can not be empty!"
        }
        this.stage = new fabric.Canvas(id);
        this.setSize(width, height);
        //allow selction by default
        this.setSelectable(true);
    }
    setSelectable(allow:boolean){
      this.stage.selection = allow;
    }
    setSize(width, height: number) {
        if (width > 0) {
            this.stage.setWidth(width);
        }
        if (height > 0) {
            this.stage.setHeight(height);
        }
    }
    setBackgroundImage(url_or_data: string, callback: () => {}) {
        this.stage.setBackgroundImage(url_or_data, callback);
    }
    getImageAsString(imgType: enums.MediaType): string {
        return this.stage.toDataURL(imgType.toString());
    }
    clear() {
        this.stage.clear();
    }
}
