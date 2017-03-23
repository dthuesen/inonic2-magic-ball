import { TestBed, ComponentFixture, async } from '@angular/core/testing'
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Every provider for DI has to be imported, too!
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

// Title of the Test Suite
describe('Component: Root Component', () => {
  
  // Requirements before the tests start 
  // with 'async' for use of the asyncronous compileComponents
  beforeEach( async( () => {
    
    // Required dependencies for 'TestBed' to run the component
    TestBed.configureTestingModule({
      
      declarations: [
        MyApp
      ],

      providers: [
        StatusBar,
        SplashScreen
      ],

      imports: [
        IonicModule.forRoot( MyApp )
      ]
    }).compileComponents();
  }));

  // This will be triggered once the TestBed configuration 
  // has finished. It creates a reference to the fixture,
  // which references the testing environment the TestBed creates
  beforeEach( () => {
    
    fixture = TestBed.createComponent(MyApp);
    comp    = fixture.componentInstance;
    
  });

  // Here, all refrences will be cleared
  afterEach( () => {
    
    fixture.destroy();
    comp = null;
    
  });
  
  // This test makes sure that 'fixture' and 'comp' have been
  // created sucessfully
  it('is created', () => {
    
    expect( fixture ).toBeTruthy();
    expect( comp ).toBeTruthy();
    
  });

  
  // This test checks that the component has a rootPage member
  // variable and it is set to the HomePage.
  it('initialises with a root page of HomePage', () => {
    expect( comp['rootPage'] ).toBe(HomePage);
  });
});


// Roll-up: how this test suite runs:
/**
 *  1. Create TestBed testing environment
 * 
 *  2. Set up references
 * 
 *  3. Run "is created"-test
 * 
 *  4. Clean up references
 * 
 *  5. Create TestBed testing environment
 * 
 *  6. Set up references
 * 
 *  7. Run "initialises with a root page of HomePage"-test
 * 
 *  9. Clean up references
 * 
 */
