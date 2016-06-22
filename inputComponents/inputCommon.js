const Ractive = require('ractive');
const inputCommonComponent = Ractive.extend({
    components: {
        Input: require('./input'),
        Label: Ractive.extend({template:require('ractive!../partials/label.mustache')})
    }
});
module.exports = inputCommonComponent;