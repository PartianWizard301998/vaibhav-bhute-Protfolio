import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component implements OnInit {

  featuredProject = {} as Project;
  

  constructor(private titleService: Title, private projectService:ProjectsService){
    this.titleService.setTitle('vaibhav Bhute - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectsById(4);
  }
}
