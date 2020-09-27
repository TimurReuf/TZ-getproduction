import React from "react";
import {Redirect} from "react-router-dom";


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if(!localStorage.getItem("user")) return <Redirect to={"/movies"}/>
            return <Component {...this.props}/>
        }
    }


    return RedirectComponent
}
