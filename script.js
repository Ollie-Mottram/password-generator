`use strict`;

//selecting elements

//tabs
const tab1btn = document.getElementById('tab1-btn');
const tab2btn = document.getElementById('tab2-btn');
const tab3btn = document.getElementById('tab3-btn');
const tab1Content = document.getElementById('tab1');
const tab2Content = document.getElementById('tab2');
const tab3Content = document.getElementById('tab3');
//pw gen
const generateBtn = document.getElementById('btn-gen');
const copyBtn = document.getElementById('btn-copy');
const charSlider = document.getElementById('chars');
const capSlider = document.getElementById('caps');
const specialSlider = document.getElementById('specials');
const numSlider = document.getElementById('nums');
const pwLengthInput = document.getElementById('length-input');
const pwTextBox = document.getElementById(`password-text-box`);
const randomTabBtn = document.getElementById(`random-tab`);
let passwordLength = pwLengthInput;

const slider = this.nextElementSibling;
//mem gen
const memGenBtn = document.getElementById('btn-gen-mem');
const memCopyBtn = document.getElementById('btn-copy-mem');
const memTextBox = document.getElementById('mem-text-box');
const memLengthInput = document.getElementById('mem-length-input');
let memPasswordLength = memLengthInput;
//pin gen
const pinGenBtn = document.getElementById('btn-gen-pin');
const pinCopyBtn = document.getElementById('btn-copy-pin');
const pinTextBox = document.getElementById('pin-text-box');
const pinLengthInput = document.getElementById('pin-length-input');
let pinPasswordLength = pinLengthInput;

//pw elements
let password = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const words = [
    "apple",
    "banana",
    "cherry",
    "dragonfruit",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "blueberry",
    "blackberry",
    "pineapple",
    "plum",
    "apricot",
    "avocado",
    "coconut",
    "peach",
    "pear",
    "lime",
    "melon",
    "pomegranate",
    "guava",
    "passionfruit",
    "tangerine",
    "nectarine",
    "cantaloupe",
    "lychee",
    "persimmon",
    "mulberry",
    "boysenberry",
    "kiwifruit",
    "papaya",
    "starfruit",
    "clementine",
    "cranberry",
    "date",
    "grapefruit",
    "gooseberry",
    "mandarin",
    "rhubarb",
    "apricot",
    "banana",
    "coconut",
    "durian",
    "elderberry",
    "fig",
    "grapefruit",
    "honeydew",
    "jackfruit",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
    "blueberry",
    "blackberry",
    "cherry",
    "dragonfruit",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "blueberry",
    "blackberry",
    "pineapple",
    "plum",
    "apricot",
    "avocado",
    "coconut",
    "peach",
    "pear",
    "lime",
    "melon",
    "pomegranate"];

//tab functionality

tab2.style.display = "none";
tab3.style.display = "none";
tab1btn.style.backgroundColor = "#01172a";


function openTab(event, tabId) {
    //hide all tab content
    let tabContents = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    //remove the "active" class from all tab buttons
    let tabLinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    //show the selected tab content
    let selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "block";

    //add the "active" class to the clicked tab button
    event.currentTarget.className += " active";
};

tab1btn.addEventListener('click', function () {
    tab1btn.style.backgroundColor = "#01172a";
    tab2btn.style.backgroundColor = "#003f75";
    tab3btn.style.backgroundColor = "#003f75";

})

tab2btn.addEventListener('click', function () {
    tab1btn.style.backgroundColor = "#003f75";
    tab2btn.style.backgroundColor = "#01172a";
    tab3btn.style.backgroundColor = "#003f75";

})

tab3btn.addEventListener('click', function () {
    tab1btn.style.backgroundColor = "#003f75";
    tab2btn.style.backgroundColor = "#003f75";
    tab3btn.style.backgroundColor = "#01172a";

})

//button functionality
generateBtn.addEventListener(`click`, function () {

    let passwordGen = '';

    for (let i = 0; i < passwordLength.value; i++) {
        passwordGen += password[Math.floor(Math.random() * password.length)];
    }
    pwTextBox.textContent = passwordGen;
    console.log(passwordGen);
});

copyBtn.addEventListener(`click`, function () {

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(function () {
                console.log('Copied');
            })
            .catch(function (err) {
                console.error('Error, unable to copy to clipboard', err);
            })
    }

    var textToCopy = pwTextBox.value;
    copyToClipboard(textToCopy);
})

//array element selectors
capSlider.addEventListener(`change`, function () {

    slider;

    this.checked ? password.push(...caps) : password = password.filter(item => !caps.includes(item));
});

specialSlider.addEventListener(`change`, function () {

    slider;

    this.checked ? password.push(...special) : password = password.filter(item => !special.includes(item));
});

numSlider.addEventListener(`change`, function () {

    slider;

    this.checked ? password.push(...num) : password = password.filter(item => !num.includes(item));
});

//memorable password generator

memGenBtn.addEventListener(`click`, function () {

    let memPassword = '';

    for (let i = 0; i < memPasswordLength.value; i++) {
        memPassword += words[Math.floor(Math.random() * words.length)] + " ";
    };
    memTextBox.textContent = memPassword;
})

memCopyBtn.addEventListener(`click`, function () {

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(function () {
                console.log('Copied');
            })
            .catch(function (err) {
                console.error('Error, unable to copy to clipboard', err);
            })
    }

    var textToCopy = memTextBox.value;
    copyToClipboard(textToCopy);
})


//pin generator

//button functionality
pinGenBtn.addEventListener(`click`, function () {

    let pinPasswordGen = '';

    for (let i = 0; i < pinPasswordLength.value; i++) {
        pinPasswordGen += num[Math.floor(Math.random() * num.length)];
    }
    pinTextBox.textContent = pinPasswordGen;
});

pinCopyBtn.addEventListener(`click`, function () {

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(function () {
                console.log('Copied');
            })
            .catch(function (err) {
                console.error('Error, unable to copy to clipboard', err);
            })
    }

    var textToCopy = pinTextBox.value;
    copyToClipboard(textToCopy);
})

//loop through char the ammount of times specified by the passwordLength

//create an array with characters
//create a random number generator
//set to a defined length
//display password in textbox

//create an array for each
//have selector function for characters, special characters, numbers, caps, length
//create a random number generator to select through the selected arrays and randomly select them

//add memorable and pin sections
//add functionality to create a random pin or memorable password
//add a copy to clipboard button

