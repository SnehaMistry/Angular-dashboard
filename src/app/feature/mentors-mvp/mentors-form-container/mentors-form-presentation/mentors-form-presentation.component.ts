import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileArray, Mentors } from '../../mentors.model';
import { MentorsFormPresenterService } from '../mentors-form-presenter/mentors-form-presenter.service';

@Component({
  selector: 'app-mentors-form-presentation',
  templateUrl: './mentors-form-presentation.component.html',
  styleUrls: ['./mentors-form-presentation.component.scss'],
  viewProviders: [MentorsFormPresenterService]
})
export class MentorsFormPresentationComponent implements OnInit, OnChanges {

  mentorForm : FormGroup;
  fileData : FileArray;
  isFiledata : boolean = false;
  @Input() public mentorList : Mentors[] | null;
  @Input() public set editmentor (value : Mentors | null){
    if(value)
    {
      this.mentorForm.patchValue(value);
    }
  }
  @Output() add: EventEmitter<Mentors> = new EventEmitter<Mentors>();
  @Output() edit: EventEmitter<Mentors> = new EventEmitter<Mentors>();

  constructor(private _formService : MentorsFormPresenterService, private _route:Router) { }

  ngOnInit(): void {
    this.mentorForm = this._formService.buildForm();
    this._formService.mentorFormData$.subscribe(res => {
      (res.id === null) ? this.add.emit(res) : this.edit.emit(res);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mentorList);
  }

  public getFileData(fileData : FileArray){
     
    if(!this._formService.checkUniqueFile(fileData, this.mentorList)){
      this.fileData = fileData;
      this.isFiledata = true;
      return;
    }
    else{
      alert('File name should not be the same');
      return;
    }

  }

  public mentorSave()
  {
    // let fileInfo : string = '';
    // this.fileData.forEach(file => {
    //   let temp = new FileArray(file.name, file.size, file.type);
    //   console.log(JSON.stringify(temp));
    //   fileInfo = fileInfo.concat(JSON.stringify(temp));
    // });
    // this.mentorForm.get('uploadFile')?.setValue(fileInfo);
   
    if(this.isFiledata)
    {
      let temp: FileArray = {
        name : this.fileData.name,
        size : this.fileData.size,
        type: this.fileData.type,
        content : this.fileData.content
      }
      this.mentorForm.controls['uploadFile'].setValue(temp);
    }
      if(this.mentorForm.valid)
      {
        console.log(this.mentorForm.value);
        debugger;
        this._formService.addForm(this.mentorForm);
      }
    
  }

  public showFile(event : Mentors)
  {
    console.log(event);
  }
  public get formControl() {
    return this.mentorForm.controls;
  }

  cancelForm(){
    this._route.navigate([`user-mvp/list`]);
  }

}
