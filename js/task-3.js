"use strict";

const top = document.querySelector(".top");
const showTopEmp = document.querySelector(".task3-go");

let topEmployers = [];
const findBestEmployee = function(employees) {
  // твой код
  let keys = Object.keys(employees);
  let values = Object.values(employees);
  let topValue;
  let nameBest;
  let secondValue;
  let secondBest;

  for (let value = 0; value<=values.length; value++){
      if (values[value]>=topValue || topValue===undefined){
        topValue = values[value];
        nameBest = keys[value];

      }

  }

  for (let value = 0; value<=values.length; value++){
    if (values[value]===topValue || topValue===undefined){
      secondValue = values[value];
      secondBest = keys[value];
      topEmployers.push(`Топ работник галеры <span style="background: #1abc9c">${secondBest}</span>, наработал  <span style="background: red">${secondValue}</span>`);
    }

  }

  return topValue+" "+nameBest;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

showTopEmp.addEventListener("click", function () {
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
      lorenc3: 99,
    }),
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
  top.innerHTML = topEmployers;
});