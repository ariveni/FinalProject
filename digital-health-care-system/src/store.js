import {createStore} from 'vuex';

const store = createStore({
  state() {
    return {
      patient :{
            fullName: '',
            age: null,
            gender: '' ,
            symptoms: ''
        }
    }
  }
});
export default store;