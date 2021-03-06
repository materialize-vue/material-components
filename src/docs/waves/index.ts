import Component from 'vue-class-component';

import defaultWaves from './default';

@Component({
    components: {
        docDefaultWaves: defaultWaves
    },
    template: require('./waves.html')
})
export default class Waves {
    data() {
        return {
            snippets: {
                defaultWaves: require('./default/default-waves.snippet.html')
            }
        }
    }
}