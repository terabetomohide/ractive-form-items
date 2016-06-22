const inputCommon = require('./inputCommon')
const SelectBoxComponent = inputCommon.extend({
    onrender(){
        this.on({
            'selectValue': (event, value)=> {
                const required = (this.get('required')*1)
                if (!required && (this.get('val') === value)) {
                    this.set('val', null)
                } else {
                    this.set('val', value)
                }
                return false
            },
            'selectOther': ()=> {
                const isOther = (this.get('values').length === (this.get('val')) )
                const selectName = this.get('name')
                if (isOther) {
                    this.fire('showOther', selectName)
                } else {
                    this.fire('hideOther', selectName)
                }
            }
        })
        this.observe({
            val: (val)=> {
                const hasOther = (this.get('type') === 'selectOther');
                if (!hasOther) {
                    return
                }
                this.fire('selectOther')
            }
        })
    },
    template: require('ractive!./templates/inputSelectBox.mustache'),
    data: ()=> {
        return {
            layout: 'horizontal'
        }
    }
});
module.exports = SelectBoxComponent;