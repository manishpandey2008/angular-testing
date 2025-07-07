import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, finalize, map, takeUntil, throwError } from 'rxjs';
import { StateMangeService } from './state-mange.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cancelRequest$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient,
              private stateMangeService:StateMangeService
              ) {
  }

  post(path: string, entity: any,errorHandling?:Function): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${path}`, entity)
            .pipe(takeUntil(this.cancelRequest$))
            .pipe(catchError(error=>this.catchErrorHandler(error,errorHandling)))
            .pipe(finalize(()=>{console.log("---------------is final");
            }));
  }

  patch(path: string, entity: any): Observable<any> {
    return this.http.patch<HttpResponse<any>>(`${path}`, entity).pipe(catchError(error=>this.catchErrorHandler(error)));
  }

  postEvents(path: string, entity: any): Observable<any> {
    return this.http.post(`${path}`, entity, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });
  }

  get(path: string,key:any): Observable<any[]> {
    
    return this.http.get<any[]>(`${path}`)
            .pipe(catchError(error=>this.catchErrorHandler(error)))
            .pipe(map((d)=>{return d}))
            .pipe(finalize(()=>{}));
  }

  delete(path:string): Observable<any[]>{
    return this.http.delete<any[]>(`${path}`).pipe(catchError(error=>this.catchErrorHandler(error)));
  }

  getById(path: string, id: string): Observable<any> {
    return this.http.get<any>(`${path}/${id}`).pipe(catchError(error=>this.catchErrorHandler(error)));
  }

  createUpload(path: string, entity: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${path}`, entity).pipe(catchError(error=>this.catchErrorHandler(error)));
  }

  get httpClient() {
    return this.http;
  }

  cancelApiCall() {
    this.cancelRequest$.next();
  }



  postWithStatus(path: string, entity: any,errorHandling?:Function,isCustomError?:boolean): Observable<RequestState> {
    const  resp$= this.http.post<HttpResponse<any>>(`${path}`, entity).pipe(takeUntil(this.cancelRequest$));
    return trackRequestState(resp$);
  }
  
  getWithStatus(path: string,errorHandling?:Function,isCustomError?:boolean): Observable<RequestState> {
    const  resp$= this.http.get<any[]>(`${path}`);
    return trackRequestState(resp$);
  }




  catchErrorHandler(error: any,errorHandling?:Function): Observable<any> {
    // if (error.error) {
    //   let msg = ""
    //   if (typeof error.error.status == 'string') {
    //     msg = error.error.status;
    //   } else {
    //     const apiErrorMessageObject: any = ApiErrorMessageList.get(error.error.errorCode);
    //     msg = apiErrorMessageObject?.message;
    //   }
    //   if (msg.length > 0) ToastService.addErrorMessage('ERROR', msg);
    // }
    // if(errorHandling) errorHandling(error);
    return throwError(error)
  }
}


export interface RequestState{
  isPending: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  data?: any;
  error?: any;
}


export function trackRequestState(obs$: Observable<any>): Observable<RequestState> {
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