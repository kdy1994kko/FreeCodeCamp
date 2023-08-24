function rot13(str) {
    const letters = /[A-Z]/;
    const alphabetSize = 26;
  
    // Helper function to perform the reverse ROT13 transform
    function transform(char) {
      let charCode = char.charCodeAt(0);
  
      // Decode only uppercase letters
      if (letters.test(char)) {
        charCode -= 13;
  
        // If the charCode is less than the code for 'A', wrap it around to the end of the alphabet
        if (charCode < 65) {
          charCode += alphabetSize;
        }
      }
  
      return String.fromCharCode(charCode);
    }
  
    // Apply the transformation to each character in the string
    return str.split('').map(transform).join('');
  }
  
  console.log(rot13("SERR PBQR PNZC")); 