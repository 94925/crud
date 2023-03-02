import { Component } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent {
     public packages=['Monthly','Quarterly','Yearly'];
     public genders=['Male','Female'];
     public lists:string[]=[
      'Toxic fat reduction',
      'Energy and Endurance',
      'Building lean muscle',
      'Fitness',
      'sugar Craving Body'
     ]
}
