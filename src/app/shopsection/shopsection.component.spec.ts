import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsectionComponent } from './shopsection.component';

describe('ShopsectionComponent', () => {
  let component: ShopsectionComponent;
  let fixture: ComponentFixture<ShopsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
