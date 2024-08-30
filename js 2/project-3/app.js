const son1 = +prompt('1 - son')
const son2 = +prompt('2 - son')
const amal = prompt('Qilmoqchi bo"lgan amalingiz')

if (`${amal}` === '-') {
    const javob = `${son1}` - `${son2}`;
    document.querySelector('.box').
     innerHTML = `<h1> ${javob} </h1>`;
} else if (`${amal}` === '+') {
    const javob = JSON.parse(`${son1}`) + JSON.parse(`${son2}`);
    document.querySelector('.box').
     innerHTML = `<h1> ${javob} </h1>`;
} else if (`${amal}` === '*') {
    const javob = `${son1}` * `${son2}`;
    document.querySelector('.box').
     innerHTML = `<h1> ${javob} </h1>`;
} else {
    const javob = `${son1}` / `${son2}`;
    document.querySelector('.box').
     innerHTML = `<h1> ${javob} </h1>`;
};
// const javob = 6 - 3 


