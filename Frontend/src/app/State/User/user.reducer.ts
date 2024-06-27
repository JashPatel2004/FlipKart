import { createReducer, on } from "@ngrx/store";
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess, logoutSuccess } from "./user.action";
import { UserState } from "../../models/AppState";

const initialState:UserState={
    userProfile:[],
    loading:false,
    error:'',
    addresses:[]
}

export const userReducer=createReducer(
    initialState,
    on(getUserProfile, (state) => ({...state,loading:true,error:''})),
    on(getUserProfileSuccess, (state,action) => ({...state,loading:false,error:'',userProfile:action.userProfile,addresses:action.userProfile.address})),
    on(getUserProfileFailure, (state,{error}) => ({...state,loading:true,error:error})),

    on(logoutSuccess,()=>initialState)
)