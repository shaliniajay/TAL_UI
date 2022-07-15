import { Component, OnInit } from '@angular/core';
import {OccupationFactor,Occupation} from '../models/occupation-factor'
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TalServiceService } from '../services/tal-service.service';

@Component({
  selector: 'app-tal-premium-calculator',
  templateUrl: './tal-premium-calculator.component.html',
  styleUrls: ['./tal-premium-calculator.component.css']
})


export class TalPremiumCalculatorComponent implements OnInit {

  occupations : Occupation[] = [];
 
  occupationRating : OccupationFactor[] = [];


  // Not sure what exactly business case should be for insurer age , just to add a constraint.
  dateMaxDate = new Date('05.07.2021');
  dateMinDate = new Date('12.12.1952');

  premium :number = 0;
  selectedOccupationFactor? : number = 0 ;
 

  premiumCalculatorForm = this.formBuilder.group({
    name: ['',Validators.required],
    age:[{value : 0 ,disabled: true},[Validators.required,Validators.min(1),Validators.max(70)]],
    dob:[ , Validators.required], //new FormControl(new Date())
    occupation:[0,Validators.required],
    deathSumInsured:[0,[Validators.required,Validators.min(10000),Validators.max(1000000)]]
  });
  constructor(private formBuilder: FormBuilder,private readonly talServiceService: TalServiceService) { }

  ngOnInit(): void {
    // This can be used if want real time premium calculation with change of any field form value.
    
    // this.premiumCalculatorForm.valueChanges.subscribe(x => {
    //   console.log('form value changed');
    // this.calculatePremium();
    // })

    this.talServiceService.getAllOccupations().subscribe(
      (occupations) => {
        //this.occupations = occupations;
        console.log(occupations);
        this.occupations = occupations.map(function(occupations : any) {
          return {
              Name: occupations.name,
              OccupationID : occupations.occupationID,
              OccupationFactorID : occupations.occupationfactorID
          };
      });
       // console.log(this.occupations);
      }
      , () => {
        this.occupations = [];
      });

      this.talServiceService.getAllOccupationFactors().subscribe(
        (occupationFactors) => {
          //this.occupationRating = occupationFactors;
          this.occupationRating = occupationFactors.map(function(occupationFactors : any) {
            return {
                Name: occupationFactors.name,
                Factor : occupationFactors.factor,
                OccupationFactorID : occupationFactors.occupationFactorID
            };
        });
        //  console.log(this.occupationRating);
        }
        , () => {
          this.occupationRating = [];
        });

  }


  calculateAge(){
    this.premiumCalculatorForm.patchValue({
      age: moment().diff(this.premiumCalculatorForm.controls['dob'].value, 'years',false),
    });
  }

  // Premium calculation could have been done in .Net layer and could have got as a service call.

  calculatePremium(){
    let factorID = this.premiumCalculatorForm.controls['occupation'].value;
    this.selectedOccupationFactor = this.occupationRating.find(x => x.OccupationFactorID == factorID)?.Factor ;
    console.log(this.selectedOccupationFactor);
     // Calculates premium
     //Death Premium = (Death Cover amount * Occupation Rating Factor * Age) /1000 * 12
     if(this.selectedOccupationFactor){
      this.premium = ((this.premiumCalculatorForm.controls['deathSumInsured'].value * this.selectedOccupationFactor*this.premiumCalculatorForm.controls['age'].value)/1000)*12 ;
     }
     
  };
}
