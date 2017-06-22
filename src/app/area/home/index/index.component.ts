import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private svcHome: HomeService) {
  }

  ngOnInit() {

  }

  teste() {
      this.svcHome.getTeste().subscribe((p: Response) => console.log(p));
  }
}
