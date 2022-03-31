import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-drag-and-drop-file',
  templateUrl: './drag-and-drop-file.component.html',
  styleUrls: ['./drag-and-drop-file.component.scss']
})
export class DragAndDropFileComponent implements OnInit {
  files: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onFileDropped($event : any) {
   
    this.prepareFilesList($event);
  }

   /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
    prepareFilesList(files: Array<any>) {
      
      for (const item of files) {
        if(item.size > 2000000)
        { 
          alert("Your file size is more then 2 MB.");
          return;
        }
        item.progress = 0;
        this.files.push(item);
      }
      this.uploadFilesSimulator(0);
    }

    private uploadFilesSimulator(index: number) {
      setTimeout(() => {
        if (index === this.files.length) {
          return;
        } else {
          const progressInterval = setInterval(() => {
            if (this.files[index].progress === 100) {
              clearInterval(progressInterval);
              this.uploadFilesSimulator(index + 1);
            } else {
              this.files[index].progress += 5;
            }
          }, 200);
        }
      }, 1000);
    }

    /**
   * handle file from browsing
   */
  fileBrowseHandler(event : any) {
    this.prepareFilesList(event.target['files']);
  }

   /**
   * Delete file from files list
   * @param index (File index)
   */
    deleteFile(index: number) {
      this.files.splice(index, 1);
    }

    /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  
  formatBytes(bytes : number, decimals : number = 0) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  public UploadFile()
  {
    console.log("hii");
  }

}