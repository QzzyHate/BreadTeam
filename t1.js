//#1 Положительное число или нет
let num = 59845;
if (num < 0) {
    console.log("Отрицательное число")
} 

else {
    console.log("Положительное число")
}

//#2 Определение длинны строки
let stroka = "i'm the storm that is approaching";
console.log(`Длинна строки: ${stroka.length}`);

//#3 Последняя буква строки
console.log(`Последняя буква строки: ${stroka[stroka.length -1]}`);

//#4 Чётное число или нет
if (num % 2 != 0) {
    console.log("Нечетное число")
}
else{
    console.log("Чётное чило")
}

//#5 Одинаковы ли первые буквы у строк
let stroka2 = "i nate higgers";
if (stroka[0] == stroka2[0]){
    console.log("Первые буквы строк одинаковы")
}
else{
    console.log("Первые буквы строк не одинаковы")
}

//#6 Сумма последней и первой цыфры числа
let num1st = num.toString();
console.log(`Сумма первой и последней цыфры числа ${num} = ${(+num1st[num1st.length -1]) + (+num1st[0])}`);

//#7 Сумма всех цыфр числа
let st = 0;
for (let i of num1st){
    st += +i 
}
console.log(`Сумма всех цыфр числа ${num} = ${st}`);


