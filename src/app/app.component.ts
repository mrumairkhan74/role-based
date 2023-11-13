import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'role-based';
  ismenurequired=false
  isbuttonrequired = false;
  isadminuser=false;
  isuser=false
  constructor(
    private router: Router,
    private service:AuthService
  ){}

  ngDoCheck(){
    let currenturl = this.router.url;
    if(currenturl == '/login' || currenturl=='/register'){
      this.ismenurequired=false;
      if(currenturl =='/login'){
        this.isbuttonrequired = true;
      }else{
        this.isbuttonrequired=false;
    }
    }else{
      this.isbuttonrequired = false;
      this.ismenurequired=true;
    }
    if(this.service.GetUserrole()==='admin'){
      this.isadminuser=true;
      this.isuser=false;
    }else{
      this.isadminuser=false;
      this.isuser=true;
    }
  }
  
}
