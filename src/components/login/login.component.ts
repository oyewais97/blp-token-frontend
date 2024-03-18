import { Component, OnInit } from '@angular/core';
import {FormsModule,FormBuilder,ReactiveFormsModule , FormGroup, Validators } from '@angular/forms';
import {ServiceModule} from '../../services/service.module';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ServiceModule,ReactiveFormsModule,RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private authService:AuthService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // Call the API service to authenticate user
    const { username, password } = this.loginForm.value;
    const response = await this.apiService.login(username,password)
  if(response){
    this.authService.setAuthSession(response.token)
    this.route.navigate([
      '/info'
    ])
  }
    console.log("response",response)
  }
  validate(type:string){
    if(this.loginForm?.controls?.[type].invalid){
      return true
    }
    return false
  }
}
