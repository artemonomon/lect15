//1

console.log(document.body.firstElementChild);

console.log(document.body.lastElementChild);

console.log(document.body.lastElementChild.lastElementChild);

//2
console.log("==========================================")
for (let node of document.body.childNodes) {
    console.log(node);
}  
console.log("first last child:")
console.log(document.body.firstChild)
console.log(document.body.lastChild)