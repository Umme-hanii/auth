import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Match } from '../validators/match';
import { CompromisedPassword } from '../validators/compromised-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ], [this.compromisedPassword.validate]),
    confirmPwd: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ])
  }, {
    validators: [this.match.validate]
  })

  constructor(
    private match: Match,
    private compromisedPassword: CompromisedPassword
  ) { }

  ngOnInit(): void {
  }

  register() {
    if(this.registerForm.invalid) {
      return
    }

    console.log('Submitted!')
  }
}
