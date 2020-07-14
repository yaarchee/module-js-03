"use strict";

const showSalary = document.querySelector(".task4-go");
const infoSalary = document.querySelector(".salary");
infoSalary.style.visibility = 'hidden';

let sumSalary;
const arrSum = [];



const countTotalSalary = function(employees) {
  // твой код
  sumSalary = 0;
  const salaries = Object.values(employees);

  for(const salary of salaries){
    sumSalary += salary;
  }

  arrSum.push(sumSalary);
  return sumSalary

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */



showSalary.addEventListener('click', ()=>{
  console.log(countTotalSalary({})); // 0

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400

  infoSalary.style.visibility = 'visible';
  infoSalary.innerHTML = arrSum;

});