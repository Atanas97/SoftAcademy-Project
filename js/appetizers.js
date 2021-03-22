function clickForDish() {
    const openDishDropDown = document.getElementById('openDishDropDown');

    openDishDropDown.classList.toggle('active');
}


//Uncheck checkboxes on refresh 
var inputs = document.querySelectorAll('input');

inputs.forEach(inputEl => {
    inputEl.checked = false;
});


//Check and Uncheck - line trough code 
var checkboxOne = document.getElementById('checkboxOne');
var textOne = document.getElementById('textOne');

checkboxOne.addEventListener('click', () => {
    if (checkboxOne.checked === true) {
        textOne.style.textDecoration = 'line-through';
        textOne.style.color = 'var(--thirdgray-color)';
    } else {
        textOne.style.textDecoration = 'none';
        textOne.style.color = 'rgb(63, 63, 63)';
    }
});

var checkboxTwo = document.getElementById('checkboxTwo');
var textTwo = document.getElementById('textTwo');

checkboxTwo.addEventListener('click', () => {
    if (checkboxTwo.checked === true) {
        textTwo.style.textDecoration = 'line-through';
        textTwo.style.color = 'var(--thirdgray-color)';
    } else {
        textTwo.style.textDecoration = 'none';
        textTwo.style.color = 'rgb(63, 63, 63)';
    }
});

var checkboxThree = document.getElementById('checkboxThree');
var textThree = document.getElementById('textThree');

checkboxThree.addEventListener('click', () => {
    if (checkboxThree.checked === true) {
        textThree.style.textDecoration = 'line-through';
        textThree.style.color = 'var(--thirdgray-color)';
    } else {
        textThree.style.textDecoration = 'none';
        textThree.style.color = 'rgb(63, 63, 63)';
    }
});

var checkboxFour = document.getElementById('checkboxFour');
var textFour = document.getElementById('textFour');

checkboxFour.addEventListener('click', () => {
    if (checkboxFour.checked === true) {
        textFour.style.textDecoration = 'line-through';
        textFour.style.color = 'var(--thirdgray-color)';
    } else {
        textFour.style.textDecoration = 'none';
        textFour.style.color = 'rgb(63, 63, 63)';
    }
});

var checkboxFive = document.getElementById('checkboxFive');
var textFive = document.getElementById('textFive');

checkboxFive.addEventListener('click', () => {
    if (checkboxFive.checked === true) {
        textFive.style.textDecoration = 'line-through';
        textFive.style.color = 'var(--thirdgray-color)';
    } else {
        textFive.style.textDecoration = 'none';
        textFive.style.color = 'rgb(63, 63, 63)';
    }
});

var checkboxSix = document.getElementById('checkboxSix');
var textSix = document.getElementById('textSix');

checkboxSix.addEventListener('click', () => {
    if (checkboxSix.checked === true) {
        textSix.style.textDecoration = 'line-through';
        textSix.style.color = 'var(--thirdgray-color)';
    } else {
        textSix.style.textDecoration = 'none';
        textSix.style.color = 'rgb(63, 63, 63)';
    }
});

var checkboxSeven = document.getElementById('checkboxSeven');
var textSeven = document.getElementById('textSeven');

checkboxSeven.addEventListener('click', () => {
    if (checkboxSeven.checked === true) {
        textSeven.style.textDecoration = 'line-through';
        textSeven.style.color = 'var(--thirdgray-color)';
    } else {
        textSeven.style.textDecoration = 'none';
        textSeven.style.color = 'rgb(63, 63, 63)';
    }
});
