import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerepopageComponent } from './singlerepopage.component';

describe('SinglerepopageComponent', () => {
  let component: SinglerepopageComponent;
  let fixture: ComponentFixture<SinglerepopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglerepopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerepopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
