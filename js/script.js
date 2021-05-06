// Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
// хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
// Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
// число и считаете. Результат надо вывести на страницу с помощью alert.

let kursDollara = 74.8;
let kursEuro =90.5
let sumDollars = 0, sumEuro = 0;

let rubles = promt("Сумма в рублях");

if(!rubles && typeof rubles == "object") {
  alert("Вы отменили!!!");
}
else {
  if(rubles == "") {
    alert("Вы ничего не ввели!!!");
  }
else {
  if(isNaN(+rubles)) {
    alert("Это не число!");
  }
  else {
    sumDollars = (rubles/kursDollara).toFixed(2);
    sumEuro = (rubles/kursEuro).toFixed(2);

    alert(`Сумма в долларах = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC`);
   }
  }
}