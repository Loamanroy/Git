var money = prompt ("Ваш бюджет на месяц?", '');
var time = prompt ("Введите дату в формате: YYYY-MM-DD", '');
var q3 = prompt (" Введите обязательную статью расходов в этом месяце ", '');
var q4 = prompt (" Во сколько обойдется? ", '');


var appData = {
    budget: money,
    timeData: time,
    expenses: {q3 : q4},
    optionalExpensens: "",
    income: "",
    savings: false
};

alert ("Ваш дневной бюджет = " + ((money - q3) / 30) + "рублей");
