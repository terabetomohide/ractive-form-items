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
    onrender(){
        this.on({
            'presetDefault': ()=> {
                const val = this.get('val')
                const defaultValue = this.get('defaultValue');
                //todo formの初期化時の空の値が3つもあるのでできればすべてnullにしたい
                const valNotSet = ((val === undefined) || (val === null) || (val === ''))
                const defaultExist = ((defaultValue !== undefined) && (defaultValue !== null))
                //値が存在しないか空でかつデフォルト値が存在するとき
                if (valNotSet && defaultExist) {
                    this.set('val', defaultValue)
                }
            }
        })
        this.observe({
            'val': (val)=> {
                if ((typeof val === 'undefined') || (val === null) || (val === '')) {
                    return
                }
                if (this.get('selectOnce')) {
                    this.set('disabled', true)
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