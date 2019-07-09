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

}