import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {RouteStore} from '../services/routestore';

@Component({
  selector: 'navbar'
})
@Inject(RouteStore)
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
    console.log(routeStore);
    this.pages = routeStore.getPages();
  }
}

export {
  Navbar
};
