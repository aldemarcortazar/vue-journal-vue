import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

const daybookModule = {
    namespaced: true,
    actions,
    mutations,
    getters, 
    state,
}

export default daybookModule;
