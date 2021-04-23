import React from 'react'
import PropTypes from "prop-types";
import '../css/profile.css'
const Compent = (props) => {
    
    return ( 
        <>
         <h1>{props.fullName}</h1> 
        <h1>{props.bio} </h1> 
        <h1>{props.profession}</h1>
        <div id="button">
        <button onClick={()=>props.handelName(props.fullName)}>clickme</button>
        </div>
        {props.children}
        </>

    )
} ; 
Compent.defaultProps = {
    fullName: "Hamza par default" ,
  };
  Compent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  };
export default Compent
