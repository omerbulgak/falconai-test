import  React , { useContext } from "react";
import UserDetails from "./userDetails";
import Loading from "./loading";
import { AppContext } from "../App";

export default function UserContainer(data){
    const { state } = useContext(AppContext);
    const markup = state ? <UserDetails data={state}/> : <Loading />
    return markup;
}

