export const healthCalculators = [
  {
    id: 'bmi',
    name: 'BMI Calculator',
    category: 'health',
    description: 'Calculate your Body Mass Index',
    icon: '⚖️',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', required: true },
      { name: 'height', label: 'Height (cm)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const weight = parseFloat(inputs.weight);
      const heightM = parseFloat(inputs.height) / 100;
      const bmi = weight / (heightM * heightM);
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal weight';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';
      return {
        result: bmi.toFixed(1),
        interpretation: `Your BMI is ${bmi.toFixed(1)} (${category})`,
        tips: [
          'Maintain a healthy lifestyle with balanced diet',
          'Regular exercise for 30 minutes daily',
          'Consult a doctor for personalized advice'
        ]
      };
    }
  },
  {
    id: 'pregnancy',
    name: 'Pregnancy Due Date',
    category: 'health',
    description: 'Calculate expected delivery date',
    icon: '🤰',
    fields: [
      { name: 'lastPeriod', label: 'Last Period Date', type: 'date', required: true },
    ],
    calculate: (inputs) => {
      const lastPeriod = new Date(inputs.lastPeriod);
      const dueDate = new Date(lastPeriod.setDate(lastPeriod.getDate() + 280));
      return {
        result: dueDate.toLocaleDateString(),
        interpretation: `Your estimated due date is ${dueDate.toLocaleDateString()}`,
        tips: [
          'Schedule regular prenatal checkups',
          'Take prenatal vitamins',
          'Maintain a healthy diet during pregnancy'
        ]
      };
    }
  },
  {
    id: 'protein',
    name: 'Protein Intake',
    category: 'health',
    description: 'Calculate daily protein needs',
    icon: '🥚',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', required: true },
      { name: 'activity', label: 'Activity Level', type: 'select', options: ['Sedentary', 'Moderate', 'Active'], required: true },
    ],
    calculate: (inputs) => {
      const multipliers = { Sedentary: 0.8, Moderate: 1.2, Active: 1.6 };
      const dailyProtein = parseFloat(inputs.weight) * multipliers[inputs.activity];
      return {
        result: `${dailyProtein.toFixed(1)}g`,
        interpretation: `You need approximately ${dailyProtein.toFixed(1)}g of protein daily`,
        tips: [
          'Spread protein intake throughout the day',
          'Include varied protein sources',
          'Consult a nutritionist for personalized plans'
        ]
      };
    }
  },
  {
    id: 'period-tracker',
    name: 'Period Tracker',
    category: 'health',
    description: 'Track your menstrual cycle',
    icon: '📅',
    fields: [
      { name: 'lastPeriod', label: 'Last Period Start', type: 'date', required: true },
      { name: 'cycleLength', label: 'Cycle Length (days)', type: 'number', min: 21, max: 35, required: true },
    ],
    calculate: (inputs) => {
      const lastPeriod = new Date(inputs.lastPeriod);
      const nextPeriod = new Date(lastPeriod.setDate(lastPeriod.getDate() + parseInt(inputs.cycleLength)));
      return {
        result: nextPeriod.toLocaleDateString(),
        interpretation: `Next period expected around ${nextPeriod.toLocaleDateString()}`,
        tips: [
          'Track your cycle for better health insights',
          'Note any unusual symptoms',
          'Consult a gynecologist if concerned'
        ]
      };
    }
  },
  {
    id: 'bmr',
    name: 'BMR Calculator',
    category: 'health',
    description: 'Calculate Basal Metabolic Rate',
    icon: '🔥',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', required: true },
      { name: 'height', label: 'Height (cm)', type: 'number', required: true },
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'], required: true },
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.weight);
      const h = parseFloat(inputs.height);
      const a = parseFloat(inputs.age);
      let bmr;
      if (inputs.gender === 'Male') {
        bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
      } else {
        bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
      }
      return {
        result: `${bmr.toFixed(0)} kcal/day`,
        interpretation: `Your BMR is ${bmr.toFixed(0)} calories per day at rest`,
        tips: [
          'BMR is the minimum calories needed at rest',
          'Multiply by activity factor for TDEE',
          'Higher BMR with muscle mass'
        ]
      };
    }
  },
  {
    id: 'tdee',
    name: 'TDEE Calculator',
    category: 'health',
    description: 'Calculate Total Daily Energy Expenditure',
    icon: '⚡',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', required: true },
      { name: 'height', label: 'Height (cm)', type: 'number', required: true },
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'], required: true },
      { name: 'activity', label: 'Activity Level', type: 'select', options: ['Sedentary', 'Light', 'Moderate', 'Very Active'], required: true },
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.weight);
      const h = parseFloat(inputs.height);
      const a = parseFloat(inputs.age);
      let bmr;
      if (inputs.gender === 'Male') {
        bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
      } else {
        bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
      }
      const activityFactors = { Sedentary: 1.2, Light: 1.375, Moderate: 1.55, 'Very Active': 1.725 };
      const tdee = bmr * activityFactors[inputs.activity];
      return {
        result: `${tdee.toFixed(0)} kcal/day`,
        interpretation: `You burn approximately ${tdee.toFixed(0)} calories daily`,
        tips: [
          'Use this to set calorie targets for fitness goals',
          'Subtract 500 cal for 0.5kg weekly weight loss',
          'Add 500 cal for 0.5kg weekly weight gain'
        ]
      };
    }
  },
  {
    id: 'water-intake',
    name: 'Water Intake Calculator',
    category: 'health',
    description: 'Calculate recommended daily water intake',
    icon: '💧',
    fields: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', required: true },
      { name: 'activity', label: 'Activity Level', type: 'select', options: ['Sedentary', 'Moderate', 'Active'], required: true },
    ],
    calculate: (inputs) => {
      const baseWater = parseFloat(inputs.weight) * 0.033; // 33ml per kg
      const activityBonus = inputs.activity === 'Sedentary' ? 0 : inputs.activity === 'Moderate' ? 0.5 : 1;
      const totalWater = baseWater + activityBonus;
      return {
        result: `${totalWater.toFixed(1)}L`,
        interpretation: `Drink approximately ${totalWater.toFixed(1)} liters of water daily`,
        tips: [
          'Drink water throughout the day',
          'More water needed in hot climate',
          'Monitor urine color as indicator'
        ]
      };
    }
  },
  {
    id: 'ideal-weight',
    name: 'Ideal Weight',
    category: 'health',
    description: 'Miller Formula Estimate',
    icon: '⚖️',
    fields: [
      { name: 'height', label: 'Height (cm)', type: 'number', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'], required: true },
    ],
    calculate: (inputs) => {
      // Devine/Miller basic approximation over 5 feet
      const heightInches = parseFloat(inputs.height) / 2.54;
      const over5ft = heightInches - 60;
      let w = 0;
      if (over5ft > 0) {
        if(inputs.gender === 'Male') w = 50 + (1.9 * over5ft);
        else w = 49 + (1.7 * over5ft);
      } else {
        w = inputs.gender === 'Male' ? 50 : 49;
      }
      return { result: `${w.toFixed(1)} kg`, interpretation: `Estimated Ideal Body Weight` };
    }
  }
];
