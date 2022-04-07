import { ref } from '../node_modules/vue/dist/vue.esm-browser.js';

let item = {
    template: `<div>{{count}}</div>`,
    setup() {
        let count = ref(0);
        return {
            count
        };
    }
};

export default item;
