import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestState } from "./addLoaderOnDependetField.component";


@Injectable({
    'providedIn': 'root'
})
export class ApiServiceClass{
    constructor(private http:HttpClient){
    }
    postWithState<T>(path: string): Observable<RequestState> {
        const raw$ = this.http.get<T>(`${path}`)
        return trackRequestState(raw$);
    }

    getWithState<T>(path: string): Observable<RequestState> {
        const raw$ = this.http.get<T>(`${path}`)
        return trackRequestState(raw$);
    }

}

export function trackRequestState<T>(obs$: Observable<T>): Observable<RequestState> {
  return new Observable<RequestState>(subscriber => {
    subscriber.next({ isPending: true, isSuccess: false, isFailed: false });
    obs$.subscribe({
      next: (data) => {
        subscriber.next({ isPending: false, isSuccess: true, isFailed: false, data });
        subscriber.complete();
      },
      error: (error) => {
        subscriber.next({ isPending: false, isSuccess: false, isFailed: true, error });
        subscriber.complete();
      }
    });
  });
}
