// bai 01
// var noti = document.querySelector(".notification");

// function hideNotification() {
//     setTimeout(function() {
//         noti.style.display = "none";
//     }, 3000)
// }
// hideNotification();


// bai 02
// var noti = document.querySelector(".notification");
// function fadeOut() {
//     var opacity = 1;
//     var timer = setInterval(function() {
//         if (opacity <= 0) {
//             clearInterval(timer);
//             noti.style.display = "none";
//         }
//         noti.style.opacity = opacity;
//         opacity -= 0.1;
//     }, 100) //lam mo trong 1s
// }
// setTimeout(fadeOut, 3000)



// bai 03
// var element = document.getElementById("element");
// element.innerHTML = "Noi dung moii";



// bai 04
// var title = document.querySelectorAll(".title");
// for(let i = 0; i < title.length; i++) {
//     title[i].style.color = "blue";
// }

// bai 05
// by me
// setTimeout(() => {
//     var bground = document.querySelector("body");
//     bground.style.background = "yellow";
// }, 3000)
// by teacher
// setTimeout(() => {
//     document.getElementsByTagName("body")[0].style.background = "#FECF73";
// }, 3000);


// bai 06
var btn = document.querySelector("button");
setTimeout(() => {
    btn.style.width = "200px";
    btn.style.height = "80px";
    btn.style.background = "#5CB874";
}, 5000)