import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexoneComponent } from './indexone.component';

describe('IndexoneComponent', () => {
  let component: IndexoneComponent;
  let fixture: ComponentFixture<IndexoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
