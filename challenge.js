$(document).ready(readyNow);

function readyNow(){
console.log('JQ');
$('#click').on('click', addDiv);
}

function addDiv(){
console.log('this has been clicked');
const div = `${'<div></div>'}`
$('#div1').append(div);
console.log('div', div);
createPTag();
}

function createPTag(){
    console.log('this is PTag');
    let PTag =`${'<p></p>'}`
    $('#pTag').append(PTag);
    console.log('this is ptag', PTag)
    createButton();
}

function createButton(){
   
    $('#swap').append();
    $('#delete').append();

   


}

