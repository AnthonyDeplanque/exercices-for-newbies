function saySomething(something) {
  document.write('</br>' + something)
}
saySomething('fooock !')
saySomething('je code avec le cul')
saySomething('lalalalala !!!')
saySomething('nique')
saySomething("j'ai des gazs !")

function addition(a, b) {
  return a + b
}

const addedNumbers = addition(35, 40)

saySomething(addedNumbers)
let number = 19
saySomething(number)
// incrementation
number++
saySomething(number)
number++
saySomething(number)
number++
saySomething(number)
number++
saySomething(number)
number++
saySomething(number)
number++
saySomething(number)
number++
saySomething(number)
//decrementation
number--
saySomething(number)
number--
saySomething(number)
number--
saySomething(number)
number--
saySomething(number)
number--
saySomething(number)

const stringValue = '1'
const numberValue = 1
const verification = true

if (stringValue == numberValue && verification) {
  // true or false
  saySomething('OK !')
}
if (stringValue === numberValue) {
  saySomething("Mais c'est génial !")
}

saySomething(typeof stringValue)
saySomething(typeof numberValue)

const numberOne = 1
const numberTwo = 2
const numberThree = 3

if (numberOne > numberThree) {
  saySomething('toto dans tata')
} else if (numberOne > numberTwo) {
  saySomething('tata dans tutu')
} else {
  saySomething('tutu dans titi')
}
