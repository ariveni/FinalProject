export default {
  namespaced: true,
  state() {
    return {
      patient : {
        fullname: '',
        age: null,
        gender: '',
        symptoms: [],
        disease:'',
        prescription:[],
      }
    }
  },
  mutations:{
    addPatient(state, data){
      console.log('add patient',data);
      state.patient.fullname = data.fullname;
      state.patient.age = data.age;
      state.patient.gender = data.gender;
      console.log(state.patient);
    },
    setDisease(state,data)
    {
      console.log('add disease',data);
      state.patient.disease=data;
      console.log(state.patient);
    },
    setPrescription(state,data)
    {
      console.log('add prescription',data);
      state.patient.prescription=data;
      console.log(state.patient);
    }
  },
  actions:{
    async addPatient(context, data)
    {
      console.log("Adding new Patient");
      context.commit('addPatient', data);
      console.log('action done');
    }
  },
  getters: {
    patient(state){
      return state.patient
    }
  }
}