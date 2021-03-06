import React, { Component } from "react";
 import {Link} from 'react-router-dom';
//import { browserHistory } from 'react-router';
import "./Signup.css";
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      
    };
   
   

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["fname"] = "";
      fields["lname"] = "";
      fields["emailid"] = "";
      fields["password"] = "";
      fields["cpassword"] = "";
      this.setState({ fields: fields });
      alert("Register Successfully");
     window.location.href="/";

    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "*Please enter your first name.";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fname"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "*Please enter your last name.";
    }

    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    // if (typeof fields["password"] !== "undefined") {
    //   if (
    //     !fields["password"].match(
    //       /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    //     )
    //   ) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }
    if (!fields["cpassword"]) {
      formIsValid = false;
      errors["cpassword"] = "*Please enter your confirm password.";
    }

    // if (typeof fields["cpassword"] !== "undefined") {
    //   if (
    //     !fields["cpassword"].match(
    //       /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    //     )
    //   ) {
    //     formIsValid = false;
    //     errors["cpassword"] = "*Please enter your correct password.";
    //   }
    // }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  signUp() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    

    fetch("http://localhost/LaakBot/AdminSignUpController.php", {
      method: "POST",

      body: JSON.stringify({
        fname: fname,
        lname:lname,
        email:email,
        password:password,
        cpassword:cpassword
        
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson == 1) 
        alert("Register Successfully");
      })
      .catch(error => {
        console.error(error);
      
      });

    // $(this).parents("tr").find(".customeradd, .customeredit").toggle();
  }

  render() {
    return (
      <div>
        <div
          
          style={{
            backgroundImage: "url(../assets/bg.png)",
            backgroundSize: "cover"
          }}
        >
          <div class=" text-center">
            <p class="heading">Sign Up</p>
          </div>
          <div class="wrapper-page">
            <div class="card">
              <div class="">
                <h3 class="text-center m-0">
                <a href="" class="logo logo-admin">
                    <img src="assets/logo.jpg" alt="logo" />
                  </a>
                
                </h3>
                <div class="">
                  <h4 class="text-muted font-18 m-b-5 text-center">
                    Welcome Back !
                  </h4>
                  <p class="text-muted text-center">
                    Create your Account. Fill Your Details
                  </p>
                  <form
                    method="post"
                    name="fname" 
                    onSubmit={this.submituserRegistrationForm}
                  >
                    <label>First Name</label>
                    <input
                      type="text"
                      name="fname"  id="fname"
                      value={this.state.fields.fname}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter first name "
                    />
                    <div className="errorMsg">{this.state.errors.fname}</div>
                    <label>last Name</label>
                    <input
                      type="text"
                      name="lname"  id="lname"
                      value={this.state.fields.lname}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter last name "
                    />
                    <div className="errorMsg">{this.state.errors.lname}</div>
                    <label>Email ID </label>
                    <input
                      type="text"
                      name="emailid"  id="email"
                      value={this.state.fields.emailid}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter email"
                    />
                    <div className="errorMsg">{this.state.errors.emailid}</div>
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"  id="password"
                      value={this.state.fields.password}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter password"
                    />
                    <div className="errorMsg">{this.state.errors.password}</div>
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="cpassword"  id="cpassword"
                      value={this.state.fields.cpassword}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter confirm password"
                    />
                    <div className="errorMsg">
                      {this.state.errors.cpassword}
                    </div>
                    <input type="submit" className="button" onClick={this.signUp} value="Register" />
                  </form>
                  <a href="/"> <p class="text-muted text-center signup1">
                    Back to Login
                  </p></a>
                </div>
              </div>
            </div>
          </div>
          <div class="m-t-407 text-center">
            <p class="bheading12">
              © 2020 - Developed and Maintained by LaakBot
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
