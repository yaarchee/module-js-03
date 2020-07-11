"use strict";

const objectUser = document.querySelector(".object");
const addField = document.querySelector(".task1-go");
const nameField = document.querySelector(".field");
const valField = document.querySelector(".val");

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

objectUser.innerHTML = JSON.stringify(user);

addField.addEventListener("click",function () {
    event.preventDefault();

    let keys = Object.keys(user);
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
      if(nameField[0] ==="." || !Number.isNaN(+nameField[0]) || nameField.length===0){
        alert("Поле не может быть пустым и  начинаться с точки или числа");
        console.log(nameField +" nameField");
        return false;

      }else{

        changeField(nameField, valField);
        return true;
      }

    }

    function checkFieldBool(valField){
      if(valField === "true"){
        return  true;

      }else if(valField === "false"){
        return  false;

      }else{
        return valField;
      }

    }



    console.log(JSON.stringify(user));
});


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

