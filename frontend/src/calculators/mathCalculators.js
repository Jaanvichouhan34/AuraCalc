export const mathCalculators = [
  {
    id: 'basic-math',
    name: 'Basic Calculator',
    category: 'mathematics',
    description: 'Perform standard arithmetic operations',
    icon: '➕',
    fields: [
      { name: 'num1', label: 'Number 1', type: 'number', required: true },
      { name: 'operation', label: 'Operation', type: 'select', options: ['Add', 'Subtract', 'Multiply', 'Divide'], required: true },
      { name: 'num2', label: 'Number 2', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const n1 = parseFloat(inputs.num1);
      const n2 = parseFloat(inputs.num2);
      let result = 0;
      let symbol = '+';
      switch(inputs.operation) {
         case 'Add': result = n1 + n2; break;
         case 'Subtract': result = n1 - n2; symbol = '-'; break;
         case 'Multiply': result = n1 * n2; symbol = '×'; break;
         case 'Divide': 
            if(n2 === 0) return { result: 'Error', interpretation: 'Cannot divide by zero.' };
            result = n1 / n2; symbol = '÷'; break;
      }
      return {
        result: `${result}`,
        interpretation: `${n1} ${symbol} ${n2} = ${result}`,
        tips: ['Use PEMDAS for complex equations.']
      };
    }
  },
  {
    id: 'scientific',
    name: 'Scientific Math',
    category: 'mathematics',
    description: 'Calculate Log, Sin, Cos, Tan',
    icon: '📐',
    fields: [
      { name: 'value', label: 'Value (Radians for Trig)', type: 'number', required: true },
      { name: 'func', label: 'Function', type: 'select', options: ['Sin', 'Cos', 'Tan', 'Log (base 10)', 'Natural Log (ln)', 'Square Root'], required: true },
    ],
    calculate: (inputs) => {
      const v = parseFloat(inputs.value);
      let result = 0;
      switch(inputs.func) {
         case 'Sin': result = Math.sin(v); break;
         case 'Cos': result = Math.cos(v); break;
         case 'Tan': result = Math.tan(v); break;
         case 'Log (base 10)': result = Math.log10(v); break;
         case 'Natural Log (ln)': result = Math.log(v); break;
         case 'Square Root': result = Math.sqrt(v); break;
      }
      return {
        result: `${result.toFixed(4)}`,
        interpretation: `${inputs.func}(${v}) = ${result.toFixed(4)}`,
      };
    }
  },
  {
    id: 'fraction',
    name: 'Fraction Calculator',
    category: 'mathematics',
    description: 'Add, subtract or multiply fractions',
    icon: '➗',
    fields: [
      { name: 'n1', label: 'Numerator 1', type: 'number', required: true },
      { name: 'd1', label: 'Denominator 1', type: 'number', required: true },
      { name: 'op', label: 'Operation', type: 'select', options: ['+', '-', '*', '/'], required: true },
      { name: 'n2', label: 'Numerator 2', type: 'number', required: true },
      { name: 'd2', label: 'Denominator 2', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const n1=parseFloat(inputs.n1), d1=parseFloat(inputs.d1), n2=parseFloat(inputs.n2), d2=parseFloat(inputs.d2);
      if(d1===0 || d2===0) return { result: 'Error', interpretation: 'Denominator cannot be 0' };
      let rN, rD;
      if(inputs.op==='+'){ rN = n1*d2 + n2*d1; rD = d1*d2; }
      else if(inputs.op==='-'){ rN = n1*d2 - n2*d1; rD = d1*d2; }
      else if(inputs.op==='*'){ rN = n1*n2; rD = d1*d2; }
      else { rN = n1*d2; rD = d1*n2; }
      const dec = rN/rD;
      return {
        result: `${rN}/${rD}`,
        interpretation: `Decimal Equivalent: ${dec.toFixed(4)}`,
      };
    }
  },
  {
    id: 'ratio',
    name: 'Ratio Calculator',
    category: 'mathematics',
    description: 'Solve for X in A:B = C:D',
    icon: '⚖️',
    fields: [
      { name: 'a', label: 'Value A', type: 'number', required: true },
      { name: 'b', label: 'Value B', type: 'number', required: true },
      { name: 'c', label: 'Value C (or enter 0 to solve for X)', type: 'number', required: true },
      { name: 'd', label: 'Value D (or enter 0 to solve for X)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      let a=parseFloat(inputs.a), b=parseFloat(inputs.b), c=parseFloat(inputs.c), d=parseFloat(inputs.d);
      if(c===0 && d!==0) { c = (a*d)/b; }
      else if(d===0 && c!==0) { d = (b*c)/a; }
      return {
        result: `${a}:${b} = ${c.toFixed(2)}:${d.toFixed(2)}`,
        interpretation: `Ratio solved!`,
      };
    }
  },
  {
    id: 'average',
    name: 'Average Calculator',
    category: 'mathematics',
    description: 'Find mean (average) of a set of numbers',
    icon: '📊',
    fields: [
      { name: 'numbers', label: 'Enter comma-separated numbers', type: 'text', required: true },
    ],
    calculate: (inputs) => {
      const arr = inputs.numbers.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
      if(arr.length === 0) return { result: 'Error', interpretation: 'Valid numbers required' };
      const sum = arr.reduce((a,b)=>a+b, 0);
      const avg = sum / arr.length;
      return {
        result: `${avg.toFixed(2)}`,
        interpretation: `Sum: ${sum} | Count: ${arr.length}`,
      };
    }
  },
  {
    id: 'stddev',
    name: 'Standard Deviation',
    category: 'mathematics',
    description: 'Calculate sample or population deviation',
    icon: '📈',
    fields: [
      { name: 'numbers', label: 'Comma-separated values', type: 'text', required: true },
      { name: 'type', label: 'Type', type: 'select', options: ['Population', 'Sample'], required: true },
    ],
    calculate: (inputs) => {
      const arr = inputs.numbers.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
      const n = arr.length;
      if(n < 2) return { result: 'Error', interpretation: 'Need at least 2 numbers' };
      const mean = arr.reduce((a,b)=>a+b,0) / n;
      const variance = arr.reduce((a,b)=>a+Math.pow(b-mean, 2),0) / (inputs.type==='Sample' ? n-1 : n);
      const sd = Math.sqrt(variance);
      return {
        result: `${sd.toFixed(4)}`,
        interpretation: `Mean: ${mean.toFixed(2)}, Variance: ${variance.toFixed(2)}`,
      };
    }
  },
];
