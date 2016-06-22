const inputCommon = require('./inputCommon')
const inputPhoneComponent = inputCommon.extend({
    oninit(){
        this.observe({
            'val': (val)=> {
                if (val) {
                    const valArr = val.split(this.get('delimiter'))
                    this.set({
                        firstNum: valArr[0],
                        secondNum: valArr[1],
                        thirdNum: valArr[2]
                    })
                }
            },
            'firstNum secondNum thirdNum': (v, old, keyPath)=> {
                const dl = this.get('delimiter')
                const val = this.get('firstNum') + dl + this.get('secondNum') + dl + this.get('thirdNum')
                this.set('val', val)
            }
        })
    },
    template: require('ractive!./templates/inputPhone.mustache'),
    data: ()=> {
        return {
            firstNum: '',
            secondNum: '',
            thirdNum: '',
            delimiter: '-'
        }
    }
});
module.exports = inputPhoneComponent