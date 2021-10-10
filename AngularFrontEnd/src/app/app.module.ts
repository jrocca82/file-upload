import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { FileElementsComponent } from './file-elements/file-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    TableDisplayComponent,
    FileElementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
