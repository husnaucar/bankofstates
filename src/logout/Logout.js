import React from 'react'
import Button  from "@material-ui/core/Button"
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router"; 
import "./Logout.css";

const Logout = () => {
    const history = useHistory(); // according to role it navigates related pages
    const [{ userInfo }, dispatch] = useStateValue();
    
    const handleClickYes = () =>{
        localStorage.clear("auth");
        dispatch({
            type: "LOGOUT",
            item: null,
          });
          history.push("/")

    };
    const handleClickNo = ()=> {
        history.goBack();
    };
    return (
        <div>
          <fieldset>
              <h1>Are you sure to logout?</h1>
              <Button varient = "contained" color="primary" onClick = {handleClickYes}>Yes</Button> 
              <Button varient = "contained" color="secondary" onClick = {handleClickNo}>No</Button> 
          </fieldset>
        </div>
    )
};

export default Logout;
