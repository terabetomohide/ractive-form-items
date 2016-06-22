const inputCommon = require('./inputCommon')
const inputMultiSelectModelsComponent = inputCommon.extend({
        oninit(){
            const modelName = this.get('modelName')
            modelName && this.set('model', this.parent.get(modelName))
            modelName && this.set('template',this.parent.get('template.'+modelName))
        },
        onrender(){
            this.on({
                'showList': ()=> {
                    this.set('showList', true)
                },
                'hideList': ()=> {
                    this.set('showList', false)
                },
                'toggleList': (event, id)=> {
                    let vals = this.get('val')
                    if (!vals) {
                        vals = []
                    }
                    const index = vals.indexOf(id)
                    if (index === -1) {
                        vals.push(id)
                    } else {
                        vals.splice(index, 1)
                    }
                    this.set('val', vals)
                    return false
                }
            })
        },
        template: require('ractive!./templates/inputMultiSelectModels.mustache'),
        components: {
            TextForm: require('./inputTextForm')
        },
        data: ()=>{
            return {
                modelName: null,
                showListText: 'リストを表示',
                hideListText: 'リストを隠す',
            }
        }
    })
module.exports = inputMultiSelectModelsComponent;