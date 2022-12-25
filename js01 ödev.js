// HESAP MAKİNASI
// const number1 = Number(prompt("Please Enter First Number:"));
// let operator = prompt("Please Enter Type of Operator: +,-,*,/");
// const number2 = Number(prompt("Please Enter Second Number:"));
// let result = 0;
// if (operator === "+") {
//   result = number1 + number2;
// } else if (operator === "-") {
//   result = number1 - number2;
// } else if (operator === "*") {
//   result = number1 * number2;
// } else if (operator === "/") {
//   result = number1 / number2;
// } else {
//   console.log("Incorrect Operator Selection");
//   operator = null;
// }
// 
// if (operator) {
//   console.log(`İşleminizin Sonucu=${result}`);
// }

// /! ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu
// witch-case yapısı ile yazınız.
// /? Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
// /? Cuma -> Teamwork
// /? Cumartesi ->  InClass + Workshop
// /? Pazar -> Self-Study
// /? Aksi takdirde -> Yanlis gun girildi.

// const day = prompt("Please enter any day").toLowerCase()
// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
    // console.log("Inclass");
    // break;
//   case "friday":
    // console.log("Teamwork");
    // break;
//   case "saturday":
    // console.log("Inclass and worksop");
    // break;
//   case "sunday":
    // console.log("Freeday");
    // break;
//   default:
    // console.log("Incorrect day");
// }
// 
// ! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak 
// istiyoruz.

// const salary = Number(prompt("Please enter your salary"))
// const minimumWage = 8250
// const increasedSalary = salary >= minimumWage ? salary * 1.1 : salary * 1.5
// console.log("Old Salary:", salary, "Increased Salary:", Math.trunc(increasedSalary));

// !ODEV4: Kredi Risk Programı
// ? Console’dan kişinin gelir ve gider miktarını alan
// // ? değilse Kredi Verilemez 🥺
// ? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

// const income = Number(prompt("Please enter your income"))
// const outcome = Number(prompt("Please enter your outcome"))
// const availableOfCredit = income - 8250 >= outcome ? "Your credit is ready!" : "We're sorry!"
// console.log(availableOfCredit);
// 
