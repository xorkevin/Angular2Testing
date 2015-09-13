import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {RouteStore} from './services/routestore';
import {Navbar} from './components/navbar';

@Component({
  selector: 'app'
})
@View({
  template: `
    <h1>My First Angular2 App</h1>
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  directives: [Navbar]//RouterOutlet]
})
@RouteConfig(RouteStore.pages)
class AppComponent {
  constructor() {

  }
}

export {
  AppComponent
};
