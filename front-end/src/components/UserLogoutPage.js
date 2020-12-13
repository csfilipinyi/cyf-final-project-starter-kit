import React from 'react';
import { Link } from "react-router-dom";

const UserLogoutPage = () => {

    return (
      <div>
        <h2> Welcome to the class! </h2>
        <p>
          {" "}
          We hope you enjoy coding with us and learn loads in this session{" "}
        </p>
        <Link to= {'/'} className= "page-link"> Logout </Link>
      </div>
     
        
   
   
    );
}


export default UserLogoutPage;