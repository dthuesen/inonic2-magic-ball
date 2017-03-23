// Test configuration

import './polyfills';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { getTestBed, 
         TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, 
         platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { App, 
         Config, 
         Form, 
         IonicModule, 
         Keyboard, 
         DomController, 
         MenuController, 
         NavController, 
         Platform } from 'ionic-angular';
import { ConfigMock } from './mocks';


// Unfortunately there's no typing for the `__karma__` variable. 
// Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely:
__karma__.loaded = function (): void {
  // noop
}

// First, initialize the Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the test.
let context: any = require.context('./', true, /\.spec\.ts/);

// And load the modules.
context.keys().amp(context);

// Finally, start Karma to run the tests.
__karma__.start();
