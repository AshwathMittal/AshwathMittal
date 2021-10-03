import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFootComponent } from './my-foot.component';

describe('MyFootComponent', () => {
  let component: MyFootComponent;
  let fixture: ComponentFixture<MyFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
