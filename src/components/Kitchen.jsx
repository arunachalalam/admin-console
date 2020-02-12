import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import "./Kitchen.css";
import Sidemenu from "./Sidemenu";
import { Image} from "react-bootstrap";

class Kitchen extends Component {
  render() {
    return (
      <div>
        <Sidemenu />
        <div class="content-page">
          <div class="content">
            <div class="topbarnew">
              <div class="page-content-wrapper">
                <div class="">
                  <div class="">
                    <div class="">
                      <div class=" ">
                        <div class="card-body">
                          <div class="row topmencs">
                          
                            <div class="col-sm-7">
                              <p className="page-title">Kitchen Details</p>
                              <div class="col-sm-5 col-form-label"  id="msgLabel"></div>
                            </div>
                            
                            <div class="col-sm-4 ">
                              <input
                                type="text"
                                id="myInput"
                                onkeyup="myFunction()"
                                placeholder="  Search Id"
                              />
                            </div>
                            <div class="col-sm-1 ">
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
                              id="myTable"
                              class="table table-bordered table-responsive"
                            >
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
                              <tbody id="kitchendata"></tbody>
                            </table>
                            <a href="javascript:kprevPage()" id="btn_prev">Prev</a>
<a href="javascript:knextPage()" id="btn_next">Next</a>
page: <span id="kpage"></span>
                          </div>
                          <div class="row">
                            <div class="col-sm-8"></div>
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
      </div>
    );
  }
}
export default Kitchen;
