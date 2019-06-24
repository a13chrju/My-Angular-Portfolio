import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kompetenser',
  templateUrl: './kompetenser.component.html',
  styleUrls: ['./kompetenser.component.scss']
})
export class KompetenserComponent implements OnInit {

  constructor() { }
  public fiskburk: string;
  ngOnInit() {

    this.fiskburk = "yes";
  }

}
