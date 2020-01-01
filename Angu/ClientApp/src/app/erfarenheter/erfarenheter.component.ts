import { Component, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-erfarenheter',
  templateUrl: './erfarenheter.component.html',
  styleUrls: ['./erfarenheter.component.scss'],
  animations: [

    trigger('movePanel', [
      transition('void => *', [
        style({ transform: 'scale(2)', opacity: 0 }),
        animate('1000ms 0.4ms ease-in-out')
      ])
    ])
  ]
})
export class ErfarenheterComponent implements OnInit {

  public webbkunskaper = ['Javascript', 'C#', 'PHP', 'Jquery', 'MySQL','MSSQL', 'Ajax', 'SQL', 'Entity Framework', 'XML', 'JSON', 'HTML5', 'XHTML', 
    'HTML', 'SCSS', 'CSS','Objektorienterad programmering', 'Ms server', 'DOM', 'XSLT', 'Angular 2+',
    'ASP.NET', 'Windows'];

  constructor() { }
  state: string = "inactive";

  public fiskburk: string;
  ngOnInit() {

    this.fiskburk = "yes";
  }

}
