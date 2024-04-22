import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, input, signal } from '@angular/core';
import { uniq } from 'lodash'

export class SearchCriteria {
  fieldName!: string;
  operation!: string;
  value!: any;
  secondValue?: string;

  constructor(fieldName: string, value: any, operation?: any, secondValue?: any) {
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

  searchText = "";
  originalData = signal<string[]>(["131816", "131815", "131814", "131813", "131812", "131811", "131810", "131809", "131845", "131841", "131830", "131823"]);;
  filterList = signal<string[]>(this.originalData());

  constructor(private http: HttpClient) { }

  searchObjCreater(): SearchCriteria[] {
    let searchCriteriaList: SearchCriteria[] = [
      {
        fieldName: "tenantId",
        operation: "equals",
        value: "d7408d31-d720-4173-b76e-0595ce2679b4"
      }
    ]
    searchCriteriaList.push({
      fieldName: "tradeId",
      operation: "contains",
      value: "1810"
    })
    return searchCriteriaList;
  }
  searchObjCreaterInText(): string {
    let searchCriteriaList: string = `[
      {
        fieldName:"tenantId",
        operation:"equals",
        value:"d7408d31-d720-4173-b76e-0595ce2679b4"
      },{`
    searchCriteriaList += `
      fieldName:"${'tradeId'}",
      operation:"contains",
      value:"${'23'}"
    }]`;
    return searchCriteriaList;
  }
  secondApi() {
    if (this.searchText.length > 3 && this.filterList().length < 10) {
      this.http.post(`http://localhost:8082/api-ctrm/trade/get-trade-by-criteria?fieldName=tradeId`, this.searchObjCreater(),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      ).subscribe((resp: any) => {
        this.filterList.set(uniq<any>([...this.filterList(), ...resp]));
        this.originalData.set(this.filterList())
      })
    } else {
      this.filterList.set(this.originalData().filter(e => e.includes(this.searchText)))
    }
  }
  apiCall() {
    let finalPayload = `query{
      getTradeByCriteria(searchBuilder:${this.searchObjCreaterInText()}){
          tradeId
      }
    }`;
    this.http.post("http://localhost:8082/api-ctrm/graphql", { query: finalPayload },
      {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
      }
    ).subscribe(resp => {
      console.log("------------", resp);
    })
  }
  terGetApiCall() {
    let finalPayload = `query{
      getTradeById(id:"S//23/005656"){
      tradeId
      tradeDateTime
      tradeTransactionType
      isInternalTrade
      company
      counterparty
      }
  }`;


    this.http.post(`http://localhost:8082/api-ctrm/graphql`,

      JSON.stringify({ query: finalPayload })
      ,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        }
      }).subscribe(resp => {

      })

  }
}
