export default {
  namespaced: true,
  state() {
    return {
      symptomsCategory:  [
        {
          category:'Brain/Nervous System',
          symptoms:[{name:"Anxiety",status:false},
          {name:"Mood Swings",status:false},
          {name:"Altered Sensorium",status:false},
          {name:"Depression",status:false},
          {name:"Irritability",status:false},
          {name:"Slurred Speech",status:false},
          {name:"Visual Disturbances",status:false},
          {name:"Lack Of Concentration",status:false}
          ]

        },
        {
          category:'Circulatory System',
          symptoms:[
            {name:"Cold Hands And Feets",status:false},
            {name:"Acute Liver Failure",status:false},
            {name:"Swollen Blood Vessels",status:false},
            {name:"Prominent Veins On Calf",status:false},
            {name:"Receiving Blood Transfusion",status:false}
          ]

        },
        {
          category:'Head',
          symptoms:[
            {name:"Headache",status:false},
            {name:"Dizziness",status:false},
            {name:"Sinus Pressure",status:false}
          ]

        },
        {
          category:'Neck',
          symptoms:[
            {name:"Neck Pain",status:false},
            {name:"Stiff Neck",status:false}
          ]

        },
        {
          category:'Eyes',
          symptoms:[
            {name:"Redness Of Eyes",status:false},
            {name:"Blurred And Distorted Vision",status:false},
            {name:"Watering From Eyes",status:false},
            {name:"Pain Behind The Eyes",status:false},
            {name:"Yellowing Of Eyes",status:false},
            {name:"Sunken Eyes",status:false}
          ]
        },
        {
          category:'Respiratory System',
          symptoms:[
            {name:"Continuous Sneezing",status:false},
            {name:"Runny Nose",status:false},
            {name:"Congestion",status:false},
            {name:"Cough",status:false},
            {name:"Breathlessness",status:false},
            {name:"Phlegm",status:false},
            {name:"Chest Pain",status:false}
          ]
          
        },
        {
          category:'Skin',
          symptoms:[
            {name:"Itching",status:false},
            {name:"Skin Rash",status:false},
            {name:"Nodal Skin Eruptions",status:false},
            {name:"Yellowish Skin",status:false},
            {name:"Red Spots Over Body",status:false},
            {name:"Skin Peeling",status:false},
            {name:"Silver Like Dusting",status:false},
            {name:"Blister",status:false},
            {name:"Red Sore Around Nose",status:false},
            {name:"Yellow Crust Ooze",status:false},
            {name:"Pus Filled Pimples",status:false},
            {name:"Blackheads",status:false},
            {name:"Bruising",status:false},
            {name:"Puffy Face And Eyes",status:false},
            {name:"Brittle Nails",status:false},
            {name:"Dischromic  Patches",status:false}
          ]

        },
        {
          category:'Heart',
          symptoms:[
            {name:"Fast Heart Rate",status:false},
            {name:"Palpitations",status:false}
          ]
          
        },
        {
          category:'Muscular',
          symptoms:[
            {name:"Joint Pain",status:false},
            {name:"Muscle Wasting",status:false},
            {name:"Muscle Weakness",status:false},
            {name:"Muscle Pain",status:false},
            {name:"Cramps",status:false},
            {name:"Swelled Lymph Nodes",status:false},
            {name:"Knee Pain",status:false},
            {name:"Hip Joint Pain",status:false},
            {name:"Movement Stiffness",status:false},
            {name:"Swollen Extremeties",status:false}
          ]
        },
        {
          category:'Stomach',
          symptoms:[
            {"name":"Stomach Pain","status":false},
            {"name":"Acidity","status":false},
            {"name":"Vomiting","status":false},
            {"name":"Burning Micturition","status":false},
            {"name":"Indigestion","status":false},
            {"name":"Abdominal Pain","status":false},
            {"name":"Constipation","status":false},
            {"name":"Diarrhoea","status":false},
            {"name":"Stomach Bleeding","status":false},
            {"name":"Distention Of Abdomen","status":false}
        ]        
        },
        {
          category:'Endocrine System',
          symptoms:[
            {name:"Irregular Sugar Level",status:false},
            {name:"Enlarged Thyroid",status:false},
            {name:"Obesity",status:false}
          ]
          
        },
        {
          category:'Digestive System',
          symptoms:[
            {name:"Nausea",status:false},
            {name:"Back Pain",status:false},
            {name:"Swelling Of Stomach",status:false},
            {name:"Pain During Bowel Movements",status:false},
            {name:"Pain In Anal Region",status:false},
            {name:"Bloody Stool",status:false},
            {name:"Irritation In Anus",status:false},
            {name:"Passage Of Gases",status:false},
            {name:"Belly Pain",status:false},
            {name:"Increased Appetite",status:false},
            {name:"Mucoid Sputum",status:false},
            {name:"Rusty Sputum",status:false},
            {name:"Blood In Sputum",status:false},
            {name:"Scurring",status:false},
            {name:"Small Dents In Nails",status:false},
            {name:"Inflammatory Nails",status:false}
          ]          
        },
        {
          category:'Reproductive System',
          symptoms:[
            {name:"Abnormal Menstruation",status:false},
            {name:"Extra Marital Contacts",status:false}
          ]
          
        },
        {
          category:'Urine',
          symptoms:[
            {name:"Spotting  urination",status:false},
            {name:"Yellow Urine",status:false},
            {name:"Foul Smell Of urine",status:false},
            {name:"Continuous Feel Of Urine",status:false},
            {name:"Bladder Discomfort",status:false},
            {name:"Dark Urine",status:false},
            {name:"Polyuria",status:false},
            {name:"Passage Of Gases",status:false}
          ]
          
        },
        {
          category:'Legs',
          symptoms:[
            {name:"Swollen Legs",status:false},
            {name:"Painful Walking",status:false},
            {name:"Swelling Joints",status:false}
          ]
          
        },
        {
          category:'Whole Body',
          symptoms:[
            {name:"Chills",status:false},
            {name:"Shivering",status:false},
            {name:"Fatigue",status:false},
            {name:"Weight Gain",status:false},
            {name:"Weight Loss",status:false},
            {name:"Restlessness",status:false},
            {name:"Lethargy",status:false},
            {name:"Sweating",status:false},
            {name:"Dehydration",status:false},
            {name:"Mild Fever",status:false},
            {name:"High Fever",status:false},
            {name:"Malaise",status:false},
            {name:"Weakness In Limbs",status:false},
            {name:"Unsteadiness",status:false},
            {name:"Weakness Of One Body Side",status:false},
            {name:"Loss Of Smell",status:false},
            {name:"Toxic Look (typhos)",status:false},
            {name:"Coma",status:false},
            {name:"Excessive Hunger",status:false},
            {name:"Loss Of Balance",status:false},
            {name:"Spinning Movements",status:false},
            {name:"Internal Itching",status:false},
            {name:"Family History",status:false},
            {name:"Receiving Unsterile Injections",status:false},
            {name:"History Of Alcohol Consumption",status:false}
        ]
        

        }
      ],
      location : ''
    }
  },
  mutations:{
    addData(state)
    {
      state.symptomsCategory = [
        {
          category:'Brain/Nervous System',
          symptoms:[{name:"Anxiety",status:false},
          {name:"Mood Swings",status:false},
          {name:"Altered Sensorium",status:false},
          {name:"Depression",status:false},
          {name:"Irritability",status:false},
          {name:"Slurred Speech",status:false},
          {name:"Visual Disturbances",status:false},
          {name:"Lack Of Concentration",status:false}
          ]

        },
        {
          category:'Circulatory System',
          symptoms:[
            {name:"Cold Hands And Feets",status:false},
            {name:"Acute Liver Failure",status:false},
            {name:"Swollen Blood Vessels",status:false},
            {name:"Prominent Veins On Calf",status:false},
            {name:"Receiving Blood Transfusion",status:false}
          ]

        },
        {
          category:'Head',
          symptoms:[
            {name:"Headache",status:false},
            {name:"Dizziness",status:false},
            {name:"Sinus Pressure",status:false}
          ]

        },
        {
          category:'Neck',
          symptoms:[
            {name:"Neck Pain",status:false},
            {name:"Stiff Neck",status:false}
          ]

        },
        {
          category:'Eyes',
          symptoms:[
            {name:"Redness Of Eyes",status:false},
            {name:"Blurred And Distorted Vision",status:false},
            {name:"Watering From Eyes",status:false},
            {name:"Pain Behind The Eyes",status:false},
            {name:"Yellowing Of Eyes",status:false},
            {name:"Sunken Eyes",status:false}
          ]
        },
        {
          category:'Respiratory System',
          symptoms:[
            {name:"Continuous Sneezing",status:false},
            {name:"Runny Nose",status:false},
            {name:"Congestion",status:false},
            {name:"Cough",status:false},
            {name:"Breathlessness",status:false},
            {name:"Phlegm",status:false},
            {name:"Chest Pain",status:false}
          ]
          
        },
        {
          category:'Skin',
          symptoms:[
            {name:"Itching",status:false},
            {name:"Skin Rash",status:false},
            {name:"Nodal Skin Eruptions",status:false},
            {name:"Yellowish Skin",status:false},
            {name:"Red Spots Over Body",status:false},
            {name:"Skin Peeling",status:false},
            {name:"Silver Like Dusting",status:false},
            {name:"Blister",status:false},
            {name:"Red Sore Around Nose",status:false},
            {name:"Yellow Crust Ooze",status:false},
            {name:"Pus Filled Pimples",status:false},
            {name:"Blackheads",status:false},
            {name:"Bruising",status:false},
            {name:"Puffy Face And Eyes",status:false},
            {name:"Brittle Nails",status:false},
            {name:"Dischromic  Patches",status:false}
          ]

        },
        {
          category:'Heart',
          symptoms:[
            {name:"Fast Heart Rate",status:false},
            {name:"Palpitations",status:false}
          ]
          
        },
        {
          category:'Muscular',
          symptoms:[
            {name:"Joint Pain",status:false},
            {name:"Muscle Wasting",status:false},
            {name:"Muscle Weakness",status:false},
            {name:"Muscle Pain",status:false},
            {name:"Cramps",status:false},
            {name:"Swelled Lymph Nodes",status:false},
            {name:"Knee Pain",status:false},
            {name:"Hip Joint Pain",status:false},
            {name:"Movement Stiffness",status:false},
            {name:"Swollen Extremeties",status:false}
          ]
        },
        {
          category:'Stomach',
          symptoms:[
            {"name":"Stomach Pain","status":false},
            {"name":"Acidity","status":false},
            {"name":"Vomiting","status":false},
            {"name":"Burning Micturition","status":false},
            {"name":"Indigestion","status":false},
            {"name":"Abdominal Pain","status":false},
            {"name":"Constipation","status":false},
            {"name":"Diarrhoea","status":false},
            {"name":"Stomach Bleeding","status":false},
            {"name":"Distention Of Abdomen","status":false}
        ]        
        },
        {
          category:'Endocrine System',
          symptoms:[
            {name:"Irregular Sugar Level",status:false},
            {name:"Enlarged Thyroid",status:false},
            {name:"Obesity",status:false}
          ]
          
        },
        {
          category:'Digestive System',
          symptoms:[
            {name:"Nausea",status:false},
            {name:"Back Pain",status:false},
            {name:"Swelling Of Stomach",status:false},
            {name:"Pain During Bowel Movements",status:false},
            {name:"Pain In Anal Region",status:false},
            {name:"Bloody Stool",status:false},
            {name:"Irritation In Anus",status:false},
            {name:"Passage Of Gases",status:false},
            {name:"Belly Pain",status:false},
            {name:"Increased Appetite",status:false},
            {name:"Mucoid Sputum",status:false},
            {name:"Rusty Sputum",status:false},
            {name:"Blood In Sputum",status:false},
            {name:"Scurring",status:false},
            {name:"Small Dents In Nails",status:false},
            {name:"Inflammatory Nails",status:false}
          ]          
        },
        {
          category:'Reproductive System',
          symptoms:[
            {name:"Abnormal Menstruation",status:false},
            {name:"Extra Marital Contacts",status:false}
          ]
          
        },
        {
          category:'Urine',
          symptoms:[
            {name:"Spotting  urination",status:false},
            {name:"Yellow Urine",status:false},
            {name:"Foul Smell Of urine",status:false},
            {name:"Continuous Feel Of Urine",status:false},
            {name:"Bladder Discomfort",status:false},
            {name:"Dark Urine",status:false},
            {name:"Polyuria",status:false},
            {name:"Passage Of Gases",status:false}
          ]
          
        },
        {
          category:'Legs',
          symptoms:[
            {name:"Swollen Legs",status:false},
            {name:"Painful Walking",status:false},
            {name:"Swelling Joints",status:false}
          ]
          
        },
        {
          category:'Whole Body',
          symptoms:[
            {name:"Chills",status:false},
            {name:"Shivering",status:false},
            {name:"Fatigue",status:false},
            {name:"Weight Gain",status:false},
            {name:"Weight Loss",status:false},
            {name:"Restlessness",status:false},
            {name:"Lethargy",status:false},
            {name:"Sweating",status:false},
            {name:"Dehydration",status:false},
            {name:"Mild Fever",status:false},
            {name:"High Fever",status:false},
            {name:"Malaise",status:false},
            {name:"Weakness In Limbs",status:false},
            {name:"Unsteadiness",status:false},
            {name:"Weakness Of One Body Side",status:false},
            {name:"Loss Of Smell",status:false},
            {name:"Toxic Look (typhos)",status:false},
            {name:"Coma",status:false},
            {name:"Excessive Hunger",status:false},
            {name:"Loss Of Balance",status:false},
            {name:"Spinning Movements",status:false},
            {name:"Internal Itching",status:false},
            {name:"Family History",status:false},
            {name:"Receiving Unsterile Injections",status:false},
            {name:"History Of Alcohol Consumption",status:false}
        ]
        

        }
      ];
      console.log("Mutation to addData");
    },
    addLocation(state,data)
    {
      console.log(data);
      state.location = data;
    },
    changeStatus(state, payload) {
      console.log(payload);
      
      // const category = state.symptomsCategory.find(loc => loc.category === payload.category);
      
      // if (category) {
      //   const symptom = category.symptoms.find(sym => sym.name === payload.symptom);
        
      //   if (symptom) {
      //     symptom.status = !symptom.status;
      //     console.loc('hellllo')
      //     console.log(symptom.status);
      //   }
        
      // }
      for(const loc of  state.symptomsCategory){
        if(loc.category == payload.category){
          for(const sym of loc.symptoms){
            if(sym.name == payload.symptom)
            {
              sym.status= !sym.status;
              console.log("hello all");
            console.log(sym);
            }
            
          }
        }
      }
    }

  },
  actions:{
    addData(context)
    {
      console.log("Action to addData");
      context.commit('addData');
    },
    addLocation(context, data)
    {
      console.log("addLocation Action");
      context.commit('addLocation', data);
    },
    changeStatus(context, payload){
      console.log("changeStatus Action");
      context.commit('changeStatus', payload);
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
        console.log(loc.category);
      }
      console.log("symploc")
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