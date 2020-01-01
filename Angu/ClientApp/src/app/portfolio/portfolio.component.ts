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
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [

    trigger('movePanel', [
      transition('void => *', [
        style({ transform: 'translateY(200px)', opacity: 0 }),
        animate('1000ms 0.4ms ease-in-out')
      ])
    ])

  ]
})
export class PortfolioComponent implements OnInit {
  state: string = "inactive";
  ClassCloseTab: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  visaFlik() {
    console.log("fsafas");
    this.ClassCloseTab = !this.ClassCloseTab;
  }
}
