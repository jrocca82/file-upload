import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileElementsComponent } from './file-elements.component';

describe('FileElementsComponent', () => {
  let component: FileElementsComponent;
  let fixture: ComponentFixture<FileElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
