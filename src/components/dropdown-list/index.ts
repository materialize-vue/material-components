import Component from 'vue-class-component';

import mbButton from '../button';
import mdDropdownItem from '../dropdown-item';

import Utils from '../utils';

@Component({
    components: {
        mbButton,
        mdDropdownItem
    },
    events: {
        "dropdown-list::close": function () {
            this.hide();
        },
        "dropdown-list::open": function (e) {
            this.open(e);
        }
    },
    template: require('./dropdown-list.html')
})
export default class DropdownList {
    private active: boolean;
    private style: any;

    data() {
        return {
            active: false,
            style: {}
        }
    }

    toggle(e: any) {
        (!this.active ? this.open : this.hide)(e);
    }

    open(e: any) {
        if (!this.active) {
            this.style = this.computeStyle(e.currentTarget);
            this.active = true;
        }
    }

    close() {
        this.hide();
    }

    hide() {
        if (this.active) {
            this.style = {};
            this.active = false;
        }
    }

    computeStyle(element: HTMLElement) {
        var offset = Utils.getOffset(element);
        var width = element.offsetWidth || 100;
        var top = offset.top  || 0;
        var left = offset.left  || 0;

        return {
            width: width + 'px',
            position: 'absolute',
            top: top + 'px',
            left: left + 'px',
            opacity: 1,
            display: 'block'
        };
    }

}