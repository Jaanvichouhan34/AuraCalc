export const engineeringCalculators = [
  {
    id: 'force',
    name: 'Force Calculator',
    category: 'engineering',
    description: 'Newton\'s Second Law: F = m × a',
    icon: '🍎',
    fields: [
      { name: 'mass', label: 'Mass (kg)', type: 'number', required: true },
      { name: 'accel', label: 'Acceleration (m/s²)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const m = parseFloat(inputs.mass);
      const a = parseFloat(inputs.accel);
      const f = m * a;
      return { result: `${f.toFixed(2)} N`, interpretation: `Force is ${f.toFixed(2)} Newtons` };
    }
  },
  {
    id: 'velocity',
    name: 'Velocity Calculator',
    category: 'engineering',
    description: 'v = d / t',
    icon: '🏃',
    fields: [
      { name: 'dist', label: 'Distance (meters)', type: 'number', required: true },
      { name: 'time', label: 'Time (seconds)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const v = parseFloat(inputs.dist) / parseFloat(inputs.time);
      return { result: `${v.toFixed(2)} m/s`, interpretation: `Average velocity` };
    }
  },
  {
    id: 'ohmslaw',
    name: 'Ohm’s Law Calculator',
    category: 'engineering',
    description: 'V = I × R',
    icon: '⚡',
    fields: [
      { name: 'solveFor', label: 'Solve For', type: 'select', options: ['Voltage (V)', 'Current (I)', 'Resistance (R)'], required: true },
      { name: 'val1', label: 'Input 1', type: 'number', required: true },
      { name: 'val2', label: 'Input 2', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const v1 = parseFloat(inputs.val1), v2 = parseFloat(inputs.val2);
      let res = '';
      if(inputs.solveFor === 'Voltage (V)') res = `${(v1*v2).toFixed(2)} Volts (from I × R)`;
      if(inputs.solveFor === 'Current (I)') res = `${(v1/v2).toFixed(2)} Amps (from V / R)`;
      if(inputs.solveFor === 'Resistance (R)') res = `${(v1/v2).toFixed(2)} Ohms (from V / I)`;
      return { result: res, interpretation: `Make sure your inputs match the formula!` };
    }
  },
  {
    id: 'power',
    name: 'Power Calculator',
    category: 'engineering',
    description: 'P = V × I (Electrical)',
    icon: '💡',
    fields: [
      { name: 'voltage', label: 'Voltage (V)', type: 'number', required: true },
      { name: 'current', label: 'Current (I)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const p = parseFloat(inputs.voltage) * parseFloat(inputs.current);
      return { result: `${p.toFixed(2)} W`, interpretation: `Power is ${p.toFixed(2)} Watts` };
    }
  },
  {
    id: 'pressure',
    name: 'Pressure Calculator',
    category: 'engineering',
    description: 'P = F / A',
    icon: '🎈',
    fields: [
      { name: 'force', label: 'Force (N)', type: 'number', required: true },
      { name: 'area', label: 'Area (m²)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const p = parseFloat(inputs.force) / parseFloat(inputs.area);
      return { result: `${p.toFixed(2)} Pa`, interpretation: `Pressure is ${p.toFixed(2)} Pascals` };
    }
  },
  {
    id: 'density',
    name: 'Density Calculator',
    category: 'engineering',
    description: 'ρ = m / V',
    icon: '🧊',
    fields: [
      { name: 'mass', label: 'Mass (kg)', type: 'number', required: true },
      { name: 'volume', label: 'Volume (m³)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const p = parseFloat(inputs.mass) / parseFloat(inputs.volume);
      return { result: `${p.toFixed(2)} kg/m³`, interpretation: `Density calculation` };
    }
  }
];
