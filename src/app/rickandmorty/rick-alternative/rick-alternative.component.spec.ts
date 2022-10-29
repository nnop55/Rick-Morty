import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAlternativeComponent } from './rick-alternative.component';

describe('RickAlternativeComponent', () => {
  let component: RickAlternativeComponent;
  let fixture: ComponentFixture<RickAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickAlternativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
