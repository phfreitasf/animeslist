import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUserService } from 'src/app/services/login/login-user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: LoginUserService, private router : Router) { }

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[ 
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required]),
    repeatPassword: new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.registerForm.value)
    if(this.registerForm.value.password != this.registerForm.value.password) console.log('erro')
    else {
      this.registerService.register(this.registerForm.value).pipe(first()).subscribe(
        data => {
          this.router.navigate(['/'])
        }
      )
    }
  }
}
