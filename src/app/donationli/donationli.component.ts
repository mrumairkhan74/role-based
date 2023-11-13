import { Component, DoCheck, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { DonationpopComponent } from '../donationpop/donationpop.component';

@Component({
  selector: 'app-donationli',
  templateUrl: './donationli.component.html',
  styleUrls: ['./donationli.component.css']
})
export class DonationliComponent implements DoCheck {
  constructor(
    private service:AuthService,
    private dialog:MatDialog
    ){
      this.Loaduser();
    }

    userlist:any;
    DonationSource:any;
    @ViewChild(MatPaginator) paginator !: MatPaginator;
    @ViewChild(MatSort) sort !: MatSort;

    Loaduser(){
      this.service.GetAllDonation().subscribe(res=>{
        this.userlist = res;
        this.DonationSource = new MatTableDataSource(this.userlist);
        this.DonationSource.paginator = this.paginator;
        this.DonationSource.sort = this.sort;
      })
    }

    displayedColumns: string[] = ['username', 'name', 'email','cardno', 'cvv','amount','role','action'];

    UpdateDonation(code:any){
    const popup =  this.dialog.open(DonationpopComponent,{
        enterAnimationDuration:'1000ms',
        exitAnimationDuration: '500ms',
        width:'50%',
        data:{
          usercode:code
        }
      });
      popup.afterClosed().subscribe(res=>{
        this.Loaduser();
      });
    }
    
    opendialog(){
      
    }
    isadminuser=false;
    isuser=false;
    ngDoCheck(): void {
      if(this.service.GetUserrole()==='admin'){
        this.isadminuser=true;
        this.isuser=false;
      }else{
        this.isadminuser=false;
        this.isuser=true;
      }
    }
}
