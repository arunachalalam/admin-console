import React, { Component } from 'react';
import './Sidemenu.css';
import {Image, Nav} from 'react-bootstrap';

class Sidemenu extends Component {
    render() {
        return (
    <div>
	<div class="left side-menu">
		<div class="">
			<a href="dashboard">
				<Image src="assets/logo.jpg"  id="img" />
			</a>
		</div>
		<div class="sidebar-inner slimscrollleft">
			<div id="sidebar-menu">
				<Nav defaultActiveKey="/home" className="flex-column">
					<Nav.Link href="/dashboard" className="mainclr">Dashboard</Nav.Link>
					<Nav.Link href="/kitchen" className="sideclr" eventKey="kitchen">
						<i class='fas fa-hamburger iconleft'></i>Kitchen
					</Nav.Link>
					<Nav.Link href="/Customers" eventKey="/Customers" className="sideclr">
						<i class="fa fa-group iconleft"></i>Customers
					</Nav.Link>
					<Nav.Link href="/Orders" eventKey="/Orders" className="sideclr">
						<i class='far fa-window-maximize iconleft'></i>Orders
					</Nav.Link>
					<Nav.Link href="/Innermenu" eventKey="/Innermenu" className="sideclr">
						<i class="fa fa-list-alt iconleft"></i>Menu
					</Nav.Link>
					<Nav.Link href="/" eventKey="/kitchen" className="sideclr">
						<i class="fa fa-cog iconleft"></i>Settings
					</Nav.Link>
					<Nav.Link href="/" eventKey="/kitchen" className="sideclr">
						<i class="fa fa-commenting iconleft"></i>Notifications
					</Nav.Link>
					<Nav.Link href="/" eventKey="/kitchen" className="sideclr">
						<i class="fa fa-exclamation-circle iconleft"></i>Reports
					</Nav.Link>
				</Nav>
				{/* 
				<ul>
					<li>
						<a href="dashboard" class="">
							<span class="menu-title"> Dashboard </span>
						</a>
					</li>
					<li>
						<a href="kitchen" class="">
							<i class='fas fa-hamburger'></i>
							<span className="sideclr"> Kitchens </span>
						</a>
					</li>
					<li>
						<a href="Customers" class="">
							<i class="fa fa-group"></i>
							<span class="sideclr"> Customers </span>
						</a>
					</li>
					<li>
						<a href="Orders" class="">
							<i class='far fa-window-maximize'></i>
							<span class="sideclr"> Orders </span>
						</a>
					</li>
					<li>
						<a href="Innermenu" class="">
							<i class="fa fa-list-alt"></i>
							<span class="sideclr"> Menu </span>
						</a>
					</li>
					<li>
						<a href="" class="">
							<i class="fa fa-cog"></i>
							<span class="sideclr"> Settings </span>
						</a>
					</li>
					<li>
						<a href="" class="">
							<i class="fa fa-commenting"></i>
							<span class="sideclr">Notifications </span>
						</a>
					</li>
					<li>
						<a href="" class="">
							<i class="fa fa-exclamation-circle"></i>
							<span class="sideclr"> Reports </span>
						</a>
					</li>
				</ul> */}
			
			</div>
		</div>
	</div>
</div>
        );
    }
}

export default Sidemenu;