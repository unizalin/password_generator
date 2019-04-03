// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// define generatePassword function
function generatePassword(options) {
  // console.log('This function will generate password');
  // define things user might want
  const lowerCaseLetters = 'abcdefghiklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '1234567890';
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // define dummy data
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // };

  // create a collection to store things user picked up
  let collection = [];

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }


  // remove things user do not need
  if (options.excludeCharacters) {
    //判斷collection 是否含有 character
    //有的話回傳true，但因為需剔除掉，須回傳false ，加上 !
    collection = collection.filter(character => !options.excludeCharacters.includes(character));
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  // start generating password
  let password = '';
  for (let i = 0; i < options.length; i++) {
    password += sample(collection);
  }

  // return the generated password
  console.log('password', password);
  return password;

}

// generatePassword();
// 更改成利用 module exports 可以從 app.js 中使用 require 載入
// export generatePassword function for other files to use
module.exports = generatePassword;