import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './pro.css'
import { useNavigate } from "react-router-dom";
import Pass from "./Password";
import { Link } from "react-router-dom";
import Dash from "./Dashboard";
var Header=()=>{
    let n=useNavigate();
    let Pas=()=>{
        n('/Pass')
    }
    let Pat=()=>{
        n('/path')
    }
    let Dashb=()=>{
        let input1=document.getElementById("input1").value
        let input2=document.getElementById("input2").value
        let  int2=document.getElementById("input2")
        //localStorage.setItem(int2,"input2")
        if(input1!=="" && input2!==""){
        n('/Dash')
        }else{
            let para=document.getElementById("para")
            para.textContent="Please fill the details"
            para.classList.add("para")

        }
    }
    return(
        <div class="main_page d-flex flex-column justify-content-center">
           
            <center>
            <div class="container">
            <div class="sub_page ">
               <u class="under"><h1 class="heading">Login Page</h1></u><br/>
               <form>
                <h6>Email:</h6>
              <input id="input1" class="input1" type="Email" placeholder="Enter your Email" required/><br/>
              <h6>Password:</h6>
              <input id="input2" class="input2" type="password" placeholder="Enter your Password" required/>
              </form>
               <u><p onClick={Pas}>  forgot Password </p></u>
                <button onClick={Dashb} class="btn btn-success button1">Login</button>
                <h6>or</h6>
                <button onClick={Pat} class="btn btn-primary button2">Sign Up</button><br/>
                <p id="para" className="Para"></p>

               
               </div>
              

            </div>
            </center> 

            
        </div>
    )
}
export default Header;