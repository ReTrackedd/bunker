const occupationData = require("./Characters/occupation.js");
const bioData = require("./Characters/bioData");
const healthData = require("./Characters/health.js");
const phobiaData = require("./Characters/phobia.js");
const featureData = require("./Characters/charFeatures.js");
const hobbyData = require("./Characters/hobby.js");
const infoData = require("./Characters/addInfo.js");
const luggageData = require("./Characters/luggage");
const actionData = require("./Characters/actionCards.js");

const bunkerData = require("./Characters/bunkerInfo.js");
const disastersData = require("./Characters/disasters.js");


let random = (min = 0, max) => Math.floor(Math.random() * (max - min )) + min;

let randomWeight = random(45, 100);
let randomHeight = random(150, 200);
let imt = randomWeight /((randomHeight/100) ** 2);

let imtData = (i) => {
  return (i < 18.5) ? 'Недостатня маса тіла' :
          (i >= 18.5 && i < 25) ? 'Норма' :
          (i >= 25 && i < 30) ? 'Передожиріння' :
          (i >= 30 && i < 35) ? 'Ожиріння 1 ступеню' :
          (i >= 35 && i < 40) ? 'Ожиріння 2 ступеню' : 'Ожиріння 3 ступеню'
}

let masyv = (arr, func) => {
  let sraka = func(0, arr.length);
  
  return (arr[sraka].desc) ? 
  `${arr[sraka].name} - ${arr[sraka].desc}` :
  `${arr[sraka].name}`;
}

function q (arr, func) {
  let sraka = func(0, 3),
      newArr = [];

  for (let index = 0; index <= sraka; index++) {
    newArr.push(arr[func(0, arr.length)]);
  }
  return new Set(newArr);
}

console.log(bunkerData[0][random(0, bunkerData[0].length)]);
console.log(q(bunkerData[3], random));
console.log("Бункер оснащений додатковими предметами: ");
console.log(q(bunkerData[4], random));

console.log(`Катастрофа: ${masyv(disastersData, random)}`)

console.log("Професія: " + occupationData[random(0, occupationData.length )].name);
console.log("Біологічні Характеристики: " + bioData[0][random(0, bioData[0].length)] + ", " + random(18, 75) + ", " + 
  bioData[1][random(0, bioData[1].length)]);
console.log("Фізичні характеристики: " + randomWeight + "кг, " + randomHeight + "см. Імт: " +  imt.toFixed(1) + ", " + imtData(imt.toFixed(1)));
console.log("Здоров'я: " + healthData[0][random(0, healthData[0].length)].name + ", " + healthData[1][random(0, healthData[1].length)] );
console.log("Фобія: " + masyv(phobiaData, random));
console.log("Риса Характеру: " + featureData[random(0, featureData.length)].name);
console.log("Хобі: " + hobbyData[random(0, hobbyData.length)].name);
console.log("Додаткова Інформація: " + infoData[random(0, infoData.length)].name);
console.log("Багаж: " + luggageData[random(0, luggageData.length)].name)
console.log(`Карта дії 1: ${masyv(actionData, random)}`);
console.log(`Карта дії 2: ${masyv(actionData, random)}`);

