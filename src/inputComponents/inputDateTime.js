const inputCommon = require('./inputCommon')
const moment = require('moment')

module.exports = inputCommon.extend({
    onrender(){
        this.observe({
            'val': (val)=> {
                if (val) {
                    const [date, time] = val.split(' ')
                    this.set('date', date)
                    this.set('time', time)
                }
            },
            'date time': ()=> {
                const dateTime = this.get('date') + ' ' + this.get('time')
                this.set('val', dateTime)
            }
        })
    },
    template: require('ractive!./templates/inputDateTime.mustache'),
    components: {
        DatePicker: require('./inputDatePicker'),
        TimeSelect: require('./inputTimeSelect')
    },
    data: ()=> {
        return {
            date: moment().format('YYYY-MM-DD'),
            time: '00:00:00'
        }
    }
})