"use strict";
const showCost= document.querySelector(".task7-go");
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      type: type,
      amount: amount,
      id: this.transactions.length + 1,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return `${this.balance}  deposit`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if(amount>this.balance){
      return `недостаточно средств, ваш баланс  ${this.balance} вы снимаете =  ${amount}`;
    }else{
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    }
    return `${this.balance}  withdraw`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `${this.balance}  показать баланс`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return `${JSON.stringify(this.transactions.find(item=>item.id===id))} getTransactionDetails(id)`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {

    let result = this.transactions.reduce((sum, current) =>{
      return current.type ===type ? sum + current.amount : sum;

    }, 0);
    console.log(typeof  result);
    return result;
  }

};

showCost.addEventListener('click', ()=> {
  console.log(account.deposit(1000));
  console.log(account.deposit(2000));
  console.log(account.getBalance() + "   getBalance()");
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  console.log(account.withdraw(500));
  console.log(account.getTransactionTotal(Transaction.WITHDRAW )  + "WITHDRAW");
  console.log(account.getTransactionDetails(3));
  console.log(account.getBalance());
  console.log(account.withdraw(2000000));
  console.log(account.transactions);
});

