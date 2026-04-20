export const techCalculators = [
  {
    id: 'binary',
    name: 'Binary Calculator',
    category: 'technology',
    description: 'Convert Decimal to Binary and Hex',
    icon: '0️⃣',
    fields: [
      { name: 'dec', label: 'Decimal Number', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const d = parseInt(inputs.dec);
      return { result: `Bin: ${d.toString(2)}`, interpretation: `Hex: ${d.toString(16).toUpperCase()}` };
    }
  },
  {
    id: 'subnet',
    name: 'IP Subnet Calculator',
    category: 'technology',
    description: 'Calculate subnet masks (Simplified CIDR)',
    icon: '🌐',
    fields: [
      { name: 'cidr', label: 'CIDR Notation (e.g. 24)', type: 'number', min: 1, max: 32, required: true },
    ],
    calculate: (inputs) => {
      const c = parseInt(inputs.cidr);
      const hosts = Math.pow(2, 32 - c) - 2;
      return { result: `${hosts > 0 ? hosts : 0} Usable Hosts`, interpretation: `Subnet calculation for /${c}` };
    }
  },
  {
    id: 'datastorage',
    name: 'Data Storage Base 2 vs 10',
    category: 'technology',
    description: 'Storage manufacturer vs OS size',
    icon: '💾',
    fields: [
      { name: 'gb', label: 'Advertised Size (GB)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const gb = parseFloat(inputs.gb);
      const bytes = gb * 1000 * 1000 * 1000;
      const osGb = bytes / (1024 * 1024 * 1024);
      return { result: `${osGb.toFixed(2)} Gibibytes`, interpretation: `What your OS typically shows.` };
    }
  }
];
