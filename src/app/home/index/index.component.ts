import { Component, OnInit } from '@angular/core';

import { HomeService } from './../home.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  Nome:string;

  constructor(private service:HomeService) {
    this.Nome = service.getNome();
  }

  ngOnInit() {
  }

}
