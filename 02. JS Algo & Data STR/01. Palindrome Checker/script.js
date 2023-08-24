function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[\W_]/g, '').toLowerCase();
  
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
  }
  
  console.log(palindrome("eye")); // Output: true
  console.log(palindrome("RaceCar")); // Output: true
  console.log(palindrome("race CAR")); // Output: true
  console.log(palindrome("2A3*3a2")); // Output: true
  console.log(palindrome("2A3 3a2")); // Output: true
  console.log(palindrome("2_A3*3#A2")); // Output: true
  console.log(palindrome("hello")); // Output: false
  