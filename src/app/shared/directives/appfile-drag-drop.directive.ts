import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[AppfileDragDrop]'
})
export class AppfileDragDropDirective {
  @Output() fileDropped = new EventEmitter<any>();
  constructor() { }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave( evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

   // Drop listener
   @HostListener('drop', ['$event']) public ondrop(evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
    
    let files = evt.dataTransfer.files;
    console.log(files);
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
