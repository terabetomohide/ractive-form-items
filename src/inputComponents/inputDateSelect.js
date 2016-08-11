let inputCommon = require('./inputCommon')
let _ = require('lodash');
let inputValue = require('../helper/inputSelectValue');
let inputDateComponent = inputCommon.extend({
    oninit () {
        this.observe('year month day', function(val){
            let date = this.get('year')+'-'+this.get('month')+'-'+this.get('day');
            this.set('val',date);
        });
    },
    template: require('ractive!./templates/inputDateSelect.mustache'),
    components: {
        PullDown: require('./inputPullDown')
    },
    data: ()=>{
        return {
            selectedValue: inputValue.selected,
            year:null,
            month:null,
            day:null,
            yearList: function () {
                return []
            },
            monthList: function () {
                return []
            },
            dayList: function () {
                return []
            }
        }
    },
    computed:{
        yearList: function () {
            let l = [];
            _.range(1900, 2015).forEach(function (v) {
                l.push({val: v, title: v});
            });
            return l;
        },
        monthList: function () {
            let l = [];
            _.range(1, 13).forEach(function (v) {
                l.push({val: v, title: v});
            });
            return l;
        },
        dayList: function () {
            let l = [];
            _.range(1, 32).forEach(function (v) {
                l.push({val: v, title: v});
            });
            return l;
        }
    }
});
module.exports = inputDateComponent;