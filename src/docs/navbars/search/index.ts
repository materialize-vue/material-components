import Component from 'vue-class-component';

import mdNavbar from '../../../components/navbar';
import mdIcon from '../../../components/icon';

@Component({
    components: {
        mdNavbar,
        mdIcon
    },
    template: require('./navbars.html')
})
export default class SearchNavbar {
    data() {
        return {
        }
    }
}