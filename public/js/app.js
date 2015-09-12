import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ROUTECONFIG} from './routeconfig';

@Component({
  selector: 'app'
})
@View({
  template: `
    <h1>My First Angular2 App</h1>
  `
})
@RouteConfig(ROUTECONFIG)
class AppComponent {
  constructor() {

  }
}

export {
  AppComponent
};
