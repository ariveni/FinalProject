import{ createStore } from 'vuex';
import Patient from './modules/patient';

const store = createStore({
  modules:{
    patient: Patient
  }
});
export default store;