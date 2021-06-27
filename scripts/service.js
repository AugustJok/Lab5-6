function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
	var b = parseInt(a);
	var c = b.toString();
    if (c.length == 10 && Number.isInteger(b)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(txtCredit) {
    var a = document.getElementById(txtCredit).value;
	var b = parseInt(a);
	var c = b.toString();
    if (c.length == 16 && Number.isInteger(b)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCVV(txtCVV) {
    var a = document.getElementById(txtCVV).value;
	var b = parseInt(a);
	var c = b.toString();
    if (c.length == 3 && Number.isInteger(b)) {
        return true;
    }
    else {
        return false;
    }
}

function book() {
	let cantBook = document.getElementById("alertw");
	let but = document.getElementById("submit");
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let phone = document.getElementById("phone").value;
	let date = document.getElementById("dateInput").value;
	let time = document.getElementById("timeInput").value;
	let credit = document.getElementById("credit").value;
	let cvv = document.getElementById("cvv").value;
			
	if(fname != "" && lname != "" && phone != "" && credit != "" && cvv != "" && date != "" && time != ""){
		but.removeAttribute("disabled");
		cantBook.setAttribute("hidden", true);
	}
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var bobDisabled = ["06/30/2021","07/02/2021","07/05/2021","07/06/2021","07/12/2021"];
var joeDisabled = ["07/01/2021","07/02/2021","07/06/2021","07/08/2021","07/10/2021","07/13/2021"];
var karenDisabled = ["06/29/2021","07/07/2021","07/10/2021","07/12/2021","07/13/2021","07/14/2021","07/15/2021","07/16/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
	let pract = document.getElementById("selection").value;
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
	if(pract == "Bob Tone"){
		return [ bobDisabled.indexOf(string) === -1 ]
	}
	else if(pract == "Joe Johnson"){
		return [ joeDisabled.indexOf(string) === -1 ]
	}
	else if(pract == "Karen Brown"){
		return [ karenDisabled.indexOf(string) === -1 ]
	}

}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
	
	$("#fname").on("change", function(){
		book();
    });
	
	$("#lname").on("change", function(){
		book();
    });
	
	$("#dateInput").on("change", function(){
		book();
    });
	2
	$("#timeInput").on("change", function(){
		book();
    });
	
	$("#cvv").on("change", function(){
        if (!validateCVV("cvv")){
            alert("Wrong format for CVV, only accepts 3 digit number");
            $("#cvv").val("");
            $("#cvv").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
			book();
        }
    });
	
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone, only accepts 10 digit number");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
			book();
        }
    });
	
	$("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Wrong format for credit card, only accepts 16 digit number");
            $("#credit").val("");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
			book();
        }
    });
	
	$("#cvv").on("change", function(){
        if (!validateCVV("cvv")){
            alert("Wrong format for CVV, only accepts 3 digit number");
            $("#cvv").val("");
            $("#cvv").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
			book();
        }
    });
	
	$("#cvv").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
	
	$("#ccyear").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
	
	$("#ccmonth").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
	
	$("#credit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
	
	$("#meeting-time").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
	
	$("#timeInput").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
	

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/30/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)


});
