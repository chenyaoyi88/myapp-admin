import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlComponent } from './owl.component';

describe('OwlComponent', () => {
  let component: OwlComponent;
  let fixture: ComponentFixture<OwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
