export const constructionCalculators = [
  {
    id: 'concrete',
    name: 'Concrete Calculator',
    category: 'construction',
    description: 'Calculate cubic yards for concrete slabs',
    icon: '🧱',
    fields: [
      { name: 'length', label: 'Length (feet)', type: 'number', required: true },
      { name: 'width', label: 'Width (feet)', type: 'number', required: true },
      { name: 'depth', label: 'Depth (inches)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length);
      const w = parseFloat(inputs.width);
      const d = parseFloat(inputs.depth) / 12; // convert inches to feet
      const cubicFeet = l * w * d;
      const cubicYards = cubicFeet / 27;
      const prebags = cubicYards * 45; // roughly 45 80lb bags per cubic yard
      return { result: `${cubicYards.toFixed(2)} Cubic Yards`, interpretation: `Estimated ${prebags.toFixed(0)} bags (80lb) needed.` };
    }
  },
  {
    id: 'area-calc',
    name: 'Area Calculator',
    category: 'construction',
    description: 'Calculate area of a rectangle',
    icon: '📐',
    fields: [
      { name: 'length', label: 'Length', type: 'number', required: true },
      { name: 'width', label: 'Width', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      return { result: `${parseFloat(inputs.length) * parseFloat(inputs.width)} sq units`, interpretation: `Base × Height` };
    }
  },
  {
    id: 'paint',
    name: 'Paint Calculator',
    category: 'construction',
    description: 'Estimate gallons of paint needed',
    icon: '🎨',
    fields: [
      { name: 'area', label: 'Wall Area (sq ft)', type: 'number', required: true },
      { name: 'coats', label: 'Number of Coats', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      // 1 gallon covers ~350-400 sq ft
      const coverage = 350;
      const totalGal = (parseFloat(inputs.area) * parseFloat(inputs.coats)) / coverage;
      return { result: `${Math.ceil(totalGal)} Gallons`, interpretation: `Exact calculated: ${totalGal.toFixed(2)} gal` };
    }
  },
  {
    id: 'tile',
    name: 'Tile Calculator',
    category: 'construction',
    description: 'Estimate tiles needed for a floor',
    icon: '⬜',
    fields: [
      { name: 'floorArea', label: 'Floor Area (sq ft)', type: 'number', required: true },
      { name: 'tileSize', label: 'Tile Size (sq inches)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const tileSqFt = parseFloat(inputs.tileSize) / 144;
      const tiles = parseFloat(inputs.floorArea) / tileSqFt;
      const recommended = tiles * 1.1; // 10% overage
      return { result: `${Math.ceil(recommended)} Tiles`, interpretation: `Includes 10% extra for waste/cuts. Pure need: ${Math.ceil(tiles)}` };
    }
  }
];
