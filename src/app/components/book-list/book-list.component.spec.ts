import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material'
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  const testData= [{
        title: 'Title',
        publisher: 'Publisher'
  }]; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    
    // fixture.detectChanges(); 
    // let customComponents = fixture.debugElement.queryAll(By.css('mat-card'));
    // expect(customComponents.length).toBe(1);
    // const compiled = fixture.debugElement.nativeElement;
    // // expect(fixture.debugElement.queryAll(By.css('mat-card-title'))).toBe('Title');
    // expect(compiled.querySelector('mat-card-title').textContent).toBe('Title'); 
    const ourDomCardsUnderTest = Array.from(
      document.getElementsByTagName('mat-card')
    );
    ourDomCardsUnderTest.forEach(card => {
      const cardTitle = card.getElementsByTagName('mat-card-title')[0]
        .textContent;
      const cardContent = card.getElementsByTagName('mat-card-content')[1]
        .textContent;
 
      expect(testData).toContain(
        jasmine.objectContaining({
          title: cardTitle,
          publisher: cardContent
        })
      );
    });
  });
});
