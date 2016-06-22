const inputCommon = require('./inputCommon')
const _ = require('lodash')

module.exports = inputCommon.extend({
    onrender(){
        this.on({
            setDefaultQuestions: ()=> {
                const questions = _.cloneDeep(this.get('defaultQuestions'));
                (!this.get('val').length) && questions && this.set('val', questions);
            },
            addQuestion: ()=> {
                const newValue = _.cloneDeep(this.get('defaultQuestion'));
                newValue && this.push('values', newValue)
            },
            removeQuestion: (event, index)=> {
                this.splice('values', index, 1)
            },
            up: (event, index)=> {
                if (index > 0) {
                    const values = this.get('values')
                    const before = values[index - 1]
                    const current = values[index]
                    this.splice('values', index - 1, 2, current, before)
                }
            },
            down: (event, index)=> {
                const values = this.get('values')
                if ((index + 1) < values.length) {
                    const current = values[index]
                    const after = values[index + 1]
                    this.splice('values', index, 2, after, current)
                }
            }
        })
        this.observe({
            'val': (val)=> {
                this.set('values', val)
            },
            'values.*': ()=> {
                const values = this.get('values')
                const data = this.get('val') && this.get('val').length && _.each(values,
                        (v, i)=> {
                            v['name'] = 'question_' + (i)
                            return v
                        })
                this.set('val', data)
            }
        })
        this.fire('setDefaultQuestions');
    },
    template: require('ractive!./templates/inputQuestions.mustache'),
    components: {
        TextForm: require('./inputTextForm'),
        TextArea: require('./inputTextArea'),
        SelectBox: require('./inputSelectBox'),
        SimpleCheck: require('./inputSimpleCheck')
    },
    data: ()=> {
        return {
            val: [],
            values: [],
            noQuestionsText: '質問がありません',
            addQuestionText: '質問を追加',
            removeQuestionText: '質問を削除',
            selectDescription: '選択項目を改行で区切ってください',
            otherDescription: '「その他」の入力欄は自動で追加されます',
            _isSelect:(type)=>{
                if(type==='select'){return true}
                if(type==='multiSelect'){return true}
            },
            _isSelectOther:(type)=>{
                if(type==='selectOther'){return true}
                if(type==='multiSelectOther'){return true}
            }
        }
    }
})