function numbers_ranges(a, b) {
    if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) 
        || 
        (a >= 70 && a <= 100 && b >= 70 && b <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers_ranges(44, 56));
  console.log(numbers_ranges(70, 95));
  console.log(numbers_ranges(150, 200));