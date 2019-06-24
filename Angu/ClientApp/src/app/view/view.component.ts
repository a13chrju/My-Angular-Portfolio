import { Component, OnInit } from '@angular/core';
import { BlogfetcherService } from '../blogfetcher.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string;


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
