import React, { Component } from 'react'; 
// import {Link} from 'react-router-dom'; 
import './Home.css'; 
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };

      componentDidMount() {
        fetch('https://api.mydomain.com')
          .then(response => response.json())
          .then(data => this.setState({ data }));
          alert();
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
            fields["username"] = "";
           fields["password"] = "";
            this.setState({fields:fields});
            alert("Login Successfully");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your first name.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
       if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
       
 this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  
   render() { 
     return (
  
<div>
	<div class="bgs" style={{ backgroundImage: "url(" + "../assets/bg.png" + ")", backgroundSize: 'cover', }}>
		<div class=" text-center">
			<p class="bheading1">
                Priya's Kitchen
              </p>
		</div>
		<div class="wrapper-page1">
			<div class="card">
				<div class="card-body">
					<h3 class="text-center m-0">
						<a href="" class="logo logo-admin">
							<img src="assets/logo.jpg" alt="logo"/>
						</a>
					</h3>
					<div class="p-3">
						<h4 class="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
						<p class="text-muted text-center">Sign in to continue to Admin Panel.</p>
						<form method="post"  name="username" onSubmit= {this.submituserRegistrationForm} >
							<label>User Name</label>
							<input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} class="form-control" placeholder="Enter user name " />
							<div className="errorMsg">{this.state.errors.username}</div>
							<label>Password</label>
							<input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} class="form-control" placeholder="Enter password" />
							<div className="errorMsg">{this.state.errors.password}</div>
							<input type="submit" className="button"  value="Login"/>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="m-t-40 text-center">
			<p class="bheading">
  
                  © 2020 - Developed and Maintained by LaakBot 
              </p>
		</div>
	</div>
</div>
  ) } }
  