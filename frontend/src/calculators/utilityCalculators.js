export const utilityCalculators = [
  {
    id: 'age',
    name: 'Age Calculator',
    category: 'utility',
    description: 'Calculate exact age in years, months, days',
    icon: '🎂',
    fields: [
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
    ],
    calculate: (inputs) => {
      const birthDate = new Date(inputs.dob);
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const temp = new Date(today.getFullYear(), today.getMonth(), 0);
        days += temp.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      return {
        result: `${years} yrs, ${months} mos, ${days} days`,
        interpretation: `You are ${years} years old`,
        tips: [
          'Celebrate your milestones',
          'Plan for life events',
          'Remember important dates'
        ]
      };
    }
  },
  {
    id: 'percentage',
    name: 'Percentage Calculator',
    category: 'utility',
    description: 'Calculate percentage and percentage changes',
    icon: '%',
    fields: [
      { name: 'value', label: 'Value', type: 'number', required: true },
      { name: 'percent', label: 'Percentage (%)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const result = (parseFloat(inputs.value) * parseFloat(inputs.percent)) / 100;
      return {
        result: result.toFixed(2),
        interpretation: `${inputs.percent}% of ${inputs.value} is ${result.toFixed(2)}`,
        tips: [
          'Percentage is a fraction of 100',
          'Useful for discounts, tips, interest',
          'Formula: (Value × Percent) / 100'
        ]
      };
    }
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    category: 'utility',
    description: 'Convert between different units',
    icon: '📏',
    fields: [
      { name: 'value', label: 'Value', type: 'number', required: true },
      { name: 'fromUnit', label: 'From', type: 'select', options: ['Meters', 'Feet', 'Kilometers', 'Miles'], required: true },
      { name: 'toUnit', label: 'To', type: 'select', options: ['Meters', 'Feet', 'Kilometers', 'Miles'], required: true },
    ],
    calculate: (inputs) => {
      const conversions = {
        'Meters-Feet': 3.28084,
        'Feet-Meters': 0.3048,
        'Kilometers-Miles': 0.621371,
        'Miles-Kilometers': 1.60934,
        'Meters-Meters': 1,
        'Feet-Feet': 1,
        'Kilometers-Kilometers': 1,
        'Miles-Miles': 1,
      };
      const key = `${inputs.fromUnit}-${inputs.toUnit}`;
      const result = parseFloat(inputs.value) * (conversions[key] || 1);
      return {
        result: result.toFixed(4),
        interpretation: `${inputs.value} ${inputs.fromUnit} = ${result.toFixed(4)} ${inputs.toUnit}`,
        tips: [
          'Common conversions are memorized',
          'Accurate for scientific calculations',
          'Helpful for travel and measurements'
        ]
      };
    }
  },
  {
    id: 'tip',
    name: 'Tip Calculator',
    category: 'utility',
    description: 'Calculate restaurant bill tip',
    icon: '🍽️',
    fields: [
      { name: 'billAmount', label: 'Bill Amount (₹)', type: 'number', required: true },
      { name: 'tipPercent', label: 'Tip (%)', type: 'select', options: ['10', '15', '18', '20'], required: true },
    ],
    calculate: (inputs) => {
      const bill = parseFloat(inputs.billAmount);
      const tipAmount = (bill * parseInt(inputs.tipPercent)) / 100;
      const totalAmount = bill + tipAmount;
      return {
        result: `₹${totalAmount.toFixed(0)}`,
        interpretation: `Tip: ₹${tipAmount.toFixed(0)} | Total: ₹${totalAmount.toFixed(0)}`,
        tips: [
          'Typical tip range: 10-20%',
          'Good service deserves better tips',
          'Split bills evenly among friends'
        ]
      };
    }
  },
  {
    id: 'gpa',
    name: 'GPA Calculator',
    category: 'utility',
    description: 'Calculate your academic GPA',
    icon: '🎓',
    fields: [
      { name: 'grade1', label: 'Grade 1 (out of 4.0)', type: 'number', min: 0, max: 4, required: true },
      { name: 'grade2', label: 'Grade 2 (out of 4.0)', type: 'number', min: 0, max: 4, required: true },
      { name: 'grade3', label: 'Grade 3 (out of 4.0)', type: 'number', min: 0, max: 4, required: true },
    ],
    calculate: (inputs) => {
      const g1 = parseFloat(inputs.grade1);
      const g2 = parseFloat(inputs.grade2);
      const g3 = parseFloat(inputs.grade3);
      const gpa = ((g1 + g2 + g3) / 3).toFixed(2);
      return {
        result: gpa,
        interpretation: `Your GPA is ${gpa} out of 4.0`,
        tips: [
          'GPA is important for scholarships',
          'Focus on improving grades consistently',
          'Balance academics with extracurriculars'
        ]
      };
    }
  },
  {
    id: 'datediff',
    name: 'Date Difference',
    category: 'utility',
    description: 'Calculate days between two dates',
    icon: '🗓️',
    fields: [
      { name: 'start', label: 'Start Date', type: 'date', required: true },
      { name: 'end', label: 'End Date', type: 'date', required: true },
    ],
    calculate: (inputs) => {
      const d1 = new Date(inputs.start);
      const d2 = new Date(inputs.end);
      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      return { result: `${diffDays} Days`, interpretation: `Difference between dates` };
    }
  },
  {
    id: 'timezone',
    name: 'Time Zone (+/- Hours)',
    category: 'utility',
    description: 'Calculate time difference',
    icon: '🌍',
    fields: [
      { name: 'base', label: 'Base Time (HH:MM)', type: 'text', required: true },
      { name: 'offset', label: 'Hours Offset (e.g. +5 or -3)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const [h,m] = inputs.base.split(':').map(Number);
      if(isNaN(h)||isNaN(m)) return { result: 'Error', interpretation: 'Use HH:MM format' };
      const off = parseFloat(inputs.offset);
      let newH = (h + Math.floor(off)) % 24;
      if (newH < 0) newH += 24;
      return { result: `${newH.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`, interpretation: `Calculated time zone shift.` };
    }
  }
];
