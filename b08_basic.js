// bai 01
// var currentURL = window.location.href;
// console.log(currentURL);



// bai 02
// var protocol = window.location.protocol;
// var hostname = window.location.hostname;
// var port = window.location.port;
// console.log("Protocol: ", protocol);
// console.log("Hostname: ", hostname);
// console.log("Port: ", port);



// bai 03
// function redirect(url, delay) {
//     setTimeout(function() {
//         window.location.href = url;
//     }, delay);
// }
// redirect("https://28tech.com.vn/", 3000);



// bai 04
// function reloadPage(delay) {
//     setTimeout(function() {
//         window.location.reload();
//     }, delay);
// }
// reloadPage(3000);



// bai 05
// by me
// function checkProtocol() {
//     if(window.location.protocol == "https:") {
//         console.log("co");
//     } else {
//         console.log("ko");
//     }
// }
// checkProtocol();
// by teacher
// var isSecure = window.location.protocol === "https:";
// console.log("An toàn: " + isSecure);



// bai 06
// window.print();




// bai 07
// var seconds = 10;
// function countdown() {
//     if(seconds >= 0) {
//         console.log(seconds);
//         seconds--;
//         setTimeout(countdown, 1000);
//     } else {
//         console.log("Happy New Year!");
//     }
// }
// countdown();



// bai 08
// function takeWH() {
//     console.log("Height: ", window.innerHeight); // Chiều cao của cửa sổ trình duyệt
//     console.log("Width: ", window.innerWidth); // Chiều rộng của cửa sổ trình duyệt
// }
// takeWH();



// bai 09
// console.log(window.screenX); // Tọa độ X của cửa sổ trình duyệt
// console.log(window.screenY); // Tọa độ Y của cửa sổ trình duyệt



// bai 10
// window.open(
//     "https://daca.vn", 
//     "myWindow", 
//     "width=1200,height=600,top=100,left=100"
// );



// bai 11
// console.log(window.navigator.userAgent);
// bai 12
// console.log(window.navigator.language);
// bai 13
// console.log(window.screen.width);
// console.log(window.screen.height);


// bai 14
// const isMobile = navigator.userAgentData.isMobile;
// if(isMobile) {
//     console.log("Mobile");
// } else {
//     console.log("PC");
// }



// bai 15
// console.log(navigator.languages); // Mảng các ngôn ngữ ưu tiên của trình duyệt