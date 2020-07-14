"use strict";

const objectUser = document.querySelector(".task2 .object");

const addField = document.querySelector(".task2-go");
const getCountProperty = document.querySelector(".task2-check");

const nameField = document.querySelector(".task2 .field");
const valField = document.querySelector(".task2 .val");


let countProperty =document.querySelector(".task2 .count-property");



const user = {

};

let keys = Object.keys(user);

objectUser.innerHTML = JSON.stringify(user);

let test;

getCountProperty.addEventListener('click', ()=>countProps(user));

addField.addEventListener("click",()=> {
  event.preventDefault();

  checkField();


  function checkField(){

    if(keys.includes(nameField.value)){
      changeField(nameField.value, valField.value);
      alert(`Поле ${nameField.value}, со значением ${valField.value}  ИЗМЕНЕНО`);
      objectUser.innerHTML = JSON.stringify(user);
    }else{
      if(addedField(nameField.value, valField.value)){
        alert(`Поле ${nameField.value}, со значением ${valField.value}  ДОБАВЛЕНо`);
        objectUser.innerHTML = JSON.stringify(user);

      }

    }
  }

  function changeField(nameField, valField){

    if(checkFieldBool(valField)===valField){
      user[nameField] = valField;

    }else if(!checkFieldBool(valField)){
      user[nameField] = false;
    }else if(checkFieldBool(valField)){
      user[nameField] = true;
    }
  }

  function addedField(nameField, valField) {
    if(nameField[0] ==='.' || !Number.isNaN(+nameField[0]) || nameField.length===0){
      alert('Поле не может быть пустым и  начинаться с точки или числа');
      return false;

    }else{

      changeField(nameField, valField);
      return true;
    }

  }

  function checkFieldBool(valField){
    if(valField === 'true'){
      return  true;

    }else if(valField === 'false'){
      return  false;

    }else{
      return valField;
    }

  }



  console.log(JSON.stringify(user));
});





function countProps(obj){
  event.preventDefault();
  keys= Object.keys(obj);

  countProperty.innerHTML = `В объекте ${keys.length} свойств`;
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */


