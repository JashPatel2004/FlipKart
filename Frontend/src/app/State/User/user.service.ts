import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { response } from "express";
import { getUserProfileFailure, getUserProfileSuccess } from "./user.action";
// import { logoutSuccess, userFailure, userSuccess } from "./user.action";


@Injectable({
    providedIn : 'root'
})

export class UserService{

    private apiUrl = BASE_API_URL+'/api/users';
    headers:any;
    

    constructor(private store:Store,private http:HttpClient){
        
    }

    getUserProfile(){
        this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
        return this.http.get(`${this.apiUrl}/profile`,{headers:this.headers})
        .pipe(
            map((userProfile:any)=>{
                return getUserProfileSuccess({userProfile:userProfile})
            }),
            catchError((error)=>{
                console.log("error",error)
                return of(
                    getUserProfileFailure(
                        error.response?.data?.message
                         ? error.response.data.message 
                         : error.message
                    )
                )
            })
        ).subscribe((action)=>{
            this.store.dispatch(action)
        })
    }
}