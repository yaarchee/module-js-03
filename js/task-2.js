"use strict";


const getCountProperty = document.querySelector(".task2-check");

const countProps = (obj)=>{

  return  `В объекте ${JSON.stringify(obj)} ${Object.keys(obj).length} свойств`;

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */




getCountProperty.addEventListener('click', ()=>{
  console.log(countProps({})); // 0

  console.log(countProps({ name: 'Mango', age: 2 })); // 2

  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

});


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */


