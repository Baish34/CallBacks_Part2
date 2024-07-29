const getUserName = (firstName, callback) => {
  const lastName = "Doe";
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
};

const greetUser = (fullName) => {
  console.log(`Hello, ${fullName}!`);
};

getUserName("John", greetUser);

////////////////////////////////

const calculateAge = (birthYear, callback) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  callback(age);
};

const displayAge = (age) => {
  console.log(`You are ${age} years old!`);
};

calculateAge(1992, displayAge);

//////////////////////////////

const generateUsername = (firstName, callback) => {
  const username = firstName + "_user";
  callback(username);
};

const displayUsername = (username) => {
  console.log(`Your username is: ${username}!`);
};

generateUsername("John", displayUsername);

/////////////////////////////////////////

const checkTemperature = (celsius, callback) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  callback(fahrenheit);
};

const displayTemperatureMessage = (temperature) => {
  let message;
  if (temperature > 86) {
    message = "Hot";
  } else if (temperature >= 50) {
    message = "Moderate";
  } else {
    message = "Cold";
  }
  console.log(`The temperature is: ${message}`);
};
checkTemperature(25, displayTemperatureMessage);

///////////////////////////////////////////

const processArray = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};

const squareNumber = (num) => num * num;

const numbersArray = [1, 2, 3, 4, 5];

processArray(numbersArray, squareNumber);

//////////////////////////////////////////////

const processArrays = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};

const doubleNumber = (num) => num * 2;

const numbersArrays = [2, 4, 6, 8, 10];

processArrays(numbersArrays, doubleNumber);
