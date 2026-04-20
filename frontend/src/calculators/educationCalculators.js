export const educationCalculators = [
  {
    id: 'grade',
    name: 'Grade Calculator',
    category: 'education',
    description: 'Calculate average course grade based on weights',
    icon: 'A+',
    fields: [
      { name: 'grade1', label: 'Assignment 1 Score (%)', type: 'number', required: true },
      { name: 'weight1', label: 'Weight 1 (%)', type: 'number', required: true },
      { name: 'grade2', label: 'Assignment 2 Score (%)', type: 'number', required: true },
      { name: 'weight2', label: 'Weight 2 (%)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const g1 = parseFloat(inputs.grade1), w1 = parseFloat(inputs.weight1)/100;
      const g2 = parseFloat(inputs.grade2), w2 = parseFloat(inputs.weight2)/100;
      const total = (g1*w1) + (g2*w2);
      const totalWeight = w1 + w2;
      return { result: `${(total / totalWeight).toFixed(2)}%`, interpretation: `Based on weights provided.` };
    }
  },
  {
    id: 'attendance',
    name: 'Attendance Calculator',
    category: 'education',
    description: 'Calculate attendance % or classes needed to hit target',
    icon: '🏫',
    fields: [
      { name: 'attended', label: 'Classes Attended', type: 'number', required: true },
      { name: 'total', label: 'Total Classes Held', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const att = parseInt(inputs.attended);
      const tot = parseInt(inputs.total);
      if(tot===0) return { result: 'Error', interpretation:'Total cannot be 0' };
      const pct = (att/tot)*100;
      return { result: `${pct.toFixed(2)}%`, interpretation: `Target is usually 75%!` };
    }
  },
  {
    id: 'study',
    name: 'Study Time Calculator',
    category: 'education',
    description: 'Credit hours to study hours rule',
    icon: '📚',
    fields: [
      { name: 'credits', label: 'Total Course Credit Hours', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const c = parseFloat(inputs.credits);
      // rule of thumb: 2-3 hours out of class per 1 credit hour
      return { result: `${c * 2} to ${c * 3} hours`, interpretation: `Recommended study hours per week.` };
    }
  }
];
