// import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";
// import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";
// import { tinhTong } from "./helpers/tinhTong.js";

// 1. Callback
  // Vi du 1
  // const congViec1 = () => {
  //   console.log("CV1");
  // }
  // const congViec2 = (callback) => {
  //   console.log("CV2");
  //   callback();
  // }
  // congViec2(congViec1);



  // Vi du 2
  // tinhTong(10, 20, kiemTraSoDuong);
  // tinhTong(10, 20, kiemTraChanLe);

  // tinhTong(10, 20, (number) => {
  //   kiemTraSoDuong(number);
  //   kiemTraChanLe(number);
  // })



  // Vi du 3
  // const loginSuccess = () => {
  //   console.log("Dang nhap thanh cong");
  // };

  // const checkLogin = (data, callback) => {
  //   const email = "thanh@gmail.com";
  //   const password = "8888";

  //   if(data.email === email && data.password === password) {
  //     callback();
  //   } else {
  //     console.log("Dang nhap that bai");
  //   }
  // }

  // let data = {
  //   email: "thanh@gmail.com",
  //   password: "8888"
  // }

  // checkLogin(data, loginSuccess);





// 2. Promises
// var a = 10;

// var promise = new Promise((resolve, reject) => {
//   if(a === undefined) {
//     reject();
//   } else {
//     resolve(a);
//   }
// })

// promise
// .then((resultA) => {
//   console.log(resultA);
//   return resultA;
// })
// .then((resultA) => {
//   const resultB = resultA + 10;
//   console.log(resultB);
//   return resultB;
// })
// .then((resultB) => {
//   const resultC = resultB * 20;
//   console.log(resultC);
// })
// .catch(() => {
//   console.log("That bai!");
// })
// .finally(() => {
//   console.log("Luon chay vao day!");
// })



// 3. Trạng thái
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     // reject("Loi");
//   }, 3000)
// });

// setTimeout(() => {
//   console.log("Sau 1 giay: ", promise);
// }, 1000);

// setTimeout(() => {
//   console.log("Sau 2 giay: ", promise);
// }, 2000);

// setTimeout(() => {
//   console.log("Sau 3 giay: ", promise);
// }, 3000);



// 4. Fetch API
// fetch("https://dummyjson.com/products")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.products);

//     const newArray = data.products.map((item) => {
//       return `
//         <div class="product-item">
//           <img src="${item.thumbnail}" />
//           <h2>
//             ${item.title}
//           </h2>
//           <h3>${item.price}$</h3>
//         </div>
//       `;
//     });

//     const htmls = newArray.join("");
//     const productList = document.querySelector("#product-list");
//     productList.innerHTML = htmls;
//   })


// 5. Async / Await
// const fetchApi = async (api) => {
//   const response = await fetch(api);
//   const data = await response.json();
//   return data;
// }
// fetchApi("https://dummyjson.com/products")
// .then((data) => {
//   console.log(data);
// })



// Cau 01
// By me
// const consoleLog = (arr) => {
//   for (const item of arr) {
//     console.log(item);
//   }
// }
// const forEachTest = (array, callback) => {
//   console.log(array);
//   callback(array);
// }
// forEachTest([1,2,3,4,5], consoleLog)

// By teacher
// function consoleLog(item) {
//   console.log(item);
// }
// function forEachTest(array, callback) {
//   for(let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// }
// const arrayTest1 = [1,2,3,4,5];
// forEachTest(arrayTest1, consoleLog);




// Cau 02
// function consoleLog(a, b) {
//   console.log(a + b);
// }
// function forEachPair(array, callback) {
//   for(let i = 0; i < array.length-1; i++) {
//     callback(array[i], array[i+1]);
//   }
// }
// const arrayTest = [5,20,30,60,90];
// forEachPair(arrayTest, consoleLog);



// Cau 03
// By me
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// var a = getRandomInt(1, 10);

// var promise = new Promise((resolve, reject) => {
//   if(a === undefined) {
//     reject();
//   } else {
//     resolve(a);
//   }
// })

// promise
// .then((a) => {
//   console.log("So ngau nhien: ", a);
// })

// By teacher
// function getRandomNumber() {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;

//     if(randomNumber) {
//       resolve(randomNumber);
//     } else {
//       reject("Khong the tao so ngau nhien");
//     }
//   })
// }

// getRandomNumber()
// .then((number) => {
//   console.log("So ngau nhien: ", number);
// })
// .catch((error) => {
//   console.error("Loi", error);
// })



// Cau 04
// By me
// const arr = [1,3];

// var promise = new Promise((resolve, reject) => {
//   var newArr = [];
//   var laCo = 0;
//   for (const item of arr) {
//     if(item % 2 == 0) {
//       laCo = 1;
//       newArr.push(item);
//     } else {
//       laCo = 0;
//     }    
//   }
//   if(laCo === 1) {
//     resolve(newArr);
//   } else {
//     reject("Khong co so chia het cho 2");
//   }
// })

// promise
// .then((arr) => {
//   console.log(arr);
// })
// .catch((error) => {
//     console.error("Loi", error);
// })

// By Teacher
// function getEvenNumbers(numbers) {
//   return new Promise((resolve, reject) => {
//     const evenNumbers = numbers.filter((number) => number % 2 === 0);

//     if(evenNumbers.length > 0) {
//       resolve(evenNumbers);
//     } else {
//       reject("Kooooooo")
//     }
//   })
// }

// const numbersTest1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// getEvenNumbers(numbersTest1) 
//   .then((evenNumbers) => { 
//     console.log(evenNumbers); 
//   }) 
//   .catch((error) => { 
//     console.error("Lỗi:", error); 
// }); 



// Cau 05
// fetch("https://restcountries.com/v2/all")
// .then(response => response.json())
// .then((data) => {
//   console.log(data);

//   const newArr = data.map((item) => {
//     return `
//       <div class="region-item">
//         <img src="${item.flag}" />
//         <div class="region-name">
//           <p>${item.capital}</p> - 
//            <p>${item.name}</p>
//         </div>
//       </div>
//     `
//   })

//   const htmls = newArr.join("");
//   const regionList = document.querySelector("#region-list");
//   regionList.innerHTML = htmls;
// })

// Cach dung async / await
// const fetchApi = async (api) => {
//   const response = await fetch(api);
//   const result = await response.json();
//   return result;
// }
// fetchApi("https://restcountries.com/v2/all").then((data) => {
//   let htmls = data.map((item) => {
//     return `
//       <div class="region-item">
//         <img src="${item.flag}" />
//         <div class="region-name">
//           <p>${item.capital}</p> - 
//            <p>${item.name}</p>
//         </div>
//       </div>
//     `;
//   });
//   htmls = htmls.join("");
//   const regionList = document.querySelector("#region-list");
//   regionList.innerHTML = htmls;
// })


// Cau 06
// const API = "https://api.ipify.org/?format=json";
// fetch(API)
//   .then((response) => response.json())
//   .then((data) => {
//     const ipAddress = data.ip;
//     console.log(ipAddress);
//   })




// Storage Api, ...... 
// 1
// localStorage.setItem("fullName", "Dinh Tien Thanh");

// const fullName = localStorage.getItem("fullName");
// const test = document.querySelector("#test");
// test.innerHTML = fullName;

// // Change Mode
// const currentMode = localStorage.getItem("mode");
// if(currentMode) {
//   const body = document.querySelector("body");
//   body.classList.toggle(currentMode);
// }

// const buttonChangeMode = document.querySelector("#change-mode");
// buttonChangeMode.addEventListener("click", () => {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark");

//   const currentMode = localStorage.getItem("mode");

//   if(currentMode) {
//     localStorage.setItem("mode", "");
//   } else {
//     localStorage.setItem("mode", "dark");
//   }
// })
// End change Mode

// localStorage.removeItem("email");
// console.log(localStorage.key(1));


// 2 
// Change mode
// const currentMode = sessionStorage.getItem("mode");
// if(currentMode) {
//   const body = document.querySelector("body");
//   body.classList.toggle(currentMode);
// }

// const buttonChangeMode = document.querySelector("#change-mode");
// buttonChangeMode.addEventListener("click", () => {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark");
  
//   const currentMode = sessionStorage.getItem("mode");
//   if(currentMode) {
//     sessionStorage.setItem("mode", "");
//   } else {
//     sessionStorage.setItem("mode", "dark");
//   }
// });

// const resetMode = document.querySelector("#reset-mode");
// resetMode.addEventListener("click", () => {
//   sessionStorage.removeItem("mode");
//   const body = document.querySelector("body");
//   body.classList.remove("dark");
// })
// // End change mode

// const buttonClearAll = document.querySelector("#clear-all");
// buttonClearAll.addEventListener("click", () => {
//   sessionStorage.clear();
// })



// 3
// vi du 1
// const tinhToan = (a, b) => {
//   let c = 20;
//   const tinhTong = () => {
//     let c = 10;
//     return a + b + c;
//   }
//   return tinhTong;
// }

// const tong = tinhToan(10, 20)();
// console.log(tong);

// vi du 2
// const tinhToan = (a, b) => {
//   const tinhTong = () => {
//     return a + b;
//   }
//   const tinhHieu = () => {
//     return a - b;
//   }
//   const tinhTich = () => {
//     return a * b;
//   }
//   const tinhThuong = () => {
//     return a / b;
//   }

//   const tong = tinhTong();
//   const hieu = tinhHieu();
//   const tich = tinhTich();
//   const thuong = tinhThuong();

//   return {
//     tong: tong, 
//     hieu: hieu,
//     tich: tich,
//     thuong: thuong
//   };
// }

// const tinh = tinhToan(10, 20);

// console.log(tinh);

// const tong = tinh.tong();
// console.log(tong);

// const hieu = tinh.hieu();
// console.log(hieu);

// const tich = tinh.tich();
// console.log(tich);

// const thuong = tinh.thuong();
// console.log(thuong);

// 4
// Vi du 1: Gan mac dinh tai vi tri khai bao
// const tong = (a = 0, b = 0) => {
    //   return a + b;
    // }

    // const ketQua = tong(10, 20);
    // console.log(ketQua);

// Ví dụ 2: Gán bên trong function.
  // const tong = (a, b) => {
  //   a = a || 0;
  //   b = b || 0;
  //   return a + b;
  // }

  // const ketQua = tong(10, 20);
  // console.log(ketQua);

// 5
// let listUserDB = [
//   "Le Van A", 
//   "Nguyen Thi B",
//   "Do Van C"
// ];
// const listUserFE = [
//   "Nguyen Van D",
//   "Do Thi E"
// ];
// listUserDB = [...listUserDB, ...listUserFE];
// console.log(listUserDB);


// const infoUserDB = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com"
// };
// const infoUserFE = {
//   phone: "0123456789",
//   age: 18
// };
// const newInfoUserDB = {
//   ...infoUserDB,
//   ...infoUserFE,
//   facebook: "fb.com/abc"
// };
// console.log(newInfoUserDB);


// 6
// const tinhTong = (...numbers) => {
//   let tong = 0;
//   for (const number of numbers) {
//     tong += number;
//   }
//   return tong;
// }

// const ketQua = tinhTong(10, 20, 30, 40, 50, 60);
// console.log(ketQua);

// 7
  // const time = ["10", "24", "50"]; // ["giờ", "phút", "giây"]

  // const [hour, minute, second] = time;

  // // const hour = time[0];
  // // const minute = time[1];
  // // const second = time[2];

  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  // const infoUser = {
  //   fullName: "Le Van A",
  //   email: "test@gmail.com",
  //   phone: "0123456789"
  // };

  // const { fullName, email, phone, test } = infoUser;

  // // const fullName = infoUser.fullName;
  // // const email = infoUser.email;
  // // const phone = infoUser.phone;

  // console.log(fullName);
  // console.log(email);
  // console.log(phone);
  // console.log(test);


  // Cau 1
  // var fruits = ['apple', 'banana', 'orange'];
  // localStorage.setItem('fruits', JSON.stringify(fruits));

  // var savedFruits = localStorage.getItem('fruits');
  // var fruits = JSON.parse(savedFruits);
  // console.log(fruits);


  // Cau 2
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // Hien thi danh sach cong viec
  function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    for(let i = 0; i < tasks.length; i++) {
      const li = document.createElement("li");
      li.textContent = tasks[i];

      li.setAttribute("data-index", i); //Them thuoc tinh data-index de xac dinh index cua cong viec
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Xoa";
      deleteButton.addEventListener("click", function() {
        const index = parseInt(this.parentElement.getAttribute("data-index"));
        deleteTask(index);
      })

      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  }

  // Them cong viec moi
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
    if(task !== "") {
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = "";
      displayTasks();
    }
  }

  // Xoa cong viec
  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(tasks));
    displayTasks();
  }

  // Hien thi danh sach cong viec ban dau
  displayTasks();

  // Lang nghe su kien click vao nut Them
  const button = document.querySelector("#button");
  button.addEventListener("click", addTask);


