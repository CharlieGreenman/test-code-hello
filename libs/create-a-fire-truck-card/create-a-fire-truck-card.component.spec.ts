```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FireTruckCardComponent } from './fire-truck-card.component';

describe('FireTruckCardComponent', () => {
  let component: FireTruckCardComponent;
  let fixture: ComponentFixture<FireTruckCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FireTruckCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireTruckCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```