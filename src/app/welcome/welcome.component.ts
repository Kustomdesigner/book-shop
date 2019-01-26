import { Component } from '@angular/core';

@Component({
  selector:'bs-welcome',
  templateUrl: 'welcome.component.html'
})

export class WelcomeComponent {
  pageTitle: string = "Welcome!";
}