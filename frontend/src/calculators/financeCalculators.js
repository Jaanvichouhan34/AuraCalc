export const financeCalculators = [
  {
    id: 'emi',
    name: 'Loan EMI Calculator',
    category: 'finance',
    description: 'Calculate monthly loan payment',
    icon: '💰',
    fields: [
      { name: 'principal', label: 'Loan Amount (₹)', type: 'number', required: true },
      { name: 'rate', label: 'Annual Interest Rate (%)', type: 'number', required: true },
      { name: 'tenure', label: 'Tenure (Months)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const P = parseFloat(inputs.principal);
      const R = parseFloat(inputs.rate) / 12 / 100;
      const N = parseFloat(inputs.tenure);
      const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalPayment = EMI * N;
      const totalInterest = totalPayment - P;
      return {
        result: `₹${EMI.toFixed(0)}/month`,
        interpretation: `Your monthly EMI is ₹${EMI.toFixed(0)}. Total interest: ₹${totalInterest.toFixed(0)}`,
        tips: [
          'Paying extra EMI reduces total interest',
          'Compare rates from multiple lenders',
          'Check loan terms carefully'
        ]
      };
    }
  },
  {
    id: 'roi',
    name: 'ROI Calculator',
    category: 'finance',
    description: 'Calculate Return on Investment',
    icon: '📈',
    fields: [
      { name: 'initialInvestment', label: 'Initial Investment (₹)', type: 'number', required: true },
      { name: 'finalValue', label: 'Final Value (₹)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const init = parseFloat(inputs.initialInvestment);
      const final = parseFloat(inputs.finalValue);
      const roi = ((final - init) / init) * 100;
      return {
        result: `${roi.toFixed(2)}%`,
        interpretation: `Your ROI is ${roi.toFixed(2)}%`,
        tips: [
          'Positive ROI means profitable investment',
          'Compare ROI with inflation rate',
          'Diversify your investments'
        ]
      };
    }
  },
  {
    id: 'compound-interest',
    name: 'Compound Interest',
    category: 'finance',
    description: 'Calculate compound interest earnings',
    icon: '💹',
    fields: [
      { name: 'principal', label: 'Principal (₹)', type: 'number', required: true },
      { name: 'rate', label: 'Interest Rate (% p.a.)', type: 'number', required: true },
      { name: 'time', label: 'Time (Years)', type: 'number', required: true },
      { name: 'frequency', label: 'Compounding', type: 'select', options: ['Annually', 'Quarterly', 'Monthly', 'Daily'], required: true },
    ],
    calculate: (inputs) => {
      const frequencies = { Annually: 1, Quarterly: 4, Monthly: 12, Daily: 365 };
      const n = frequencies[inputs.frequency];
      const p = parseFloat(inputs.principal);
      const r = parseFloat(inputs.rate);
      const t = parseFloat(inputs.time);
      const amount = p * Math.pow(1 + r / 100 / n, n * t);
      const interest = amount - p;
      return {
        result: `₹${amount.toFixed(0)}`,
        interpretation: `Your investment grows to ₹${amount.toFixed(0)} with ₹${interest.toFixed(0)} interest`,
        tips: [
          'Start investing early for compounding benefits',
          'More frequent compounding = higher returns',
          'Consistent long-term investing is key'
        ]
      };
    }
  },
  {
    id: 'salary',
    name: 'Salary Calculator',
    category: 'finance',
    description: 'Calculate net salary after deductions',
    icon: '💼',
    fields: [
      { name: 'grossSalary', label: 'Gross Salary (₹)', type: 'number', required: true },
      { name: 'tax', label: 'Income Tax (%)', type: 'number', required: true },
      { name: 'pf', label: 'PF Contribution (%)', type: 'number', required: true },
      { name: 'otherDeductions', label: 'Other Deductions (₹)', type: 'number', required: false },
    ],
    calculate: (inputs) => {
      const gross = parseFloat(inputs.grossSalary);
      const taxAmount = (gross * parseFloat(inputs.tax)) / 100;
      const pfAmount = (gross * parseFloat(inputs.pf)) / 100;
      const other = inputs.otherDeductions ? parseFloat(inputs.otherDeductions) : 0;
      const netSalary = gross - taxAmount - pfAmount - other;
      return {
        result: `₹${netSalary.toFixed(0)}`,
        interpretation: `Net Salary: ₹${netSalary.toFixed(0)} after all deductions`,
        tips: [
          'Keep track of all deductions',
          'Review tax planning strategies',
          'Utilize available tax benefits'
        ]
      };
    }
  },
  {
    id: 'gst',
    name: 'GST Calculator',
    category: 'finance',
    description: 'Calculate GST and final price',
    icon: '🧾',
    fields: [
      { name: 'price', label: 'Product Price (₹)', type: 'number', required: true },
      { name: 'gstRate', label: 'GST Rate (%)', type: 'select', options: ['5', '12', '18', '28'], required: true },
    ],
    calculate: (inputs) => {
      const price = parseFloat(inputs.price);
      const gstPercent = parseFloat(inputs.gstRate);
      const gstAmount = (price * gstPercent) / 100;
      const finalPrice = price + gstAmount;
      return {
        result: `₹${finalPrice.toFixed(2)}`,
        interpretation: `GST (${inputs.gstRate}%): ₹${gstAmount.toFixed(2)} | Total: ₹${finalPrice.toFixed(2)}`,
        tips: [
          'Different items have different GST rates',
          'GST is applicable on most goods and services',
          'Keep invoices for business records'
        ]
      };
    }
  },
  {
    id: 'discount',
    name: 'Discount Calculator',
    category: 'finance',
    description: 'Calculate discount and final price',
    icon: '🏷️',
    fields: [
      { name: 'originalPrice', label: 'Original Price (₹)', type: 'number', required: true },
      { name: 'discountPercent', label: 'Discount (%)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const price = parseFloat(inputs.originalPrice);
      const discount = parseFloat(inputs.discountPercent);
      const discountAmount = (price * discount) / 100;
      const finalPrice = price - discountAmount;
      return {
        result: `₹${finalPrice.toFixed(0)}`,
        interpretation: `Save ₹${discountAmount.toFixed(0)} | Final Price: ₹${finalPrice.toFixed(0)}`,
        tips: [
          'Compare prices before making purchases',
          'Look for seasonal discounts',
          'Stack multiple discounts if possible'
        ]
      };
    }
  },
  {
    id: 'currency',
    name: 'Currency Converter',
    category: 'finance',
    description: 'Convert between different currencies',
    icon: '💱',
    fields: [
      { name: 'amount', label: 'Amount', type: 'number', required: true },
      { name: 'from', label: 'From', type: 'select', options: ['INR', 'USD', 'EUR', 'GBP', 'JPY'], required: true },
      { name: 'to', label: 'To', type: 'select', options: ['INR', 'USD', 'EUR', 'GBP', 'JPY'], required: true },
    ],
    calculate: (inputs) => {
      // Mock rates - in production, use live API
      const rates = { INR: 1, USD: 83, EUR: 90, GBP: 105, JPY: 0.55 };
      const amt = parseFloat(inputs.amount);
      const inUSD = amt / rates[inputs.from];
      const result = inUSD * rates[inputs.to];
      return {
        result: `${result.toFixed(2)} ${inputs.to}`,
        interpretation: `${inputs.amount} ${inputs.from} = ${result.toFixed(2)} ${inputs.to}`,
        tips: [
          'Exchange rates fluctuate constantly',
          'Check multiple sources for best rates',
          'Avoid currency conversion fees when possible'
        ]
      };
    }
  },
  {
    id: 'simple-interest',
    name: 'Simple Interest',
    category: 'finance',
    description: 'Calculate simple interest',
    icon: '💵',
    fields: [
      { name: 'principal', label: 'Principal', type: 'number', required: true },
      { name: 'rate', label: 'Rate (%)', type: 'number', required: true },
      { name: 'time', label: 'Time (Years)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const p = parseFloat(inputs.principal);
      const r = parseFloat(inputs.rate);
      const t = parseFloat(inputs.time);
      const interest = (p * r * t) / 100;
      return { result: `₹${interest.toFixed(2)}`, interpretation: `Total Amount: ₹${(p+interest).toFixed(2)}` };
    }
  },
  {
    id: 'sip',
    name: 'SIP Calculator',
    category: 'finance',
    description: 'Calculate Mutual Fund SIP Returns',
    icon: '📈',
    fields: [
      { name: 'monthly', label: 'Monthly Investment', type: 'number', required: true },
      { name: 'rate', label: 'Expected Return Rate (p.a %)', type: 'number', required: true },
      { name: 'years', label: 'Time Period (Years)', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const p = parseFloat(inputs.monthly);
      const r = parseFloat(inputs.rate) / 12 / 100;
      const n = parseFloat(inputs.years) * 12;
      const amount = p * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      return { result: `₹${amount.toFixed(0)}`, interpretation: `Estimated maturity amount.` };
    }
  },
  {
    id: 'profit-margin',
    name: 'Profit Margin',
    category: 'finance',
    description: 'Calculate Business Profit Margin',
    icon: '📊',
    fields: [
      { name: 'cost', label: 'Cost Price', type: 'number', required: true },
      { name: 'revenue', label: 'Revenue/Sale Price', type: 'number', required: true },
    ],
    calculate: (inputs) => {
      const c = parseFloat(inputs.cost);
      const r = parseFloat(inputs.revenue);
      const margin = ((r - c) / r) * 100;
      return { result: `${margin.toFixed(2)}%`, interpretation: `Gross profit margin percentage.` };
    }
  }
];
