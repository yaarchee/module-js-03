"use strict";

const top = document.querySelector(".top");
const showTopEmp = document.querySelector(".task3-go");

const topEmployers = [];



const findBestEmployee = function(employees) {
  // твой код
  const employeers = Object.entries(employees);

  employeers.sort(function(a, b) {

    return b[1] - a[1];
  });

  for( const employer of employeers){
    if(employeers[0][1]===employer[1]){
      console.log(`${employer[0]} ${employer[1]}`);
      topEmployers.push(`Топ работник галеры <span style="background: #1abc9c">${employer[0]}</span>, наработал  <span style="background: red">${employer[1]}</span>`);
    }
  }



};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

showTopEmp.addEventListener('click', ()=> {
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