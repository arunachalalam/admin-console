import React, { Component } from 'react'; 
// import {Link} from 'react-router-dom'; 
import './Dashboard.css'; 
import Sidemenu from './Sidemenu';
class Dashboard extends Component { 
    render() { 
        return (
    
<div>
<Sidemenu/>
	<div class="content-page">
		<div class="content">
			<div class="topbar">
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
						<li class="hide-phone list-inline-item app-search">
							<h3 class="page-title">Dashboard</h3>
						</li>
					</ul>
					<div class="clearfix"></div>
				</nav>
				<div class="page-content-wrapper">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-6 col-xl-3">
								<div class="card text-center m-b-30">
									<div class="mb-2 card-body text-muted">
										<h3 class="text-danger">
											<a href="">
                                                            0  </a>
										</h3> View1
                                        
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-3">
								<div class="card text-center m-b-30">
									<div class="mb-2 card-body text-muted">
										<h3 class="text-danger">
											<a href="">
                                                            0  </a>
										</h3> View1
                                        
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-3">
								<div class="card text-center m-b-30">
									<div class="mb-2 card-body text-muted">
										<h3 class="text-danger">
											<a href="">
                                                            0  </a>
										</h3> View1
                                        
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
    ); } } export default Dashboard;