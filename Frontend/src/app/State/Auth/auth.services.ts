import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/api";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from "./auth.actions";

@Injectable({
    providedIn:'root',
})

export class AuthService{

    private apiUrl=BASE_API_URL+"/auth";

    constructor(private store:Store){}

    login(loginData:any,http:HttpClient){
        return http.post(`${this.apiUrl}/signin`,loginData).pipe(
            map((user:any)=>{
                console.log('login user', user)
                if(user.jwt){
                    if(typeof localStorage !== 'undefined'){
                        localStorage.setItem("jwt",user.jwt);
                    }
                }
                return loginSuccess({user});
            }),
            catchError((error)=>{
                return of(
                    loginFailure(
                        error.response && error.response.data.message ? error.response.data.message : error.message
                    )
                )
            })
        ).subscribe((action)=>this.store.dispatch(action))
    }

    register(user:any,http:HttpClient){
        return http.post(`${this.apiUrl}/signup`,user).pipe(
            map((user:any)=>{
                console.log('Register user', user)
                if(user.jwt){
                    if(typeof localStorage != 'undefined'){
                        localStorage.setItem("jwt",user.jwt);
                    }
                    
                }
                return registerSuccess({user});
            }),
            catchError((error)=>{
                return of(
                    registerFailure(
                        error.response && error.response.data.message ? error.response.data.message : error.message
                    )
                )
            })
        ).subscribe((action)=>this.store.dispatch(action))
    }
}