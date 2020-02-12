import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import "./Dashboard.css";
import Sidemenu from "./Sidemenu";
import { Image } from "react-bootstrap";
class Dashboard extends Component {
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
                              <p className="page-title">Dashboard</p>
                            </div>
                            <div class="col-sm-4 leftalingn"></div>
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
export default Dashboard;
