import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErfarenheterComponent } from './erfarenheter.component';

describe('ErfarenheterComponent', () => {
  let component: ErfarenheterComponent;
  let fixture: ComponentFixture<ErfarenheterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErfarenheterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErfarenheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
