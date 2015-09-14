import {Injectable} from 'angular2/angular2';
import {HomeComponent} from '../pages/home';
import {AboutComponent} from '../pages/about';

@Injectable()
class RouteStore {
  constructor() {
    this.pages = [
     {path: '/', redirectTo: '/home'},
     {path: '/home', component: HomeComponent, as: 'home'},
     {path: '/about', component: AboutComponent, as: 'about'}
   ];
  }

  getPages() {
    return this.pages;
  }
}
export {
  RouteStore
};
