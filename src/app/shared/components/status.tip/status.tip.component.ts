import { Component, OnInit, Input } from '@angular/core';
import { Enumerations } from './../../../utils/enumerations';

@Component({
  selector: 'app-status-tip',
  templateUrl: './status.tip.component.html',
  styleUrls: ['./status.tip.component.css']
})
export class StatusTipComponent implements OnInit {

  description;
  @Input() status;

  constructor() { }

  ngOnInit() {
    this.description = Enumerations.eStatusTip[this.status];
  }
}
