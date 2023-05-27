import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'myApp';
    email: string = "";
    password: string = "";
    viewMode: string = "";
    tasks = ['MI', 'Samsung', 'Iphone', 'Google'];

  submit() {
    console.log(this.email);
    console.log(this.password);
    debugger
  }
    
}
