"use strict";

const objectUser = document.querySelector(".object");
const addField = document.querySelector(".task1-go");


const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

objectUser.innerHTML = JSON.stringify(user);

addField.addEventListener('click',()=> {
  objectUser.innerHTML = '';
  user.mod = 'happy';
  user.hobby = 'skydiving';
  user.hobby = 'skydiving';
  user.premium = false;



  objectUser.innerHTML = JSON.stringify(user);
  for (const key of Object.keys(user)){
    console.log(`${key}: ${user[key]}`)
  }

});


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

