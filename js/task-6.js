"use strict";

const showCost= document.querySelector(".task6-go");
const pr = document.querySelector(".cost");

let arrPrice= [];

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },

];

const calculateTotalPrice = function(allProdcuts, productName) {
  let result = 0;
  for(const obj of allProdcuts){
    if(obj.name === productName){
      result += obj.price*obj.quantity;
    }
  }


  arrPrice.push(result);
  return  result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */



showCost.addEventListener("click", function () {
  console.log(calculateTotalPrice(products, 'Радар')); // 5200

  console.log(calculateTotalPrice(products, 'Дроид')); // 2800

  pr.innerHTML = arrPrice;
  arrPrice= []
});


