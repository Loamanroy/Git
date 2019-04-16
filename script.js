var money;
var time;

function start() {
     money = +prompt ("Ваш бюджет на месяц?", '');
     time = prompt ("Введите дату в формате: YYYY-MM-DD", '');

     while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", '');
     }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpensens: [],
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (var i = 0; i < 2; i++) {
            var a = prompt (" Введите обязательную статью расходов в этом месяце ", '');
            var b = prompt (" Во сколько обойдется? ", '');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null 
            && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log ("Done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30 ).toFixed();
        alert ("Ваш ежедневный бюджет:" + appData.moneyPerDay);
    }
};

function detectLevel() {
    if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень достатка");
}       else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000 ) {
    console.log ("Средний уровень достатка");
}       else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}       else {
    console.log("Произошла ошибка в вычислениях, попробуйте снова.");   
}
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        var save = +prompt ("Какова сумма накоплений?"),
            persent = +prompt ("Под какой процент?");

        appData.monthInCome = save / 100 / 12 * persent;
        alert ("Доход в месяц в Вашего депозита: " + appData.monthInCome);
    }
}
checkSavings();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();

var arr = [12, 24, 36];
    function f () {
        return arr.splice (",");
    }
console.log (arr);

