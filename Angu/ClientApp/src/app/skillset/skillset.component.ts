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
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss'],
  animations: [

    trigger('scrollAnimation', [
      state('show', style({
        width: '100%'
      })),
      state('hide', style({
        width: '0%'
      })),
      transition('show => hide', animate('2000ms ease-out')),
      transition('hide => show', animate('2000ms ease-in'))
    ])

  ]
})
export class SkillsetComponent implements OnInit {

  ngOnInit() {
  }
  stateBar: string = "hide";

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop - 780;
    const scrollPosition = window.pageYOffset;
    console.log("WINDOW: " + scrollPosition);
    console.log("element: " + componentPosition);
    if (scrollPosition >= componentPosition) {
      this.stateBar = 'show'
    } else {
      this.stateBar = 'hide'
    }

  }
}


