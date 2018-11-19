$(document).ready(readyNow);
// creating a new variables to hold counts the clicks
let clicks = 0;

function readyNow() {
    console.log('JQ');
    $('#button1').on('click', addDiv);
}// end of readyNow

function addDiv() {
    clicks++;
    console.log('this has been clicked');
    // calling the div in HTML
    let div = $('#div1');
    // create new div in to append to DOM
    let newDiv = '<div class ="red">';
    // display of clicks
    newDiv += '<p>' + clicks + '</p>'
    // swap button
    newDiv += '<button class = "swapButton">Swap</button>'
    // delete button
    newDiv += '<button class = "deleteButton">Delete</button>'
    // add new div
    newDiv += '</div>'
    // append new div above onto DOM
    div.append(newDiv);
    // calling deleteDiv 
    deleteDiv();
}

function deleteDiv() {
    $('.deleteButton').on('click', function () {
        // "this" is the button element and it's removing it when button is click
        $(this).parent().remove();
    })// end of remove delete button
    swapDiv();
}// end of deleteDiv

function swapDiv() {
    $('.swapButton').on('click', function () {
        console.log('this is swap button');
        // this toggle the class of yellow in CSS files
        $(this).parent().toggleClass('yellow');
    })// end of swap div
}// end of swapDiv 


