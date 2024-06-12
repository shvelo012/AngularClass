import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      age: ['']
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value || '';
    const confirmPassword = form.get('confirmPassword')?.value || '';
    return password === confirmPassword ? null : { mismatch: true };
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      const { fullName, email, password, age } = this.registrationForm.value;
      let message = `
      Full Name: ${fullName}
      Email: ${email}
      Password: ${password}
    `;
      if (age) {
        message += `\nAge: ${age}`;
      }
      alert(message);
    }
  }
}