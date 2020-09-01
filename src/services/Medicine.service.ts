import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
//import { Category } from "../../domain/catalog/Categories.model";

@Injectable({providedIn:'root'})
export class MedicineService{
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}


    GetMedicine() {
        return this.http.get(`${environment.apiUrl}/Medicine`).pipe(
            map((data: any) => {
              console.log(data)
              return data;
            }), catchError( error => {
              return throwError( 'Something went wrong!' );
            })
         )
    }
    GetMedicineById(Id: number) {
        return this.http.get(`${environment.apiUrl}/Medicine/GetmedicineById?medicineid=`+Id).pipe(
            map((data: any) => {
              console.log(data);
              return data;
            }), catchError( error => {
              return throwError( 'Something went wrong!' );
            })
         )
    }
    UpdateMedicne(Id:number,category: any) {
        return this.http.put(`${environment.apiUrl}/Medicine?medicineid=`+Id, category).pipe(
            map((data: any) => {
              console.log(data);
              return data;
            }), catchError( error => {
              return throwError( 'Something went wrong!' );
            })
         )
    }
    AddMedicine(category: any) {
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post(`${environment.apiUrl}/Medicine`, category,{
        headers: headers
      }).pipe(
          map((data: any) => {
            console.log(data);
            return data;
          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          })
       )
    }
}