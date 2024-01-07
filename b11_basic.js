// Bai 09
// const dataJSON = `
// {
//     "name": "Lê Văn A",
//     "age": 20,
//     "email": "levana@gmail.com",
//     "address":
//     {
//         "street": "Số 123, đường ABC",
//         "city": "Hà Nội",
//         "country": "Việt Nam"
//     }
// }`;

// const dataJs = JSON.parse(dataJSON);
// console.log(dataJs.name);
// console.log(dataJs.email);
// console.log(dataJs.address.city);

// Bai 10
// const dataJSON = `
//     [
//         {
//             "name": "Lê Văn A",
//             "age": 30,
//             "skills": ["JavaScript", "HTML", "CSS"]
//         },
//         {
//             "name": "Nguyễn Thị B",
//             "age": 25,
//             "skills": ["Python", "Java", "C++"]
//         },
//         {
//             "name": "Đỗ Văn C",
//             "age": 35,
//             "skills": ["Ruby", "PHP", "SQL"]
//         }
//     ]
// `;
// // By me
// const dataJS2 = JSON.parse(dataJSON);
// const newArray = [];
// for (let index = 0; index < dataJS2.length; index++) {
//     newArray.push(dataJS2[index].name);
// }
// console.log(newArray);
// // By teacher
// const namesArray = dataJS2.map((obj) => obj.name);
// console.log(namesArray);

// Bai 11
// const ordersJSON = ` 
//   [ 
//     { 
//       "id": 1, 
//       "items": [ 
//         { 
//           "productId": 1, 
//           "quantity": 2 
//         }, 
//         { 
//           "productId": 2, 
//           "quantity": 1 
//         } 
//       ] 
//     }, 
//     { 
//       "id": 2, 
//       "items": [ 
//         { 
//           "productId": 3, 
//           "quantity": 3 
//         } 
//       ] 
//     } 
//   ] 
// `;

// const productsJSON = ` 
//   [ 
//     { 
//       "id": 1, 
//       "name": "iPhone 12", 
//       "price": 1200 
//     }, 
//     { 
//       "id": 2, 
//       "name": "Samsung Galaxy S21", 
//       "price": 1000 
//     }, 
//     { 
//       "id": 3, 
//       "name": "Google Pixel 5", 
//       "price": 900 
//     } 
//   ] 
// `;

// Viết một hàm có tên calculateOrderTotal() nhận vào một id
// đơn hàng và tính tổng giá trị của đơn hàng đó
// By me
// const ordersJS = JSON.parse(ordersJSON);
// const productsJS = JSON.parse(productsJSON);
// var tongTien = 0;
// const calculateOrderTotal = (idDonHang) => {
//   const ordersArray = ordersJS.map((order) => {
//     if(idDonHang == order.id) {
//       const itemsInOrdersArray = order.items.map((item) => {
//         const productArray = productsJS.map((prod) => {
//           if(item.productId == prod.id) {
//             tongTien += (item.quantity * prod.price); 
//           }
//         })
//       })
//     }
//   }) 
//   return tongTien;
// }
// console.log(calculateOrderTotal(2));

// By teacher
// const ordersJS = JSON.parse(ordersJSON);
// const productsJs = JSON.parse(productsJSON);

// function calculateOrderTotal(orderId) {
//   const order = ordersJS.find((item) => item.id === orderId);
//   if(order) {
//     let total = 0;
//     for (const item of order.items) {
//       const product = productsJs.find((p) => p.id === item.productId);
//       if (product) {
//         total += product.price * item.quantity;
//       }
//     }
//     return total;
//   } else {
//     return "Khong tim thay don hang";
//   }
// }
// console.log(calculateOrderTotal(1));







// Bai 12
// let productsJSON = ` 
//   [ 
//     { 
//       "id": 1, 
//       "name": "iPhone 12", 
//       "price": 1200 
//     }, 
//     { 
//       "id": 2, 
//       "name": "Samsung Galaxy S21", 
//       "price": 1000 
//     }, 
//     { 
//       "id": 3,
//       "name": "Google Pixel 5", 
//       "price": 900 
//     } 
//   ] 
// `; 

// let productsJS = JSON.parse(productsJSON);
// const deleteProduct = (productId) => {
//   productsJS = productsJS.filter((item) => item.id !== productId);
//   productsJSON = JSON.stringify(productsJS);
// }
// deleteProduct(2);
// console.log(productsJSON);




// Bai 13
// const productsJSON = ` 
//   [ 
//     { 
//       "id": 1, 
//       "name": "iPhone 12", 
//       "quantity": 10 
//     }, 
//     { 
//       "id": 2, 
//       "name": "Samsung Galaxy S21", 
//       "quantity": 5 
//     }, 
//     { 
//       "id": 3, 
//       "name": "Google Pixel 5", 
//       "quantity": 8 
//     } 
//   ] 
// `; 

// By me
// const productsJs = JSON.parse(productsJSON);
// const calculateTotalQuantity = () => {
//   var total = 0;
//   const prod = productsJs.map((item) => {
//     total += item.quantity;
//   })
//   return total;
// }
// console.log(calculateTotalQuantity());

// By teacher
// function calculateTotalQuantity() { 
//   const totalQuantity = productsJS.reduce((total, item) => { 
//     return total + item.quantity; 
//   }, 0); 
//   return totalQuantity; 
// } 