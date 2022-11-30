var myButton = document.querySelector('Button');
var myHeading = documet.querySelector('h1');
function setUserName() {
    var myName = prompt('Введите свое имя');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Добро пожаловать ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
