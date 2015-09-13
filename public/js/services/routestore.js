import {HomeComponent} from '../pages/home';
import {AboutComponent} from '../pages/about';

class RouteStore {
  constructor() {
    this.pages = [
     {path: '/', redirectTo: '/home'},
     {path: '/home', component: HomeComponent, as: 'home'},
     {path: '/about', component: AboutComponent, as: 'about'}
   ];
  }
}
export {
  RouteStore
};
