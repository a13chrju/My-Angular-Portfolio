import { Component, OnInit, HostBinding } from '@angular/core';
import { BlogfetcherService } from '../blogfetcher.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({ transform: 'scale(1)', color: 'red' })),
      state('active', style({ transform: 'scale(1.4)', color: 'blue' })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ]),

    trigger('movePanel', [
      transition('void => *', [
        style({ transform: 'translateY(200px)', opacity: 0 }),
        animate('1000ms 0.4ms ease-in-out')
      ])
    ])

  ]
})
export class ViewComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string;
  state: string = "inactive";

  Toggleme() {
    this.state = "active";
  }

  constructor(private BlogfetcherService: BlogfetcherService) { }

  ngOnInit() {
    
 
 
  }

  myFunc() {
    console.log("function called");

      this.BlogfetcherService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log('this.users=' + this.posts[0].text);
      },
      error => this.errorMessage = <any>error
    );
  }
 
}
