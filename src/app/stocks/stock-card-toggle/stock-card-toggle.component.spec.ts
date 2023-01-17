import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StockCardToggleComponent } from './stock-card-toggle.component';
import { FormsModule } from '@angular/forms';

describe('StockCardToggleComponent', () => {
  let component: StockCardToggleComponent;
  let fixture: ComponentFixture<StockCardToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ StockCardToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCardToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
