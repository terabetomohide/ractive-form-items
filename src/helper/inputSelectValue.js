/**
 * select項目で使う関数
 */

let _ = require('lodash');

let inputSelectValue = {};
/**
 * 選択されたoptionのvalueを返す
 * 複数のときはvalueを<br>タグでつなぐ
 * @param values (array) キー、値のリスト
 * @param val (str) 値
 * @param valName (str) 値のキー名
 * @returns {*} キー、値のオブジェクト
 */
inputSelectValue.selected = (values, val, valName) => {
    if (_.isArray(val)) {
        let arr = [];
        _.map(val, function (v) {
            let result = _.find(values, {val: v});
            result && arr.push(result[valName]);
        });
        return arr.join('<br>');
    } else {
        let result = _.find(values, {val: val})
        return result && result[valName];
    }
};
/**
 * currentがactiveValuesの中に含まれるかどうか
 * @param current (str)
 * @param activeValues (array || str)
 * @returns {boolean}
 */
inputSelectValue.exists = (current, activeValues) => {
    if (_.isArray(activeValues)) {
        if (_.indexOf(val, current) > -1) {
            return true;
        }
    }
    if (current === activeValues) {
        return true;
    }
};
module.exports = inputSelectValue;