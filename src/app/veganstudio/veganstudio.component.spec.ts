import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganstudioComponent } from './veganstudio.component';

describe('VeganstudioComponent', () => {
  let component: VeganstudioComponent;
  let fixture: ComponentFixture<VeganstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
