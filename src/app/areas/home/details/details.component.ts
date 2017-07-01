import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseModal } from "app/shared/class/base.modal";

@Component({
  selector: 'app-home-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  modalDetails: BaseModal = new BaseModal('modalHomeDetails');

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.modalDetails.openModal();
  }

  hide() {
    this.modalDetails.closeModal();
  }

}
