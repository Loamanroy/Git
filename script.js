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
    savings: true
};

function chooseExpenses () {
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
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert ("Ваш ежедневный бюджет:" + appData.moneyPerDay);

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


function detectDayBudjet() {
    alert(appData.moneyPerDay);
}
detectDayBudjet();

// Замыкание функции - это функция со всеми внешними переменными, которые ей доступны.