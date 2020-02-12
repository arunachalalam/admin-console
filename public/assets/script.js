var jsonData,kjsondata,cjsonData,ojsonData,ijsonData;
var kcurrent_page = 1;
var ccurrent_page = 1;
var ocurrent_page = 1;
var mcurrent_page = 1;
var records_per_page = 4;
var btn_next = document.getElementById("btn_next");
var btn_prev = document.getElementById("btn_prev");

function showDialog(i)
{  //alert(i);
	fetch('http://localhost/LaakBot/GetOrderDetails.php', {
			method: 'POST',

			body: JSON.stringify({
             "orderid":i

			})

		}).then((response) => response.json())
		.then((responseJson) => {
		//	alert(responseJson[0].im);
			var presenter='<table border="1"><th>Item Name</th><th>Quantity</th>';
			for(i=0;i<responseJson.length;i=i+1)
			{    presenter=presenter+'<tr><td>'+responseJson[i].im+'</td><td>'+responseJson[i].qty+'</td></tr>';}
				
			presenter=presenter+'</table>';	
		//	alert(presenter);
			//kjsonData=responseJson;
            //kchangePage(1);
			// If server response message same as Data Matched
			//alert(responseJson.length);
			document.getElementById('odialog').innerHTML=presenter;
	
    $( "#odialog" ).dialog();
		}).catch((error) => {
			alert(error);
			console.error(error);
			
		});
	//fetching all kitchen data
	

	

	
	
}
$(function () {

	Parse.$ = jQuery;
	Parse.initialize("MY CODE HERE", "MY CODE HERE");

	$('.form-logout').on('submit', function (e) {

		// Prevent Default Submit Event
		e.preventDefault();

		//logout current user
		var currentUser = Parse.User.current();
		if (currentUser) {
			Parse.User.logout();
			window.location = "Sign_In.html";
		} else {
			window.location = "Sign_In.html";
		}

	});

});

$(function () {

	var appendthis = ("<div class='modal-overlay js-modal-close'></div>");

	$('a[data-modal-id]').click(function (e) {
		e.preventDefault();
		$("body").append(appendthis);
		$(".modal-overlay").fadeTo(500, 0.7);
		//$(".js-modalbox").fadeIn(500);
		var modalBox = $(this).attr('data-modal-id');
		$('#' + modalBox).fadeIn($(this).data());
	});


	$(".js-modal-close, .modal-overlay").click(function () {
		$(".modal-box, .modal-overlay").fadeOut(500, function () {
			$(".modal-overlay").remove();
		});
	});

	$(window).resize(function () {
		$(".modal-box").css({
			top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
			left: ($(window).width() - $(".modal-box").outerWidth()) / 2
		});
	});

	$(window).resize();

});
//kitchen pagination functions
function kprevPage()
{  //alert(current_page);
	
    if (kcurrent_page > 1) {
        kcurrent_page--;
        kchangePage(kcurrent_page);
    }
}

function knextPage()
{   //alert(jsonData.length);
    if (kcurrent_page < knumPages()) {
        kcurrent_page++;
        kchangePage(kcurrent_page);
    }
}
function kchangePage(page)
{
    var btn_next = document.getElementById("btn_next");
var btn_prev = document.getElementById("btn_prev");


    // Validate page
    if (page < 1) page = 1;
    if (page > knumPages()) {page = knumPages();}
      
	$("#myTable > tbody").html("");

	for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < kjsonData.length; i++)
	{
		var row = '<tr>' +

		' <td><div class="image-upload"><label for="file-input"><img id="kitimg" src=" ' + kjsonData[i].Image_Loc + '"/></label><input id="file-input" type="file" onchange="setfiles(this.files[0],'+i+');"/><input type="hidden" value="'+kjsonData[i].Image_Loc+'"/></div></td>' +
		'<td>' + kjsonData[i].BUID + '</td>' +
		'<td>' + kjsonData[i].Kitchen_Name + '</td>' +
		'<td>' + kjsonData[i].Fname + '</td>' +
		'<td>' + kjsonData[i].Lname + '</td>' +
		'<td>' + kjsonData[i].Email + '</td>' +
		'<td>' + kjsonData[i].Phone + '</td>' +
		'<td>' + kjsonData[i].Address + '</td>' +
		'<td>' + kjsonData[i].Address2 + '</td>' +
		'<td>' + kjsonData[i].City + '</td>' +
		'<td>' + kjsonData[i].State + '</td>' +
		'<td>' + kjsonData[i].Zip + '</td>' +

		'<td><a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></td>' +
		'</tr>';
	$("#myTable tbody").append(row);

    }
	var page_span = document.getElementById("kpage");
	page_span.innerHTML = page + "/" + knumPages();
      
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == knumPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function knumPages()
{
    return Math.ceil(kjsonData.length / records_per_page);
}

//kitchen pagination functions

//customer pagination functions
function cprevPage()
{  //alert(current_page);
	
    if (ccurrent_page > 1) {
        ccurrent_page--;
        cchangePage(ccurrent_page);
    }
}

function cnextPage()
{   //alert(jsonData.length);
    if (ccurrent_page < numPages()) {
        ccurrent_page++;
        cchangePage(ccurrent_page);
    }
}
function cchangePage(cpage)
{
var cbtn_next = document.getElementById("cbtn_next");
var cbtn_prev = document.getElementById("cbtn_prev");


    // Validate page
    if (cpage < 1) cpage = 1;
    if (cpage > cnumPages()) {cpage = cnumPages();}
      
	$("#customersTable > tbody").html("");

	for (var i = (cpage-1) * records_per_page; i < (cpage * records_per_page) && i < cjsonData.length; i++)
	{
		var row = '<tr>' +

		' <td><div class="image-upload"><label for="file-input"><img id="kitimg" src=" ' + cjsonData[i].Image_Loc + '"/></label><input id="file-input" type="file" onchange="setcustfiles(this.files[0],'+i+');"/><input type="hidden" value="'+cjsonData[i].Image_Loc+'"/></div></td>' +
		'<td>' + cjsonData[i].Customer_ID + '</td>' +
		'<td>' + cjsonData[i].Fname + '</td>' +
		'<td>' + cjsonData[i].Lname + '</td>' +
		'<td>' + cjsonData[i].Email + '</td>' +
		'<td>' + cjsonData[i].Phone + '</td>' +


		'<td><a class="customeradd" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a><a class="customeredit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></td>' +
		'</tr>';
	$("#customersTable tbody").append(row);


    }
	var page_span = document.getElementById("cpage");
	page_span.innerHTML = cpage + "/" + cnumPages();
     // alert(cpage);
    if (cpage == 1) {
        cbtn_prev.style.visibility = "hidden";
    } else {
        cbtn_prev.style.visibility = "visible";
    }

    if (cpage == cnumPages()) {
        cbtn_next.style.visibility = "hidden";
    } else {
        cbtn_next.style.visibility = "visible";
    }
}

function cnumPages()
{
    return Math.ceil(cjsonData.length / records_per_page);
}

//customer pagination functions
//Menu pagination functions
function mprevPage()
{  //alert(current_page);
	
    if (mcurrent_page > 1) {
        mcurrent_page--;
        mchangePage(mcurrent_page);
    }
}

function mnextPage()
{   //alert(jsonData.length);
    if (mcurrent_page < mnumPages()) {
        mcurrent_page++;
        mchangePage(mcurrent_page);
    }
}
function mchangePage(mpage)
{
    var mbtn_next = document.getElementById("mbtn_next");
var mbtn_prev = document.getElementById("mbtn_prev");


    // Validate page
    if (mpage < 1) mpage = 1;
    if (mpage > mnumPages()) {mpage = mnumPages();}
      
	$("#menuTable > tbody").html("");

	for (var i = (mpage-1) * records_per_page; i < (mpage * records_per_page) && i < mjsonData.length; i++)
	{
		var row = '<tr>' +

		' <td><div class="image-upload"><label for="file-input"><img src=" ' + mjsonData[i].Image_Loc + '"/></label><input id="file-input" type="file" onchange="setitemfiles(this.files[0],'+ i +');"/><input type="hidden" value="'+mjsonData[i].Image_Loc+'"/></div></td>' +
					'<td >' + mjsonData[i].Item_ID + '</td>' +
					'<td>' + mjsonData[i].Item_Name + '</td>' +
					'<td>' + mjsonData[i].Item_Description + '</td>' +
					


					'<td><a class="menuadd"  title="Add" data-toggle="tooltip"><i class="material-icons"></i></a><a class="edit" title="Edit" id="edit" data-toggle="tooltip"><i class="material-icons"></i></a></td>' +
					'</tr>';
				
					$("#menuTable tbody").append(row);
					$(".menuadd").hide(); 
					
    }
	var page_span = document.getElementById("mpage");
	page_span.innerHTML = mpage + "/" + mnumPages();
      
    if (mpage == 1) {
        mbtn_prev.style.visibility = "hidden";
    } else {
        mbtn_prev.style.visibility = "visible";
    }

    if (mpage == mnumPages()) {
        mbtn_next.style.visibility = "hidden";
    } else {
        mbtn_next.style.visibility = "visible";
    }
}

function mnumPages()
{
    return Math.ceil(mjsonData.length / records_per_page);
}

//Menu pagination functions
//order pagination functions
function oprevPage()
{  //alert(current_page);
	
    if (ocurrent_page > 1) {
        ocurrent_page--;
        ochangePage(ocurrent_page);
    }
}

function onextPage()
{   //alert(jsonData.length);
    if (ocurrent_page < onumPages()) {
        ocurrent_page++;
        ochangePage(ocurrent_page);
    }
}
function ochangePage(opage)
{  
    var obtn_next = document.getElementById("obtn_next");
var obtn_prev = document.getElementById("obtn_prev");


    // Validate page
    if (opage < 1) opage = 1;
    if (opage > onumPages()) {opage = onumPages();}
      
	$("#ordersTable > tbody").html("");
	 
	 
	for (var i = (opage-1) * records_per_page; i < (opage * records_per_page) && i < ojsonData.length; i++)
	{
	     
		var row = '<tr>' +

	 	
     

					'<td onclick="showDialog('+ojsonData[i].Order_ID+')">' + ojsonData[i].Order_ID + '</td>' +
					'<td>' + ojsonData[i].Kitchen_Name + '</td>' +
					'<td>' + ojsonData[i].Fname + '</td>' +
					'<td>' + ojsonData[i].Order_Date + '</td>' +
					'<td>' + ojsonData[i].Quantity + '</td>' +
					'<td>' + ojsonData[i].Item_Total_Price + '</td>' +
					'<td>' + ojsonData[i].Delivery_Status + '</td>' +
					'<td><a class="ordertadd" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a><a class="ordertedit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></td>' +
					'</tr>';
				$("#ordersTable tbody").append(row);
			//alert(row);


    }
	var page_span = document.getElementById("opage");
	page_span.innerHTML = opage + "/" + onumPages();
	  
    if (opage == 1) {
        obtn_prev.style.visibility = "hidden";
    } else {
        obtn_prev.style.visibility = "visible";
    }

    if (opage == onumPages()) {
        obtn_next.style.visibility = "hidden";
    } else {
        obtn_next.style.visibility = "visible";
    }
}

function onumPages()
{
    return Math.ceil(ojsonData.length / records_per_page);
}

//order pagination functions





















//selected kitchen image setting 

function setfiles(file,rowcount)
{
	 var i=1;var matchcnt;var filename;
	//alert(file.name);
	//alert($(this).attr('id'));
	
	//alert(imgsrcob);	
	
			     
var reader = new FileReader();
		  reader.readAsDataURL(file);
		 reader.onload = function (e) {
			  //
				 j=0;
				
	$("#myTable img").each(function(indice){
		
		
   if(j==rowcount)
   { //alert(j);
   $(this).attr('src',reader.result);
   
}
   j=j+1;
	});
		j=0;		
	$("#myTable tr td input[type='hidden']").each(function(indice){
   
            
		if(j==rowcount)
		{ 
		  
		  $(this).val(file.name);
		  //alert($(this).val());
		}
		j=j+1;
		 });	
			   
		   
		   //
	   
	
   

	
}
}
//selected kitchen image setting

//selected customer image setting 
function setcustfiles(file,rowcount)
{
	 var i=1;var matchcnt;var filename;
	//alert(file.name);
	//alert(rowcount);
   
var reader = new FileReader();
		  reader.readAsDataURL(file);
		 reader.onload = function (e) {
			  //
				 j=0;
	$("#customersTable img").each(function(indice){
   

   if(j==rowcount)
   { //alert(j);
   $(this).attr('src',reader.result);
   
}
   j=j+1;
	});
		j=0;		
	$("#customersTable tr td input[type='hidden']").each(function(indice){
   
             //alert($(this).val());
		if(j==rowcount)
		{ 
		  
		  $(this).val(file.name);
		  //alert($(this).val());
		}
		j=j+1;
		 });	
			   
		   
		   //
	   
	
   

	
}
}
//selected customer image setting
//selected item image setting 
function setitemfiles(file,rowcount)
{
	 var i=1;var matchcnt;var filename;
	//alert(file.name);
	
   
var reader = new FileReader();
		  reader.readAsDataURL(file);
		 reader.onload = function (e) {
			  //
				 j=0;
	$("#menuTable img").each(function(indice){
   
  
   if(j==rowcount)
   { //alert(j);
   $(this).attr('src',reader.result);
   
}
   j=j+1;
	});
		j=0;		
	$("#menuTable tr td input[type='hidden']").each(function(indice){
   
             //alert($(this).val());
		if(j==rowcount)
		{ 
		  
		  $(this).val(file.name);
		  //alert($(this).val());
		}
		j=j+1;
		 });	
			   
		   
		   //
	   
	
   

	
}
}
//selected item image setting


$(document).ready(function () {
	// Update menu table

	$(document).on("click", ".menuadd", function () {
		
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
		var defimage=$(this).parents("tr").find('img');
		var row  = $(this).closest('tr').index();
		//alert(row);
		var images = $(":file");
		//Image upload to server
		var imgname='';
		if(images[row].files[0])
		{ ////alert('new image')
			$Image_Loc="http://localhost/LaakBot/images/"+ images[row].files[0].name;
		//alert(images[row].files[0].name);
		 var form_data=new FormData();
		 form_data.append("file",images[row].files[0]);
		
		 fetch('http://localhost/LaakBot/upload.php', {
			method: 'POST',
			body: form_data
		  })
		  .then((response) => response.json())
		  .then((result) => {
		//	alert('Success:', result);
		  
		})
		  .catch((error) => {
			
			
		  });



		}
		else
		{   //alert('old image')
			j=0;
			$("#menuTable img").each(function(indice){
		   
		  
		   if(j==row)
		   { //alert(j);
		   //alert($(this).attr('src'));
		   $Image_Loc=$(this).attr('src');
		}
		   j=j+1;
			});
		}
		//Image upload to server
		
		input.each(function () {

			if (!$(this).val()) {
				$(this).addClass("error");
				empty = true;
			} else {
				$(this).removeClass("error");
			}
		});
		$(this).parents("tr").find(".error").first().focus();
		if (!empty) {
			var i = 1;
			$Item_ID = '';
			$Item_Name = '';

			$Item_Description = '';
			$Creation_Date = '';
		


			input.each(function () {
				$(this).parent("td").html($(this).val());
				//fetch to update
				if (i == 1) {
					$Item_ID = $(this).val();
				}

				if (i == 2) {
					$Item_Name = $(this).val();
				}
				if (i == 3) {
					$Item_Description = $(this).val();
				}
				


				i = i + 1;

			});
		 // alert($Image_Loc);
			fetch('http://localhost/LaakBot/UpdateItemDetails.php', {
					method: 'POST',

					body: JSON.stringify({
						"Item_ID": $Item_ID,
						"Item_Name": $Item_Name,
						"Item_Description": $Item_Description,
						"Image_Loc":$Image_Loc
						


					})

				}).then((response) => response.json())
				.then((responseJson) => {

					if (responseJson == 1)
					document.getElementById('mmsgLabel').style.color="black";
					document.getElementById('mmsgLabel').innerHTML='Data Updated Successfully';
				
					//alert('Item Data Updated Successfully');

				}).catch((error) => {
					console.error(error);
					document.getElementById('mmsgLabel').style.color="red";
					document.getElementById('mmsgLabel').innerHTML='Updation Failed Tetry..';
				
				});
		}
		// $(this).parents("tr").find(".menuadd1, .menuedit").toggle();
		$(".menuadd").hide(); 
		$(".edit").show(); 
	});
// Update menu table
	//Edit Order Table
	$(document).on("click", ".ordertedit", function () {
		Order_Date = '';
		no_of_items = '';
		total='';
		status = '';
		
		var i = 1;
		$(this).parents("tr").find("td:not(:last-child)").each(function () {
			if (i == 1 || i==2 || i==3 || i==7)
				$(this).html('<input type="text" readonly class="form-control" value="' + $(this).text() + '">');
			else {
				$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');

				if (i == 4) {
					Order_Date = $(this).text();
				}
				if (i == 5) {
					no_of_items = $(this).text();
				}
				if (i == 6) {
					total = $(this).text();
				}

				if (i == 7) {
					status = $(this).text();
				}


			}
			i = i + 1;
		});
		$(this).parents("tr").find(".ordertadd, .ordertedit").toggle();
		
		
	});

	//Edit Order Table
	//update order table
	$(document).on("click", ".ordertadd", function () {
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
		input.each(function () {

			if (!$(this).val()) {
				$(this).addClass("error");
				empty = true;
			} else {
				$(this).removeClass("error");
			}
		});
		$(this).parents("tr").find(".error").first().focus();
		if (!empty) {
			var i = 1;
			    $Order_Id = '',
				$Order_Date = '',
				$Quantity = '',
				$Item_Total_Price = '',
				$Delivery_Status='';

			input.each(function () {
				$(this).parent("td").html($(this).val());
				//fetch to update
				if (i == 1) {
					$Order_ID = $(this).val();
				}

				if (i == 2) {
					$Kitchen_Name = $(this).val();
				}
				if (i == 3) {
					$Fname = $(this).val();
				}
				if (i == 4) {
					$Order_Date = $(this).val();
				}
				if (i == 5) {
					$Quantity = $(this).val();
				}
				if (i == 6) {
					$Item_Total_Price = $(this).val();
				}
				if (i == 7) {
					$Delivery_Status = $(this).val();
				}

				i = i + 1;

			});
			// alert($FName);	
			fetch('http://localhost/LaakBot/UpdateOrderDetails.php', {
					method: 'POST',

					body: JSON.stringify({
						"Order_ID": $Order_ID,
						"Order_Date": $Order_Date,
						"Item_Total_Price": $Item_Total_Price,
						"Quantity": $Quantity


					})

				}).then((response) => response.json())
				.then((responseJson) => {

					if (responseJson == 1)
					document.getElementById('omsgLabel').style.color="black";
					document.getElementById('omsgLabel').innerHTML='Data Updated Successfully';
					$(this).parents("tr").find(".ordertadd, .ordertedit").toggle();
				//	alert('Order Data Updated Successfully');

				}).catch((error) => {
					console.error(error);
					document.getElementById('omsgLabel').style.color="red";
					document.getElementById('omsgLabel').innerHTML='Updation Failed..Retry..';
					$(this).parents("tr").find(".ordertadd, .ordertedit").toggle();
				});
		}
		// $(this).parents("tr").find(".customeradd, .customeredit").toggle();

	});
	//update order table

	//update customer table
	$(document).on("click", ".customeradd", function () {
		var empty = false;
	var input = $(this).parents("tr").find('input[type="text"]');
	var defimage=$(this).parents("tr").find('img');
	var row  = $(this).closest('tr').index();
	//alert(row);
	var images = $(":file");
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
		input.each(function () {

			if (!$(this).val()) {
				$(this).addClass("error");
				empty = true;
			} else {
				$(this).removeClass("error");
			}
		});
		$(this).parents("tr").find(".error").first().focus();
		if (!empty) {
			var i = 1;
			$Customer_ID = '';

			$FName = '';
			$LName = '';
			$Email = '';
			$Phone = '';

			input.each(function () {
				// $(this).parent("td").html($(this).val());
				//fetch to update
				if (i == 1) {
					$Customer_ID = $(this).val();
				}

				if (i == 2) {
					$FName = $(this).val();
				}
				if (i == 3) {
					$LName = $(this).val();
				}
				if (i == 4) {
					$Email = $(this).val();
				}
				if (i == 5) {
					$Phone = $(this).val();
				}


				i = i + 1;

			});
			//Image upload to server
		var imgname='';
		if(images[row].files[0])
		{ //alert('new image')
			$Image_Loc="http://localhost/LaakBot/images/"+ images[row].files[0].name;
		//alert(images[row].files[0].name);
		 var form_data=new FormData();
		 form_data.append("file",images[row].files[0]);
		
		 fetch('http://localhost/LaakBot/upload.php', {
			method: 'POST',
			body: form_data
		  })
		  .then((response) => response.json())
		  .then((result) => {
			alert('Success:', result);
		  })
		  .catch((error) => {
			
			
		  });



		}
		else
		{   //alert('old image')
			j=0;
			$("#customersTable img").each(function(indice){
		   
		  
		   if(j==row)
		   { //alert(j);
		   //alert($(this).attr('src'));
		   $Image_Loc=$(this).attr('src');
		}
		   j=j+1;
			});
		}
		//Image upload to server
			// alert($FName);	
			fetch('http://localhost/LaakBot/UpdateCustomerDetails.php', {
					method: 'POST',

					body: JSON.stringify({
						"Customer_ID": $Customer_ID,
						"Fname": $FName,
						"Lname": $LName,
						"Email": $Email,
						"Phone": $Phone,
						"Image_Loc":$Image_Loc
 

					})

				}).then((response) => response.json())
				.then((responseJson) => {

					if (responseJson == 1) {
						//alert('Customer Data Updated Successfully');
						document.getElementById('cmsgLabel').style.color="black";
					document.getElementById('cmsgLabel').innerHTML='Data Updated Successfully';
				
						input.each(function () {
							$(this).parent("td").html($(this).val());
						});
					}
				}).catch((error) => {
					document.getElementById('cmsgLabel').style.color="red";
					document.getElementById('cmsgLabel').innerHTML='Update Failed Retry...';
				
					//alert("Update Failed Retry...");
					var colcount = 1;
					input.each(function () {

						if (colcount == 2) {
							$(this).parent("td").html(FName);
						}
						if (colcount == 3) {
							$(this).parent("td").html(LName);
						}
						if (colcount == 4) {
							$(this).parent("td").html(Email);
						}
						if (colcount == 5) {
							$(this).parent("td").html(Phone);
						}

						colcount = colcount + 1;
					});


				});
		}
		$(this).parents("tr").find(".customeradd,.customeredit").toggle();

	});
	//update customer table
	//Edit Customer Table
	$(document).on("click", ".customeredit", function () {
		FName = '';
		LName = '';
		Email = '';
		Phone = '';
		var i = 1;
		$(this).parents("tr").find("td:not(:first-child):not(:last-child)").each(function () {
			if (i == 1)
				$(this).html('<input type="text" readonly class="form-control" value="' + $(this).text() + '">');
			else {
				$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');

				if (i == 2) {
					FName = $(this).text();
				}
				if (i == 3) {
					LName = $(this).text();
				}
				if (i == 4) {
					Email = $(this).text();
				}
				if (i == 5) {
					Phone = $(this).text();
				}


			}
			i = i + 1;
		});
		$(this).parents("tr").find(".customeradd, .customeredit").toggle();
		
		
	});

	//Edit Customer Table

//edit kitchen
BUID='';
	KitchenName = '';
	FName = '';
	LName = '';
	Email = '';
	Phone = '';
	Address = '';
	Address2 = '';
	City = '';
	State = '';
	Zip = '';
	$(document).on("click", ".edit", function () {
	//	alert();
	$(".menuadd").show(); 
		var i = 1;
		$(this).parents("tr").find("td:not(:first-child):not(:last-child)").each(function () {
			if (i == 1) {
				BUID=$(this).text();
			
				$(this).html('<input type="text" readonly  value="' + $(this).text() + '">');
			} else {
				if (i == 2) {
					KitchenName = $(this).text();
				}
				if (i == 3) {
					FName = $(this).text();
				}
				if (i == 4) {
					LName = $(this).text();
				}
				if (i == 5) {
					Email = $(this).text();
				}
				if (i == 6) {
					Phone = $(this).text();
				}
				if (i == 7) {
					Address = $(this).text();
				}
				if (i == 8) {
					Address2 = $(this).text();
				}
				if (i == 9) {
					City = $(this).text();
				}
				if (i == 10) {
					State = $(this).text();
				}
				if (i == 11) {
					Zip = $(this).text();
				}
				$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
			}
			i = i + 1;

		});
		$(this).parents("tr").find(".add, .edit").toggle();
		//$(this).parents("tr").find(".customeradd, .customeredit").toggle();
		$(".add-new").attr("disabled", "disabled");
	});
	
//edit kitchen	

//update kitchen
$(document).on("click", ".add", function () {
	var empty = false;
	var input = $(this).parents("tr").find('input[type="text"]');
	var defimage=$(this).parents("tr").find('img');
	var row  = $(this).closest('tr').index();
	//alert(row);
	var images = $(":file");
	//$("#myTable img").each(function(indice){
	
	
	input.each(function () {

		if (!$(this).val()) {
			$(this).addClass("error");
			empty = true;
		} else {
			$(this).removeClass("error");
		}
	});
	$(this).parents("tr").find(".error").first().focus();
	if (!empty) {
		var i = 1;
		$BUID = '';
		$KitchenName = '';
		$FName = '';
		$LName = '';
		$Email = '';
		$Phone = '';
		$Address = '';
		$Address2 = '';
		$City = '';
		$State = '';
		$Zip = '';
		$Image_Loc='';
		input.each(function () {
			//  $(this).parent("td").html($(this).val());
			//fetch to update
			
			if (i == 1) {
				$BUID = $(this).val();
			}
			if (i == 2) {
				$KitchenName = $(this).val();
			}
			if (i == 3) {
				$FName = $(this).val();
			}
			if (i == 4) {
				$LName = $(this).val();
			}
			if (i == 5) {
				$Email = $(this).val();
			}
			if (i == 6) {
				$Phone = $(this).val();
			}
			if (i == 7) {
				$Address = $(this).val();
			}
			if (i == 8) {
				$Address2 = $(this).val();
			}
			if (i == 9) {
				$City = $(this).val();
			}
			if (i == 10) {
				$State = $(this).val();
			}
			if (i == 11) {
				$Zip = $(this).val();
			}


			i = i + 1;

		});
		//Image upload to server
		var imgname='';
		if(images[row].files[0])
		{ //alert('new image')
			$Image_Loc="http://localhost/LaakBot/images/"+ images[row].files[0].name;
		//alert(images[row].files[0].name);
		 var form_data=new FormData();
		 form_data.append("file",images[row].files[0]);
		
		 fetch('http://localhost/LaakBot/upload.php', {
			method: 'POST',
			body: form_data
		  })
		  .then((response) => response.json())
		  .then((result) => {
			alert('Success:', result);
		  })
		  .catch((error) => {
			
			
		  });



		}
		else
		{   //alert('old image')
			j=0;
			$("#myTable img").each(function(indice){
		   
		  
		   if(j==row)
		   { //alert(j);
		   //alert($(this).attr('src'));
		   $Image_Loc=$(this).attr('src');
		}
		   j=j+1;
			});
		}
		//Image upload to server
//alert($Image_Loc);

		fetch('http://localhost/LaakBot/UpdateProfile.php', {
				method: 'POST',

				body: JSON.stringify({
					"BUID": $BUID,
					"KitchenName": $KitchenName,
					"FirstName": $FName,
					"LastName": $LName,
					"Email": $Email,
					"Phone": $Phone,
					"Address": $Address,
					"Address2": $Address2,
					"City": $City,
					"State": $State,
					"Zip": $Zip,
					"ImageLoc":$Image_Loc
					 

				})

			}).then((response) => response.json())
			.then((responseJson) => {

				if (responseJson == 1) {
					
					
					
					//alert('Kitchen Data Updated Successfully');
					document.getElementById('msgLabel').style.color="black";
					document.getElementById('msgLabel').innerHTML='Data Updated Successfully';
					//updated values must be placed in table    
					input.each(function () {
						$(this).parent("td").html($(this).val());
					});
				}
				//updated values must be placed in table  
			}).catch((error) => {
				// console.error(error);
				//alert("Update Failed Retry...");
				document.getElementById('msgLabel').style.color="red";
				document.getElementById('msgLabel').innerHTML='Update Failed Retry...';
				var colcount = 1;
				input.each(function () {
					if (colcount == 1) {
						$(this).parent("td").html(BUID);
					}
					if (colcount == 2) {
						$(this).parent("td").html(KitchenName);
					}
					if (colcount == 3) {
						$(this).parent("td").html(FName);
					}
					if (colcount == 4) {
						$(this).parent("td").html(LName);
					}
					if (colcount == 5) {
						$(this).parent("td").html(Email);
					}
					if (colcount == 6) {
						$(this).parent("td").html(Phone);
					}
					if (colcount == 7) {
						$(this).parent("td").html(Address);
					}
					if (colcount == 8) {
						$(this).parent("td").html(Address2);
					}
					if (colcount == 9) {
						$(this).parent("td").html(City);
					}
					if (colcount == 10) {
						$(this).parent("td").html(State);
					}
					if (colcount == 11) {
						$(this).parent("td").html(Zip);
					}


					colcount = colcount + 1;
				});


			});


		//fetch to update
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").removeAttr("disabled");
	}
});
//update kitchen table




	//fetching all kitchen data
	fetch('http://localhost/LaakBot/GetAllKitchens.php', {
			method: 'POST',

			body: JSON.stringify({


			})

		}).then((response) => response.json())
		.then((responseJson) => {
			kjsonData=responseJson;
            kchangePage(1);
			// If server response message same as Data Matched
			
		}).catch((error) => {
			console.error(error);
			
		});
	//fetching all kitchen data
	//fetching all customer data
	fetch('http://localhost/LaakBot/GetAllCustomers.php', {
			method: 'POST',

			body: JSON.stringify({


			})

		}).then((response) => response.json())
		.then((responseJson) => {
			cjsonData=responseJson;
			cchangePage(1);
			// for (i = 0; i < 4; i = i + 1) {
			// 	var row = '<tr>' +

			// 	' <td><div class="image-upload"><label for="file-input"><img src=" ' + responseJson[i].Image_Loc + '"/></label><input id="file-input" type="file" onchange="setcustfiles(this.files[0],'+ i +');"/><input type="hidden" value="'+responseJson[i].Image_Loc+'"/></div></td>' +
			// 		'<td>' + jsonData[i].Customer_ID + '</td>' +
			// 		'<td>' + jsonData[i].Fname + '</td>' +
			// 		'<td>' + jsonData[i].Lname + '</td>' +
			// 		'<td>' + jsonData[i].Email + '</td>' +
			// 		'<td>' + jsonData[i].Phone + '</td>' +


			// 		'<td><a class="customeradd" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a><a class="customeredit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></td>' +
			// 		'</tr>';
			// 	$("#customersTable tbody").append(row);
			// //	page_span.innerHTML = 1;
			// 	//$("#customersTable tbody").append(row);	
			// }
			// If server response message same as Data Matched


		}).catch((error) => {
			console.error(error);
			
		});


	//fetching all customer data
	//fetching all order data
	fetch('http://localhost/LaakBot/GetAllOrders.php', {
			method: 'POST',

			body: JSON.stringify({


			})

		}).then((response) => response.json())
		.then((responseJson) => {

ojsonData=responseJson;
ochangePage(1);
			// If server response message same as Data Matched


		}).catch((error) => {
			console.error(error);
			
		});


	//fetching all menu data
	fetch('http://localhost/LaakBot/GetAllItems.php', {
			method: 'POST',

			body: JSON.stringify({


			})

		}).then((response) => response.json())
		.then((responseJson) => {

			jsonData=responseJson;
			mjsonData=responseJson;
			mchangePage(1);
			// for (i = 0; i < 5; i = i + 1) {
			// 	var row = '<tr>' +

			// 		' <td><div class="image-upload"><label for="file-input"><img src=" ' + responseJson[i].Image_Loc + '"/></label><input id="file-input" type="file" onchange="setitemfiles(this.files[0],'+ i +');"/><input type="hidden" value="'+responseJson[i].Image_Loc+'"/></div></td>' +
			// 		'<td>' + responseJson[i].Item_ID + '</td>' +
			// 		'<td>' + responseJson[i].Item_Name + '</td>' +
			// 		'<td>' + responseJson[i].Item_Description + '</td>' +
					


			// 		'<td><a class="menuadd"  title="Add" data-toggle="tooltip"><i class="material-icons"></i></a><a class="edit" title="Edit" id="edit" data-toggle="tooltip"><i class="material-icons"></i></a></td>' +
			// 		'</tr>';
				
			// 		$("#menuTable tbody").append(row);
			// 		$(".menuadd").hide(); 
			// 	 //$(this).parents("tr").find(".menuadd").hide();	
				
			// }
			// If server response message same as Data Matched


		}).catch((error) => {
			console.error(error);
			
		});


	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#kitchendata tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#customerdata tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#orderdata tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#menudata tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

function myFunction() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
	$(".add-new").click(function () {
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
		var row = '<tr>' +
			'<td><input type="text" class="form-control" name="name" id="name"></td>' +
			'<td><input type="text" class="form-control" name="department" id="department"></td>' +
			'<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
			'<td>' + actions + '</td>' +
			'</tr>';
		$("table").append(row);
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
		$("#customerstable tbody tr").eq(index + 1).find(".customeradd, .customeredit").toggle();   
		
		$('[data-toggle="tooltip"]').tooltip();
	});
	// Add row on add button click
	
	
	
	
	
	// Edit row on edit button click
	
});
