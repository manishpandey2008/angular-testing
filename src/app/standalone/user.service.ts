import { Injectable } from '@angular/core';

export interface User{
  name:string;
  phone:string;
  email:string[];
  address:Address[];
}

export interface Address{
  village:string;
  post:string;
  dist:string;
  pin:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list:User[]=[
    {
      name:"Manish Pandey",
      phone:"89765654343",
      email:["smpandey@gmail.com"],
      address:[
        {
          village:"Agarsanda",
          post:"Behara",
          dist:"Bhojpur",
          pin:"876765"
        }
      ]
    },
    {
      name:"Balmukund Pandey",
      phone:"5657654543",
      email:["balmukund@gmail.com"],
      address:[
        {
          village:"Purusotanpur",
          post:"Purusotampur",
          dist:"Bhojpur",
          pin:"876765"
        }
      ]
    },
    {
      name:"Suprbha Pandey",
      phone:"7878676756",
      email:["suprbha@gmail.com"],
      address:[
        {
          village:"Bokaro",
          post:"Bokaro",
          dist:"Bokaro",
          pin:"788898"
        }
      ]
    }
  ]

  constructor() { }

}
