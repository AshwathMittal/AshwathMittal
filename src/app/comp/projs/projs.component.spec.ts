import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjsComponent } from './projs.component';

describe('ProjsComponent', () => {
  let component: ProjsComponent;
  let fixture: ComponentFixture<ProjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
