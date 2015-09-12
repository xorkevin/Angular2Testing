import {HomeComponent} from './pages/home';
import {AboutComponent} from './pages/about';

let ROUTECONFIG = [
  {name: 'home', path: '/', component: HomeComponent, as: 'home'},
  {name: 'about', path: '/about', component: AboutComponent, as: 'about'}
];

export {
  ROUTECONFIG
};
