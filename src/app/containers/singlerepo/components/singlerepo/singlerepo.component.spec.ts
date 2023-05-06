import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerepoComponent } from './singlerepo.component';

describe('SinglerepoComponent', () => {
  let component: SinglerepoComponent;
  let fixture: ComponentFixture<SinglerepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglerepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
