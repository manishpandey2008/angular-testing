import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, input, signal } from '@angular/core';
import {uniq} from 'lodash'

export class SearchCriteria {
  fieldName!: string;
  operation!: string;
  value!: any;
  secondValue?: string;

  constructor(fieldName: string, value: any, operation?: any,secondValue?:any) {
    this.fieldName = fieldName;
    this.operation = operation ? operation : 'in';
    this.value = value;
    this.secondValue = secondValue;
  }
}

@Component({
  selector: 'app-column-search',
  templateUrl: './column-search.component.html',
  styleUrl: './column-search.component.css'
})
export class ColumnSearchComponent {

  // https://github.com/DavidBuck/angular-graphql-httpclient-example/blob/master/src/app/graphql-server.service.ts
  // https://stackoverflow.com/questions/59617266/can-i-use-graphql-in-react-without-using-apollo#:~:text=We%20can%20use%20GraphQL%20with,'%20%7D%2C%20body%3A%20JSON.
  
  
  searchText="";
  originalData=signal<string[]>(["131816","131815","131814","131813","131812","131811","131810","131809","131845","131841","131830","131823"]);;
  filterList=signal<string[]>(this.originalData());

  constructor(private http:HttpClient){}

  search(){

  }

  searchObjCreater():SearchCriteria[]{
    let searchCriteriaList:SearchCriteria[]=[
      {
        fieldName:"tenantId",
        operation:"equals",
        value:"d7408d31-d720-4173-b76e-0595ce2679b4"
      }
    ]
    searchCriteriaList.push({
      fieldName:"tradeId",
      operation:"contains",
      value:this.searchText
    })

    return searchCriteriaList;

  //   query{
  //     getTradeByCriteria(searchBuilder:[
  //         {
  //             fieldName:"tenantId"
  //             operation:"equals"
  //             value:"d7408d31-d720-4173-b76e-0595ce2679b4"
  //         },
  //         {
  //             fieldName:"tradeId"
  //             operation:"contains"
  //             value:"56"
  //         }
  //     ]){
  //         tradeId
  //     }
  // } 
  }

  secondApi(){
    if(this.searchText.length>3 && this.filterList().length<10){
      this.http.post(`http://localhost:8082/api-ctrm/trade/get-trade-by-criteria?fieldName=tradeId`,this.searchObjCreater(),
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        }
      }
    ).subscribe((resp:any)=>{
        this.filterList.set(uniq<any>([...this.filterList(),...resp]));
        this.originalData.set(this.filterList())
      })
    }else{
       this.filterList.set(this.originalData().filter(e=>e.includes(this.searchText)))
    }
  }



  apiCall(){

    console.log(this.searchObjCreater());

    this.terGetApiCall();
    return
    

  //   let finalPayload=`query{
  //     getTradeByCriteria(searchBuilder:${JSON.stringify(this.searchObjCreater())}){
  //         tradeId
  //     }
  // }`;

    let finalPayload='{"query":"query{\r\n    getTradeByCriteria(searchBuilder:[\r\n        {\r\n            fieldName:\"tenantId\"\r\n            operation:\"equals\"\r\n            value:\"d7408d31-d720-4173-b76e-0595ce2679b4\"\r\n        },\r\n        {\r\n            fieldName:\"tradeId\"\r\n            operation:\"contains\"\r\n            value:\"56\"\r\n        }\r\n    ]){\r\n        tradeId\r\n    }\r\n}"}'
     
    this.http.post("http://localhost:8082/api-ctrm/graphql",JSON.stringify(finalPayload),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    
    ).subscribe(resp=>{
        console.log("------------",resp);
      })

  }
  terGetApiCall(){
    let finalPayload=`query {
      getTradeById(id:$id){
      tradeId
      tradeDateTime
      tradeTransactionType
      isInternalTrade
      company
      counterparty
      }
  }`;

  fetch('http://localhost:8082/api-ctrm/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: '{"query":"query{\r\n    getTradeById(id:\"S//23/005656\"){\r\n    tradeId\r\n    tradeDateTime\r\n    tradeTransactionType\r\n    isInternalTrade\r\n    company\r\n    counterparty\r\n    }\r\n}","variables":{}}'
  }).then(resp=>{
    console.log("----------------",resp);
  })



  // this.http.post("http://localhost:8082/api-ctrm/graphql",,
  //     {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //       })
  //     }
    
  //   ).subscribe(resp=>{
  //       console.log("------------",resp);
  //     })


  }
}
