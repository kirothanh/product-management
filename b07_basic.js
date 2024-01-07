// Bai 01
// By me
// var a = prompt("Nhap vao so nguyen duong: ");
// var checkND = (a) => {
//     if(a > 0) {
//         alert("YES");
//     } else {
//         alert("NO");
//     }
// }
// checkND(a);

// By teacher
// function laSoNguyenDuong(value) {
//     return value > 0 && value % 1 == 0;
// };
// var input = prompt("Nhap mot so bat ky", "");
// input = parseFloat(input);
// if(isNaN(input)) {
//     alert("Vui long nhap mot so!");
// } else {
//     var result = laSoNguyenDuong(input);
//     if(result == true) {
//         alert("YES");
//     } else {
//         alert("NO");
//     }
// }




// Bai 02
// var sum = (array) => {
//     const total = array.reduce((total, number) => total + number, 0);
//     return total;
// }

// const isShapePossible = (n, angles) => {
//     if(n < 3) return false;

//     if(angles.some((angle) => angle <= 0 || angle >= 180)) return false;

//     return sum(angles) === (n - 2) * 180;
// }




// Bai 03
// By me
// var checkString = (str, n) => {
//     var strNew = "";
//     let mangMoi = str.split(" ");
//     for (let item of mangMoi) {
//         if(item.length < n) {
//             continue;
//         } else {
//             strNew += item.charAt(0).toUpperCase();
//         }
//     }
//     return strNew;
// }
// console.log(checkString("Xin chào! Tôi tên là Nam.", 3));

// By teacher
// const abbreviate = (string, n = 0) => {
//     let array = string.split(" ");
//     let arrayFilter = array.filter((word) => word.length >= n);
//     let arrayChar = arrayFilter.map((item) => {
//         return item[0];
//     })
//     let stringChar = arrayChar.join("");
//     let stringUpper = stringChar.toUpperCase();
//     return stringUpper;
// }

// const test1 = abbreviate("Xin chào! Tôi tên là Nam.");
// console.log(test1);




// Bai 04
// const alternatingCaps = (string) => {
//     let counter = 0;
//     let array = string.split("");

//     let newArray = array.map((character) => {
//         if (character == " ") return character; // Nếu là khoảng trắng thì in ra luôn
//         counter += 1;
//         return counter % 2 ? character.toUpperCase() : character.toLowerCase(); // nếu vị trí chẵn in chữ hoa, nếu vị trí lẻ in chữ thường.
//     });

//     newArray = newArray.join("");
//     return newArray;
// };

// const test1 = alternatingCaps("Khá Bảnh");
// console.log(test1); // KhÁ bẢnH





// Bai 05
// const sum = (arr) => {
//     return arr.reduce((total, sum) => total + sum, 0);
// }
// const mean = (arr) => {
//     return sum(arr) / arr.length;
// }
// const median = (arr) => {
//     const numberBefore = arr[Math.floor((arr.length - 1) / 2)];
//     const numberAfter = arr[Math.ceil((arr.length - 1) / 2)];
//     return mean([numberBefore, numberAfter]);
// }
// const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
// console.log(test1); 





// Bai 06
// const getBirthdayCake = (name, age) => {
//     const char = age % 2 === 0 ? '#' : '*';
//     const middle = `${char} ${age} Chuc mung sinh nhat ${name}! ${age} ${char}`;
//     const edge = char.repeat(middle.length);

//     return `
//         ${edge};
//         ${middle};
//         ${edge};
//     `
// }
// console.log(getBirthdayCake("Nam", 18));
// console.log(getBirthdayCake("Long", 17));




// Bai 07
// const blahBlah = (string, number) => {
//     const words = string.split(" ");

//     const newWords = words.map((word, index, arrOrigin) => {
//         console.log(word, " ", index, " ", arrOrigin.length, " ", arrOrigin.length - index - 1);
//         return number > arrOrigin.length - index - 1 ? "blah" : word;
//     })

//     const newStr = newWords.join(" ");
//     return `${newStr}...`;
// }
// console.log(blahBlah("Anh học CNTT hả, cài win dùm em nhé!", 3));




// Bai 08
// const sum = (array) => {
//     return array.reduce((total, num) => total + num, 0);
// }
// const getTotalPrice = (array) => {
//     const arrTotal = array.map((item) => item.quantity * item.price);
//     return sum(arrTotal);
// }
// const test1 = getTotalPrice([
// 	{ product: "Sữa", quantity: 1, price: 7000 }
// ]);
// console.log(test1);




// Bai 09
// const capitalize = (string) => {
//     return string.slice(0, 1).toUpperCase() + string.slice(1);
// };
// const makeTitle = (string) => {
//     return string.split(" ").map(capitalize).join(" ");
// }
// const tes1 = makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// console.log(tes1);




// Bai 10
// const chooseFuse = (fuses, current) => {
//     const num = parseFloat(current);
//     const possibleFuses = fuses.map(parseFloat).filter((fuses) => fuses >= num);

//     return `${Math.min(...possibleFuses)}V`;
// }
// const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
// console.log(test1); // 5V




// Bai 11
// const countOnes = arr => {
//     const result = arr.reduce((total, row) => total + row.filter(cell => cell === 1).length, 0);
//     return result;
// }
// const test2 = countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1],
// ]);
// console.log(test2);




// Bai 12
// const swappingCases = (string) => {
//     let swapString = string
//     .split("")
//     .map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
//     .join("");

//     return swapString;
// }
// const test1 = "Le VAn HunG";
// console.log(swappingCases(test1));




// Bai 13
// const swapNumber = (arr) => {
//     let result = arr.map((num) => -num);
//     return result;
// }
// console.log(swapNumber([1, -10, -20, 15, 100, -30]));




// Bai 14
// const ignoreNumbers = (string) => {
//     const newStr = string
//     .split("")
//     .map((item) => (isNaN(parseInt(item)) ? item : ""))
//     .join("");
//     return newStr;
// }
// const test1 = "Test4Ag54SF";
// console.log(ignoreNumbers(test1));




// Bai 15
// const lessN = (string, n) => {
//     var rs = string
//     .split(" ")
//     .map((item) => item.length <= n ? item : "")
//     .join(" ");
//     return rs;
// }
// console.log(lessN("I Love Foood Code Too Playing Much", 4));




// Bai 16
// const multiplyNumberInString = (str) => {
//     const result = str
//     .split("")
//     .filter((item) => !isNaN(parseInt(item)))
//     .map((item) => item * item)
//     .join("");
//     return result.length > 0 ? result : "0";
// }

// console.log(multiplyNumberInString("JG23BGH5BA"));
// console.log(multiplyNumberInString("VD23GS8S6AH"));
// console.log(multiplyNumberInString("AGD353GDSK8"));




// Bai 17
// const cart = [
//     { name: "iPhone", price: 1000, quantity: 5 },
//     { name: "iPad", price: 500, quantity: 2 },
//     { name: "MacBook", price: 2000, quantity: 1 },
// ];

// var sumCart = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// console.log(sumCart);




// Bai 18
// const students = [
//     { hoTen: "Le Van A", gioiTinh: "Nam" },
//     { hoTen: "Do Van B", gioiTinh: "Nam" },
//     { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
//     { hoTen: "Dao Van D", gioiTinh: "Nam" },
//     { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
//     { hoTen: "Vu Van F", gioiTinh: "Nam" },
// ];

// const groupedStudents = students.reduce((groups, item) => {
//     if(groups[item.gioiTinh]) {
//         groups[item.gioiTinh].push(item.hoTen);
//     } else {
//         groups[item.gioiTinh] = [item.hoTen];
//     }
//     return groups;
// }, {});
// console.log(groupedStudents);




// Bai 19
// const numbers = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];
// const sumN = numbers.reduce(((groups, item) => {
//     const sum = item.reduce((total, value) => total + value, 0);
//     groups.push(sum);
//     return groups;
// }), []);
// console.log(sumN);




// Bai 20
// const students = [
//     { hoTen: "Le Van A", lop: "A", diem: 7.5 },
//     { hoTen: "Do Van B", lop: "B", diem: 6.8 },
//     { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
//     { hoTen: "Dao Van D", lop: "C", diem: 9 },
//     { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
//     { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
// ];

// const groupStu = students.reduce((totalByClass, item) => {
//     const lop = item.lop;
//     if(!totalByClass[lop]) {
//         totalByClass[lop] = 0;
//     }
//     totalByClass[lop] += item.diem;
//     return totalByClass;
// }, {})
// console.log(groupStu);