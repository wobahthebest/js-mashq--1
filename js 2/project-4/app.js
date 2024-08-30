const sels = +prompt("Selsy bo'yicha haroratni kiriting ")
const amal = prompt('Qilmoqchi bo"lgan amalingiz "farengeyt ga o"girish uchun <Far> so"zini kiriting" va "Kelvinga o"girish uchun <Kel> so"zini kiriting" To"gri yozishga ahamiyat bering  ')


if (amal === 'Kel') {
    const result = (`${sels}` +  273.15) / 100;
    document.querySelector('.box').
     innerHTML = `<h1> Kelvin gradusi bo'yicha: <span class='black'> ${result} </span> gradus</h1>`
} else if (amal === 'Far') {
    const result = (`${sels}` * 9 / 5) + 32;
     document.querySelector('.box').
     innerHTML = `<h1> Farengeyt gradusi bo'yicha: <span class='black'> ${result} </span> gradus</h1>`
}


