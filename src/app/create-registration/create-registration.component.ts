import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent implements OnInit{
     public packages =['Monthly','Quarterly','Yearly'];
     public genders =['Male','Female'];
     public lists =[
      'Toxic fat reduction',
      'Energy and Endurance',
      'Building lean muscle',
      'Fitness',
      'sugar Craving Body'
     ];

     public registerForm!:FormGroup;

     constructor(private fb:FormBuilder){

     }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
           firstName:[''],
           lastName:[''],
           Email:[''],
           Mobile:[''],
           weight:[''],
           height:[''],
           gender :[''],
           trainerOpt:[''],
           package:[''],
           list:[''],
           haveGymBefore:[''],
           enquiryDate:['']


    });

    
  }
  submit(){
    console.log(this.registerForm.value);
  }
}
