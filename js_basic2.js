// var infoUser = {
//     fullName: "DTT",
//     email: "thanh@gmail.com",
//     phone: "01234566789"
// }

// for (key in infoUser) {
//     console.log(key);
//     console.log(infoUser[key]);
// }

// Bai 01
// var maxNumber = (a, b) => {
//     return Math.max(a, b);
// }
// console.log(maxNumber(5, 10));

// Bai 02
// function checkInput(input) {
//     if(typeof input === 'number') {
//         if(input % 3 == 0 && input % 5 == 0) {
//             console.log('FizzBuzz');    
//         } 
//         else if(input % 3 == 0) {
//             console.log('Fizz');
//         }
//         else if(input % 5 == 0) {
//             console.log('Buzz');
//         }       
//         else if(input % 3 != 0 && input % 5 != 0) {
//             console.log(input);
//         }
//     } else {
//         console.log('Vui long nhap so');
//     }
// }
// checkInput(30)

// Bai 04
// const person = {
//     name: "Le Van A",
//     age: 40,
//     height: 175,
//     country: "Viet Nam",
//     designation: "UI Developer",
// };

// const technology = {
//     name: "JavaScipt",
//     version: 6,
//     purpose: "Scripting language for Web",
//     developer: "Netscape Corporation",
//   };

// function checkStr(a) {
//     for (key in a) {
//         if(typeof a[key] === 'string') {
//             console.log(key, " : ", a[key]);
//         }
//     }
// }
// checkStr(technology)

// Bai 05
// function isPrimeNumber(_number) {
//     for (let factor = 2; factor < _number; factor++) {
//         if(_number % factor === 0) {
//             return false;
//         } 
//     }
//     return true;
// }

// function showPrimeNumbers(numberLimit) {
//     for (let curNum = 2; curNum <= numberLimit; curNum++) {
//         if(isPrimeNumber(curNum)) {
//             console.log("So nguyen to:", curNum);
//         }
//     }
// }
// showPrimeNumbers(20)

// Bai 06
// function convertTime(string) {
//     const time = string.slice(0, -2);
//     const ampm = string.slice(-2);
//     const units = time.split(":");

//     let hours = units[0];
//     const minutes = units[1];
//     const seconds = units[2];

//     if(hours === "12") {
//         hours = "00";
//     }

//     if(ampm === "PM") {
//         hours = parseInt(hours) + 12;
//     }

//     const newString = [hours, minutes, seconds].join(":");

//     return newString;
// }

// var test1 = convertTime("07:05:45PM");
// console.log(test1);


// Bai 09
// function extensionFilename(fileName) {
//     return fileName.includes(".") ? fileName.split(".").pop() : "Day ko phai ten file.";
// }
// const input = prompt("Nhap ten file");
// if(input.length > 0) {
//     const result = extensionFilename(input);
//     console.log(result);
// }


// Bai 12
// const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
// const onlyNames = [];
// for(let i = 0; i < myFriends.length; i++) {
//     if(typeof myFriends[i] === 'string') {
//         onlyNames.push(myFriends[i]);
//     }
// }
// console.log(onlyNames);