//перебор масиву. Написату функцію logItems(array)?
//яка отримую масив і використовує цикл for, який для кожного елементу масиву
//буде виводити в консоль повідомлення в форматі
//<номер елементу> - <значення елементу>.
//нумерація елементів повинна починатися з 1

const numberedList = function (array) {
    for (let i = 0; i < array.length; i += 1) {
        const message = `${i + 1} - ${array[i]}`
        console.log(message)
    }
}

console.log(numberedList(['Michael', 'James', 'Norman', 'Stiven', 'Jenifer']))