import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsTabComponent } from './insights-tab.component';

describe('InsightsTabComponent', () => {
  let component: InsightsTabComponent;
  let fixture: ComponentFixture<InsightsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsightsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
