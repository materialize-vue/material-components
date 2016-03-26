import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';
import bindBoolean from '../../../directives/bind-boolean';

@Component({
    props: {
        disabled: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    directives: {
        bindBoolean
    },
    mixins: [
        inputMixin
    ],
    template: require('./switch.html')
})
export default class Switch {
}