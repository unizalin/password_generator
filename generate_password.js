// define generatePassword function
function generatePassword() {
  console.log('This function will generate password');
  // define things user might want
  const lowerCaseLetters = 'abcdefghiklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '1234567890';
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // define dummy data
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  };
  console.log('options', options);

  // create a collection to store things user picked up
  let collection = [];
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''));
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''));
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''));
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''));
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`)
    collection = collection.filter(character => !options.excludeCharacters.includes(character)
      //判斷collection 是否含有 character
      //有的話回傳true，但因為需剔除掉，須回傳false ，加上 !

      // if the character includes in 'excludeCharacters',
      // return false to remove the character in the collection
    );
  }
  console.log('collection' + collection);
  // start generating password

  // return the generated password

}

// invoke generatePassword function 
generatePassword();