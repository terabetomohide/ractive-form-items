const inputCommon = require('./inputCommon')
const inputSelectValue = require('../helper/inputSelectValue');
const PullDownComponent = inputCommon.extend({
    template: require('ractive!./templates/inputPullDown.mustache'),
    data: ()=>{
        return {
            selectedValue: inputSelectValue.selected
        }
    }
});
module.exports = PullDownComponent;