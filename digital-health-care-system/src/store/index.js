import{ createStore } from 'vuex';
import Patient from './modules/patient';
import Symptoms from './modules/symptoms';

const store = createStore({
  modules:{
    patient: Patient,
    symptoms: Symptoms
  }
});
export default store;