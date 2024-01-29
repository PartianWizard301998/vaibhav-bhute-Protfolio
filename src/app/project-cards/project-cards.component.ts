import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalProjectComponent } from '../modal-project/modal-project.component';



@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css'
})
export class ProjectCardsComponent {
  @Input() project = {} as Project;
  bsModalRef?:BsModalRef;


  constructor(private modalService:BsModalService){

  }

  openProjectModal(){

    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    }

    this.bsModalRef = this.modalService.show(ModalProjectComponent, modalOptions);
  }
}
