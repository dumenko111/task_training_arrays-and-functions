//написати скріпт, який об'єднує всі елементи масиву в одне
//строкове значення. Елементів може бути довільна к-сть.
//нехай елементи масиву в строці будуть розділені комою.
//спочатку через for, потім через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
let friendsString = ''
////////////ЧЕРЕЗ FOR///////////
for (const friend of friends) {
    friendsString += friend + ','
}
console.log(friendsString.slice(0, friendsString.length -1)) //це для того, щоб в кінці не було коми

//////ЧЕРЕЗ JOIN////////////////
// friendsString = friends.join(',')
// console.log(friendsString)