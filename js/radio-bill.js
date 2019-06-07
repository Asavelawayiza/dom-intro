// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");


var callsTotal1 = 0;
var smsTotal1 = 0;
var totalCost1 = 0;


function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    
    var checkedRadioBtn1 = checkedRadioBtn.value;
    if (checkedRadioBtn1 === "call") {
        callsTotal1 += 2.75;
    }
    else if (checkedRadioBtn1 === "sms") {
        smsTotal1 += 0.75;
    }

    callTotalTwoElem.innerHTML = callsTotal1.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal1.toFixed(2);
    var totalCost1 = callsTotal1 + smsTotal1;
    totalTwoElem.innerHTML = totalCost1.toFixed(2);


    if (totalCost1 >= 30) {
        totalTwoElem.classList.add("warning");
        totalTwoElem.classList.remove("danger");
    }

    if (totalCost1 >= 50) {
        // adding the danger class will make the text red
        totalTwoElem.classList.remove("warning");
        totalTwoElem.classList.add("danger");
    }
}

radioBillAddBtn.addEventListener('click', radioBillTotal)

