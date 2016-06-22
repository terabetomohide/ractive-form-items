const Ractive = require('ractive');
const InputComponent = Ractive.extend({
    template: '<input class="form-control {{valueClass}}" name="{{name}}" type="{{inputType}}" placeholder="{{placeholder}}" value="{{val}}"/>'
});
module.exports = InputComponent;