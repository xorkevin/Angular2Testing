import 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {AppComponent} from './app';

bootstrap(AppComponent, [routerInjectables]);
