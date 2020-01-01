import { Component, OnInit } from '@angular/core';
import { BlogfetcherService } from '../blogfetcher.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string;
  newurl: string;
  constructor(private BlogfetcherService: BlogfetcherService) { }

  ngOnInit() {
    console.log("function called");

    this.BlogfetcherService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log('this.users=' + this.posts[0].text);
      },
      error => this.errorMessage = <any>error
    );
  }


  goToBlog(tourl: number) {
    this.newurl = 'http://christopherj-002-site1.gtempurl.com/Home/FreeContent?postid=' + tourl.toString();
    window.location.href = this.newurl;
  }


}
