import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    DatePickerModule,
    CascadeSelectModule,
    ToggleSwitchModule,
    SelectModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  title = 'form4';

  
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl(null, Validators.required),
    selectedCity: new FormControl(null, Validators.required),
    checked: new FormControl(false),
    selectedheightestQualification: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    city: new FormControl(false)
  });

  showThankYou = false;

  minDate!: Date;
  maxDate!: Date;
  countries: any[] = [];

  heightestQualifications = [
    { name: 'Master Degree', value: 'master' },
    { name: 'Bachelor Degree', value: 'bachelor' },
    { name: '12th Grade', value: '12grade' },
    { name: '10th Grade', value: '10grade' },
    { name: 'Other', value: 'other' }
  ];

  genders = [
    { key: 'male', name: 'Male' },
    { key: 'female', name: 'Female' },
    { key: 'other', name: 'Other' }
  ];

  ngOnInit(): void {
    
    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' }
            ]
          },
          {
            name: 'Victoria',
            cities: [
              { cname: 'Melbourne', code: 'A-ME' },
              { cname: 'Geelong', code: 'A-GE' }
            ]
          }
        ]
      },
      {
        name: 'USA',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' }
            ]
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Houston', code: 'US-HO' },
              { cname: 'Dallas', code: 'US-DA' }
            ]
          }
        ]
      }
    ];

    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  }

  
  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted:', this.formGroup.value);
      this.showThankYou = true;
    } else {
      this.formGroup.markAllAsTouched();
    }
  }


  closeThankYou() {
    this.showThankYou = false;
  }
}
