import React, { Component } from 'react';
 import Sidemenu from './Sidemenu'; 
 import Modal from 'react-modal';
 import {Image, Nav, Card, Row, Col} from 'react-bootstrap';
 import Button from 'react-bootstrap/Button';
 
 const display = {
	display: 'block'
  };
  const hide = {
	display: 'none'
  };
  var modal = [];
  
 class Innermenu extends Component { 
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
		  toggle: false
		}
	  }
	  
	  toggle(event) {
		this.setState((prevState) => ({
		  toggle: !prevState.toggle
		}));
	  }
	
  
     render() { 
         
         return (
    
    

<div>
	<Sidemenu/>
	<div class="content-page">
		<div class="content">
			<div class="topbar">
				<Card className="card-body1">
					<Row>
						<Col sm={11} className="page-title">Menu Details</Col>
						<Col sm={1} className="pic">
							<a class="nav-link  nav-user" id="logout" 
                  href="/" role="button" aria-haspopup="false" aria-expanded="false">
								<Image src="assets/logout.png"   />
							</a>
						</Col>
					</Row>
				</Card>
				
				<div class="page-content-wrapper">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-12">
								<div class="card m-b-30">
									<div class="card-body">
										<div class="row">
											<div class="col-sm-10">
												<div className="" style={this.state.toggle ? display : hide}>
													<div className="">
													
														<form>
															<div class="form-group row">
																<label class="col-sm-3 col-form-label">Item Name</label>
																<div class="col-sm-9">
																	<input type="text" class="form-control" placeholder="Enter your Item Name" />
																</div>
															</div>
															<div class="form-group row">
																<label class="col-sm-3 col-form-label">Image Location</label>
																<div class="col-sm-9">
																	<input type="file" class="form-control" />
																</div>
															</div>
															<div class="form-group row">
																<label class="col-sm-3 col-form-label">Item Description</label>
																<div class="col-sm-9">
																	<textarea rows="5" cols="5" class="form-control" placeholder="Item description"></textarea>
																</div>
															</div>
															<div class="form-group row">
																<label class="col-sm-3"></label>
																<div class="col-sm-9">
																	<button type="submit" class="btn btn-primary m-b-0">
																		<a href="#" class="js-modal-close">Submit</a>
																	</button>
																</div>
															</div>
														</form>
													</div>
												</div>
												<Button variant="danger"><a className="btn" onClick={this.toggle}>{this.state.toggle ? 'Close' : 'Add Item'}</a></Button>
                                                {modal}</div>
											<div class="col-sm-2 leftalingn">
												<input type="text" id="myInput" onkeyup="myFunction()" placeholder="  Search  Id" />
											</div>
										</div>
										<div class=" overflow-div">
											<div id="o-message"></div>
											<div id="alert_message"></div>
											<table id="menuTable" class="table table-bordered">
												<thead>
													<tr class="header tableclr">
													<th>Profile Pic</th>
														<th>Item ID</th>
														<th>Item Name</th>
														<th>Description</th>
														<th>Created Date</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
													
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
        
                    © 2020 - Developed and Maintained by LaakBot
        
                </div>
	</div>
</div>
		); } } 
		
		export default Innermenu;