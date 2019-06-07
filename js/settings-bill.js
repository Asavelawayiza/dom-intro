// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
var updateSettingsElem = document.querySelector(".updateSettings");
var addBtn = document.querySelector(".addBtn");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");



var calls = 0;
var sms = 0;
var total = 0;
var warning = 0;
var critical = 0;

function billType() {

    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItemTypeWithSettings1 = billItemTypeWithSettings.value;
    if (billItemTypeWithSettings1 === "call") {
        calls += Number(callCostSetting.value);
    }
    else if (billItemTypeWithSettings1 === "sms") {
        sms += Number(smsCostSetting.value);
    }

    callTotalSettingsElem.innerHTML = calls.toFixed(2);
    smsTotalSettingsElem.innerHTML = sms.toFixed(2);
    total = calls + sms;
    totalSettingsElem.innerHTML = total.toFixed(2);

    if (total >= warningLevelSettingElem.value) {
        totalSettingsElem.classList.add("warning")
    }
    if (total >= criticalLevelSettingElem.value) {
        totalSettingsElem.classList.add("danger")
        addBtn.disabled = true;
    }
}

function updateSettings() {
    var warningSttn = warningLevelSettingElem.value;
    var criticalSttn = criticalLevelSettingElem.value;
  
    if (updateSettingsElem) {
        addBtn.disabled = false; 
    
        if (total >= warningSttn) {
            totalSettingsElem.classList.remove("danger")
            totalSettingsElem.classList.add("warning")
        }    
    
     else   if (total >= criticalSttn) {
            totalSettingsElem.classList.add("danger")
            totalSettingsElem.classList.remove("warning")
        }
     
    else {
         totalSettingsElem.classList.remove("warning")
         totalSettingsElem.classList.remove("danger")
        
     }
    }
  
}

addBtn.addEventListener('click', billType)
updateSettingsElem.addEventListener('click', updateSettings);