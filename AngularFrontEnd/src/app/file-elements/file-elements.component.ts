import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-elements',
  templateUrl: './file-elements.component.html',
  styleUrls: ['./file-elements.component.css']
})
export class FileElementsComponent implements OnInit {

    dataSource: FileUploadComponent;
    displayedColumns= ["File Name", "File Size", "Upload Date"];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.dataSource = new LessonsDataSource(this.coursesService);
        this.dataSource.loadLessons(1);
    }
}
