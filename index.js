// #### Task 1 💻

// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.


    let x = 20
    let y = 58
    let z = 42
let xyz = x+y+z
console.log ("сумма =",xyz)

// #### Task 2 💻

// Создайте переменные:

//     - количество секунд в минуте
//     - количество минут в часу
//     - количество часов в сутках
//     - количество суток в году
    
// Посчитайте ваш возраст в секундах и поместите результат в переменную `myAgeInSeconds`

const SEC = 60
const MIN = 60
const HOUR = 24
const DAY = 365

const myAgeInSeconds = 24 * DAY * HOUR * MIN * SEC
console.log ("возраст в секундах",myAgeInSeconds)

// #### Task 3 💻

//     let count = 42
//     let userName = '42'

// Создайте две переменные. Поместите в них переменную `count` и превратите в строку,
//  а `userName` наоборот в число.
//  Попробуйте реализовать задачу двумя разными способами.

let count = 42
let userName = "42"
count = String (count)
console.log (" строка " , count)
userName = +userName
console.log ( "число" , userName)

// #### Task 4 💻
// Имеется три переменные:
//   let a = 1
//   let b = 2
//   let c = "белых медведей"

// Сложите переменные так, чтобы в результате получилось выражение: `12 белых медведей`
//  и результат выведите в консоль.

 let a = 1
 let b = 2
  let c = "белых медведей"

  let abc = String (a)+String(b)+" "+c
  console.log (abc)

//   #### Task 5 💻

// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную
//  `lengthWords` и посчитайте в ней длинну всех слов из списка:

//     - доступ 
//     - морпех
//     - наледь
//     - попрек
//     - рубило

let dostup = "доступ" 
let morpex = "морпех"
let naled = "наледь"
let poprek = "попрек"
let rubilo = "рубило"

let lengthWords = dostup.length + morpex.length + naled.length + poprek.length + rubilo.length

console.log ("сумма букв" , lengthWords)

// #### Task 6 💻
    
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    

//     Variable: %variable name% have type: %type variable%

let number1 = 1
let word1 = "one"
let bool1 = true

console.log (`Variable: number1 have type: ${typeof number1}`)

console.log (`Variable: word1 have type: ${typeof word1}`)

console.log (`Variable: bool1 have type: ${typeof bool1}`)

// #### Task 7 💻

// Запросить у пользователя имя и возраст и вывести их в консоль.

let namename = prompt("имя")
let age = prompt("возраст")

console.log (namename )
console.log (age)



