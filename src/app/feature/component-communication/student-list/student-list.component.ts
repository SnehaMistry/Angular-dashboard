import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public studentDetails$ : Observable<Student[]>;
  constructor(private _studentService : StudentServiceService) { }

  ngOnInit(): void {
      this.studentDetails$ = this._studentService.studentDetails$;
  }

  public editform(id : number)
  {
    this._studentService.editById(id);
  }

  public deleteform(id : number)
  {
    this._studentService.delete(id);
  }
}
