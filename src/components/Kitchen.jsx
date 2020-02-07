import React, { Component } from 'react';
// import {Link} from 'react-router-dom'; 
import './Kitchen.css';
import Sidemenu from './Sidemenu';
import {Image, Card, Row, Col} from 'react-bootstrap';



class Kitchen extends Component {
	constructor(props) {
        super(props);
        this.state = { pager: {} };
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
						<Col sm={11} className="page-title">kitchen Details</Col>
						<Col sm={1} className="pic">
							<a class="nav-link  nav-user" id="logout" 
                  href="/" role="button" aria-haspopup="false" aria-expanded="false">
								<Image src="assets/logout.png"   />
							</a>
						</Col>
					</Row>
				</Card>
				{/* 
				<nav class="navbar-custom">
					<ul class="list-inline float-right mb-0">
						<li class="list-inline-item dropdown notification-list">
							<a class="nav-link  nav-user" id="logout" 
                  href="/" role="button" aria-haspopup="false" aria-expanded="false">
								<img src="assets/logout.png" alt="user" class="rounded-circle" />
							</a>
						</li>
					</ul>
					<ul class="list-inline menu-left mb-0">
						<li class="list-inline-item">
							<button type="button" class="button-menu-mobile open-left waves-effect">
								<i class="fa fa-bars"></i>
							</button>
						</li>
						<li class="hide-phone list-inline-item app-search">
							<h3 class="page-title">Kitchen Details</h3>
						</li>
					</ul>
					<div class="clearfix"></div>
				</nav> */}
				
				<div class="page-content-wrapper">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-12">
								<div class="card m-b-30">
									<div class="card-body">
										<div class="row">
											<div class="col-sm-10"></div>
											<div class="col-sm-2 leftalingn">
												<input type="text" id="myInput" onkeyup="myFunction()" placeholder="  Search Id"/>
											</div>
										</div>
										<div class=" overflow-div">
											<div id="o-message"></div>
											<div id="alert_message"></div>
											<table id="myTable" class="table table-bordered">
												<thead>
													<tr class="header">
														<th>Profile Pic</th>
														<th>ID</th>
														<th>Kitchen Name</th>
														<th>First Name</th>
														<th>Last Name</th>
														<th>Email</th>
														<th>Phone</th>
														<th>Address</th>
														<th>Address 2</th>
														<th>City</th>
														<th>State</th>
														<th>Zip Code</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody></tbody>
											</table>
											{/* 
											<table id="myTable" class="table table-bordered">
												<thead>
													<tr class="header">
														<th>BID</th>
														<th>Profile Pic</th>
														<th>Kitchen Name</th>
														<th>First Name</th>
														<th>Last Name</th>
														<th>Email</th>
														<th>Phone</th>
														<th>Address 1</th>
														<th>Address 2</th>
														<th>City</th>
														<th>State</th>
														<th>ZipCode</th>
														<th>Created Date</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr  class="header">
														<td ></td>
														<td>
															<div class="image-upload">
																<label for="file-input">
																	<img src="https://lh4.googleusercontent.com/proxy/6aRHrlzTXMVt8q-4m63sV3BmvU_bKxH0QDBlQpeujeo6gYVI3rJWoBBNa_OsshR4EoFFYpRXofUkIo20JeVW_MozxDLBPCNqUOwdpfYpsRMRv3f8BtczgszCnEUoKnhPrw"/>
																</label>
																<input id="file-input" type="file"/>
															</div>
														</td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td>
															<a class="add" title="Add" data-toggle="tooltip">
																<i class="material-icons">&#xE03B;</i>
															</a>
															<a class="edit" title="Edit" data-toggle="tooltip">
																<i class="material-icons">&#xE254;</i>
															</a>
														</td>
													</tr>
												</tbody>
											</table> */}
										
										</div>
										<div class="row">
											<div class="col-sm-8">
										
											</div>
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
    ); } } export default Kitchen;