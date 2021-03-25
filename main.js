// Дано число. написать функцию, которая считает факториал числа
const task1 = (number) => {
  let result = 1
  for (let i = 1; i <= number; i++) {
    result *= i
  }
  return result
}
console.log(`Factorial 7 = ${task1(7)}`)


// Дано число. написать функцию, которая выводит консоль числа фебоначи до заданного
const task2 = (number) => {
  let a = 1
  let b = 1
  for (let i = 3; i <= number; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}
console.log(`Fibonacci 7 = ${task2(7)}`)


// Дана строка. написать функцию, которая возвращает значение true, если строка является палиндромом, и false — если нет
const task3 = (str) => {
  let reversedString = str.split('').reverse().join('')
  if (reversedString === str) {
    return console.log(true)
  } else {
    return console.log(false)
  }
}
task3('racecar');


// Даны две строки. написать функцию, которая проверяет, являются ли строки анаграммами (регистр букв не имеет значения).
const task4 = (str1, str2) => {
  str1 = str1.toLowerCase().split('').sort().join('')
  str2 = str2.toLowerCase().split('').sort().join('')
  if (str1 === str2) {
    return console.log(true)
  } else {
    return console.log(false)
  }  
}
task4('Hello', 'ollhe')


// Даны две даты. написать функцию, которая определяет сколько дней прошло между ними.
const task5 = () => {
  let a = new Date('2003/01/14')
  let b = new Date('2003/01/24')
  return ((b - a) / (1000 * 3600 * 24))
}
console.log(task5())


// Дано число. написать функцию решения счастливого билета (сумма первых 3х цифр равно сумме вторых 3х)
const task6 = (ticket) => {
  let firstSum = 0
  let secondSum = 0
  for(let i = 0; i < ticket.length; i++) {
    if (i <= 2) {
      firstSum += +ticket[i]
    } else {
      secondSum += +ticket[i]
    }    
  }
  if (firstSum === secondSum){
    return console.log(true)
  } else {
    return console.log(false)
  }
}
task6('123321')


// Дано число. вычислить сумму n последних цифр числа m
const task7 = (number, count) => {
  let result = 0
  number = number.split('').reverse()
  for (let i = 0; i < count; i++) {
    result += +number[i]
  }
  return result
}
console.log(task7('12345', 3))


// Дан массив чисел. определить сколько раз менялся знак в последовательности
const task8 = () => {
  let mas = [-1, -3, 4, -2, -4, 5, 8, 10]
  let count = 0
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] * mas[i-1] < 0) {
      count++
    }
  }
  return count
}
console.log(task8())


// Дан массив чисел. определить упорядочена ли последовательность
const task9 = () => {
  const mas = [1, 2, 10, 32]
  const sortedMas = mas.slice().sort((a, b) => a - b)
  // console.log(mas)
  // console.log(sortedMas)
  if (JSON.stringify(mas) === JSON.stringify(sortedMas)) {
    return true
  } else {
    return false
  }  
}
console.log(task9())


// Дан массив букв. определить упорядочена ли последовательность
const task10 = () => {
  let mas = ['a', 'b', 'd']
  mas = mas.join('').toLocaleLowerCase().split('')
  const sortedMas = mas.slice().join('').toLocaleLowerCase().split('').sort()
  // console.log(mas)
  // console.log(sortedMas)
  if (mas.join('') === sortedMas.join('')) {
    return true
  } else {
    return false
  }
}
console.log(task10())


// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
const task11 = () => {
  const mas = [100, 3, 2, 1231]
  const reversedMas = []
  for (i = mas.length - 1; i >= 0 ; i--) {
    reversedMas.push(mas[i])
}
  return reversedMas
}
console.log(task11())


// Нарисуйте пирамиду в консоли, как показано ниже
const task12 = () => {
  for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i))
  }  
}
console.log(task12())


// Дан двухмерный массив с числами. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const task13 = mas => {
  let sum = 0;  
  mas.forEach((element) => {
    if (typeof element == 'object')
      // если элемент - объект, то считаем сумму его элементов (рекурсия)
      sum += task13(element);
    else
      // если просто элемент, то просто считаем сумму
      sum += element
  })
  // returning the result
  return sum;
}
console.log(task13([[1, 2, 3], [4, 5], [6]]))


// Найдите все года от 1 до 2020, сумма цифр которых равна 13.
const task14 = () => {

  const checkYear = (n) => {
    let sum = 0
    for (let i = 0; i < n.length; i++) {
      sum += +n[i]
    }  
    if (sum === 13) {
      console.log(n.join(''))
    }
  }

  for (let i = 1; i <= 2020; i++) {
    year = i.toString().split('')
    checkYear(year)
  }
}
console.log(task14())


// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'
const task15 = () => {
  let str = 'var_text_hello'
  let result = str.split('_')

  for (let i = 1; i < result.length; i++) {    
    let firstSymb = result[i][0].toUpperCase()
    // все заглавные буквы во всех словах, кроме первого

    for (let j = 1; j < result[i].length; j++) {
      firstSymb += result[i][j];
    }
    result[i] = firstSymb;
    // получили слова с заглавными буквами, кроме первого
  }

  str = ''
  for (let i = 0; i < result.length; i++) {
    str += result[i];
  }
  return str;
}
console.log(task15())


// Дано число. Сложите его цифры. Если сумма получилась больше 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
const task16 = () => {
  const number = 975

  const findSum = (num) => {
    let sum = 0;
    let mas = num.toString().split('');
    for (let i = 0; i < mas.length; i++) {
      sum += parseInt(mas[i]);
    }

    if (sum > 9) {
      console.log(`Сумма цифр числа ${num} = ${sum}, и это больше 9...`)
      console.log(`Пробую сумму цифр ${sum}...`)
      return findSum(sum);
    } else {
      console.log(`Сумма цифр числа ${num} = ${sum}`)
    }
  }

  findSum(number)
  
} 
console.log(task16())
