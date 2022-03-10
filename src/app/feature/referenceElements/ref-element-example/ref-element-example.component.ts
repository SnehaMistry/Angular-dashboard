import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

export class category{
  name :string

  constructor(){

    this.name = '';
  }
}
@Component({
  selector: 'app-ref-element-example',
  templateUrl: './ref-element-example.component.html',
  styleUrls: ['./ref-element-example.component.scss']
})
export class RefElementExampleComponent implements OnInit {

  
  @ViewChild("myDomeElem", { static: false }) myDomeElem: ElementRef;
  @ViewChild('myItemLists') items: QueryList<ElementRef>;
  categories : category[];
  constructor(){
    this.categories = [
      {
        name: "Angular 8",
      }, {
        name: "Angular 9",
      }, {
        name: "Angular 10",
      }
    ];
  }
  ngOnInit() {
    console.log(this.myDomeElem);
    
  }
  
  ngAfterViewInit() {
    this.myDomeElem.nativeElement.innerHTML = "Changed Dom Element Value";
    console.log(this.myDomeElem);
  }

  getCategory(event: any, category: category, i : number) {
    console.log('category clicked : ', category);
    console.log('event : ', event);
    console.log('index of category : ', i);
    console.log('all items : ', this.items)
  }

}
