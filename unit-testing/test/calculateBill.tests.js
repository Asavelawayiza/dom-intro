
describe('calculateBill test' , function(){
    it('should return R2.75 when call is entered in the input box' , function(){
        var button = calculateBtnClicked();
        assert.equal(button.clicked('call'), 'R2.75');

    })
    it('should return R0.75 when sms is entered in the input box' , function(){
        var button = calculateBtnClicked();
        assert.equal(button.clicked('sms'), 'R0.75');
    })
    it('should return R0.00 when no bill is entered in the input box' , function(){
        var button = calculateBtnClicked();
        assert.equal(button.clicked(''), 'R0.00');
    })
    it('should return Orange when  warning level is reached in the input box' , function(){
        var button = calculateBtnClicked();
        button.clicked('call')
        button.clicked('call')
        button.clicked('call')
        button.clicked('sms')
        button.clicked('sms')
        button.clicked('call')
        button.clicked('call')
        button.clicked('sms')
        button.clicked('call')
        button.clicked('call')
        button.clicked('call')
    
        assert.equal(button.level2(), 'Orange');
    })
    it('should return Red when critical level is reached in the input box' , function(){
        var button = calculateBtnClicked();
        button.clicked('call')
        button.clicked('call')
        button.clicked('call')
        button.clicked('sms')
        button.clicked('sms')
        button.clicked('call')
        button.clicked('call')
        button.clicked('sms')
        button.clicked('call')
        button.clicked('call')
        button.clicked('call')
        button.clicked('call')
        button.clicked('call')
        button.clicked('call')
    
        assert.equal(button.level1(), 'Red');
    })
    
});