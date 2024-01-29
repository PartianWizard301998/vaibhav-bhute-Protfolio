import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
     {id:0, name:'Basic Java Programs', pictures:["../../assets/java1.png", "../../assets/java2.png", "../../assets/java3.png"], projectLink:'https://github.com/PartianWizard301998/Java_Programs', summary:'Basic Java Programs that demonstrate basic Java Concepts.This is best for beginners and advanced programmers.This will be a good Practice so one can get all the simple java programs at one place.', description: 'The "Basic Java Programs" this project that demonstrate basic Java concepts are very useful to understand the java. The below project contains the basic programs like Hello World, Arithmatic Operations, Conditional Statements, Swapping,  Inheritance and Method Overloading. This will be a good Practice so one can get all the simple java programs at one place. This is best for beginners and advanced programmers.',tags:[Tag.JAVA, Tag.VSCODE]},

     {id: 1, name: "ComputerHUB", pictures: ["../../assets/computerHub4.png", "../../assets/computerHub2.png", "../../assets/computerHub3.png"], projectLink: "//www.github.com", summary: "ComputerHUB is an Simple web application which is a one stop solution for all the computer related queries.e user can resolve his doubts and computer related issues with our executive.", description: "ComputerHUB is an Simple web application which is a one stop solution for all the computer related queries. The user can resolve his doubts and computer related issues with our executive. Also the user will be able to book a timeslot so the ComputerHUB executive will visit the home and check the hardware related issues at your doorstep", tags: [Tag.HTML, Tag.CSS, Tag.ECLIPSE]},
 
     {id: 2, name: "Web API Project", pictures: ["../../assets/Icons/webap1.png", "../../assets/Icons/webap2.png", "../../assets/Icons/webap3.png"], projectLink: "//www.github.com", summary: "Developed a web APIs for User Login and Registration using the NodeJs and Express library, the data will get stored in MongoDB.", description: "Developed the web APIs using the NodeJs and Express library. This APIs are ready to implement is projects for user registartion and login. The data will be get stored in MongoDB database. Also Similar APIs for Storing User Feedback, Student Registration and Student Login I have Created. This APIs are tested using Postman with Response Time of less than 20ms. ", tags: [Tag.MONGODB, Tag.EXPRESSJS, Tag.NODEJS]},
    {id: 3, name: "Login and Registration", pictures: ["../../assets/Icons/frontend3.png", "../../assets/Icons/frontend1.png", "../../assets/Icons/frontend2.png"], projectLink: "//www.github.com", summary: "This is a simple Angular application which has the login and Registration funcionality.", description: "This is a simple Angular application which has the login and Registration funcionality. This is created using Express, NodeJS and MongoDb Database. This will demonstrate how the data is been pass to bakend and store the database and also to fetch from database.", tags: [Tag.ANGULAR, Tag.BOOTSTRAP,Tag.NODEJS, Tag.MONGODB]},

    {id: 4, name: "Descriptive Answer Evaluation", pictures: ["../../assets/DAES1.png", "../../assets/DAES2.png", "../../assets/DAES3.png"], projectLink: "//www.github.com", summary: "Fullstack webapp developed using JSP and Apache Tomcat.", description: "AI based symmetric answer evaluation system for descriptive answering” is a web-based application developed with JSP and Apache Tomcat server which is capable of evaluating the descriptive answers based on the keywords.The system will allocate the marks to the students answers based on the matching of keywords and model answer.", tags: [Tag.JAVASCRIPT, Tag.JSP, Tag.APACHE_TOMCAT, Tag.MYSQL]},
   
    {id: 5, name: "Chrome Extension", pictures: ["../../assets/image1.png", "../../assets/image2.png", "../../assets/image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension, tracks prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
   
  ];


  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectsById( id: number) : Project{

    let project = this.projects.find(project => project.id === id);

    if( project === undefined){
      throw new TypeError ('There is no project that matches ths ID: '+ id);
    }
    return project;
  }


  getProjectsByFilters(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
    
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }

    });

    return filteredProjects;

  }
 


}
