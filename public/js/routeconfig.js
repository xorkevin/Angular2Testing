import {HomeComponent} from './pages/home';
import {AboutComponent} from './pages/about';

let ROUTECONFIG = [
  {path: '/*', redirectTo: '/'},
  {path: '/', component: HomeComponent, as: 'home'},
  {path: '/about', component: AboutComponent, as: 'about'}
];

export {
  ROUTECONFIG
};
