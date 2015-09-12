import {HomeComponent} from './pages/home';
import {AboutComponent} from './pages/about';

let ROUTECONFIG = [
  {name: 'home', path: '/', component: HomeComponent},
  {name: 'about', path: '/about', component: AboutComponent}
];

export {
  ROUTECONFIG
};
