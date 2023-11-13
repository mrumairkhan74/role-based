import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';


  GetAll(){
    return this.http.get(this.apiurl);
  }
  GetAllRole(){
    return this.http.get('http://localhost:3000/role');
  }
  GetDonationRole(){
    return this.http.get('http://localhost:3000/donationrole');
  }

  // All Donation api
  ProceedDonation(inputdata:any){
    return this.http.post('http://localhost:3000/donation', inputdata);
  }
  GetAllDonation(){
    return this.http.get('http://localhost:3000/donation');
  }
  UpdateDonation(inputdata:any, code:any){
    return this.http.put('http://localhost:3000/donation'+'/'+code, inputdata);
  }
  Getbydonation(code:any){
    return this.http.get('http://localhost:3000/donation'+'/'+code);
  }
// All Registration api

  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }
  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl, inputdata);
  }
  Updateuser(inputdata:any, code:any){
    return this.http.put(this.apiurl+'/'+code, inputdata);
  }
  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null? sessionStorage.getItem('userrole')?.toString():'';
  }
  GetDonationrole(){
    return sessionStorage.getItem('donationrole')!=null? sessionStorage.getItem('donationrole')?.toString():'';
  }

}
