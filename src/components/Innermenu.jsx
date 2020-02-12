import React, { Component } from "react";
import Sidemenu from "./Sidemenu";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";

class Innermenu extends Component {
  constructor(props) {
    super(props);
    this.addItems = this.addItems.bind(this);
  }
 
  addItems() {
    var itemname = document.getElementById("Itemname").value;

    var desc = document.getElementById("Itemdesc").value;
  if(itemname!='' && desc!='')
  {
  	//Image upload to server
    var imgname='';
    var Image_Loc='';
		if(document.getElementById('imgsel').files[0])
		{ alert(document.getElementById('imgsel').files[0]);
			 Image_Loc="http://localhost/LaakBot/images/"+ document.getElementById('imgsel').files[0].name;
		alert(document.getElementById('imgsel').files[0].name);
		 var form_data=new FormData();
		 form_data.append("file",document.getElementById('imgsel').files[0]);
		
		 fetch('http://localhost/LaakBot/upload.php', {
			method: 'POST',
			body: form_data
		  })
		  .then((response) => response.json())
		  .then((result) => {
			alert('Success:', result);
		  })
		  .catch((error) => {
			
			alert('Error:', error);
		  });



		}
	
		//Image upload to server

  
  
  
  
  
  
    
    fetch("http://localhost/LaakBot/InsertNewItem.php", {
      method: "POST",

      body: JSON.stringify({
        Item_Name: itemname,
        Item_Description: desc,
        Image_Loc:Image_Loc
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson == 1) 
        { document.getElementById('msgLabel').style.color = 'black';
        document.getElementById("msgLabel").innerHTML="Item Data Added Successfully";
      //refetch to reflect insertion
      window.location.reload();
      
      
      
      //refetch to reflect insertion
      }
      })
      .catch(error => {
        console.error(error);

        alert(error);
      });
    }
    else
    {
       document.getElementById('msgLabel').style.color = 'red';
       if(itemname=='')
       {document.getElementById("msgLabel").innerHTML='';
         document.getElementById("msgLabel").innerHTML='* Item Name';
    }
       if(desc=='')

     { 
      document.getElementById("msgLabel").innerHTML=''; 
      document.getElementById("msgLabel").innerHTML='* Item Description';
  } 
     if(itemname=='' && desc=='')
{
  document.getElementById("msgLabel").innerHTML=''; 
      document.getElementById("msgLabel").innerHTML='*Item Name, Item Description';
      }
    // $(this).parents("tr").find(".customeradd, .customeredit").toggle();
    }
  }
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
                            <div class="col-sm-5">
                              <p className="page-title">Menu Details</p>
                              <div class="col-sm-5 col-form-label"  id="mmsgLabel"></div>
                            </div>
                            <div class="col-sm-2 "></div>

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

                          <div class="overflow-div">
                            <div class="row">
                              <div class="col-lg-10"></div>
                              <div class="col-lg-2">
                                <Popup
                                  trigger={
                                    <Button variant="danger btnp ">
                                      {" "}
                                      Add Item{" "}
                                    </Button>
                                  }
                                  modal
                                  closeOnDocumentClick
                                  className="popup-content1"
                                >
                                  <span>
                                    {" "}
                                    <form>
                                    
                                    <div class="col-sm-5 col-form-label"  id="msgLabel">
                                          
                                          </div>
                                      <div class="form-group row">
                                     
                                     
                                         
                                         <label class="col-sm-2 col-form-label">
                                          Item Name
                                        </label>
                                        <div class="col-sm-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="Itemname"
                                            placeholder="Enter your Item Name"
                                          />
                                        </div>
                                      </div>
                                      <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">
                                          Image Location
                                        </label>
                                        <div class="col-sm-10">
                                          <input
                                            type="file"
                                            class="form-control"
                                            id="imgsel"
                                          />
                                        </div>
                                      </div>
                                      <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">
                                          Item Description
                                        </label>
                                        <div class="col-sm-10">
                                          <textarea
                                            rows="5"
                                            cols="5"
                                            class="form-control"
                                            id="Itemdesc"
                                            placeholder="Item description"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="form-group row">
                                        <label class="col-sm-2"></label>
                                        <div class="col-sm-10">
                                          <Button onClick={this.addItems}>
                                            Submit
                                          </Button>
                                        </div>
                                      </div>
                                    </form>
                                  </span>
                                </Popup>
                              </div>
                              <div class="overflow-div"></div>
                            </div>
                            <table
                              id="menuTable"
                              class="table table-bordered table-responsive"
                            >
                              <thead>
                                <tr class="header tableclr">
                                  <th>Profile Pic</th>
                                  <th>Item ID</th>
                                  <th>Item Name</th>
                                  <th>Description</th>

                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody id="menudata" ></tbody>
                              <tfooter><tr>
                                <td colspan="5">
                                <a href="javascript:mprevPage()" id="mbtn_prev">Prev</a>
<a href="javascript:mnextPage()" id="mbtn_next">Next</a>
page: <span id="mpage"></span>
                                </td>
                                </tr></tfooter>
                            </table>
                            <div id="dialog" title="Basic dialog">
 
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
      </div>
    );
  }
}

export default Innermenu;
