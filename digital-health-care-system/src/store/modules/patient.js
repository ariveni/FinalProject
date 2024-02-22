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
    initializeData(state)
    {
      state.patient = {
        fullname: '',
        age: null,
        gender: '',
        symptoms: [],
        disease:'',
        prescription:[],
      }
    },
    async getDisease(state)
    {
      await fetch('http://127.0.0.1:8000/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.patient.symptoms),
      }).then(response=>{
        if(response.ok){
          return response.json();
        }
      }).then((data)=>{
        console.log('add disease',data.disease);
        console.log('add disease',data.prescription);
        state.patient.disease=data.disease;
        state.patient.prescription = data.prescription;
      });
      console.log(state.patient.disease);
    },
    addPatient(state, data){
      console.log('add patient',data);
      state.patient.fullname = data.fullname;
      state.patient.age = data.age;
      state.patient.gender = data.gender;
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
    initializeData(context)
    {
      context.commit('initializeData');
    },
    getDisease(context)
    {
      
      context.commit('getDisease');
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