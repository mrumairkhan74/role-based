import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ){

  }
  donationform= this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('', Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required, Validators.email])),
    cardno:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(16)])),    
    cvv:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(3)])),    
    amount:this.builder.control('',Validators.required)    
  });
proceeddonation(){
  if(this.donationform.valid){
    this.service.ProceedDonation(this.donationform.value).subscribe(res=>{
      this.toastr.success('Donate Done!'),
      this.router.navigate(['']);
    })
  }else{
    this.toastr.warning('Please Enter Valid Data')
  }
}
}
