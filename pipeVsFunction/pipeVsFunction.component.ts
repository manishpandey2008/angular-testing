import { Component } from "@angular/core";
import { template } from "lodash";



@Component({
    selector:'app-pipe-vs-function',
    template:`
        {{'' | getName}}
    `
})
export class PipeVsFunctionComponent{


    getValue(){
        console.log("=================");
        return "Manish Pandey";
    }


}