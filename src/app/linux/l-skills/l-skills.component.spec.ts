import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSkillsComponent } from './l-skills.component';

describe('LSkillsComponent', () => {
  let component: LSkillsComponent;
  let fixture: ComponentFixture<LSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
