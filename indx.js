
const calcAverage = (a, b, c) => (a + b + c) / 3;


const dolphinsAvg = calcAverage(96, 108, 89);
const koalasAvg = calcAverage(88, 91, 110);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log('Dolphins win the trophy!');
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log('Koalas win the trophy!');
} else if (dolphinsAvg == koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log('Both teams win the trophy!');
} else {
    console.log('No team wins the trophy.');
}






function calculate (bill) {
    let tip = (bill >= 50 && bill <= 300) . bill * 0.15 , bill , (0.20);
    let totalValue = bill + tip;
    console.log(`The bill was {bill}, the tip was {tip}, and the total value was {totalValue}`);
}

calculate (275);
calculate(40);
calculate(430);

