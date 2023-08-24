function telephoneCheck(str) {
    // Regular expression to match the valid phone number patterns
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
  
    // Test the input string against the regular expression
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555"); // true