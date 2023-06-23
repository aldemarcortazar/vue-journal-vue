import { createStore, Store } from 'vuex';

import daybookModule from './../modules/daybook/store/index';



const store = createStore({
    modules: {
        journal: daybookModule,
    }
});

export default store;