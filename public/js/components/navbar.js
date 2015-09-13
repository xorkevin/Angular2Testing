import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {RouteStore} from '../services/routestore';

@Component({
  selector: 'navbar',
  componentServices: [RouteStore]
})
@View({
  template: `
    <ul>
      <li *ng-for='#page of pages'>{{page.as}}</li>
    </ul>
  `,
  directives: [NgFor]
})
class Navbar {
  constructor(routeStore) {
    this.pages = routeStore.pages;
  }
}

export {
  Navbar
};
