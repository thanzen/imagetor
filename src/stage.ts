/// <reference path="./libs/definitions/fabric.d.ts"/>
export enum MediaType{
  png,
  bmp,
  gif,
  svg
}
export class Stage {
    stage: fabric.ICanvas;
    constructor(id: string, width?: number, height?: number) {
        if (id === "") {
            throw "id can not be empty!"
        }
        this.stage = new fabric.Canvas(id);
        this.setSize(width,height);
    }
    setSize(width,height:number){
      if (width > 0) {
          this.stage.setWidth(width);
      }
      if (height > 0) {
          this.stage.setHeight(height);
      }
    }
    setBackgroundImage(image:fabric.IObject){
      this.stage.setBackgroundImage(image,()=>{});
    }
    addImage(image:fabric.IObject){
      this.stage.add(image);
    }
    getImageAsString(imgType:MediaType):string{
      return this.stage.toDataURL(imgType.toString());
    }
}
