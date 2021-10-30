import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LProjectsComponent } from './l-projects.component';

describe('LProjectsComponent', () => {
  let component: LProjectsComponent;
  let fixture: ComponentFixture<LProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
