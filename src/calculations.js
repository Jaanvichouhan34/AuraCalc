// src/calculations.js

export const calculators = [
  {
    id: 'bmi',
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index.',
    category: 'Health',
    icon: 'Heart',
    fields: ['Weight (kg)', 'Height (cm)'],
    calculate: (inputs) => {
      const [weight, height] = inputs;
      const heightM = height / 100;
      return (weight / (heightM * heightM)).toFixed(2);
    }
  },
  {
    id: 'age',
    title: 'Age Calculator',
    description: 'Find your exact age in years.',
    category: 'Utility',
    icon: 'Calendar',
    fields: ['Birth Year'],
    calculate: (inputs) => {
      const year = inputs[0];
      return new Date().getFullYear() - year;
    }
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy Due Date',
    description: 'Estimate your delivery date.',
    category: 'Health',
    icon: 'Baby',
    fields: ['Last Period (Month 1-12)', 'Day (1-31)', 'Year'],
    calculate: (inputs) => {
      const [m, d, y] = inputs;
      const date = new Date(y, m - 1, d);
      date.setDate(date.getDate() + 280);
      return date.toDateString();
    }
  },
  {
    id: 'roi',
    title: 'ROI Calculator',
    description: 'Calculate Return on Investment.',
    category: 'Finance',
    icon: 'TrendingUp',
    fields: ['Amount Gained', 'Cost of Investment'],
    calculate: (inputs) => {
      const [gain, cost] = inputs;
      return (((gain - cost) / cost) * 100).toFixed(2) + "%";
    }
  },
  {
    id: 'loan',
    title: 'Loan Calculator',
    description: 'Estimate monthly loan payments.',
    category: 'Finance',
    icon: 'DollarSign',
    fields: ['Principal', 'Rate (%)', 'Years'],
    calculate: (inputs) => {
      const [p, r, t] = inputs;
      const monthlyRate = r / 100 / 12;
      const n = t * 12;
      const emi = (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
      return emi.toFixed(2);
    }
  },// Add these inside your calculators array in src/calculations.js
  {
    id: 'percentage',
    title: 'Percentage Calc',
    description: 'Find percentage of a value.',
    category: 'Math',
    icon: 'Percent',
    fields: ['Total Amount', 'Percentage (%)'],
    calculate: (inputs) => (inputs[0] * (inputs[1] / 100)).toFixed(2)
  },
  {
    id: 'protein',
    title: 'Protein Intake',
    description: 'Daily protein needs based on weight.',
    category: 'Health',
    icon: 'Beef',
    fields: ['Weight (kg)', 'Activity Level (1.2 - 2.0)'],
    calculate: (inputs) => (inputs[0] * inputs[1]).toFixed(1) + "g"
  },
  {
    id: 'salary',
    title: 'Salary Estimator',
    description: 'Convert hourly wage to yearly.',
    category: 'Finance',
    icon: 'Wallet',
    fields: ['Hourly Wage', 'Hours per Week'],
    calculate: (inputs) => "$" + (inputs[0] * inputs[1] * 52).toLocaleString()
  },
  {
    id: 'period',
    title: 'Period Tracker',
    description: 'Predict your next cycle start.',
    category: 'Health',
    icon: 'Droplets',
    fields: ['Last Start Day', 'Month', 'Cycle Length (Days)'],
    calculate: (inputs) => {
      const date = new Date(new Date().getFullYear(), inputs[1] - 1, inputs[0]);
      date.setDate(date.getDate() + inputs[2]);
      return date.toDateString();
    }
  },
  // Add these to the list in src/calculations.js
  {
    id: 'unit-converter',
    title: 'Unit Converter',
    description: 'Convert Meters to Feet.',
    category: 'Utility',
    icon: 'Ruler',
    fields: ['Meters'],
    calculate: (inputs) => (inputs[0] * 3.28084).toFixed(2) + " feet"
  },
  {
    id: 'currency-simple',
    title: 'USD to INR',
    description: 'Quick Currency conversion.',
    category: 'Finance',
    icon: 'Coins',
    fields: ['Amount (USD)'],
    calculate: (inputs) => "₹" + (inputs[0] * 83).toLocaleString() // Fixed rate for simplicity
  },
  {
    id: 'bmr',
    title: 'BMR Calculator',
    description: 'Basal Metabolic Rate (Calories).',
    category: 'Health',
    icon: 'Zap',
    fields: ['Weight (kg)', 'Height (cm)', 'Age'],
    calculate: (inputs) => {
      const [w, h, a] = inputs;
      return (10 * w + 6.25 * h - 5 * a + 5).toFixed(0) + " kcal";
    }
  },
  {
    id: 'percentage-off',
    title: 'Discount Calc',
    description: 'Final price after discount.',
    category: 'Finance',
    icon: 'Tag',
    fields: ['Original Price', 'Discount (%)'],
    calculate: (inputs) => {
      const [price, disc] = inputs;
      return (price - (price * disc / 100)).toFixed(2);
    }
  },
  {
    id: 'water-intake',
    title: 'Water Intake',
    description: 'Daily hydration goal.',
    category: 'Health',
    icon: 'Waves',
    fields: ['Weight (kg)'],
    calculate: (inputs) => (inputs[0] * 0.033).toFixed(1) + " Liters"
  }
];