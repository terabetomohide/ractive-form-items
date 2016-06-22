const inputCommon = require('./inputCommon')
const TextFormComponent = inputCommon.extend({
    template: require('ractive!./templates/inputTextForm.mustache'),
});
module.exports = TextFormComponent;