function calculateBtnClicked() {
    var billTotal = 0;
    function clickedBtn(bill) {
        if (bill === "call") {
            billTotal += 2.75;
        }
        else if (bill === "sms") {
            billTotal += 0.75;
        }
        return "R" + billTotal.toFixed(2);
    }

    function criticalLevel() {
        if (billTotal >= 30)
        return "Red";
    }

    function warningLevel() {
        if(billTotal >= 20){
            return "Orange";
        }

        }
    return {
        clicked: clickedBtn,
        level1: criticalLevel,
        level2: warningLevel
    }
}




