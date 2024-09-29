console.log("Hello World!")

const account_Id = 14453;
let account_email = "shiba@google.com";
let acc_password = "798050";
let acc_city = "Jaipur";


console.table([acc_password, account_Id, account_email, acc_city]);

const id1 = Symbol('098');
console.log(id1);

const id2 = Symbol('098');
console.log(id2);

console.log(id1.description === id2.description);
console.log(id1 === id2)