import { Component, OnInit } from '@angular/core';
import { HttpCliet } from '@angular/common/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
         MatSortModule, MatTableModule } from "@angular/material";

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements DataSource<Lesson> {
      constructor(private fileService: fileService) {}

      connect(collectionViewer: CollectionViewer): Observable<File[]> {
          return this.fileName.asObservable();
      }

      disconnect(collectionViewer: CollectionViewer): void {
          this.fileName.complete();
      }

      loadFiles(fileName: string, fileSize: number, uploadDate: string, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

          this.loadingFile.next(true);

          this.fileUploadService.findFile(fileName, fileSize, uploadDate, filter, sortDirection, pageIndex, pageSize).pipe(
              catchError(() => of([])),
              finalize(() => this.loadingFile.next(false))
          )
          .subscribe(files => this.fileName.next(files));
      }
    }
