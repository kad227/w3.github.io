
$(document).ready(function() { // do this when the document is loaded
	$(dialer_page).show(); // show the element with ID "element"
	$(contact_list_page).hide();
	$(add_contact_page).hide(); // hide the element with ID "otherElement"
	$(helpPage).hide();
});


$(dbutton).click(function() { // when "button_id" is clicked
	$(dialer_page).show(); // show element
	$(contact_list_page).hide();
	$(add_contact_page).hide();	// hide other element
	$(helpPage).hide();
});

$(cbutton).click(function() { // when "button_id" is clicked
	$(contact_list_page).show(); // show element
	$(dialer_page).hide();
	$(add_contact_page).hide();	// hide other element
	$(helpPage).hide();
});

$(abutton).click(function() { // when "button_id" is clicked
	$(add_contact_page).show(); // show element
	$(contact_list_page).hide();
	$(dialer_page).hide();	// hide other element
	$(helpPage).hide();
});

$(hbutton).click(function() { // when "button_id" is clicked
	$(helpPage).show();
	$(add_contact_page).hide(); // show element
	$(contact_list_page).hide();
	$(dialer_page).hide();	// hide other element
});


$(button1).click(function() { 
	$("#number1").val($("#number1").val() + this.innerText);
});

$(button2).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});

$(button3).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});
$(button4).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});

$(button5).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});

$(button6).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});

$(button7).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});
$(button8).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});
$(button9).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});
$(button0).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});

$(buttonsq).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});

$(buttonstar).click(function() {
	$("#number1").val($("#number1").val() + this.innerText);
});

$(clearbutton).click(function() {
	$("#number1").val("");
});

$(document).keydown(function(e) {
	//$("#number1").val("");
	var x = e.keyCode;
	if(x == 48){
	$("#number1").val($("#number1").val() + "0");
	}
	if(x == 49){
	$("#number1").val($("#number1").val() + "1");
	}
	if(x == 50){
	$("#number1").val($("#number1").val() + "2");
	}
	if(x == 51){
	$("#number1").val($("#number1").val() + "3");
	}
	if(x == 52){
	$("#number1").val($("#number1").val() + "4");
	}
	if(x == 53){
	$("#number1").val($("#number1").val() + "5");
	}
	if(x == 54){
	$("#number1").val($("#number1").val() + "6");
	}
	if(x == 55){
	$("#number1").val($("#number1").val() + "7");
	}
	if(x == 56){
	$("#number1").val($("#number1").val() + "8");
	}
	if(x == 57){
	$("#number1").val($("#number1").val() + "9");
	}
	if(x == 65){ // press a to go to add contact
	$(add_contact_page).show(); // show element
	$(contact_list_page).hide();
	$(dialer_page).hide();	// hide other element
	$(helpPage).hide();
	}
	if(x == 67){ // press c to go to contact list
	$(contact_list_page).show(); // show element
	$(dialer_page).hide();
	$(add_contact_page).hide();	// hide other element
	$(helpPage).hide();
	}
	if(x == 68){ // press d to go to dialer
	$(dialer_page).show(); // show element
	$(contact_list_page).hide();
	$(add_contact_page).hide();	// hide other element
	$(helpPage).hide();
	}
	if(x == 72){ // press d to go to dialer
	$(dialer_page).hide(); // show element
	$(contact_list_page).hide();
	$(add_contact_page).hide();	// hide other element
	$(helpPage).show();
	}

	
});

