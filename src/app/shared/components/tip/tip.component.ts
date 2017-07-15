
import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Enumerations } from './../../../utils/enumerations';
import { EventComponent } from './../../../areas/home/components/event/event.component';
import { HomeService } from './../../../areas/home/home.service';
declare var $: any;

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {
  page = 1;
  eStatusTip = Enumerations.eStatusTip;
  modalEditEvent = 'modalEditEvent';

  @Input('tips') lstTips: Array<any>;
  @Input() showControls = false;
  @ViewChild(EventComponent) modalEventTip: EventComponent;

  constructor(
    private svcHome: HomeService
  ) { }

  ngOnInit() {
  }

  win(element: any) {
    console.log(element);
    $('#modalConfirmTip').modal('show');
  }

  lose(element: any) {
    console.log(element);
  }

  editTip() {
    this.svcHome.getNewEvent().subscribe((data: any) => {
      // Atribuir propriedades
      this.modalEventTip.assignProperties(data);
      $(`#${this.modalEditEvent}`).modal('show');
    });
  }
}
