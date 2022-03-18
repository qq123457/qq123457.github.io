


let myImage = document.querySelector('img');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox1.png') {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox1.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名子?');
    if (!myName || myName === null) {
        setUserName();
    } else {
    
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了, ' + myName;
        
    }
    
}


myButton.onclick = setUserName;

window.onload = () => {
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storeName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla 酷毙了, ' + storeName;
    }
}