import { Component } from '@angular/core';
import { MagicBall } from '../../providers/magic-ball';

import { NavController, App, MenuController,  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  answer: any = '...';
  title: string = 'My Page';
  question: string = '';

  constructor(
    public navCtrl: NavController,
    public magicBall: MagicBall,
    app: App, 
    menu: MenuController
    ) {
    
  }
  
  changeTitle() {
    this.title = 'Your Page';
  }
  
  showAnswer() {
    this.answer = this.magicBall.getRandomAnswer();
    console.log('showAnswer()');
    this.question = '';
  }

}
