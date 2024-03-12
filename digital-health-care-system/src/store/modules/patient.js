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
      const sympt =[]
      for( const symptom of state.patient.symptoms)
      {
        sympt.push(symptom.name);
      }
      
        console.log("The api");
        const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "symptoms": sympt
        })
      });
      if(!response.ok){
        console.log("The error");
        throw new Error('Failed to Fetch data');
      }
      const data = await response.json();
      state.patient.disease = data.disease;
      state.patient.prescription = data.prescription;
      console.log("The Data");
        
      
        
        
        
        
        // console.log('add disease',data.prescription);
        // state.patient.disease=data.disease;
        // state.patient.prescription = data.prescription;
      
      console.log("Store");
      console.log(new Date());
      console.log(state.patient);
      
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
      state.patient.symptoms = state.patient.symptoms.filter((item)=> item.name != data);
      console.log("droped symptom");
    }
  },
  actions:{
    initializeData(context)
    {
      context.commit('initializeData');
    },
    async getDisease(context)
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
    },
    getSymptomsCount(state)
    {
      console.log("length"+ state.patient.symptoms.length);
      return state.patient.symptoms.length;
    }
  }
}