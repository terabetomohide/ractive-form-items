const inputCommon = require('./inputCommon')
const SimpleCheckComponent = inputCommon.extend({
    onrender(){
        this.on({
            'toggleValue': ()=> {
                if (this.get('val') * 1) {
                    this.set('val', 0)
                    return;
                }
                this.set('val', 1)
                return false
            }
        })
        this.observe({
            //valがセットされていない時は必ず0を返す
            'val': (val)=> {
                if (val===null) {
                    this.set('val', 0)
                }
            }
        })
    },
    template: require('ractive!./templates/inputSimpleCheck.mustache')
});
module.exports = SimpleCheckComponent;