const today = new Date();
var userInputDate = new Date(2022,10,12,18,12);

var diff = Math.ceil(today.getTime() - userInputDate.getTime());
var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
var duration = userInputDate.valueOf() - today.valueOf();

console.log(diff)
console.log(duration)
console.log(diffDays)