let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let btn3 = document.getElementById("myButton3");
let copydiv = document.querySelector(".copyCode");
let rgb1 = "5c91e5";
let rgb2 = "6ddf56";
let rgb3 = "31dad7";
let colors = "#";

const hexavalue = () => {
    let hexnum = "0123456789abcdef";
    colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + hexnum[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const handelButton1 = () => {
    rgb1 = hexavalue();
    btn1.innerHTML = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}, ${rgb3})`;
    copydiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2}, ${rgb3});`;
};

const handelButton2 = () => {
    rgb2 = hexavalue();
    btn2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}, ${rgb3})`;
    copydiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2}, ${rgb3});`;
};

const handelButton3 = () => {
    rgb3 = hexavalue();
    btn3.innerHTML = rgb3;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}, ${rgb3})`;
    copydiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2}, ${rgb3});`;
};

btn1.addEventListener("click", handelButton1);
btn2.addEventListener("click", handelButton2);
btn3.addEventListener("click", handelButton3);

copydiv.addEventListener("click", ()=>{

    navigator.clipboard.writeText(copydiv.innerText)
    alert("Copyed the color")
})