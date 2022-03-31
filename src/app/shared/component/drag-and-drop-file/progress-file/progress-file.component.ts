import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-file',
  templateUrl: './progress-file.component.html',
  styleUrls: ['./progress-file.component.scss']
})
export class ProgressFileComponent implements OnInit {
  @Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
