import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenserComponent } from './kompetenser.component';

describe('KompetenserComponent', () => {
  let component: KompetenserComponent;
  let fixture: ComponentFixture<KompetenserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
