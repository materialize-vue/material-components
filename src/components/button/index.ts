import Component from 'vue-class-component';
import mdIcon from '../icon';

import waveEffect from '../../directives/wave-effect';

@Component({
    props: {
        type: {
            type: String,
            required: false,
            "default": null,
            twoWay: false
        },
        icon: {
            type: String,
            required: false,
            "default": null,
            twoWay: false
        },
        iconAlignRight: {
            type: Boolean,
            required: false,
            "default": false,
            twoWay: false
        },
        large: {
            type: Boolean,
            required: false,
            "default": false,
            twoWay: false
        },
        disabled: {
            type: Boolean,
            required: false,
            "default": false,
            twoWay: false
        },
        floating: {
            type: Boolean,
            required: false,
            "default": false,
            twoWay: false
        }
    },
    components: {
        mdIcon
    },
    directives: {
        waveEffect
    },
    template: require('./btn.html')
})
export default class Button {
    private type: string;
    private large: boolean;
    private disabled: boolean;
    private floating: boolean;

    get computedClasses() {
        var classes = {
            'btn-large': this.large,
            'disabled': this.disabled,
            'btn-floating': this.floating
        };
        classes[this.type ? "btn-" + this.type : "btn"] = true;
        return classes;
    }
}