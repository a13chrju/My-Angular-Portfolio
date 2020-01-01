import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'applogg';
  state: string = "inactive";

  ngOnInit() {
    //this.Toggleme();
  }

  Toggleme() {
    this.state = "active";
  }
}
