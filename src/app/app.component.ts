import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task';
  isCollapsed: boolean = false;
  currentURL: string = "";
  constructor(private router: Router) {
   this.currentURL = this.router.url;
  }

  changeRoute() {
    this.isCollapsed = false;
    this.currentURL = this.router.url;
  }
}

