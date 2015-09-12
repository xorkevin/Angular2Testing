import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'about'
})
@View({
  template: `
    <h1>About Us</h1>
    <p>
      we is cool people
    </p>
  `
})
class AboutComponent {

}

export {
  AboutComponent
};
