//    function addtocart() {
//        alert('you have added item to cart')
//  }

// alert('hello world')
// prompt('Enter your Score')
// confirm('do you want  to exit')
// console.log('welcome to Javascript')

// variables
// var
// let
// const

// let name = 'Jose'
// name = 'David'
// console.log(name)

// const age = 18
// age = 20
// console.log(age)

// data type
// primitive dsts type

// Number data type
// let milege = 20031
// console.log(milage)

// String data type
// let address= "230 jones street"
// console.log(address)

// Boolean data type
// let isCertified = false
// console.log(username)

// // Null data type
// // let username= null
// // console.log(username)

// // undefined data type
// // let time;
// // console.log(time)




// // Non-primitive data type
// // data  data type
// // let data = new data ()
// // console.log(data)

// // function data type 
// function addNum (a, b){
//     console.log(a + b)
//     // console.log(7 + 5)
// }
// addNum(7, 5)
// addNum(12, 10)
// addNum(6, 8)

// let time;
// // arrays
// // length    1     2      3     4     5     6
// const arr =[78, 'blue', true, null, time, 'dates']
// // index     1     2      3     4     5     6
// // console.log(arr.length)
// // console.log(arr[3])


// // objects
// const person = {
//     name: 'John',
//     car: 'Toyota',
//     year: 2020,
//     color: 'red',
//     age: 30,
//     registered: true,
//     Transmission: 'Automatic'
// }
// console.log(person.Transmission)



// // nested arrays
// const ownedProperty =[
//     ['techhub', 'salon', ['sugar', 'cements', 'salt'], 'restaurant'],
//     ['toyota', 'ford', ['AML', 'AMG', 'G-wagon'],'Nissan'],
//     ['penthouse', 'duplex', 'bungalow'],
//     'laudromat','supermarket'
// ]
// // console.log(ownedProperty[1][2][2])
// // console.log(benz[2])


// // Nested objects
// const user = {
//     name: 'John doe',
//     age: 35,
//     ismarried: false,
//     gender: 'male',
//     education: {
//         school: 'Greenwood high',
//         started: '09/15/2010',
//         ended: '07/2/2015',
//         graduate: true,
//         coursedesc: {
//             courseName: 'Computer science',
//             degreeTYpe: 'Bachelor of science',
//             completed: true,
//             certified: true,
//             cgpe: 4.2
//         }
//     }
// }
// console.log(user.education.graduate)
// console.log(0);

// // Array of objects
// const people=[
//     {
//         iseEmployed:true,
//     },
//     {
//         name: 'Alice',
//         age: 28,
//         email: "alice@example.com",
//         isEmplyed: true,
//     },
//     {
//         name: 'Bob',
//         age: 35,
//         email:"bob@example.com",
//         isemployed: true
//     },
//     {
//         name: 'Charlie ',
//         age: 22,
//         email: "chalie@example.com",
//         isemployed: true
//     },
//     {
//         name: 'Jane',
//         age: 30,
//         email: "jane@example.com",
//         isemployed: true
//     }
// ];
// console.log(people[1].name, people[1].age)
// console.log(people[1].name, people[1].age)

// Arithmetic Operators
// consol.log(8 + 5)
// console.log(8 - 5)
// console.log(16 / 5)
// console.log(3 * 4)
// console.log(16 % 5)  //modulus Operators
// console.log(3 ** 3)  //exponential Operators 3 x 3 x 3 x 3 

// increment operations --
// let numb = 5


// string concatenation
// let name = 'gomycode'
// let address ='230 herbert maculey'
// string concatenation
// let location = 'I attend ' + name + '. it is situated at ' + address 
// console.log(location)
// // template literal
// let Location2 = 'I attend $(name). it is situated at $(address)'

// string operations 
// string concatention
// let name ='gomycode'
// let address ='230 herbert maculey'
// let info = `I attend ${name}. It is situated at ${address}.`

// //
// let info2 = 'I attend ' + name + '. It is situated at ' + address + '.'
// alert(info2)

// conditional statement 
// if statement
// let x = 'golden penny'
// if (x == 'indomie') {
//     console.log(`buy ${x}`)
// }else if (x == 'chicken chicken ') {
//     console.log(`${x} is a smaller number`)
// }else if (x == 'golden penny') {
//     console.log(`but golden penny `)
// }else if (x == 'golden rice') {
//     console.log(`buy golden rice`)
// }


// switch statement
// function decodeColor()  {
//     let color = prompt('choose a color red, blue, green, yellow')
//     switch (color) {
//         case 'red': alert ('you chose red');
//         break;
//         case 'blue': alert ('you chose blue');
//         break;
//         case 'green': alert ('you chose green');
//         break;
//         case 'yellow': alert ('you chose yellow');
//         break;
//     }
// }

// decodeColor



// Loops 
// while loops 
let num = [4, 7, 8, 2]
let sum = 0
let i = 0
while (i < num.length) {
    sum += num[i];
    i++;
}
console.log(sum)



// do while loop
// go{
//     sum += nim[i]
//     i++
// }while (i < num.length);
// console.log(sum)

// for loop
// let num = [4, 7, 8, 2]