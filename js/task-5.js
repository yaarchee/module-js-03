"use strict";

const showProp= document.querySelector(".task5-go");
const pr = document.querySelector(".prop");


let mainArr = [];

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  // твой код
  let resArr = [];

  for(const obj of arr){
    if (obj.hasOwnProperty(prop)){
      resArr.push(obj[prop]);
    }


  }
  mainArr.push(resArr);
  return resArr;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

showProp.addEventListener("click", function () {
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

  console.log(getAllPropValues(products, 'category')); // []

  pr.innerHTML = mainArr.toString();
  mainArr = [];
});
