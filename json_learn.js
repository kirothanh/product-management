// JSON co gia tri la Object
var objectJSON = `
    {
        "fullName": "Dinh Tien Thanh",
        "email": "thanht@gmail.com",
        "phone": "0123456789"
    }
`;

// Chuyen tu JSON sang JS
const objectJS = JSON.parse(objectJSON);
console.log(objectJS);

// Chuyen tu JS sang JSON
const objectJSON2 = JSON.stringify(objectJS);
console.log(objectJSON2);