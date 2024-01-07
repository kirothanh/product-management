
// Bai 6
// // By me
// function calDienTich(r) {
//     var canh_hvnho = Math.sqrt(r**2 + r**2);
//     return (((2*r)*(2*r)) - (canh_hvnho*canh_hvnho)).toFixed();
// }

// console.log(calDienTich(6));

// // By teacher
// function squareAreasDif(r) {
//     var S = 2 * r**2;
//     return S;
// }

// var test1 = squareAreasDif(5);
// console.log(test1);





// Bai 7
// // By me
// var checkPalindrome = (a) => {
//     console.log();
//     if(a === a.split().reverse().toString()) {
//         return true;
//     }
//     return false;
// }
// console.log(checkPalindrome('cicic'));
// // By teacher
// function palindrome(string) {
//     const reverseString = string.split("").reverse().join("");
//     console.log(reverseString);
//     return string === reverseString;
// }
// console.log(palindrome('rotavator'));




// Bai 9
// var img = "<https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png>";
// var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn"; 
// var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả..."; 
// var url = "<https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon>";

// var string = ` 
//   <div class="article"> 
//     <a href="${url}"> 
//     <div class="inner-image"> 
//       <img src="${img}" /> 
//     </div> 
//     <div class="inner-content"> 
//       <h2 class="inner-title">${title}</h2> 
//       <p class="inner-desc">${desc}</p> 
//     </div> 
//     </a> 
//   </div> 
// `; 
// console.log(string); 





// Bai 10
// var a = "100"; 
// var b = 20; 
// var c = true; 
// console.log(+a + b + c);