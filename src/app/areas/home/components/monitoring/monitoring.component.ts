import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';

import { HomeService } from './../../home.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  lstTips: Array<any> = new Array<any>();

  constructor(
    private svcHome: HomeService
  ) { }

  ngOnInit() {
    // Delay loader tips
    Observable.timer(1000).subscribe(p => this.Mock_Tips());
  }

  private Mock_Tips() {
    this.svcHome
      .getTips()
      .subscribe((p: Array<any>) => {
        this.lstTips = p;
      });
  }
}
