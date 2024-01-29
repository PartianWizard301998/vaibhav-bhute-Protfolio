import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  data: any;

  fullname: string ="";
  email: string ="";
  message: string ="";


  constructor(private http: HttpClient, private titleService: Title){
    this.titleService.setTitle('Vaibhav Bhute - Contact');
  }

  ngOnInit():void{

  }

  
  register()
  {
    let bodyData = 
    {
      "fullname" : this.fullname,
      "email" : this.email,
      "message" : this.message,
    };
    this.http.post("http://localhost:9992/feedback/create",bodyData).subscribe((resultData: any)=>
    {
      console.log(bodyData); 
      console.log(resultData);
        alert("Thanks for Connecting with Us. Will Connect you soon")
    });
  }
  save()
  {
    this.register();
  }

//Method to take the data from from and storing in local storage.
//   storeToLocal(data: {
//     message: string; name: string; email: string; 
// }) {

//       try {

//         localStorage.setItem('obj', JSON.stringify(data));
        
        
//       } catch (error) {
//         console.log(error);
//       }


//     // console.log("Name :"+ data.name + 
//     // "\nEmail : "+data.email +
//     // "\nMessage : "+data.message);
//     }
    
}
