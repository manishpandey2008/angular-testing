import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companyDetais={
    name:"Taomish India",
    phone:"9898765434",
    email:"taomish@gmail.com",
    address:{
      ditails:"317 6th main road",
      dist:"Bengaluru",
      state:"Karnatka",
      pin:"876545"
    }
  }

  newCompanyDetais={
    name:"Google India",
    phone:"6788987676",
    email:"google@gmail.com",
    address:{
      ditails:"656-White field",
      dist:"Bengaluru",
      state:"Karnatka",
      pin:"876545"
    }
  }
  constructor() { }
}
