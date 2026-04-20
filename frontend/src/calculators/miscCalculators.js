export const miscCalculators = [
  {
    id: 'random',
    name: 'Random Number',
    category: 'misc',
    description: 'Generate Random Number in range',
    icon: '🎲',
    fields: [
      { name: 'min', label: 'Minimum', type: 'number', required: true },
      { name: 'max', label: 'Maximum', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const mn = parseInt(inputs.min);
      const mx = parseInt(inputs.max);
      const r = Math.floor(Math.random() * (mx - mn + 1)) + mn;
      return { result: `${r}`, interpretation: `Random number between ${mn} and ${mx}` };
    }
  }
];
