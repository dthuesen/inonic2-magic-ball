import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InterviewsPage } from '../pages/interviews/interviews';
import { JavascriptPage } from '../pages/javascript/javascript';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  // To access the methods of that Component. Where
  // 'Nav' is the class name. It then is declared as 'nav'
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    ) {
      this.initializeApp();
      
      this.pages = [
        { title: 'Page One', component: InterviewsPage },
        { title: 'Page Two', component: JavascriptPage }
      ];
      
    };

  initializeApp() {
    this.platform.ready().then( () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
