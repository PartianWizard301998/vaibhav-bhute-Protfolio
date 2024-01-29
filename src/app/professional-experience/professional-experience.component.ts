import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.css'
})
export class ProfessionalExperienceComponent implements OnInit{
  [x: string]: any;

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Vaibhav Bhute - Experience');
  }

  showdata: boolean = false
  showdata1: boolean = false  
  showdata2: boolean = false  

  showMore(){
    this.showdata=true
  }

  hideMore(){
    this.showdata=false
  }

  showMore1(){
    this.showdata1=true
  }

  hideMore1(){
    this.showdata1=false
  }

  showMore2(){
    this.showdata2=true
  }

  hideMore2(){
    this.showdata2=false
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
  
}
