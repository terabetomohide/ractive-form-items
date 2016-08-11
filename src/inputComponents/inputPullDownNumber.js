const inputCommon = require('./inputCommon')
const inputSelectValue = require('../helper/inputSelectValue');
module.exports = inputCommon.extend({
    onrender(){
        const min = this.get('min') * 1 || 0
        const max = this.get('max') * 1 + 1
        const rangeArr = _.range(min, max)
        const rangeValues = _.map(rangeArr, (n)=> {
            return {
                value: n,
                title: n
            }
        })
        //空の選択肢追加
        rangeValues.unshift({
            value: null,
            title: '-'
        })
        this.set('values', rangeValues)
    },
    template: require('ractive!./templates/inputPullDownNumber.mustache'),
    data: ()=> {
        return {
            selectedValue: inputSelectValue.selected
        }
    }
});
