"use strict";

const top = document.querySelector(".top");
const showTopEmp = document.querySelector(".task3-go");


const topEmployers = [];
let tempTopEmployers = [];


const findBestEmployee = function(employees) {

  let topValues = 0;
  const employeers = Object.entries(employees);



  for(const emp of employeers){

    if(topValues<emp[1]){
      topValues = emp[1];
      tempTopEmployers = [];
      tempTopEmployers.push(`${emp[0]}: ${emp[1]} `);
    }else if(topValues === emp[1]){

      tempTopEmployers.push(`${emp[0]}: ${emp[1]} `);
    }
  }
  topEmployers.push(tempTopEmployers);
  return tempTopEmployers;




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