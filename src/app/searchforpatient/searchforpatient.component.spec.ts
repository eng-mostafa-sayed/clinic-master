import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforpatientComponent } from './searchforpatient.component';

describe('SearchforpatientComponent', () => {
  let component: SearchforpatientComponent;
  let fixture: ComponentFixture<SearchforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchforpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
