import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Resumedetails } from '../../models/resumedetails.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
  resumeForm : FormGroup;
  resumeSave : Resumedetails;

  constructor(private formbuilder : FormBuilder, private resumeservice : ResumeService, private router : Router) { }

  ngOnInit(): void {
    this.createResumeGroup()
    console.log(this.resumeForm)
  }

  public createResumeGroup()
  {
    this.resumeForm = this.formbuilder.group({
      id : [ ],
      fullname : ['',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      designation : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      phoneno : ['', [Validators.required, Validators.maxLength(10), Validators.minLength(9)]],
      technicalskills : this.formbuilder.array([
        this.getTechnicalSkill()
      ]),
      experiences : this.formbuilder.array([
        this.getExperience()
      ]),  
      education : this.formbuilder.array([
        this.getEducation()
      ])
    })  
  }

  private getTechnicalSkill()
  {
    return this.formbuilder.group({
      skill : ['',Validators.required]
    })
  }

  get getvalue()
  {
    return this.resumeForm.controls
  }
  get skill() 
  {
    return this.getvalue['technicalskills'] as FormArray;
  }
  get experiences() 
  {
    return this.getvalue['experiences'] as FormArray;
  }
  get education() 
  {
    return this.getvalue['education'] as FormArray;
  }

  private getExperience()
  {
    return this.formbuilder.group({
      companyname : ['',Validators.required],
      compDesignation : ['', Validators.required],
      expDetails : ['', Validators.required],
      startingyear : [null, Validators.required],
      endingyear : [null, Validators.required]
    })
  }

  private getEducation()
  {
    return this.formbuilder.group({
      universityname : ['', Validators.required],
      course :['', Validators.required],
      percentage : [null,Validators.required]
    })
  }

  public addTechnicalSkills()
  {
    const control = <FormArray>this.resumeForm.controls['technicalskills'];
    control.push(this.getTechnicalSkill());
  }

  public removeskill(index:number)
  {
    const control = <FormArray>this.resumeForm.controls['technicalskills'];
    control.removeAt(index);
  }

  public addExperience()
  {
    const control = <FormArray>this.resumeForm.controls['experiences'];
    control.push(this.getExperience());
  }

  public removeExperience(index:number)
  {
    const control = <FormArray>this.resumeForm.controls['education'];
    control.removeAt(index);
  }

  public addEducation()
  {
    const control = <FormArray>this.resumeForm.controls['education'];
    control.push(this.getEducation());
  }

  public removeEducation(index:number)
  {
    const control = <FormArray>this.resumeForm.controls['education'];
    control.removeAt(index);
  }

  get f()
  {
    return this.resumeForm.controls;
  }

  public createResume()
  {
    if(this.resumeForm.valid)
    {
      const resumeSave = this.resumeForm.value;
      if(resumeSave.id)
      {
        // this.editResumeDetails(resumeSave);
      }
      else{
        this.createResumeDetails(resumeSave);
      }
    }
  }

  public createResumeDetails(resumedetails : Resumedetails)
  {
    this.resumeservice.saveResumeDetails(resumedetails).subscribe({
      next : v => {
        this.resetForm();
        console.log(v);
        this.router.navigate(['resume/'+ v.id]);
      }
    });  
  }

  public resetForm()
  {
    this.resumeForm.reset();
  }

}
