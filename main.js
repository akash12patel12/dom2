var itemList =  document.querySelector('#items');
// itemList.parentNode.style.background = '#f4f4f4';

itemList.parentElement.style.background ='#f4f4f4';

itemList.children[1].style.color = 'green'

// firstChild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ='First child element';

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ='Last child element';

//next Element sibling

// itemList.nextElementSibling

// console.log(itemList.previousElementSibling);

//createelement
var newDiv = document.createElement('div');
newDiv.className= 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'hello div');
var newDivText = document.createTextNode('hellow world');
newDiv.appendChild(newDivText);
var conta = document.querySelector("header .container");
var h1 = document.querySelector('header h1');

conta.insertBefore(newDiv, h1);
console.log(newdiv);