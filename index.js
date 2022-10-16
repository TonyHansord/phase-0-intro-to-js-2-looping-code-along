// Code your solutions in this file
function writeCards(array, message) {
  const birthdayMessages = [];
  for (let i = 0; i < array.length; i++) {
    birthdayMessages.push(
      `Thank you, ${array[i]}, for the wonderful ${message} gift!`
    );
    debugger;
  }
  return birthdayMessages;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
