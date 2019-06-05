// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billTypeText = document.querySelector(".billType");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");

function textBillTotal(){
    var billTypeText = billTypeText.value;
    var billItems = billType.split(",");

    
    var callsTotal = 0;
    var smsTotal = 0;

    for (var i=0;i<billItems.length;i++){
        var billTypeEntered = billTypeText.value.trim();
        // update the correct total
        if (billTypeEntered === "bill"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }

    if (totalCost >= 30){
            totalCostElem.classList.add("warning");
            totalCostElem.classList.remove("danger");
        }    
    }
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.remove("warning");
        totalCostElem.classList.add("danger");
    }
    
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
}

addToBillBtn.addEventListener('click', addToBillBtn);