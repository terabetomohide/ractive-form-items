const Ractive = require('ractive');

const components = {
    hidden: require('./inputComponents/input'),
    input: require('./inputComponents/input'),
    textForm: require('./inputComponents/inputTextForm'),
    textArea: require('./inputComponents/inputTextArea'),
    select: require('./inputComponents/inputSelectBox'),
    selectOther: require('./inputComponents/inputSelectBox'),
    multiSelect: require('./inputComponents/inputSelectBox'),
    multiSelectOther: require('./inputComponents/inputSelectBox'),
    phone: require('./inputComponents/inputPhone'),
    jpName: require('./inputComponents/inputJpName'),
    simpleCheck: require('./inputComponents/inputSimpleCheck'),
    pullDown: require('./inputComponents/inputPullDown'),
    pullDownNumber: require('./inputComponents/inputPullDownNUmber'),
    datePicker: require('./inputComponents/inputDatePicker'),
    timeSelect: require('./inputComponents/inputTimeSelect'),
    dateTime: require('./inputComponents/inputDateTime'),
    dateSelect: require('./inputComponents/inputDateSelect'),
    multiSelectModels: require('./inputComponents/inputMultiSelectModels'),
    questions: require('./inputComponents/inputQuestions')
}

const FormItemsComponent = Ractive.extend({
    oninit(){
        this.on({
            'presetDefault': ()=> {
                var defaultValue = this.get('defaultValue');
                var val = this.get('val')
                if ((val === null) && (defaultValue !== null)) {
                    this.set('val', defaultValue)
                }
            }
        })
        this.fire('presetDefault')
    },
    template: require('ractive!./templates/formItemsComponent.mustache'),
    components: {
        InputComponent: function () {
            return components[this.get('type')] || Ractive.extend({template: 'component not found'})
        }
    },
    partials: {
        label: require('ractive!./partials/label.mustache'),
        description: require('ractive!./partials/description.mustache'),
        example: require('ractive!./partials/example.mustache'),
        note: require('ractive!./partials/note.mustache'),
        error: require('ractive!./partials/error.mustache'),
        required: require('ractive!./partials/required.mustache')
    },
    data: {
        showLabel: ()=> {
            if (this.get('type') == 'hidden') {
                return false
            }
            return true
        }
    }
})
module.exports = FormItemsComponent