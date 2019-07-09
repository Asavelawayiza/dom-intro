var billStringField = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector

var bills = calculateBtnClicked();
calculateBtn.addEventListener('click', function(){
    bills.clicked();
    billTotalElement.innerHTML = bills.clicked()
});

 var roundedBillTotal = billTotalElement;

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

calculateBtn.addEventListener('click', calculateBtnClicked);


