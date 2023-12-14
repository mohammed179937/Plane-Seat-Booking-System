import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedTicketsComponent } from './booked-tickets.component';

describe('BookedTicketsComponent', () => {
  let component: BookedTicketsComponent;
  let fixture: ComponentFixture<BookedTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedTicketsComponent]
    });
    fixture = TestBed.createComponent(BookedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
