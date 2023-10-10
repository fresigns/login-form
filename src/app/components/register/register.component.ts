// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { CustomValidators } from 'src/app/validators/custom-validators';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule
//   ],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {

//   // name = new FormControl('');

//   // profileForm = new FormGroup({
//   //   firstName: new FormControl(''),
//   //   lastName: new FormControl(''),
//   //   address: new FormGroup({
//   //     street: new FormControl(''),
//   //     city: new FormControl(''),
//   //     state: new FormControl(''),
//   //     zip: new FormControl('')
//   //   })
//   // });

//   /*variante form builder:
//   cambia la sintassi! */
//     profileForm = this.fb.group({
//       firstName: ['', [Validators.required, Validators.minLength(3)]],
//                                                                   /*custom Validator*/
//       lastName: ['', [Validators.required, Validators.minLength(3), CustomValidators.checkFirstAndLastNameUppercase()]],
//       address: this.fb.group({
//         street: [''],
//         city: [''],
//         state: ['', CustomValidators.checkAliasAddressUSA()],
//         zip: ['']
//       }),
//         aliases: this.fb.array([
//         this.fb.control('')
//       ])
//     });

//   constructor(private fb:FormBuilder){ }

//   updateName() {
//     this.profileForm.get('firstName')?.setValue('Nancy');
//   }

//   onSubmit(){
//     console.warn(this.profileForm.value);
//   }

//   updateProfile() {
//     console.log('updateProfile:');
//     this.profileForm.patchValue({
//       firstName: 'Nancy',
//       address: {
//         street: '123 Drew Street',
//         city: 'Genova'
//       }
//     });
//   }

//   // get aliases() { /*recupera l'array*/
//   //   return this.profileForm.get('aliases') as FormArray;
//   // }
//   // addAlias() {
//   //   this.aliases.push(this.fb.control(''));
//   // }


//   getAliases() {
//   return this.profileForm.get('aliases') as FormArray;
// }

//   addAlias() {
//     this.getAliases().push(this.fb.control(''));
//   }

// }


/* VERSIONE 2 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';
// import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

    registerForm = this.fb.group({
    userName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, CustomValidators.isPasswordValid()]],
    country: [''],
    yob: [new Date().getFullYear(),[Validators.required, CustomValidators.checkNotMinor()]],
    phoneNumber: [''],
    gender:[''],
  })

  constructor(private fb:FormBuilder){}

  onSubmit(){
    console.log(this.registerForm.valid);
    console.log('register form', this.registerForm.value);
  }
}

/*creare servizio: local storage service*/
