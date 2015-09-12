import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'home'
})
@view({
  template: `
    <h1>Home</h1>
    <p>
      this is the home page
    </p>
  `
})
class HomeComponent {

}

export {
  HomeComponent
}
