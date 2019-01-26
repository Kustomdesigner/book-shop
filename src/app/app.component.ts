import { Component } from '@angular/core';

@Component({
  selector: 'bs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Book App';
  showImg: boolean = false;

  showBook(): void {
    this.showImg = !this.showImg;  //false
  }
}
