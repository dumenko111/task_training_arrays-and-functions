//робимо slug в URL із назви статті (в заголовку статті тільки букви і пробіли)

//1) нормалізуємо строку; 
//2) розбиваємо по словах;
//3) зшиваємо встроку з "-"
//має получитися 'top-10-benefits-of-react-framework'
const title = 'Top 10 benefits of React framework'

let resultSlug = title.toLowerCase().split(' ').join('-') //ланцюжок методів

console.log(resultSlug)