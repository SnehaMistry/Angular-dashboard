import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resumedetails } from '../../models/resumedetails.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  private id :number
  public resumedetail : Resumedetails;
  constructor(private route : ActivatedRoute, private resumeservice : ResumeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getResume()
  }

  private getResume()
  {
      this.resumeservice.getByResumeId(this.id).subscribe({
        next : (v) => this.resumedetail = v,
        error : (e)=> alert("Somethings Went Wrong" + e)
      });
  }
}
