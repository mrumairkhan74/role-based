
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DonationliComponent } from '../donationli/donationli.component';


@Component({
  selector: 'app-donationpop',
  templateUrl: './donationpop.component.html',
  styleUrls: ['./donationpop.component.css']
})
export class DonationpopComponent implements OnInit {
  constructor(
    private builder: FormBuilder,private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data:any, private toastr:ToastrService, private dialog:MatDialogRef<DonationliComponent>) {

  }
  
  
  Donationrolelist: any;
  editdata: any;


  ngOnInit(): void {
    this.service.GetDonationRole().subscribe(res => {
      this.Donationrolelist = res;
    })
    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.Getbydonation(this.data.usercode).subscribe(res => {
        this.editdata = res;
        this.donationform.setValue({ id: this.editdata.id, name: this.editdata.name, email: this.editdata.email, cardno: this.editdata.cardno, cvv: this.editdata.cvv, amount: this.editdata.amount,role: this.editdata.role, })
      })
    }
  }

  donationform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    email: this.builder.control(''),
    cardno: this.builder.control(''),
    cvv: this.builder.control(''),
    role: this.builder.control('', Validators.required),
    amount: this.builder.control(''),
    
  });

  updateuser(){
    if(this.donationform.valid){
      this.service.UpdateDonation(this.donationform.value, this.donationform.value.id).subscribe(res=>{
        this.toastr.success('Updated Successfully!');
        this.dialog.close();
      });
    }else{
      this.toastr.warning('Please Select Role')
    }
  }
}
