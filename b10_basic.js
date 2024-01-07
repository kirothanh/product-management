// bai 01
// const todoInput = document.querySelector("#todo-input");
// const addButton = document.querySelector("#add-button");
// const todoList = document.querySelector("#todo-list");

// addButton.addEventListener("click", () => {
//     const todoText = todoInput.value;
//     if(todoText !== "") {
//         const li = document.createElement("li");
//         li.innerHTML = todoText;
//         todoList.appendChild(li);
//         todoInput.value = "";

//         li.addEventListener("click", () => {
//             li.classList.toggle("completed");
//         })

//         const del_btn = document.createElement("button");
//         del_btn.textContent = "Xoa";
//         li.appendChild(del_btn);

//         del_btn.addEventListener("click", () => {
//             li.remove();
//         })
//     }
// })




// bai 02
// const htmlEditor = document.getElementById("html-editor");
// const previewButton = document.getElementById("preview-button");
// const preview = document.getElementById("preview");

// previewButton.addEventListener("click", () => {
//     const htmlCode = htmlEditor.value;
//     preview.innerHTML = htmlCode;
// })



// bai 03
// const btn_openModal = document.querySelector("#open-modal-button");
// const modal = document.querySelector("#modal");
// const cls_button = document.querySelector("#close-button");

// btn_openModal.addEventListener("click", () => {
//     modal.style.display = "block";
// })

// cls_button.addEventListener("click", () => {
//     modal.style.display = "none";
// })




// bai 04
// function openTab(event, tabName) {
//     const tabContents = document.getElementsByClassName("tab-content");
//     for (let i = 0; i < tabContents.length; i++) {
//         tabContents[i].classList.remove("active");
//     }

//     const tabButtons = document.getElementsByClassName("tab-button");
//     for (let i = 0; i < tabButtons.length; i++) {
//         tabButtons[i].classList.remove("active");
//     }

//     document.getElementById(tabName).classList.add("active");
//     event.currentTarget.classList.add("active");
//     console.log(event);
// }


// bai 05
// function add() {
//     const num1 = parseFloat(document.querySelector("#num1").value);
//     const num2 = parseFloat(document.querySelector("#num2").value);
//     const result = document.querySelector("#result");
//     result.innerHTML = num1 + num2;
// }

// function subtract() {
//     const num1 = parseFloat(document.getElementById("num1").value);
//     const num2 = parseFloat(document.getElementById("num2").value);
//     const result = num1 - num2;
//     document.getElementById("result").textContent = result;
// }

// function multiply() {
//     const num1 = parseFloat(document.getElementById("num1").value);
//     const num2 = parseFloat(document.getElementById("num2").value);
//     const result = num1 * num2;
//     document.getElementById("result").textContent = result;
// }

// function divide() {
//     const num1 = parseFloat(document.getElementById("num1").value);
//     const num2 = parseFloat(document.getElementById("num2").value);
//     const result = num1 / num2;
//     document.getElementById("result").textContent = result;
// }



// bai 06
// const colorPicker = document.getElementById("color-picker");
// const colorPrevious = document.getElementById("color-preview");

// colorPicker.addEventListener("change", function() {
//     const selectedColor = colorPicker.value;
//     colorPrevious.style.background = selectedColor;
// })


// bai 07
// const data = [10, 20, 15, 30, 25];

// const chart = document.getElementById("chart");

// for(let i = 0; i < data.length; i++) {
//     const bar = document.createElement("div");
//     bar.className = "bar";
//     bar.style.height = data[i] + "px";
//     chart.appendChild(bar);
// }


// bai 08
const range = document.querySelector("#slider");
const valueDisplay = document.querySelector("#valueDisplay");

range.addEventListener("change", () => {
    valueDisplay.innerHTML = range.value;
})