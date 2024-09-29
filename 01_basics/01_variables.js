const account_Id = 14453;
let account_email = "shiba@google.com";
var acc_password = "798050";
acc_city = "Jaipur";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(account_Id +" ,"+ acc_password +" ,"+ account_email +" ,"+ acc_city);

console.table([acc_password, account_Id, account_email, acc_city]);
