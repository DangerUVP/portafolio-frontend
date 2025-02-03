import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyProjectsComponent } from './all-my-projects.component';

describe('AllMyProjectsComponent', () => {
  let component: AllMyProjectsComponent;
  let fixture: ComponentFixture<AllMyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMyProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
