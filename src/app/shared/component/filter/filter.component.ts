import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filterData, Mentors } from 'src/app/feature/mentors-mvp/mentors.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  @Input() public filterValues : filterData | null;

  filterForm : FormGroup;
  public filterdata$ : Observable<filterData>;
  private _filterdata : Subject<filterData>;
  
  constructor(private _fb: FormBuilder) {
    this._filterdata = new Subject<filterData>();
    this.filterdata$ = this._filterdata?.asObservable();
   }
 
  ngOnInit(): void {

    this.filterForm = this.buildForm();
    if(this.filterValues)
    this.filterForm.patchValue(this.filterValues);
    
  }

  public buildForm()
  {
    return this._fb.group({
      age : [null],
      gender : ['']
    });
  }

  public filter()
  {
    if(this.filterForm.value)
    {
      this._filterdata.next(this.filterForm.value);
    }
    
  }

}
