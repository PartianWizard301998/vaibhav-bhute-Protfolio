import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrl: './modal-project.component.css'
})
export class ModalProjectComponent {


  project = {} as Project;

  constructor(public bsModalRef: BsModalRef){
    
  }
}
