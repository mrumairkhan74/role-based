import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private service: AuthService,
    private toastr: ToastrService,
    private builder: FormBuilder,
    private router: Router,
  ){}
    userdata:any;

  loginform= this.builder.group({
    username: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.required),
  })
  proceedlogin(){
    if(this.loginform.valid){
      this.service.Getbycode(this.loginform.value.username).subscribe(res=>{
        this.userdata=res;
        if(this.userdata.password===this.loginform.value.password){
          if(this.userdata.isactive){
            sessionStorage.setItem('username', this.userdata.id);
            sessionStorage.setItem('userrole', this.userdata.role);
            this.router.navigate([''])
          }
          else{
            this.toastr.error('Please Contact Admin', 'Is Active User')
          }
        }else{
          this.toastr.error('Invalid Credentials')
        }
      })
    }
  }
}
