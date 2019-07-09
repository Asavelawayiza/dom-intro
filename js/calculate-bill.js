//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
var billStringField = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

function calculateBtnClicked(){
    var billString = billStringField.value;
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    } 

    if(billTotal >= 30){
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning")    

    }
  else  if (billTotal >= 20){
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.add("warning");
      
    }
     
    else{
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger"); 
    }
    
    billTotalElement.innerHTML = billTotal.toFixed(2);
}
calculateBtn.addEventListener('click', calculateBtnClicked);


