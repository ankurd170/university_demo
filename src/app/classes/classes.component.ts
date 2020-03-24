import { Component, OnInit } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})



export class ClassesComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  
  ngOnInit(): void {
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
