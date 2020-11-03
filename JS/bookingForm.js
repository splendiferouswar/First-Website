
var oneDay = 24 * 60 * 60 * 1000;
var rooms = [
    132,
    253,
    187
]

function calculateTotal() {

    let roomType = parseInt( document.getElementById('roomType').value );
    let roomsNo = parseInt( document.getElementById('no-Room').value );
    let adults = parseInt( document.getElementById('adults').value );
    let children = parseInt( document.getElementById('children').value );

    let checkIn = new Date( document.getElementById('checkIn').value );
    let checkOut = new Date(  document.getElementById('checkOut').value );
    
    let breakFast = document.getElementById('breakFast').checked;

    let daysThere = 1;

    let datesGood = validDateCheck(document.getElementById('checkIn').value, document.getElementById('checkOut').value);

    if (datesGood) {
        daysThere = Math.ceil((checkOut - checkIn) / oneDay);
        document.getElementById('checkInTime').classList.remove('hide');
        removedisplayError(document.form1.checkOut);
    }else{
        document.getElementById('checkInTime').classList.add('hide');
        displayError(document.form1.checkOut, "Bad dates");
    }

    let flatrate = 50; // flat rate
    let roomCost = (rooms[roomType] * roomsNo * daysThere); // charge per rooms used per day
    let peopleCost = (adults * 50) + (children * 40); // charge per head (children discount)
    let foodCost = (adults + children) * 10 * daysThere; // charge per head for in house breakfast
    
    let total = 0;
    if (breakFast) {
        total = flatrate + roomCost + peopleCost + foodCost; 
    }else{
        total = flatrate + roomCost + peopleCost; 
    }

    document.getElementById('finalTotal').innerHTML = "$"+total;



}
calculateTotal()



function validateFName() {
    var msg = "First name cannot be blank";
    if (document.form1.fname.value == "") { //  from the document, from form1, from nametag fname, check if the vallue is blank
        displayError(document.form1.fname, msg); //  then execute the displayError function
    } else { //  else dont execute the function called removedisplayError
        removedisplayError(document.form1.fname);
    }
}
function validateLName() {
    var msg = "Last name cannot be blank";
    if (document.form1.lname.value == "") {
        displayError(document.form1.lname, msg);
    } else {
        removedisplayError(document.form1.lname);
    }
}


function displayError(element, msg) { //  this function takes 2 parameters
    element.nextElementSibling.textContent = msg; //  it takes the message
    element.nextElementSibling.style.color = "red"; //  it makes it red
    element.style.border = "solid 1px red"; //  adds a border
}

function removedisplayError(element) {
    element.style.border = ""; //  border is removed
    element.nextElementSibling.innerHTML = ""; //  message is also removed
}





function validateAllnames() { //  functon calls validation of first name and last name
    validateLName();
    validateFName();
}


function validDateCheck(startDate, endDate) { //  function takes two parameters
    var todaysDate = new Date(); //  create a variable called todays date checks the current date
    var dd = todaysDate.getDate(); //  returns the date
    var mm = todaysDate.getMonth() + 1; //  returns the month
    var yyyy = todaysDate.getFullYear(); //  returns the year
    if (dd < 10) {
        dd = '0' + dd; //  adds 0 infront of single digit dates
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    todaysDate = yyyy + '-' + mm + '-' + dd; //  puts it into the right format

    if (endDate == "") {
        if (startDate < todaysDate) { //  if the date is older than current date then it returns a false
            return false;
        }
        return true; //  else it returns a true
    }
    if (startDate < todaysDate || endDate == todaysDate || endDate == startDate || startDate > endDate) {
        return false;
    } else {
        return true;
    }

}