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
    empty(state){
      state.patient.disease = '';
      state.patient.symptoms = [];
      state.patient.prescription = [];
    },
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
    },
    addSymptom(state,data)
    {
      state.patient.symptoms.push(data)
      console.log("added symptom");
    },
    dropSymptom(state,data)
    {
      state.patient.symptoms = state.patient.symptoms.filter((item)=> item != data);
      console.log("droped symptom");
    }
  },
  actions:{
    empty(context)
    {
      context.commit('empty')
    },
    async addPatient(context, data)
    {
      console.log("Adding new Patient");
      context.commit('addPatient', data);
      console.log('action done');
    },
    addSymptom(context,data)
    {
      context.commit('addSymptom',data);
    },
    dropSymptom(context,data)
    {
      context.commit('dropSymptom',data);
    }
  },
  getters: {
    patient(state){
      return state.patient
    },
    symptoms(state)
    {
      return state.patient.symptoms;
    }
  }
}