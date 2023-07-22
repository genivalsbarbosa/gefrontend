import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import Utils from '../../../../core/util/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSignin(){

    
    this.loginService.login(this.login).subscribe({
      next: (data:any) => {
        this.router.navigate(['/main']);
        Utils.setToken(data.token);

      },     // nextHandler
      error: (err) => {console.log(err)},      // errorHandler 
      complete: () => {console.log('Info complete')},         // completeHandler
    }
    );
    

    
  }

}
