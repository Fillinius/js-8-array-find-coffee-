console.log('Hello')

const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeeName = prompt('Поиск кофе по названию').trim().toLowerCase()
console.log(coffeeName)

const copy = coffeeName
console.log(copy)

const findCoffee = coffees.findIndex((name) => {
  return name === coffeeName
})
console.log(findCoffee)

if (findCoffee === -1) {
  alert('К сожалению, такого вида кофе нет в наличии')
} else
  `Держите ваш любимый кофе ${coffeeName} Он ${findCoffee}-й по популярности в нашей кофейне`

// const findCoffee = coffees.findIndex((name) => {
//   if (coffeeName === name) {
//     return name === coffeeName
//     alert(
//       `Держите ваш любимый кофе ${coffeeName} Он ${findCoffee}-й по популярности в нашей кофейне`
//     )
//   } else {
//     return alert(` К сожалению, такого вида кофе нет в наличии он `)
//   }
// })
