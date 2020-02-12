import React, { Component } from "react";
import Sidemenu from "./Sidemenu";
import "./Customers.css";
import { Image} from "react-bootstrap";

class Customers extends Component {

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
                              <p className="page-title">Customers Details</p>
                              <div class="col-sm-5 col-form-label"  id="cmsgLabel"></div>
                            </div>
                            <div class="col-sm-5 col-form-label"  id="msgLabel">
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
                              id="customersTable"
                              class="table table-bordered table-responsive"
                            >
                              <thead>
                                <tr class="header tableclr">
                                  <th>Profile Pic</th>
                                  <th>ID</th>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody id="customerdata"></tbody>
                            </table>
                            <a href="javascript:cprevPage()" id="cbtn_prev">Prev</a>
<a href="javascript:cnextPage()" id="cbtn_next">Next</a>
page: <span id="cpage"></span>
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
      </div>
    );
  }
}
export default Customers;
