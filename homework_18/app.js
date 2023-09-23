let hoursPerDay = prompt("Введите количество часов работы в день:");
hoursPerDay = parseInt(hoursPerDay);

let hoursPerMonth = hoursPerDay * 22;

let hoursPerYear = hoursPerMonth * 12;

console.log("Вы работаете " + hoursPerMonth + " часов в месяц.");
console.log("Вы работаете " + hoursPerYear + " часов в год.");
