//написати функцію, яка рахує суму цифр в числі і повертає його

const calcDiditsSum = number => {
    const num = String(number).split('')//спочатку перетворюємо число за допомогою String() на строку, а потім split() на масив цифр
    let total = 0
    for (const n of num) {
        total += Number(n) //приводимо до числа
    }

    console.log(`сума цифр -`,total)
}

calcDiditsSum(1231)
