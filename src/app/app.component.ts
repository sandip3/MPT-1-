import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [
    {
      name: 'Nothing',
      description: 'Description of Nothing',
      price: '$500',
      image: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/05/07/1196101-untitled-design-2023-05-07t165510.254.jpg ',
      review: '5 star',
    },

    {
      name: 'Everything',
      description: 'Description of Everything',
      price: '$400',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdUkTUG0D6fgnr7cE4AOyqEv4M7WcNSgi4H0ON6YXqV4P65q4P0WjaLufib_HcHy7-Zk&usqp=CAU ',
      review: '5 star',
    }];

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
