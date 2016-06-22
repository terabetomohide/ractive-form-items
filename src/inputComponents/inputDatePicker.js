const inputCommon = require('./inputCommon')
const pikaday = require('pikaday');
const moment = require('moment');

const DatePickerComponent = inputCommon.extend({
    onrender(){
        new pikaday({
            field: this.find('input'),
            //format: 'YYYY/MM/DD',
            //最初に表示された際に選択されている日付
            //defaultDate: new Date('2012-12-12'),
            //初期化する際にdefaultDateで指定された日付を入力フォームに入力しておくか
            //setDefaultDate: true,
            //カレンダーで表示する最初の曜日(0: Sunday, 1: Monday, etc)
            //firstDay: 1,
            //選択することができる最小の日付
            //minDate: new Date('1999-12-10'),
            //選択することができる最大の日付
            //maxDate: new Date('2015-12-24'),
            //プルダウンで選択することができる日付の範囲(ex 10 or [2000, 2020])
            //yearRange: [1999, 2015],
            //カレンダーの日付の表示順序を逆にするか
            isRTL: false,
            //国際化
            i18n: {
                previousMonth : '前の月',
                nextMonth     : '次の月',
                months        : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
                weekdays      : ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
                weekdaysShort : ['日','月','火','水','木','金','土']
            },
            //カレンダーの年の後に表示する文字列
            yearSuffix: '年',
            //年の後に月を表示するか
            showMonthAfterYear: true
        });
    },
    template: require('ractive!./templates/inputDatePicker.mustache'),
    partials: {},
    data: ()=>{
        return {
            inputType:'text',
        }
    }
});
module.exports = DatePickerComponent