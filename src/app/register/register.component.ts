import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Match } from '../validators/match';
import { CompromisedPassword } from '../validators/compromised-password';
import { AuthService } from '../auth.service';

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
    private compromisedPassword: CompromisedPassword,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async register() {
    if(this.registerForm.invalid) {
      return
    }

    const { email, password } = this.registerForm.value
    try {
      const result = await this.authService.signUp(email, password)
      console.log(result)
    } catch(e) {
      console.log(e)
    }
  }
}
