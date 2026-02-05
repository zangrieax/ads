export const maskPhone = (value: string): string => {
  let numbers = value.replace(/\D/g, '');
  let formattedValue = '';

  if (numbers.length === 0) {
    return '';
  }

  if (numbers[0] === '8') {
    numbers = '7' + numbers.substring(1);
  }
  if (numbers[0] !== '7') {
    numbers = '7' + numbers;
  }

  formattedValue = '+7';
  if (numbers.length > 1) {
    formattedValue += ' (' + numbers.substring(1, 4);
  }
  if (numbers.length > 4) {
    formattedValue += ') ' + numbers.substring(4, 7);
  }
  if (numbers.length > 7) {
    formattedValue += '-' + numbers.substring(7, 9);
  }
  if (numbers.length > 9) {
    formattedValue += '-' + numbers.substring(9, 11);
  }

  return formattedValue;
};
