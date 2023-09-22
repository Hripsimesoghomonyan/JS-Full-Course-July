"use strict"

class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    if (this.game_over) {
      return "game over";
    }

    if (
      this.words.length === 0 ||
      (this.words[this.words.length - 1].slice(-1) === word[0] &&
        !this.words.includes(word))
    ) {
      this.words.push(word);
      return this.words;
    } else {
      this.game_over = true;
      return "game over";
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

class Account {
  static nextId = 1;

  constructor(name, initialBalance) {
    this.id = Account.nextId++;
    this.name = name;
    let _balance = initialBalance;

    this.getBalance = () => _balance;

    this.setBalance = (newBalance) => {
      if (typeof newBalance === "number") {
        _balance = newBalance;
      }
    };

    this.credit = (amount) => {
      if (typeof amount === "number" && amount > 0) {
        _balance += amount;
      }
    };

    this.debit = (amount) => {
      if (typeof amount === "number" && amount > 0 && _balance >= amount) {
        _balance -= amount;
      }
    };

    this.transferTo = (otherAccount, amount) => {
      if (
        typeof amount === "number" &&
        amount > 0 &&
        _balance >= amount &&
        otherAccount instanceof Account
      ) {
        _balance -= amount;
        otherAccount.credit(amount);
      }
    };
  }

  static identifyAccounts(...accounts) {
    return accounts.map((account) => account.id);
  }
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);

saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);

console.log(saving.getBalance());
console.log(current.getBalance());

const res = Account.identifyAccounts(current, saving);

console.log(saving.getBalance());
saving.setBalance("hello");
console.log(saving.getBalance());
console.log(current.getBalance());
console.log(saving);
