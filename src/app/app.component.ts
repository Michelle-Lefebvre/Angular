import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name:string = 'Michelle';

  constructor() {
    this.changeName('Marie');
    console.log(123);
  }
  changeName(name:string):void {
    this.name = name;
  }
}
