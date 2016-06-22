const inputCommon = require('./inputCommon')
const inputJpNameComponent = inputCommon.extend({
    oninit(){
        this.observe({
            'val': (val)=> {
                if (val) {
                    const valArr = val.split(this.get('delimiter'))
                    this.set({
                        secondName: valArr[0],
                        firstName: valArr[1]
                    })
                }
            },
            'secondName firstName': (v, old, keyPath)=> {
                const dl = this.get('delimiter')
                const val = this.get('secondName') + dl + this.get('firstName')
                this.set('val', val)
            }
        })
    },
    template: require('ractive!./templates/inputJpName.mustache'),
    data: ()=> {
        return {
            type: 'hidden',
            firstName: '',
            secondName: '',
            firstNameLabel: '名',
            secondNameLabel: '姓',
            delimiter: ' '
        }
    }
});
module.exports = inputJpNameComponent