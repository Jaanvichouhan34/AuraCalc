export const travelCalculators = [
  {
    id: 'fuel',
    name: 'Fuel Cost Calculator',
    category: 'travel',
    description: 'Calculate trip fuel cost',
    icon: '⛽',
    fields: [
      { name: 'dist', label: 'Distance', type: 'number', required: true },
      { name: 'eff', label: 'Fuel Efficiency (e.g., Km/L or MPG)', type: 'number', required: true },
      { name: 'price', label: 'Fuel Price per unit', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const fuelNeeded = parseFloat(inputs.dist) / parseFloat(inputs.eff);
      const cost = fuelNeeded * parseFloat(inputs.price);
      return { result: `Cost: ${cost.toFixed(2)}`, interpretation: `Fuel Needed: ${fuelNeeded.toFixed(2)} units` };
    }
  },
  {
    id: 'mileage',
    name: 'Mileage Calculator',
    category: 'travel',
    description: 'Calculate vehicle mileage',
    icon: '🚗',
    fields: [
      { name: 'dist', label: 'Distance Traveled', type: 'number', required: true },
      { name: 'fuel', label: 'Fuel Consumed', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const eff = parseFloat(inputs.dist) / parseFloat(inputs.fuel);
      return { result: `${eff.toFixed(2)} units`, interpretation: `Distance per unit of fuel.` };
    }
  },
  {
    id: 'traveltime',
    name: 'Travel Time Calculator',
    category: 'travel',
    description: 'Estimate journey duration',
    icon: '🗺️',
    fields: [
      { name: 'dist', label: 'Distance', type: 'number', required: true },
      { name: 'speed', label: 'Average Speed', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const t = parseFloat(inputs.dist) / parseFloat(inputs.speed);
      const h = Math.floor(t);
      const m = Math.round((t - h) * 60);
      return { result: `${h}h ${m}m`, interpretation: `Estimated time of arrival` };
    }
  }
];
