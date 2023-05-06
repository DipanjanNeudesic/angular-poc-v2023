import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibletableComponent } from './collapsibletable.component';

describe('CollapsibletableComponent', () => {
  let component: CollapsibletableComponent;
  let fixture: ComponentFixture<CollapsibletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibletableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
