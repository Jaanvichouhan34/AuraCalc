import React, { useState } from 'react';
import { X } from 'lucide-react';

const CalculatorModal = ({ calc, onClose }) => {
  const [inputs, setInputs] = useState(Array(calc.fields.length).fill(''));
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numericInputs = inputs.map(val => parseFloat(val));
    if (numericInputs.some(isNaN)) return alert("Please enter valid numbers");
    setResult(calc.calculate(numericInputs));
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative p-8">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full dark:text-white">
          <X size={20} />
        </button>
        
        <h2 className="text-2xl font-bold dark:text-white mb-2">{calc.title}</h2>
        <p className="text-gray-500 mb-6">{calc.description}</p>

        <div className="space-y-4">
          {calc.fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{field}</label>
              <input 
                type="number" 
                value={inputs[index]}
                onChange={(e) => {
                  const newInputs = [...inputs];
                  newInputs[index] = e.target.value;
                  setInputs(newInputs);
                }}
                className="w-full p-3 rounded-xl border dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          ))}
        </div>

        <button 
          onClick={handleCalculate}
          className="w-full mt-6 bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm block">Result</span>
            <span className="text-3xl font-black text-primary">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorModal;