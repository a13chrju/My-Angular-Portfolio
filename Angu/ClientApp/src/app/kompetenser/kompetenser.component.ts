import { Component, OnInit, HostBinding, HostListener, ElementRef  } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-kompetenser',
  templateUrl: './kompetenser.component.html',
  styleUrls: ['./kompetenser.component.scss'],
  animations: [

    trigger('movePanel', [
      transition('void => *', [
        style({ transform: 'translateY(200px)', opacity: 0 }),
        animate('1000ms 0.4ms ease-in-out')
      ])
    ])
  ]
})
export class KompetenserComponent implements OnInit {

  state: string = "inactive";

  public fiskburk: string;
  ngOnInit() {

    this.fiskburk = "yes";
  }



}
