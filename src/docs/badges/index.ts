import Component from 'vue-class-component';
import collections from './collections';
import dropdowns from  './dropdowns';
import snippet from '../snippet';

var template = require('./badges.html');

@Component({
    template: template,
    components: {
        collections,
        dropdowns,
        snippet
    }
})
export default class Badges {
    data() {
        return {
            collectionsSnippet: require('./collections/collections.snippet.html'),
            dropdownsSnippet: require('./dropdowns/dropdowns.snippet.html')
        }
    }
}