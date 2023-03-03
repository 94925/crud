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
           enquiryDate:[''],
           bmi:[''],
           bmiresult:['']


    });
      //  res=responce
    this.registerForm.controls['height'].valueChanges.subscribe(res =>{
      this.calculatebmi(res);
    })
  }
  submit(){
    console.log(this.registerForm.value);
  }

  calculatebmi(heightValue:number){
         const weight = this.registerForm.value.height;
         const height = heightValue;
         const bmi = weight/(height*height);
         this.registerForm.controls['bmi'].patchValue(bmi);
         switch(true){
          case bmi <18.5:
            this.registerForm.controls['bmiresult'].patchValue('underweight');
            break;
            case (bmi >=18.5&& bmi < 25):
            this.registerForm.controls['bmiresult'].patchValue('Normal');
            break;
            case (bmi >=25 && bmi < 30):
            this.registerForm.controls['bmiresult'].patchValue('underweight');
            break;

            default:
              this.registerForm.controls['bmiresult'].patchValue('obese');
              break;
         }
  }
}
