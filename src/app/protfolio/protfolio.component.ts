import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';





@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  html: boolean = false;
  css: boolean = false;
  git: boolean = false;
  firebase: boolean = false;
  javaserverpages: boolean = false;
  bootstrap:boolean = false;
  mongoDB:boolean = false;
  apache_tomcat: boolean = false;
  nodejs:boolean = false;
  express:boolean = false;
  eclips:boolean = false;
  vscode:boolean = false;
  filtering:boolean = false;
  

  constructor(private titleService: Title, private projectService:ProjectsService){
    this.titleService.setTitle('Vaibhav Bhute - Protfolio');
  }
  ngOnInit(): void {
    
    this.projects =  this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }

    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.bootstrap){
      filterTags.push(Tag.BOOTSTRAP);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if(this.git){
      filterTags.push(Tag.GIT);
    }
    if(this.firebase){
      filterTags.push(Tag.FIREBASE);
    }
    if(this.javaserverpages){
      filterTags.push(Tag.JSP);
    }
    if(this.mongoDB){
      filterTags.push(Tag.MONGODB);
    }
    if(this.apache_tomcat){
      filterTags.push(Tag.APACHE_TOMCAT);
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }
    if(this.express){
      filterTags.push(Tag.EXPRESSJS);
    }
    if(this.vscode){
      filterTags.push(Tag.VSCODE);
    }
    if(this.eclips){
      filterTags.push(Tag.ECLIPSE);
    }

    if(this.angular || this.typescript || this.java || this.css || this.html || this.javascript || this.git || this.firebase || this.javaserverpages || this.bootstrap || this.mongoDB || this.apache_tomcat || this.nodejs || this.express || this.vscode || this.vscode){
      this.filtering = true;
    }else{
      this.filtering = false;
    }

    this.projects =  this.projectService.getProjectsByFilters(filterTags)
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.javascript = false;
    this.java = false;
    this.css = false;
    this.html = false;
    this.git = false;
    this.firebase = false;
    this.filtering = false;
    this.javaserverpages=false
    this.bootstrap= false
    this.mongoDB= false
    this.nodejs=false
    this.apache_tomcat=false
    this.express=false;
    this.vscode=false;
    this.eclips=false
    this.projects = this.projectService.GetProjects();
    
  }

}
