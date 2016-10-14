const inputCommon = require('./inputCommon')
const inputTimeSelectComponent = inputCommon.extend({
    oninit(){
        this.observe({
            'val': (val)=> {
                if (val) {
                    const [hours,minutes,seconds] = val.split(':')
                    this.set('hours', hours)
                    this.set('minutes', minutes)
                    this.set('seconds', seconds)
                }
            },
            'defaultValue': (val)=> {
                if (val) {
                    const [hours,minutes,seconds] = val.split(':')
                    this.set('hours', hours)
                    this.set('minutes', minutes)
                    this.set('seconds', seconds)
                }
            },
            'hours minutes': (v, old, keyPath)=> {
                if (!this.get('hours') && this.get('minutes')) {
                    this.set('val', '00:' + this.get('minutes') + ':00')
                }
                if (this.get('hours') && !this.get('minutes')) {
                    this.set('val', this.get('hours') + ':00:00')
                }
                if (this.get('hours') && this.get('minutes')) {
                    this.set('val', this.get('hours') + ':' + this.get('minutes') + ':00' )
                }
            }
        })
    },
    template: require('ractive!./templates/inputTimeSelect.mustache'),
    data: ()=> {
        return {
            hours: '',
            minutes: '',
            seconds: '00',
            inputType: 'hidden',
            hoursAfter: '時',
            minutesAfter: '分'
        }
    },
    computed: {
        hoursList: ()=> {
            return ['', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
        },
        minutesList: ()=> {
            const arr = [''];
            let i = 0;
            while (i < 60) {
                let t;
                if (i < 10) {
                    t = '0' + i
                } else {
                    t = '' + i
                }
                arr.push(t)
                i = i + 1;
            }
            return arr
        }
    }
});
module.exports = inputTimeSelectComponent