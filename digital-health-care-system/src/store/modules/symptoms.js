export default {
  namespaced: true,
  state() {
    return {
      symptomsCategory: [
        {
          category:'Brain/Nervous System',
          symptoms:['Anxiety', 'Mood Swings', 'Altered Sensorium', 'Depression', 'Irritability', 'Slurred Speech', 'Visual Disturbances', 'Lack Of Concentration']

        },
        {
          category:'Circulatory System',
          symptoms:['Cold Hands And Feet', 'Acute Liver Failure', 'Swollen Blood Vessels', 'Prominent Veins On Calf', 'Fluid Overload ', 'Receiving Blood Transfusion']

        },
        {
          category:'Head',
          symptoms:['Headache', 'Dizziness', 'Sinus Pressure']

        },
        {
          category:'Neck',
          symptoms:['Neck Pain', 'Stiff Neck']

        },
        {
          category:'Eyes',
          symptoms:['Redness Of Eyes', 'Blurred And Distorted Vision', 'Watering From Eyes', 'Pain Behind The Eyes', 'Yellowing Of Eyes', 'Sunken Eyes']
        },
        {
          category:'Respiratory Systemyes',
          symptoms:['Continuous Sneezing', 'Runny Nose', 'Congestion', 'Cough', 'Breathlessness', 'Phlegm', 'Chest Pain']
        },
        {
          category:'Skin',
          symptoms:['Itching', 'Skin Rash', 'Nodal Skin Eruptions', 'Yellowish Skin', 'Red Spots Over Body', 'Skin Peeling', 'Silver Like Dusting', 'Blister', 'Red Sore Around Nose', 'Yellow Crust Ooze', 'Pus Filled Pimples', 'Blackheads', 'Bruising', 'Puffy Face And Eyes', 'Brittle Nails', 'Dischromic Patches']

        },
        {
          category:'Heart',
          symptoms:['Fast Heart Rate', 'Palpitations']
        },
        {
          category:'Muscular',
          symptoms:['Joint Pain', 'Muscle Wasting', 'Muscle Weakness', 'Muscle Pain', 'Cramps', 'Swelled Lymph Nodes', 'Knee Pain', 'Hip Joint Pain', 'Movement Stiffness', 'Swollen Extremities']
        },
        {
          category:'Stomach',
          symptoms:['Joint Pain', 'Muscle Wasting', 'Muscle Weakness', 'Muscle Pain', 'Cramps', 'Swelled Lymph Nodes', 'Knee Pain', 'Hip Joint Pain', 'Movement Stiffness', 'Swollen Extremities']
        },
        {
          category:'Endocrine System',
          symptoms:['Irregular Sugar Level', 'Enlarged Thyroid', 'Obesity']
        },
        {
          category:'Digestive System',
          symptoms:['Nausea', 'Back Pain', 'Swelling Of Stomach', 'Pain During Bowel Movements', 'Pain In Anal Region', 'Bloody Stool', 'Irritation In Anus', 'Passage Of Gases', 'Belly Pain', 'Increased Appetite', 'Mucoid Sputum', 'Rusty Sputum', 'Blood In Sputum', 'Scurring', 'Small Dents In Nails', 'Inflammatory Nails']

        },
        {
          category:'Reproductive System',
          symptoms:['Abnormal Menstruation', 'Extra Marital Contacts']
        },
        {
          category:'Urine',
          symptoms:['Spotting Urination', 'Yellow Urine', 'Foul Smell Of Urine', 'Continuous Feel Of Urine', 'Bladder Discomfort', 'Dark Urine', 'Polyuria', 'Passage Of Gases']
        },
        {
          category:'Legs',
          symptoms:['Swollen Legs', 'Painful Walking', 'Swelling Of Joints']
        },
        {
          category:'Whole Body',
          symptoms:['Chills', 'Shivering', 'Fatigue', 'Weight Gain', 'Weight Loss', 'Restlessness', 'Lethargy', 'High Fever', 'Sweating', 'Dehydration', 'Mild Fever','High Fever', 'Malaise', 'Weakness In Limbs', 'Unsteadiness', 'Weakness Of One Body Side', 'Loss Of Smell', 'Toxic Look (Typhos)', 'Coma', 'Excessive Hunger', 'Loss Of Balance', 'Spinning Movements', 'Internal Itching', 'Family History', 'Receiving Unsterile Injections', 'History Of Alcohol Consumption']

        }
      ],
      location : ''
    }
  },
  mutations:{
    addLocation(state,data)
    {
      console.log(data);
      state.location = data;
    }
  },
  actions:{
    addLocation(context, data)
    {
      console.log("addLocation Action");
      context.commit('addLocation', data);
    }
  },
  getters:{
    getLocations(state)
    {
      console.log("Getting Locations");
      const symploc = [];
      for(const loc of state.symptomsCategory )
      {
        symploc.push(loc.category);
      }
      console.log(symploc);
      return symploc;
    },
    getSymptoms(state)
    {
      console.log("Getting Symptoms");
      const sym = [];
      for(const loc of state.symptomsCategory )
      {
        if(loc.category === state.location)
        {
          return  loc.symptoms;
        }
      }
      return sym;
    }
  }
}