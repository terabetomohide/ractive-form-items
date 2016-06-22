const inputCommon = require('./inputCommon')
const TextAreaComponent = inputCommon.extend({
    oncomplete(){
        const initValue = this.get('val');
        initValue && this.set('val', initValue.replace('\\n', '\n'))
    },
    template: require('ractive!./templates/inputTextArea.mustache'),
    data: ()=> {
        return {
            //inputCommon default
        }
    }
});
module.exports = TextAreaComponent;