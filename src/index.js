module.exports = function zeros(expression) {
  let array = expression.split('*');
  let num;
  let count_num;
  
  let fact; 
  let result = 0;
  let sumTwo = 0; 
  let sumFive = 0;

  for (let i = 0; i < array.length; i++) {

    if (array[i].search('!!') > 0) {
      num = array[i].replace('!!', '');
      fact = 2;
    } else {
      num = array[i].replace('!', '');
      fact = 1;
    }

    while (num != 0 && num != 1) {
      count_num = num;

      while (count_num % 2 === 0) {
       sumTwo++;
       count_num = count_num / 2;
      }

      while (count_num % 5 === 0) {
       sumFive++;
       count_num = count_num / 5;
      }
      num = num - fact;
    }
  }
  result = Math.min(sumTwo, sumFive);
  return result
}
