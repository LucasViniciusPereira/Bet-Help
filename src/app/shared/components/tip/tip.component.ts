import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {
  p = 1;
  @Input('tips') lstTips: Array<any>;
  @Input() showControls = false;

  constructor() { }

  ngOnInit() {
  }

  win(element: any) {
    console.log(element);
    $('#modalConfirmTip').modal('show');
  }

  lose(element: any) {
    console.log(element);
  }

}
