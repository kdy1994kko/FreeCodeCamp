function convertToRoman(num) {
    // Create a lookup table for Roman numeral symbols and their values
    const romanSymbols = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
  
    let result = '';
  
    // Iterate through the Roman symbols
    for (let i = 0; i < romanSymbols.length; i++) {
      const { value, symbol } = romanSymbols[i];
  
      // Subtract the symbol's value from num until it's less than the current value
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
    
    return result;
  }
  
  console.log(convertToRoman(36));