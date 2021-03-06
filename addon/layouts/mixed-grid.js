import ShelfFirst from 'layout-bin-packer/shelf-first';
import {formatPixelStyle} from '../utils/style-generators';

export default class MixedGrid
{
  constructor(content, width) {
    this.content = content;
    this.bin = new ShelfFirst(content, width);
  }

  contentSize(clientWidth/*, clientHeight*/) {
    return {
      width: clientWidth,
      height: this.bin.height(clientWidth)
    };
  }

  indexAt(offsetX, offsetY, width, height) {
    return this.bin.visibleStartingIndex(offsetY, width, height);
  }

  positionAt(index, width, height) {
    return this.bin.position(index, width, height);
  }

  widthAt(index) {
    return this.bin.widthAtIndex(index);
  }

  heightAt(index) {
    return this.bin.heightAtIndex(index);
  }

  count(offsetX, offsetY, width, height) {
    return this.bin.numberVisibleWithin(offsetY, width, height, true);
  }
  
  maxScroll(width, height) {
    return this.bin.maxContentOffset(width, height);
  }
  
  formatItemStyle(itemIndex, clientWidth, clientHeight) {
    let pos = this.positionAt(itemIndex, clientWidth, clientHeight);
    let width = this.widthAt(itemIndex, clientWidth, clientHeight);
    let height = this.heightAt(itemIndex, clientWidth, clientHeight);
    return formatPixelStyle(pos, width, height);
  }
}
