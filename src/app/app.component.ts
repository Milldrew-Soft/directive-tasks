const RANDOM_COLORS = [
  'red',
  'blue',
  'green',
  'yellow',
  'pink',
  'purple',
  'brown',
  'black',
  'orange',
  'grey',
  'white',
];
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'directive-tasks';
  colors = RANDOM_COLORS;
}
