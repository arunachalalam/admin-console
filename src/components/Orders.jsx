import React, { Component } from "react";
import Sidemenu from "./Sidemenu";
import "./Orders.css";
import { Image } from "react-bootstrap";

class Orders extends Component {
  render() {
    return (
      <div>
        <Sidemenu />
        <div class="content-page">
          <div class="content">
            <div class="topbarnew">
              <div class="page-content-wrapper">
                <div class="">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class=" ">
                        <div class="card-body">
                          <div class="row topmencs">
                            <div class="col-sm-7">
                              <p className="page-title">Orders Details</p>
                              <div class="col-sm-5 col-form-label"  id="omsgLabel"></div>
                            </div>
                            <div class="col-sm-4 leftalingn">
                              <input
                                type="text"
                                id="myInput"
                                onkeyup="myFunction()"
                                placeholder="  Search Id"
                              />
                            </div>
                            <div class="col-sm-1 leftalingn">
                              <a
                                class="nav-link  nav-user"
                                id="logout"
                                href="/"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <Image src="assets/logout.png" />
                              </a>
                            </div>
                          </div>
                          <div class=" overflow-div">
                            <div id="o-message"></div>
                            <div id="alert_message"></div>
                            <table
                              id="ordersTable"
                              class="table table-bordered table-responsive"
                            >
                              <thead>
                                <tr class="header tableclr">
                                  <th>Order Id</th>
                                  <th>Kitchen Name</th>
                                  <th>Customer Name</th>
                                  <th>Date</th>
                                  <th>No.of Items</th>
                                  <th>Total</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody id="orderdata"></tbody>
                            </table>
                            <a href="javascript:oprevPage()" id="obtn_prev">Prev</a>
<a href="javascript:onextPage()" id="obtn_next">Next</a>
page: <span id="opage"></span>
<div id="odialog" title="Order Details">
 
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
          <div class="footer">© 2020 - Developed and Maintained by LaakBot</div>
        </div>
      </div>
    );
  }
}

export default Orders;
